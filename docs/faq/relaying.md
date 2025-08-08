---
title: High Latency and Relaying Issues
description: How to identify and resolve when ZeroTier connections are being relayed
tags: [troubleshooting, explanation, router]
displayed_sidebar: docsSidebar
---

### High Latency & Relaying {#relaying}

If you're experiencing high latency (or high ping times), it's possible the connection between two nodes is being Relayed. The command `zerotier-cli peers` (available in 1.4.x and above) will give you information on what if any connections are being relayed. The output will look something like this:

```text
[root@host] # zerotier-cli peers
<ztaddr>   <ver>  <role> <lat> <link> <lastTX> <lastRX> <path>
61d294b9cb -      PLANET    43 DIRECT 1617     6580     50.7.73.34/9993
62f865ae71 -      PLANET   193 DIRECT 1617     1424     2001:49f0:d0db:2::2/9993
6xxxxxxxx1 1.6.4  LEAF     730 DIRECT 8714     8714     35.222.83.92/62191
778cde7190 -      PLANET    76 DIRECT 1617     11607    103.195.103.66/9993
992fcf1db7 -      PLANET   163 DIRECT 6623     1454     2a02:6ea0:c024::/9993
deadbeef01 1.6.4  LEAF      -1 RELAY
```

If you see the peer you're trying to contact in the RELAY state, that means packets are bouncing through our root servers because a direct connection between peers cannot be established. Side effects of RELAYING are increased latency and possible packet loss. See [Router Configuration Tips](/routertips) for how to resolve this.

:::tip
If you experience high latency or packet jitter for more than four hours please contact your network admin as this may be a sign of a serious network condition.
:::
