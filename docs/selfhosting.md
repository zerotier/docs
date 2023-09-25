---
title: Self Hosting
---

Hosting your own ZeroTier infrastructure is easy. There are 2 types of ZeroTier infrastructure and each serves a different role:

### Network Controllers

Controllers handle [Virtual Layer 2](protocol#vl2). No traffic is handled by controllers. ZeroTier Inc runs controllers with a web UI and API at [ZeroTier Central](https://my.zerotier.com). You can [self-host controllers](controller), but we don't currently offer the web UI for self-hosting. You'll have to use the json api.

The controller is open-source. Please check the [license](https://github.com/zerotier/ZeroTierOne/blob/master/LICENSE.txt). It's built in to the zerotier-one binary.


### Roots

Roots handle [Virtual Layer 1](protocol#peerdiscovery).
ZeroTier, Inc hosts the roots. Setup for peer to peer connections happen via the roots. If p2p connections can't be made, traffic is "relayed" through these roots.

:::note
All traffic is end-to-end encrypted. The roots can't read anything that passes through them.
:::

You can [host your own roots](roots) (previously called "moons") in addition to ZeroTier's, but we can't provide support for removing ZeroTier's roots (unless you are a large enterprise customer). The mobile apps don't currently support custom roots.

If you are using a custom root setup, your nodes won't be able to find standard nodes. If you want to add additional roots and still talk to standard nodes, see [moons](roots).