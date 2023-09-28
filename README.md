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

To promote to production:

```console
drone build promote zerotier/docs $DRONE_BUILD_NUMBER production
```

Note:  You'll need the `drone` CLI installed and in the PATH, as well as a couple of environment variables set in order to run the drone CLI.  ZeroTier employees can check out http://drone.ci.lab/account for details.

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

