---
title: Pi-Hole
description: Block Ads with a Pi-Hole on your ZeroTier network
tags: [pi, tutorial, installation]
category: 
---

Block Ads with a Pi-Hole on your ZeroTier network

### Install ZeroTier

### Install Pi-Hole

```sh
curl -sSL https://install.pi-hole.net | bash
```

:::info
Go here for more installation instructions: https://docs.pi-hole.net/main/basic-install/
:::

When prompted, select the ZeroTier interface

:::caution
If you are running your Pi-Hole in the cloud there are important additional steps needed to properly secure it and prevent it from being [used as part of a bot net](https://www.cloudflare.com/learning/ddos/dns-amplification-ddos-attack/)
:::

### Hardening your Pi-Hole

#### Make web interface only reachable over ZeroTier

#### Handle DNS requests only from the ZeroTier network
