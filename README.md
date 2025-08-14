# docs.zerotier.com

This repository contains both the Markdown source files and the JS project (based on the [Docusaurus](https://docusaurus.io) static website builder) for the public [ZeroTier](https://docs.zerotier.com/) documentation site.

You'll need a recent (20+) version of NodeJS, with Yarn enabled (`corepack enable`).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Generated Pages

The OpenAPI specifications for the Central and ZeroTierOne Service APIs are processed via a plugin to generate MDX pages which can then be included in the built site. Those specs change very infrequently, so the processing isn't done on every change. If the OpenAPI spec _does_ change, you'll need to regenerate the source text:

```console
yarn generate:api
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

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

## Tagging

All pages on this site should be appropriately tagged.

### Platform Tags

- `windows`, `linux`, `macos`, `android`, `ios`, `mobile-app`
- `docker`, `freebsd`, `freenas`, `openwrt`, `raspberry-pi`
- `aws`, `synology`, `asustor`, `mikrotik`, `opnsense`, `teltonika`, `ubiquiti`

### Technical/Feature Tags

- `api`, `controller`,  `rules`, `bridge`, `router`, `local-config`, `dns`, `cloud`, `devops`
- `client`, `central`

### Content Type Tags

- `tutorial`, `how-to`, `explanation`, `reference`, `examples`, `installation`
- `security`, `gaming`
- `faq`, `hub`, `troubleshooting`

### Account Tags

- `subscriber`, `customer-support`, `billing`
- `beginner`, `admin`, `developer`

### Meta Tags

- `flag`, `meta`, `deprecated`
