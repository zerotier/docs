# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
This is the ZeroTier documentation website built with Docusaurus 2, using TinaCMS for content management. The site serves as the primary documentation hub for ZeroTier's networking software and services.

## Development Commands

### Primary Development
- `make start` - Start local development server (uses NODE_OPTIONS=--openssl-legacy-provider)
- `yarn start` - Alternative start command
- `yarn preview` - Start with TinaCMS dev mode
- `yarn build` - Build production site
- `yarn serve` - Serve built site locally

### Linting and Quality
- `yarn lint` - Run all linting (config, markdown, spelling)
- `yarn lint:config` - Validate JSON configuration files
- `yarn lint:markdown` - Check markdown syntax with markdownlint-cli2  
- `yarn lint:spelling` - Check spelling with cspell

### Testing
- `yarn screenshot` - Run Playwright visual regression tests

### Build Process
The build process requires the legacy OpenSSL provider (`NODE_OPTIONS=--openssl-legacy-provider`) due to dependencies.

## Architecture

### Content Structure
- `/docs/` - Main documentation content (Markdown files)
- `/docs/faq/` and `/docs/troubleshooting/` - Organized FAQ and troubleshooting content
- `/static/` - Static assets (images, CSS, API specs)
- `/tina/` - TinaCMS configuration and content management

### Key Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation sidebar structure  
- `tina/config.ts` - TinaCMS content management setup
- `cspell.json` - Spell check configuration
- `custom-words.txt` - Custom dictionary for spell checking

### TinaCMS Integration
The site uses TinaCMS for content management with admin interface at `/admin/`. The `copy-tina` script copies generated TinaCMS files to the build directory.

### Deployment
- Development deploys automatically on commits to main branch (https://docs-dev.zerotier.com)
- Production deploys via GitHub releases with format: `YYYY-MM-DD-RELEASE_NUMBER`

## Content Guidelines

### Tagging System
All documentation pages should include appropriate tags:
- **Platform tags**: `windows`, `linux`, `macos`, `android`, `ios`, `docker`, `aws`, etc.
- **Technical tags**: `api`, `controller`, `rules`, `bridge`, `router`, `dns`, etc.  
- **Content type tags**: `tutorial`, `faq`, `troubleshooting`, `security`, etc.
- **Account tags**: `subscriber`, `beginner`, `admin`, `developer`

### Spell Check
- Add custom words to `custom-words.txt`
- Use frontmatter for file-specific words: `# cSpell:words CustomWord`
- Use inline ignores: `[//]: # (cspell:disable-next-line)`

## Docker Development
- `make docker-demo` - Run in demo container
- `make docker-build` - Run build in container
- Various Dockerfiles for different build scenarios

## Common Issues
- Build requires legacy OpenSSL provider due to dependencies
- TinaCMS admin interface needs proper environment variables (NEXT_PUBLIC_TINA_CLIENT_ID, TINA_TOKEN)