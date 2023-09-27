---
title: CLI
---

*Mac and Windows platforms have graphical interfaces that provide tray or task bar icons. All platforms have the zerotier-cli command line interface which can be used to join and leave networks and check the status of the zerotier-one service.*

:::info sudo
On Unix-like systems you may need to preface zerotier-cli commands with sudo, while on Windows you will need to use an administrator-mode command prompt.
:::

### Basic CLI usage

Get your ZeroTier address and check the service status

```sh
zerotier-cli status
200 info 998765f00d 1.2.13 ONLINE
```

Join, leave, and list networks. Remember, ZeroTier networks are 16-digit IDs that look like
`8056c2e21c000001`

```sh
zerotier-cli join ################
200 join OK
```

```sh
zerotier-cli leave ################
200 leave OK
```

```sh
zerotier-cli listnetworks
200 listnetworks 8056c2e21c000001 earth.zerotier.net 02:99:35:84:f9:dc OK PUBLIC 29.152.27.109/7
```

:::info
If you see `missing authentication token and authtoken.secret not found (or readable)` you’re likely trying to run `zerotier-cli` from a non-administrative account. On macOS, Linux, or other Unix based systems, use sudo `zerotier-cli`. On Windows, use an Administrator Command Prompt.
:::

### Network Join Status Codes

| Join Status       | Explanation |
| ------------------------- | ------- |
| OK                        | You're up and running on this network!    |
| REQUESTING_CONFIGURATION  | Negotiating with the network Controller. This could take about a minute. If it takes much longer, see [Router Configuration Tips.](routertips)     |
| NOT_FOUND                 | Typo in the Network ID?   |
| ACCESS_DENIED             | You node needs to be Authorized on this network (via [my.zerotier.com](https://my.zerotier.com)).   |
| PORT_ERROR                | See [Port Error](troubleshooting#porterror)    |

### Advanced CLI usage

More advanced commands can be found using `zerotier-cli -h`

### Collect debug info for support {#zerotier-cli-dump}

```sh
zerotier-cli dump
```

:::caution
This command creates a file on your desktop with information about your device and networks. Some of this info may be considered private information, so post this in public at your own discretion.
:::
