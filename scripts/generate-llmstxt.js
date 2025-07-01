#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Generate llms.txt file from Docusaurus content
 * 
 * This script reads markdown files from the docs directory,
 * extracts frontmatter metadata and content summaries,
 * and generates an llms.txt file in the build directory.
 * It also copies original .md files to the build directory.
 */

// Configuration
const BUILD_DIR = path.join(__dirname, '../build');
const DOCS_DIR = path.join(__dirname, '../docs');
const OUTPUT_FILE = path.join(BUILD_DIR, 'llms.txt');

// Helper to extract meaningful summaries from MD files
function extractSummary(content, maxLength = 150) {
  // Remove front matter if present (already handled by gray-matter)
  
  // Remove import statements and other code-related content
  let cleanContent = content
    .replace(/import\s+.*?from\s+['"].*?['"];?(\r?\n|$)/g, '')  // Remove import statements
    .replace(/:::.*?:::/gs, '')  // Remove Docusaurus admonitions
    .replace(/```[\s\S]*?```/g, '')  // Remove code blocks
    .replace(/\[\/\/\]:.*?(\r?\n|$)/g, '')  // Remove comments
    .trim();
  
  // Split into paragraphs
  const paragraphs = cleanContent.split(/\n\s*\n/);
  
  // Find the first meaningful paragraph (not empty, not just a heading)
  let candidatePara = '';
  for (const para of paragraphs) {
    const trimmedPara = para.trim();
    
    // Skip headings, horizontal rules, or very short lines
    if (trimmedPara.startsWith('#') || 
        trimmedPara.match(/^[-*=]{3,}$/) || 
        trimmedPara.length < 15) {
      continue;
    }
    
    // Skip paragraphs that are likely just JSX/HTML
    if (trimmedPara.includes('<') && trimmedPara.includes('>')) {
      continue;
    }
    
    candidatePara = trimmedPara;
    break;
  }
  
  // If no good paragraph found, use the first non-empty one
  if (!candidatePara && paragraphs.length > 0) {
    candidatePara = paragraphs.find(p => p.trim().length > 0) || '';
  }
  
  // Clean up the paragraph
  candidatePara = candidatePara
    .replace(/#+\s+/g, '')  // Remove any remaining headings
    .replace(/\*\*|\*|__|\[|\]\(.*?\)/g, '')  // Remove basic formatting
    .replace(/\s+/g, ' ')  // Normalize whitespace
    .trim();
  
  // Truncate to maxLength, but don't cut off in the middle of a word
  if (candidatePara.length > maxLength) {
    const lastSpace = candidatePara.lastIndexOf(' ', maxLength);
    if (lastSpace > maxLength * 0.7) {  // Only cut at space if it's reasonably far into the text
      candidatePara = candidatePara.substring(0, lastSpace) + '...';
    } else {
      candidatePara = candidatePara.substring(0, maxLength) + '...';
    }
  }
  
  return candidatePara;
}

// Helper to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy markdown file to build directory
function copyMarkdownToBuild(sourcePath, relativeOutputPath) {
  const outputPath = path.join(BUILD_DIR, relativeOutputPath);
  const outputDir = path.dirname(outputPath);
  
  // Ensure the directory exists
  ensureDirectoryExists(outputDir);
  
  // Copy the file
  fs.copyFileSync(sourcePath, outputPath);
  console.log(`Copied ${sourcePath} to ${outputPath}`);
}

// Main function
async function generateLlmsTxt() {
  console.log('Starting llms.txt generation and MD copying...');
  
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('Build directory not found. Run docusaurus build first.');
    process.exit(1);
  }
  
  // Start with llms.txt header
  let llmsTxtContent = `# llms.txt
> Machine-readable documentation and site information

## Site Overview
- **Site Name**: ${require('../docusaurus.config.js').title}
- **Description**: ${require('../docusaurus.config.js').tagline}
- **Generated**: ${new Date().toISOString()}

## Document Index\n`;

  // Process all markdown files in docs directory
  const processDir = (dir, prefix = '') => {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDir(filePath, `${prefix}${file}/`);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        try {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContent);
          
          if (data.title) {
            const relativePath = prefix + file.replace(/\.mdx?$/, '');
            const summary = extractSummary(content);
            
            llmsTxtContent += `\n- [${data.title}](${relativePath}): ${summary}`;
            
            // Copy the markdown file to the build directory
            const relativeFilePath = path.relative(DOCS_DIR, filePath);
            const buildRelativePath = `${relativePath}.md`;
            copyMarkdownToBuild(filePath, buildRelativePath);
          }
        } catch (err) {
          console.warn(`Error processing ${filePath}: ${err.message}`);
        }
      }
    }
  };
  
  // Process all docs
  processDir(DOCS_DIR);
  
  // Add footer with links to more detailed info
  llmsTxtContent += `\n\n## Additional Resources
- [Full Documentation](/)
- [About llms.txt](https://llmstxt.org/index.md)
`;

  // Write the file
  fs.writeFileSync(OUTPUT_FILE, llmsTxtContent);
  console.log(`llms.txt generated at ${OUTPUT_FILE}`);
  console.log('Finished llms.txt generation and MD copying.');
}

// Run the generator
generateLlmsTxt().catch(err => {
  console.error('Error generating llms.txt:', err);
  process.exit(1);
}); 