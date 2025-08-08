---
title: Root Server IP Whitelist
description: How to find ZeroTier infrastructure endpoints for firewall configuration
tags: [router, troubleshooting, firewall]
---

For minimal operation, outbound UDP on port 9993 (and reply packets) should be allowed to ZeroTier's root servers. Allowing other UDP is ideal since it allows peer to peer connectivity, but port 9993 access to the root servers is the minimal requirement for ZeroTier to work.

## Finding Current Root Server IPs

To get the current list of root server IP addresses, use `nslookup` to resolve the individual root server hostnames:

```bash
nslookup root-lax-01.zerotier.com
nslookup root-mia-01.zerotier.com  
nslookup root-tok-01.zerotier.com
nslookup root-zrh-01.zerotier.com
nslookup root-alice-sfo-01.zerotier.com
```

These represent our root servers in Los Angeles, Miami, Tokyo, Zurich, and San Francisco.

You can also resolve all current root servers at once:

```bash
nslookup root.zerotier.com
```

:::caution IPs Change Regularly
Root server IP addresses do change, albeit rarely, and new points of presence may be added or removed. Always use dynamic searches to get current addresses rather than hardcoding specific IPs in crucial applications.
:::
