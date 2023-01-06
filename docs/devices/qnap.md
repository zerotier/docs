---
title: QNAP NAS

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

QNAP NAS
=====

## Install QVPN (recommended)

QVPN provides your NAS with a permanent `/dev/net/tun` device used by ZeroTier. Once you install QVPN you do not need to open it or configure it: `App Center -> Search "QVPN" -> Install`. If you opt not to install QVPN you will need to find a way to re-create the `/dev/net/tun` on each reboot. Good luck.

## Install ZeroTier

[Determine the type of processor](https://www.qnap.com/en-us/how-to/faq/article/how-can-i-determine-whether-my-nas-uses-an-arm-or-x86-processor) used in your NAS, then download the [latest ZeroTier package](http://download.zerotier.com/dist/qnap/). Use the App Center's manual package install option to upload the package to your NAS. You will notice a warning icon next to the app notifying you of a missing digital signature. This is merely telling you that QNAP itself has not verified the authenticity of this app.

:::note Picking the correct package

*Due to the lack of documentation on architecture designations selecting the correct package is an inexact science, as far as I can discerne there are the following categories. If you don't see your model on this list or you see an error please let us know:*


### x86

```
TS-x51 Series, TS-x51+ Series, TS-x51A Series, TS-x53B Series, TS-x53A Series,
TS-x53U Series TS-239 Pro, TS-239 Pro II, TS-239 Pro II+, TS-251, TS-253A,
TS-259 Pro, TS-259 Pro+, TS-269L, TS-439 Pro II, TS-451, TS-459 Pro, TS-439 Pro,
TS-459U-RP+/SP+, TS-439 Pro II+, TS-459 Pro II, TS-459 Pro+, TS-459U-RP/SP,
SS-439-Pro TS-469L, TS-651, TS-851
```

### x86_64

```
Unknown
```

### arm-x09

```
Unknown
```

### arm-x19

```
TS-119P II, TS-119P+, TS-119, TS-219P, TS-219, TS-219P II, TS-219P+, TS-221,
TS-419U II, TS-419P, TS-419U II, TS-439U-RP/SP TS-419P II, TS-419P+, TS-419U+,
TS-419U, SS-439-Pro
```

### arm-x31

```
TS-131, TS-231 ,TS-231+, TS-431, TS-431+
```

### arm-x41

```
TS-128, TS-131P, TS-231P, TS-231P2
```

### arm_64

```
TS-216, TS-416, TS-228
```

:::

## Enable SSH

If you've already [enabled SSH access on your NAS](https://www.qnap.com/en/how-to/knowledge-base/article/how-to-access-qnap-nas-by-ssh), then log into an interactive root shell:

```sh
ssh admin@local-ip
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

To upgrade ZeroTier you will need to uninstall the current version of the package and install the desired version. If you wish to preserve your identity you should back up the `identity.secret` file located in `/var/lib/zerotier-one` or `/share/CACHEDEV1_DATA/.qpkg/zerotier` before uninstalling.
