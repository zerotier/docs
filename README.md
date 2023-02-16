# Website

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

or 

``` console
[//]: # cSpell:disable-next-line
```

or add to the regexes in cspell.json. Have fun!

