---
title: Western Digital NAS

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

Western Digital NAS
=====

:::tip
Buy a Synology instead.
:::

## Install ZeroTier

[Download latest ZeroTier package](http://download.zerotier.com/dist/western-digital/). These packages only support `My Cloud OS 5`. Compression is disabled for lower-powered devices such as `WDMyCloudEX2`.

## Enable SSH

If you've already [enabled SSH access on your NAS](https://support-en.wd.com/app/answers/detail/a_id/14460), log in. The default SSH username on WD devices is `sshd`, not `admin` or `root`:


```sh
ssh sshd@local-ip
```

## Usage

There is no GUI for the ZeroTier package, only a CLI:

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