---
title: MikroTik
description: How to install ZeroTier on your MikroTik router
---

MikroTik maintains a [ZeroTier package](https://help.mikrotik.com/docs/display/ROS/ZeroTier) for their line of networking products.

:::info MikroTik and Zerotier
<iframe width="560" height="314" src="https://www.youtube.com/embed/60uIlyF8Z5s?si=DtkvyWxvauAjbbly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

### Choosing a model

For best performance it is recommended that you choose a model that has a `64-bit ARM` chip (arm64). **Not 32-bit ARM**. 32-bit ARM devices will work but with significantly reduced performance. Currently no `MIPS` ZeroTier package exists for MikroTik devices.

:::note
If you're an enterprise-sized entity looking to integrate MikroTik + ZeroTier we are recommend getting some guidance from [IP ArchiTechs](https://iparchitechs.com/ecosystem/mikrotik-network-consulting) who are very familiar with the performance characteristics of various models and can help design a solution for you.
:::

### Troubleshooting

Since MikroTik developed and maintains the ZeroTier package themselves you may need to [search](https://forum.mikrotik.com/search.php?keywords=zerotier) or ask questions on [their forum](https://forum.mikrotik.com/) if you need additional help please come visit our forum and we'll try to help.

If you're new to ZeroTier we'd recommend reading our [Getting Started Guide](./start.md).

:::tip
[See community threads about MikroTik](https://discuss.zerotier.com/search?q=mikrotik)
:::
