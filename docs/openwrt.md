---
title: OpenWRT
description: How to install ZeroTier on your OpenWRT router
---

[The OpenWRT Project](https://openwrt.org/) is a Linux operating system targeting embedded devices.

ZeroTierOne is available as a package from the primary OpenWRT project, as well as many OpenWRT-based platforms including [Teltonika RutOS](https://wiki.teltonika-networks.com/view/ZeroTier_Configuration) and [GL.iNET](https://docs.gl-inet.com/router/en/4/interface_guide/zerotier/) portable routers.

To install and configure ZeroTierOne on OpenWRT, please see the [main project wiki](https://openwrt.org/docs/guide-user/services/vpn/zerotier). That page includes guidance on not just the initial setup, but how to configure other router and firewall options to handle traffic across the ZeroTier network(s) for your environment.

## Advanced Configuration

As noted in the wiki article above, you can set a number of basic ZeroTierOne settings via UCI configuration values, either by editing the file `/etc/config/network/zerotier` or using the LuCI web interface.

However, some features require manual configuration:

- Hosting a ZeroTier controller on your OpenWRT device requires a writable filesystem location to store controller state (such as authorized members) using the `config_path` option
- Overriding options in [local.conf](/config#local-configuration-options) such as [`lowBandwidthMode`](/lbm) requires creating a valid local config file and then setting `local_conf` in the UCI configuration to point to it.

:::tip Next steps
Click [here](/start/) to create your network and start adding devices.
:::
