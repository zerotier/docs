---
title: MikroTik
---

##

MikroTik maintains a [ZeroTier package](https://help.mikrotik.com/docs/display/ROS/ZeroTier) for their line of routers. This page is intended to eventually function as a complement to the official MikroTik documentation. If you're new to ZeroTier we'd recommend reading our [Getting Started Guide](https://zerotier.atlassian.net/wiki/spaces/SD/pages/8454145/Getting+Started+with+ZeroTier) as well. Other useful resources include [this post on the MikroTik Forums](https://forum.mikrotik.com/viewtopic.php?p=935058&hilit=zerotier#p914222). You can view MikroTik's original announcement and discussion [here](https://forum.mikrotik.com/viewtopic.php?f=1&t=178063). If you need further assistance please create an [issue on Github](https://github.com/zerotier/ZeroTierOne/issues?q=is%3Aissue+mikrotik).

:::note

If you're an enterprise-sized entity looking to integrate MikroTik + ZeroTier we'd recommend getting some guidance from [IP ArchiTechs](https://iparchitechs.com/ecosystem/mikrotik-network-consulting) who are very familiar with the performance characteristics of various models and can help design a solution for you.
:::

### Performance

For best performance it is recommended that you choose an `ARM64` device. `ARM32` devices will work but with significantly reduced performance. Currently no `MIPS` ZeroTier package exists for MikroTik devices.

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::