---
title: Low Bandwidth Mode
description: Reduce ambient traffic over expensive links
tags: [tutorial, troubleshooting, client, local.conf]
---

This mode is designed for devices connected over expensive links where ambient protocol traffic needs to be at a minimum. This timer adjustment reduces ZeroTier's ambient network data usage by doing the following:

- Reduce frequency at which full `HELLO`s are sent to peers to `1/2` of original
- Reduce frequency at which full `HELLO`s are sent to upstream peers to `1/16`th of original
- Reduce frequency at which network configs are requested to `1/64`th of original
- Network config updates are no longer replicated to peers
- Will not send HELLOs out on all available local sockets (only one now.)
- Reduce frequency at which direct paths are pushed to peers to `1/16`th of original
- Will no longer push additional physical addresses if one is already known and workable
- Reduce frequency of multicast gather to `1/3`rd of original

Currently this new mode can be enabled by adding the following to `local.conf`

```json
{
  "settings":
  {
    "lowBandwidthMode":true
  }
}
```

The side effects of this mode will be a ZeroTier that is slower to respond to network changes but should otherwise still act as expected. This works on my machines and has been tested on at least one other machine but should still be considered experimental. Since it must be manually enabled I think it is safe to include in the next release.

A future revision of this feature may be toggle-able via a `zerotier-cli` command.

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::
