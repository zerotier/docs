---
title: Linux FAQ
description: Guidance for running ZeroTier on Linux
---

:::tip
[See community threads about ZeroTier on Linux](https://discuss.zerotier.com/search?q=linux)
:::

### Why is the virtual interface limited to 10Mb/s?

Linux may show the ZeroTier virtual network port as a `100` mbps or `10` mbps port. This is incorrect. It's a software defined port with no intrinsic speed limit. Linux doesn't show accurate numbers for non-physical ports that have no actual interface device.

[See here for some history](https://www.phoronix.com/news/Linux-TUN-Driver-1000x)
