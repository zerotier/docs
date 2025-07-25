---
title: OS and Device Compatibility
description: ZeroTier runs on just about anything with a chip
tags: [beginner, installation]
---

ZeroTier is lightweight, portable, and compatible across all major platforms and architectures. It typically consumes less than 16 MB of memory, only about 1 MB of storage, and even has a [low-bandwidth mode](/lbm.md) for IoT applications. It supports `32-bit ARM (arm32)`, `64-bit ARM (arm64)`, `32-bit Intel (x86)`, `64-bit Intel (x64/amd64)`, `MIPS`, and `s390x`. You can run it on [Linux](/linux), [macOS](/macos), [Windows](/windows), [iOS/iPadOS](/ios), [Android](/android), and [FreeBSD](faq-freebsd.md). You can run it on [Routers](/routers), [Network Attached Storage](/nas), and we [have solutions](/proxy.md) for when you can't install ZeroTier on a small IoT sensor.

We generally adhere to manufacturer life-cycles for feature support of each platform but will attempt to backport important security updates to versions for older operating systems where possible.

- Our most recent client can still be run on tiny single-board computers like the original Raspberry Pi made over a decade ago and all versions of ZeroTier are backwards compatible.

- ZeroTier is currently single-threaded so devices with more than two cores typically will not offer significant performance gains. Future versions of ZeroTier will introduce multithreading.

- While ZeroTier will operate on very low-power hardware (e.g. a single core 32-Bit ARM running at 600Mhz without AES hardware acceleration (AES-NI)), its performance will suffer.

We recommend the following for a happy ZeroTier experience: `>=1GHz` CPU with at least `2` cores, and `AES-NI`.

:::note ARM
If you're planning on embedding ZeroTier in a product such as a router, network attached storage or some other IoT application we see that our partners have a better experience with `64-bit ARM` as opposed to `32-bit ARM` since the core speeds are typically higher and the chips are more likely to have `AES-NI`.
:::

:::info Getting Started
Click [here](/start/) to create your network and start adding devices.
:::
