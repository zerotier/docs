#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Generate llms-full.txt file from Docusaurus content
 * 
 * This script reads markdown files from the docs directory,
 * extracts frontmatter metadata and complete document content,
 * and generates an llms-full.txt file for use with RAG systems.
 */

// Configuration
const DOCS_DIR = path.join(__dirname, '../docs');
const isBuildMode = process.argv.includes('--build');
const BASE_DIR = isBuildMode ? 
  path.join(__dirname, '../build') : 
  path.join(__dirname, '../static');

const OUTPUT_FILE = path.join(BASE_DIR, 'llms-full.txt');

// Helper to clean and format markdown content
function cleanContent(content) {
  // Remove common elements that might not be useful for RAG
  return content
    .replace(/import\s+.*?from\s+['"].*?['"];?(\r?\n|$)/g, '')  // Remove import statements
    .replace(/\[\/\/\]:.*?(\r?\n|$)/g, '')  // Remove comments
    .trim();
}

// Helper to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Main function
async function generateLlmsFullTxt() {
  console.log(`Starting llms-full.txt generation in ${isBuildMode ? 'build' : 'development'} mode...`);
  
  // Ensure the output directory exists
  ensureDirectoryExists(BASE_DIR);
  
  // Start with llms-full.txt header
  let llmsFullTxtContent = `# llms-full.txt
> Complete documentation content for AI/LLM RAG systems${isBuildMode ? '' : ' (DEVELOPMENT VERSION)'}

## Site Overview
- **Site Name**: ${require('../docusaurus.config.js').title}
- **Description**: ${require('../docusaurus.config.js').tagline}
- **Generated**: ${new Date().toISOString()}${isBuildMode ? '' : '\n- **Mode**: Development'}

---

`;

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
            const cleanedContent = cleanContent(content);
            
            // Add document with full content
            llmsFullTxtContent += `\n# ${data.title}\n`;
            llmsFullTxtContent += `**Path**: ${relativePath}\n\n`;
            
            // Add frontmatter info if available
            if (data.sidebar_label) llmsFullTxtContent += `**Sidebar Label**: ${data.sidebar_label}\n`;
            if (data.description) llmsFullTxtContent += `**Description**: ${data.description}\n`;
            if (data.keywords && data.keywords.length) llmsFullTxtContent += `**Keywords**: ${data.keywords.join(', ')}\n`;
            
            // Add the full content
            llmsFullTxtContent += `\n${cleanedContent}\n\n`;
            llmsFullTxtContent += `---\n\n`;
          }
        } catch (err) {
          console.warn(`Error processing ${filePath}: ${err.message}`);
        }
      }
    }
  };
  
  // Process all docs
  processDir(DOCS_DIR);
  
  // Add footer
  llmsFullTxtContent += `\n## Additional Resources
- [Full Documentation](/)
- [About llms.txt](https://llmstxt.org/index.md)
`;

  // Write the file
  fs.writeFileSync(OUTPUT_FILE, llmsFullTxtContent);
  console.log(`llms-full.txt generated at ${OUTPUT_FILE}`);
  console.log('Finished llms-full.txt generation.');
}

// Run the generator
generateLlmsFullTxt().catch(err => {
  console.error('Error generating llms-full.txt:', err);
  process.exit(1);
}); 