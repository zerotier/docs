---
title: CLI
description: How to use the Command Line Interface
---

This guide provides examples of how to use the ZeroTier client-side CLI. The client CLI is currently only responsible for managing a specific node and its network membership. To control and configure networks you'll need to use the [Central UI](/start) or the [Central API](/api/central).

:::info Permissions
On Unix-like systems you may need to use `sudo zerotier-cli`, while on Windows you will need to use an `administrator` command prompt. If you see `missing authentication token and authtoken.secret not found (or readable)` you're likely trying to run `zerotier-cli` from an account with insufficient privileges.
:::

:::tip
For each command you can use the `-j` flag to get formatted JSON as an output.
:::

## Node Status

Displays the status of the ZeroTier service, including version, node ID, and online status.

```shell title="zerotier-cli status"
zerotier-cli status
```

| Node Status | Explanation                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ONLINE      | The client is able to communicate with the global root infrastructure.                                                                                                         |
| OFFLINE     | Unable to contact the root infrastructure but will continue retrying. This could take a few seconds. If it takes much longer, see [Router Configuration Tips.](/routertips.md) |
| TUNNELED    | Unable to communicate over UDP/9993, ZeroTier is now using a TCP fallback relay                                                                                                |

<details>
<summary>Example output</summary>

```sh
200 info abcdef1234 X.YY.ZZ ONLINE
```

</details>

## List All Peers

Lists all [peers](/glossary#peer) in a more human-readable format. Alternatively you can use `listpeers` for a parser-friendly output.

```shell title="zerotier-cli peers"
zerotier-cli peers

```

<details>
<summary>Example output</summary>

```shell title="zerotier-cli peers"
$ zerotier-cli peers

200 peers
<ztaddr>   <ver>  <role> <lat> <link>   <lastTX> <lastRX> <path>
1b1e1cdcf3 1.14.0 LEAF      51 DIRECT   799      4533     5.79.106.66/34944
514cbb0ef5 1.14.0 LEAF       0 DIRECT   2731     2731     192.168.7721/38728
b65799c8f6 1.14.2 LEAF      86 DIRECT   9590     9521     35.208.213.194/54311
77ccde71b0 -      PLANET    79 DIRECT   24648    69739    103.196.103.67/9993

```

</details>

_A peer with the role `LEAF` is another device like a user's laptop, a server, or a [network controller](/glossary#network-controller), a peer with the role `PLANET` is a root server that is part of our infrastructure. Seeing unknown peers is not typically a security concern because they are usually part of our infrastructure._

## Join a Network

Joins the specified ZeroTier network using its 16-digit hexadecimal network ID.

```shell title="zerotier-cli join <network ID>"
$ sudo zerotier-cli join 8056c2e21c000001

200 join OK
```

### Network Join Status Codes

| Join Status              | Explanation                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| OK                       | You're up and running on this network!                                                                                                         |
| REQUESTING_CONFIGURATION | Negotiating with the network Controller. This could take about a minute. If it takes much longer, see [Router Configuration Tips.](/routertips.md) |
| NOT_FOUND                | Typo in the Network ID?                                                                                                                        |
| ACCESS_DENIED            | You node needs to be Authorized on this network (via [my.zerotier.com](https://my.zerotier.com)).                                              |
| PORT_ERROR               | See [Port Error](/troubleshooting#port-error)                                                                                                  |

## Leave a Network

Leaves the specified ZeroTier network.

```shell title="zerotier-cli leave <network ID>"
zerotier-cli leave 8056c2e21c000001
```

## List All Networks

Lists all networks that the node is currently a member of.

```shell title="zerotier-cli listnetworks"
zerotier-cli listnetworks
```

<details>
<summary>Example output</summary>

```sh
200 listnetworks
<nwid> <name> <mac> <status> <type> <dev> <ZT assigned ips>
200 listnetworks 8056c2e21c000001 CORPO-NET ee:7b:79:ab:a4:a7 OK PRIVATE ztr2q6cvq2 fd56:5799:d8f6:788e:ec99:93f5:15d:7c3e/88,10.147.17.1/24
200 listnetworks 8056c2e21c000002 LANPARTY 86:59:c6:6b:e8:81 OK PRIVATE zthnhhqofq fdaf:78bf:9436:c7ac:8699:93f5:15d:7c3e/88,10.241.50.15/24

```

</details>

## Get a Network Setting

Retrieves the value of a specific network setting for the given network ID. Settings used with `get` and `set` commands may include property names from the JSON output of `zerotier-cli -j listnetworks`

```shell title="zerotier-cli get <network ID> <setting>"
zerotier-cli get 8056c2e21c000001 mtu
```

<details>
<summary>Example output</summary>

```sh
2800
```

</details>

## Set a client-side setting

Sets a specific client-side setting that does not affect the rest of the network or nodes. Settings that can be used here are `allowManaged`, `allowGlobal`, `allowDefault` and `allowDNS`. To learn more about these settings see [here](/config.md).

```shell title="zerotier-cli set <network ID> <setting>"
zerotier-cli set 8056c2e21c000001 allowGlobal true
```

## List Moons (Federated Root Sets)

Lists all federated root sets (moons) the node is aware of.

```shell title="zerotier-cli listmoons"
zerotier-cli listmoons
```

## Join a Moon via Any Member Root

Joins a federated root set (moon) using its world ID and seed.

```shell title="zerotier-cli orbit <world ID> <seed>"
zerotier-cli orbit <world ID> <seed>
```

## Leave a Moon

Leaves the specified federated root set (moon).

```shell title="zerotier-cli deorbit <world ID>"
zerotier-cli deorbit <world ID>
```

## Generate a dump file

Generate a debug dump file with device and network information for troubleshooting. This file can be useful when talking with ZeroTier technical support staff.

```shell title="zerotier-cli dump"
zerotier-cli dump
```

:::caution
The `dump` command creates a file on your desktop with information about your device and networks. Some of this information (Physical IP addresses, public identities, etc) may be sensitive.
:::

## Notes on Settings

Settings used with `get` and `set` commands may include property names from the JSON output of `zerotier-cli -j listnetworks`. For example:

```shell title="zerotier-cli get <network ID> ip6plane"
zerotier-cli get <network ID> ip6plane
```

<details>
<summary>Example output</summary>

</details>

This command retrieves the 6PLANE address assigned to the node.

## Display all available commands

Displays the full set of client commands.

```shell title="zerotier-cli -h"
$ zerotier-cli -h

ZeroTier One version 1.14.2 build 0 (platform 1 arch 2)
Copyright (c) 2020 ZeroTier, Inc.
Licensed under the ZeroTier BSL 1.1 (see LICENSE.txt)
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
  peers                   - List all peers (prettier)
  listnetworks            - List all networks
  join <network ID>          - Join a network
  leave <network ID>         - Leave a network
  set <network ID> <setting> - Set a network setting
  get <network ID> <setting> - Get a network setting
  listmoons               - List moons (federated root sets)
  orbit <world ID> <seed> - Join a moon via any member root
  deorbit <world ID>      - Leave a moon
  dump                    - Debug settings dump for support

Available settings:
  Settings to use with [get/set] may include property names from
  the JSON output of "zerotier-cli -j listnetworks". Additionally,
  (ip, ip4, ip6, ip6plane, and ip6prefix can be used). For instance:
  zerotier-cli get <network ID> ip6plane will return the 6PLANE address
  assigned to this node.

```
