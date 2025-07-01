# Docusaurus Scripts

This directory contains utility scripts for the Docusaurus site.

## llms.txt Generation

The `generate-llmstxt.js` script creates an `llms.txt` file in the build directory according to the [llms.txt proposal](https://llmstxt.org/index.md). This file provides an LLM-friendly overview of the documentation site content.

### How it works

This script:
1. Runs automatically after the Docusaurus build process completes
2. Scans all the markdown files in the `docs` directory
3. Extracts metadata and content summaries using the front matter
4. Generates a structured `llms.txt` file in the build directory

### Manual execution

If you need to generate the llms.txt file manually:

```bash
# First build the site
yarn build

# Or run the script directly
node scripts/generate-llmstxt.js
```

### Customization

You can customize the llms.txt generation by modifying the script:

- Change the summary length (default 150 characters)
- Modify the header and footer content
- Add additional metadata from your documentation

### Format

The generated llms.txt follows this format:

```markdown
# llms.txt
> Machine-readable documentation and site information

## Site Overview
- **Site Name**: Your Site Name
- **Description**: Your site description
- **Generated**: Date timestamp

## Document Index
- [Document Title](path/to/doc): Brief summary of document content...
- [Another Document](another/path): Another brief summary...

## Additional Resources
- [Full Documentation](/)
- [About llms.txt](https://llmstxt.org/index.md)
```

This format is designed to be easily parseable by LLMs while remaining human-readable. 