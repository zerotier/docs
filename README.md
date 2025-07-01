# docs.zerotier.com

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
make start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## LLMs.txt Generator

The project includes a script to generate llms.txt for AI/LLM documentation discovery.

```console
node scripts/generate-llmstxt.js
```

This generates an llms.txt file in the build directory. Note that the build directory must exist first, so you'll need to run `yarn build` before running this script manually. The script is also automatically run as a post-build step when you run `yarn build`.

### Development Mode

To generate llms.txt for development mode (accessible at http://localhost:3000/llms.txt):

```console
yarn gen-llmstxt-dev
```

This places llms.txt in the static directory, making it immediately available in development mode without requiring a build. Run this command before or during your development server session to have llms.txt available.

### Full Content for RAG

The project also supports generating a complete version of the documentation with full content for use with RAG (Retrieval-Augmented Generation) systems:

```console
# In development mode (outputs to static/llms-full.txt)
yarn gen-llms-full-dev

# Or generate both llms.txt and llms-full.txt in one command
yarn gen-all-llms-dev
```

The full version is accessible at http://localhost:3000/llms-full.txt in development mode. This file contains all documentation content, making it ideal for use as a knowledge base for LLMs.

The full content version is also automatically generated during the build process and will be available at /llms-full.txt in the production site.

### Accessing Original Markdown Files

The project provides direct access to the original markdown files through the website. These files are automatically copied to the static directory for direct access:

```
# Example URL pattern
http://localhost:3000/getting-started.md
http://localhost:3000/guides/installation.md
```

This feature is helpful for:
- Users who want to see or download the raw markdown
- LLMs that need to process the original markdown format
- Contributors who want to reference the source

The markdown files are automatically updated when:
- Starting the development server with `yarn start`
- Building the site with `yarn build`

You can also manually copy the markdown files by running:

```console
yarn copy-markdown
```

## Deployment

Commits to main are automatically deployed to https://docs-dev.zerotier.com

To promote to production, create a tag & release on GitHub.  Tag/Release names should follow this format: `YYYY-MM-DD-RELEASE_NUMBER`. For example, the 2nd release on August 16, 204 would be `2024-08-16-2`.


## Spelling / Typos

``` console
yarn run lint
```

This is currently configured to not stop the build in CI. `|| true`

You can add more words to ignore in the file `custom-words.txt`

You can ignore words in an individual markdown file like this:
Make sure it's inside the front matter


``` console
---
title: Terraform (Multicloud)
# cSpell:words Hinojosa Gizienski
---
```

or inline 

```
[//]: # (cspell:disable-next-line )

```

or add to the regexes in cspell.json. Have fun!

