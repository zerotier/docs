---
title: VPN Exit Node
description: Route all your Internet traffic through a ZeroTier node
---

Route all your Internet traffic through a ZeroTier node.

:::info In this tutorial

- [Create a ZeroTier Network](./start.md)
- [Set up an `exit node`](exitnode#setup) that handles all your internet traffic
- Join the `exit node` and a personal node to your ZeroTier network
- Tell your personal node to use your `exit node`
:::

ZeroTier creates imaginary LANs. Default route override means that computers on your imaginary LAN will be routing Internet traffic through it. Just like a real LAN, your imaginary LAN is going to now need a gateway. Setup here is almost identical to what you'd do to configure a NAT gateway for a conventional wired LAN.

### First, create your exit node {#setup}

This is the node that will handle all of your internet traffic. It can be something as small as a $5 VPS or a Raspberry Pi.

- If you haven't already, go [create a network](./start.md) and come back
- Install ZeroTier on it
- Join the exit node to your ZeroTier network:

```sh
sudo zerotier-cli join <nwid>
```

### Enable IPv4 Forwarding on the exit node

On the computer acting as the VPN exit node:

```sh
sudo nano /etc/sysctl.conf
```

Add the line:

```sh title="/etc/sysctl.conf"
net.ipv4.ip_forward = 1
```

Tell the kernel to reload settings:

```sh
sudo sysctl -p
```

Check that settings were correctly applied:

```sh
sudo sysctl net.ipv4.ip_forward
```

If you've joined (and authorized!) your exit node to your network then you are ready to begin configuring it. Start by setting a few environment variables that we will use later:

Get the name of your ZeroTier interface, it will start with `zt`:

```sh
ip link show
```

```sh
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 96:00:02:8d:28:c7 brd ff:ff:ff:ff:ff:ff
    altname enp1s0
3: zthnhhqofq: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 2800 qdisc fq_codel state UNKNOWN mode DEFAULT group default qlen 1000
    link/ether 86:61:c6:fe:ed:dc brd ff:ff:ff:ff:ff:ff
```

In our case it was `zthnhhqofq`. Let's set the environment variable:

```sh
export ZT_IF=zthnhhqofq
```

Next, get the name of the regular WAN interface to the internet:

In our case it was `eth0`

```sh
export WAN_IF=eth0
```

Enable NAT and IP masquerading:

```sh
sudo iptables -t nat -A POSTROUTING -o $WAN_IF -j MASQUERADE
```

Allow traffic forwarding:

```sh
sudo iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
```

Allow traffic forwarding from the ZeroTier interface to the WAN interface:

```sh
sudo iptables -A FORWARD -i $ZT_IF -o $WAN_IF -j ACCEPT
```

Make `iptables` rules persist after reboot:

```sh
sudo apt-get install iptables-persistent
```

Save your new `iptables` rules:

```sh
sudo netfilter-persistent save
```

:::tip Restart
At this point it would be a good idea to restart your exit node and verify that the routing rules have persisted.
:::

```sh title="sudo iptables-save"
...

-A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
-A FORWARD -i zthnhhqofq -o eth0 -j ACCEPT

...

-A POSTROUTING -o eth0 -j MASQUERADE

...
```

Your exit node is complete, now we need to configure your network.

### Configure your network

Now that your exit node is set up we need to configure your ZeroTier network to advertise a `Default Route` so that other nodes know that the exit node can route traffic to the internet.

Central > Network >

### Tell other nodes to use exit node

:::tip ~/.bashrc

Try adding something like the following for simple tunnel on/off control:

```sh
tunnel()
{
 sudo zerotier-cli set $nwid allowDefault=1
}

notunnel()
{
 sudo zerotier-cli set $nwid allowDefault=0
}
```

:::
