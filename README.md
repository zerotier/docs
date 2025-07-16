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

- `api`, `controller`,  `rules`, `bridge`, `router`, `local config`, `dns`, `cloud`, `devops`
- `client`, `central`

### Content Type Tags

- `tutorial`, `examples`, `installation`
- `security`, `gaming`
- `faq`, `hub`, `subpage`, `troubleshooting`

### Account Tags

- `subscriber`, `customer-support`, `billing`
- `beginner`, `admin`, `developer`

### Meta Tags

- `flag`, `meta`, `deprecated`

