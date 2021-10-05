---
title: ASUSTOR NAS

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

ASUSTOR NAS
=====

## Install ZeroTier

Download the [latest ZeroTier package](http://download.zerotier.com/dist/asustor) and then manually install via: `App Central` -> `Management (bottom left)` -> `Manual Install (top)`. 

## Enable SSH

If you've already enabled SSH access on your NAS, then log into a shell:

```sh
ssh admin@local-ip
```

## Usage

There is no GUI for the ZeroTier package, only a CLI. Be sure to run each command as root using `sudo`:

```
Usage: zerotier-cli [-switches] <command/path> [<args>]

Available switches:
  -h                      - Display this help
  -v                      - Show version
  -j                      - Display full raw JSON output
  -D<path>                - ZeroTier home path for parameter auto-detect
  -p<port>                - HTTP port (default: auto)
  -T<token>               - Authentication token (default: auto)

Available commands:
  info                    - Display status info
  listpeers               - List all peers
  listnetworks            - List all networks
  join <network>          - Join a network
  leave <network>         - Leave a network
  set <network> <setting> - Set a network setting
  listmoons               - List moons (federated root sets)
  orbit <world ID> <seed> - Join a moon via any member root
  deorbit <world ID>      - Leave a moon

```

## Upgrading ZeroTier

To upgrade ZeroTier you will need to uninstall the current version of the package and install the desired version. If you wish to preserve your identity you should back up the `identity.secret` file located in `/var/lib/zerotier-one`.