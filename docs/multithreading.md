---
title: Multithreading
description: Enable ZeroTier to use multiple physical cores
tags: [tutorial, troubleshooting, local-config]
---

As of version `1.14.1` ZeroTier is capable of utilizing more than one CPU core for traffic processing. This enables greater total throughput and more efficient use of machines handling large amounts of traffic.

:::info BETA
This is currently a beta feature and we welcome any feedback and/or test results. For now it is only available for Linux and is disabled by default. It will be ported to FreeBSD, macOS, and Windows in a future release.
:::

The feature requires manual activation using the `local.conf` file in the same home directory that stores your node’s identity files. If that file is not already present, create it.

### Example usage

```json title="Example local.conf"
{
   "settings":
   {
       "multicoreEnabled": true,
       "concurrency": 2,
       "cpuPinningEnabled": true
   }
}
```

*[See here](https://docs.zerotier.com/config) for more info on how to configure the client using `local.conf`*

### Tip for success

It is recommended that you choose a concurrency level that is reflective of the actual number of physical (not virtual) cores on your machine. For instance, if `nproc` reports `4`, set a concurrency level of `2`. Additionally, enabling [pinning](https://en.wikipedia.org/wiki/Processor_affinity) seems to improve performance in more cases than not.

Multithreading is unlikely to improve performance over the Internet but will over a physical LAN in most cases.
