---
title: Route between ZeroTier and Physical Networks
---

This seems to be the simplest pattern for getting remote access to your LAN. It doesn't require access to the LAN's router or have some of the pitfalls of bridging. This requires a Linux PC or VM, something that runs iptables, on your LAN. A Raspberry Pi works. This is a NAT/Masquerade setup.

If you have a router that can run zerotier, you should use that instead of this article. Many router vendors and operating systems have zerotier packages.

:::info Possible Disadvantages

No broadcast/multicast across networks (but the mobile OS's don't allow this anyways).

Can't initiate connections from the LAN to an external ZeroTier client.
:::

### Summary

- Install ZeroTier
- Add a managed route to the ZeroTier network (at my.zerotier.com)
- Enable IP Forwarding
- Configure iptables

### Required information

For Example:

|Info|Example|Shorthand Name Below|
|-|-|-|
|ZeroTier Network ID|d5e04297a19bbd70|$NETWORK_ID|
|ZeroTier Interface Name|zt7nnig26|$ZT_IFACE|
|Physical Interface Name|eth0|$PHY_IFACE|
|ZeroTier subnet|172.27.0.0/16||
|Physical subnet|192.168.100.0/24|$PHY_SUB|
|ZeroTier IP Address of "Router"|172.27.0.1|$ZT_ADDR|

### Install ZeroTier

https://www.zerotier.com/download/

```
sudo zerotier-cli join $NETWORK_ID
sudo zerotier-cli listnetworks
```
Authorize it at my.zerotier.com/network/$NETWORK_ID

The listnetworks output has the ZeroTier Interface name under `<dev>`

### Configure the ZeroTier managed route

At `my.zerotier.com/network/$NETWORK_ID`->`Settings`->`Managed Routes`

This adds another route to every device joined to the ZeroTier network.

|Destination|(Via)|
|-|-|
|$PHY_SUB|$ZT_ADDR|

For example:

|Destination|(Via)|
|-|-|
|192.168.100.0/23|172.27.0.1|

Configure the destination route as slightly **larger** than the actual physical subnet, here `/23` instead of `/24` (a smaller number is a bigger subnet in this notation) This makes devices that are on both the physical and the ZeroTier network prefer the physical connection.

### Enable IP forwarding

This can vary depending on linux distribution. Typically:

Edit `/etc/sysctl.conf` to uncomment `net.ipv4.ip_forward`. This enables forwarding at boot.

To enable it now

```
sudo sysctl -w net.ipv4.ip_forward=1
```

### Configure iptables

Assign some shell variables (personalize these)

```
PHY_IFACE=eth0; ZT_IFACE=zt7nnig26
```

Add rules to iptables

```
sudo iptables -t nat -A POSTROUTING -o $PHY_IFACE -j MASQUERADE
sudo iptables -A FORWARD -i $PHY_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i $ZT_IFACE -o $PHY_IFACE -j ACCEPT
```

Save iptables rules for next boot

```
sudo apt install iptables-persistent
sudo bash -c iptables-save > /etc/iptables/rules.v4
```

### Test!

- Turn off wifi on your phone
- Join it to the zerotier network, authorize it
- Try to access something on the physical LAN