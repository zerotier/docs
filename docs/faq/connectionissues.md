---
title: Connection Issues Troubleshooting
description: Diagnose and fix ZeroTier peer-to-peer connection problems
tags: [troubleshooting]
displayed_sidebar: docsSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Troubleshooting Connection Issues

It can be a little tricky to figure out why something isn't working. We'll try to improve this. Unfortunately you need to use the [CLI](cli.md) to troubleshoot.

It's a peer to peer system, so we might need to check 2 or more nodes to deduce where the problem is.

Go through these steps and see [corporate firewalls](corporate-firewalls.md) and [Router Tips](routertips.md) for more explanation.

### Peers List

Check this command on both peers

`zerotier-cli peers`

If one device has many "RELAY" connections, it's having a hard time connecting to things.

If the connections to the PLANETs are RELAY, the node is having a very hard time. UDP traffic may be blocked.

### Status

`zerotier-cli info` it eventually says "RELAY" instead of "ONLINE" if UDP traffic is blocked.

### Checking for Symmetric NAT

`zerotier-cli info -j`

Look at the "listeningOn" and "surfaceAddresses". If the surfaceAddress list large is constantly growing for each node you `ping`, this node may be behind Symmetric NAT. Other devices will have a hard time connecting with it.
See [corporate firewalls](corporate-firewalls.md) for more info on Symmetric NAT.

Ideally there is 1 surface address for each listening address/port.

For a simplified example, if your computer only has 1 network interface and IP address, `listeningOn` will look like this:

```json
"listeningOn": [
    "192.168.100.193/9993",
    "192.168.100.193/55957",
    "192.168.100.193/30431"
    ]
```

then the `surfaceAddresses` should have only 3 entries

```json
"surfaceAddresses": [
    "198.51.100.9/24/9993",
    "198.51.100.9/30431",
    "198.51.100.9/2785"
   ],
```

Usually there is more going on in these entries and it can be hard to read. The output of `zerotier-cli dump` contains this information. If you send it to us, we can read it for you.
