#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Copy markdown files to static directory for direct access
 * 
 * This script copies all markdown files from the docs directory
 * to the static directory, making them directly accessible at
 * /[path].md without requiring a /md/ prefix
 */

// Configuration
const DOCS_DIR = path.join(__dirname, '../docs');
const STATIC_DIR = path.join(__dirname, '../static');

// Helper to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy markdown file to static directory
function copyMarkdownToStatic(sourcePath, relativePath) {
  const outputPath = path.join(STATIC_DIR, relativePath);
  const outputDir = path.dirname(outputPath);
  
  // Ensure the directory exists
  ensureDirectoryExists(outputDir);
  
  // Copy the file
  fs.copyFileSync(sourcePath, outputPath);
  console.log(`Copied ${sourcePath} to ${outputPath}`);
}

// Process directory recursively
function processDir(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDir(filePath, path.join(basePath, file));
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const relativePath = path.join(basePath, file);
      copyMarkdownToStatic(filePath, relativePath);
    }
  }
}

// Main function
async function copyMarkdownFiles() {
  console.log('Starting markdown copy to static directory...');
  
  // Process all docs
  processDir(DOCS_DIR);
  
  console.log('Finished copying markdown files to static directory.');
}

// Run the copy process
copyMarkdownFiles().catch(err => {
  console.error('Error copying markdown files:', err);
  process.exit(1);
}); 