---
title: Root Server IP Whitelist
description: List of ZeroTier infrastructure endpoints
tags: [router, troubleshooting, flag]
---

For minimal operation, outbound UDP on port 9993 (and reply packets) should be allowed to ZeroTier's root servers. Allowing other UDP is ideal since it allows peer to peer connectivity, but these IPs on 9993 are the minimal requirement for ZeroTier to work:

```sh
root-lax-01.zerotier.com has address 185.152.67.14
root-lax-01.zerotier.com has IPv6 address 2a02:6ea0:c87f::1
root-mia-01.zerotier.com has address 103.195.103.66
root-mia-01.zerotier.com has IPv6 address 2605:9880:400:c3:254:f2bc:a1f7:19
root-tok-01.zerotier.com has address 79.127.159.187
root-tok-01.zerotier.com has IPv6 address 2a02:6ea0:d368::9993
root-zrh-01.zerotier.com has address 84.17.53.155
root-zrh-01.zerotier.com has IPv6 address 2a02:6ea0:d405::9993
root-alice-sfo-01.zerotier.com has address 107.170.197.14
root-alice-sfo-01.zerotier.com has IPv6 address 2604:a880:1:20::200:e001
```

These are Los Angeles, Miami, Tokyo and Zurich. SFO still exists to point very old nodes to the newer roots.

We've also created a DNS record: `host root.zerotier.com`

:::caution Subject to change
These IPs are subject to change and new root points of presence could be added or removed.
:::
