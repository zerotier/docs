---
title: Layer 5 Proxy (Pylon)
description: Make a SOCKS5 Proxy with ZeroTier
---

[zerotier/pylon](https://github.com/zerotier/pylon) is a tool built using [libzt](https://github.com/zerotier/libzt) that allows you to run a SOCKS5 Proxy that connects services and apps to and from your secure ZeroTier network without installing ZeroTier and without bringing up any new network interfaces. Pylon can be run as one of two personalities that can work alone or together depending on your needs:

| Name  | What do | Is this a ZeroTier Node? |
| ------------- | ------------- | - |
| `pylon refract`  | This bridges traffic to and from your LAN | Yes |
| `pylon reflect` | This relays traffic over `TCP/443`  | No |

In a nutshell you run `pylon refract` on some physical device on your LAN. Then devices and services that cannot install ZeroTier will connect to it on a port that you specify. Now services or devices on your LAN can talk to things on your ZeroTier network and vice versa. You can optionally run a `pylon reflect` if you're behind some [tricky NAT](./nat.md) and need to relay over TCP/443.

See the repo for more thorough instructions: [zerotier/pylon](https://github.com/zerotier/pylon)

:::info Note
This topic is related to but different from [Bridging](./bridging.md). Proxy mode is useful if you're unable to install our normal client on your devices.
:::
