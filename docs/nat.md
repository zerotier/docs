---
title: NAT
description: How to figure out what kind of NAT you have
tags: [tutorial, troubleshooting]
---

### How to characterize NAT {#stun}

When debugging it is often nice to be able to gather information about NAT type and behavior. ZeroTier does not use STUN (for various reasons), but many STUN implementations contain some helpful code for doing this. It's helpful to use an external utility since it's "out of band" and therefore independent of ZeroTier.

```sh
sudo apt-get install stun
sudo stun stun.callwithus.com 0
```

This will perform the basic NAT characterization test from the STUN RFC. The STUN server can be any public STUN server.

It will generate output like:

```sh
STUN client version 0.96
running test number 0
Primary: Independent Mapping, Port Dependent Filter, preserves ports, no hairpin
Return value is 0x000017
```
