---
title: Self Hosting
description: Host your own ZeroTier infrastructure
tags: [controller, tutorial, admin]
category: 
---

There are 2 types of ZeroTier infrastructure that can be self-hosted.

### Network Controllers

Controllers handle [Virtual Layer 2](/protocol.md#vl2). No traffic is handled by controllers.

ZeroTier Inc runs controllers with a web UI and API at [ZeroTier Central](https://my.zerotier.com). You can [self-host controllers](/controller.md), but we don't currently offer the web UI for self-hosting. You'll have to use the [json api](https://docs.zerotier.com/api/service/#tag/Controller) to manage your networks.

The controller is open-source. Please check the [license](https://github.com/zerotier/ZeroTierOne/blob/master/LICENSE.txt). The controller service is built in to the zerotier-one binary if you use our [downloads](https://www.zerotier.com/download).

### Roots

Roots handle [Virtual Layer 1](/protocol.md#peerdiscovery).
ZeroTier, Inc hosts the roots. Setup for peer to peer connections happen via the roots. If peer to peer connections can't be made, traffic is "relayed" through these roots.

:::note
All traffic is end-to-end encrypted. The roots can't read anything that passes through them.
:::

You can [host your own roots](/roots.md) ("moons") in addition to ZeroTier's, but we can't provide support for removing ZeroTier's roots except to enterprise customers. The mobile apps don't currently support custom roots.

If you are not using ZeroTier Inc's default root setup, your nodes won't be talk to nodes that are. Only devices configured with your custom roots will find each other.

If you want to add additional roots and still talk to standard nodes, see [moons](/roots.md).

Roots require stable IP addresses.
