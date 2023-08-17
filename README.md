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

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

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
[//]: # cSpell:words Hinojosa Gizienski
---
```

or add to the regexes in cspell.json. Have fun!

## Managing your node version

I chose to use [fnm](https://github.com/Schniz/fnm). As of this update Docusaurus `2.4.1` requires node `16.14`:

```
echo "16.14" > .node-version
curl -fsSL https://fnm.vercel.app/install | bash
fnm install
fnm use
```