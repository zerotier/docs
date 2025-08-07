---
title: Bandwidth Considerations
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

### Bandwidth considerations

In the best case scenario, and in most cases, ZeroTier connects peer-to-peer and none of your network traffic travels through our servers. This means transfers go as fast as your CPU & network can compress, encrypt and send packets, and how fast the remote end can receive them.

There are some cases, such as hostile NATs & firewalls in which your encrypted packets do indeed get relayed through our root servers. Relaying through our root adds latency. The packets must travel farther physically than they would for a direct, peer to peer connection.

We do not throttle any of these packets, nor can we read the contents of the packets due to encryption. We also, however, cannot guarantee connection reliability when this happens. We do our best effort to get your packets where they need to go, but this is not always possible.

Considerations:

- CPU speed. The current version of zerotier-one is single threaded. Raw CPU speed is important in high bandwidth use cases.
- Physical Internet connection. ZeroTier can only go as fast as the physical connection it's running over.
- Hardware Encryption. ZeroTier uses hardware AES acceleration when available. Most current ARM and x86_64 platforms have AES acceleration.
- Geographic distance. If your remote peer is on a different continent, there will be latency. We can't improve the speed of light.

:::tip
If you are experiencing slow network speeds or difficulty making direct connections see See [Router Configuration Tips](./routertips.md) or [Corporate Firewalls](./corporate-firewalls.md)
:::

#### Will transfers go faster on paid accounts? {#paymore}

ZeroTier performance is not at all related to your account or subscription level. You may be able to change things on your end to enable faster connections between peers.