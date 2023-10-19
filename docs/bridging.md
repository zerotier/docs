---
title: Layer 2 Bridge
description: Bridge your physical LAN to ZeroTier using a Raspberry Pi
---

Do you have devices that can't run ZeroTier that you want to access remotely? You can use a small Linux PC as a bridge between ZeroTier and physical networks.

:::info Note
This topic is related to but different from using ZeroTier as a Layer 5 [Service Proxy](proxy).
:::

### Assumptions

- You're doing this on your home network and can log in to your router and find the DHCP settings.
- You have a keyboard, monitor, and ethernet cable plugged into your Pi. Chances are high we'll break networking and lose access to the Pi.
- You're somewhat familiar with the command line and ssh.
- We're going to use systemd networking for this. You could probably adapt the concepts to a different Linux network configuration system if you have opinions about systemd.
- We used a Raspberry Pi 2 while writing this, but a Pi 3 or 4 should work fine. Anything running a Debian 10+ based distro should be fine. It doesn't have to be a Raspberry Pi, but some of these instructions might be Raspbian specific.

### What you'll need

- Physical LAN Subnet
- Physical LAN DHCP Range
- ZeroTier Auto-Assign Range
- Default Gateway IP Address (the router)
- Bridge IP Address (will be statically assigned)
- Create a new ZeroTier network and get the ID. Keep an old network around for secondary way to connect any devices already using ZeroTier.
- The DHCP range and ZeroTier Auto-Assign range should be in the same subnet, but not overlap. You'd probably base this off what is already configured on your router.

#### An example plan

|Name|Value|Referred to below as|
|----|-|-|
|Physical LAN Subnet|192.168.192.0/24||
|Physical LAN DHCP RANGE|192.168.192.65 through 192.168.192.126||
|ZeroTier Auto-Assign Range|192.168.192.129 through 192.168.192.190|$ZT_POOL|
|ZeroTier Managed Route|192.168.192.0/23|$ZT_ROUTE|
|Default Gateway IP Address|192.168.192.1|$GW_ADDR|
|Bridge IP Address|192.168.192.2/24 (or use DHCP)|$BR_ADDR|
|ZeroTier Network ID|d5e04297a19bbd70|$NETWORK_ID|
|ZeroTier Network Interface Name|zt3jnwghuq|$ZT_IF|

### Get your bridge device up and running

#### Follow the Raspberry Pi install instructions

- [Install Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/)
- [Enable SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/)

### SSH into the Pi

It's easier to login via ssh now and copy/paste commands from the comfort of your own PC.

The DNS name might just work for you:

`ssh pi@raspberrypi.local` Or `ssh pi@<ip-address-of-pi>`

### Update the Operating System

```sh
sudo apt update && sudo apt -y full-upgrade && sudo reboot
```

Log back in after it's done

### Install ZeroTier

```sh title="https://www.ZeroTier.com/download/"
curl -s https://install.zerotier.com | sudo bash
```

### Let's set some shell variables now

```sh
NETWORK_ID=<your-network-id>
BR_IF="br0"
BR_ADDR=<your-bridge-address>
GW_ADDR=<your-gateway-address>
```

### Join ZeroTier Network

```sh
sudo zerotier-cli join $NETWORK_ID
```

We don't want ZeroTier to manage addresses or routes on `$ZT_IF`. We're doing it statically below, on the bridge interface.

```sh
sudo zerotier-cli set $NETWORK_ID allowManaged=0
```

Set one more variable

```sh
ZT_IF=<your-zt-interface-name>
```

Copy the `dev` name from the `listnetworks` output for `$ZT_IF`. It will be something like: zt3jvirser

### Configure the device in ZeroTier Central

- Go to the Members section of the Network
- Open the Wrench Icon for advanced settings and check
- Check Allow Bridging
- Check Do Not Auto Assign
- Authorize the member

### Switch to systemd networking

Remove existing network stuff

```sh
sudo apt remove --purge --auto-remove dhcpcd5 fake-hwclock ifupdown isc-dhcp-client isc-dhcp-common openresolv
```

Enable systemd-networkd

```sh
sudo ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf;
sudo systemctl enable systemd-networkd;
sudo systemctl enable systemd-resolved;
sudo systemctl enable systemd-timesyncd;
```

Configure interfaces

```sh
sudo zerotier-cli set $NETWORK_ID allowManaged=0
```

Write Network Configuration files. Puts ethernet and zerotier into the bridge and configures the bridge with a static IP. See below for DHCP configuration on the bridge.

```sh
cat << EOF | sudo tee /etc/systemd/network/25-bridge-br0.network
[Match]
Name=$BR_IF

[Network]
Address=$BR_ADDR
Gateway=$GW_ADDR
DNS=1.1.1.1
EOF

cat << EOF | sudo tee /etc/systemd/network/br0.netdev
[NetDev]
Name=$BR_IF
Kind=bridge
EOF

cat << EOF | sudo tee /etc/systemd/network/25-bridge-br0-zt.network
[Match]
Name=$ZT_IF

[Network]
Bridge=$BR_IF
EOF

cat << EOF | sudo tee /etc/systemd/network/25-bridge-br0-en.network
[Match]
Name=eth0 # might be en*

[Network]
Bridge=$BR_IF
EOF
```

Review configuration

```sh
tail -n+0 /etc/systemd/network/*
```

If needed, edit the files with the editor of your preference.

If it looks good:

```sh
sudo reboot
```

You should be able to, from the physical LAN, connect to the Pi via `$BR_ADDR`

### If it takes a long time waiting for the network during boot

Sometimes the physical interface turns out to be a long "predicatable interface name" like: "enb827eb0d4176", sometimes it's just `eth0`, depending on Raspbian version(???).

<https://wiki.debian.org/NetworkConfiguration#Network_Interface_Names>

Hook up a keyboard and monitor and check with ip addr then edit `/etc/systemd/network/25-bridge-br0-en.network` to match.

### Configure ZeroTier Network

At `my.zerotier.com/network/$NETWORK_ID`->`Settings`->`Advanced`

- Delete the default Managed Route. Add the new Managed Route `$ZT_ROUTE`
- Change IPV4 Auto-Assign to Advanced
- Remove existing Pool. Create new Pool with start and end from `$ZT_POOL`
- For documentation purposes, assign `$BR_ADDR` to the ZeroTier bridge member

It should be working now.

### Next steps

Either it worked, and you can ssh back in to `$BR_ADDR` after a minute, or it didn't work and the Pi isn't on the network anymore and you need to use the keyboard and monitor to figure out what went wrong.

:::tip
Make a backup of the sd card so you don't have to repeat these steps
:::

### Appendix

Configure bridge with DHCP

```sh
cat << EOF | sudo tee /etc/systemd/network/25-bridge-br0.network
[Match]
Name=$BR_IF

[Network]
DHCP=yes
EOF
```

### FAQ

### I can ping the bridge, but not behind it

Sometimes, iptables rules apply: `echo "0" > /proc/sys/net/bridge/bridge-nf-call-iptables` or `iptables -A FORWARD -p all -i br0 -j ACCEPT`

See: <https://serverfault.com/questions/162366/iptables-bridge-and-forward-chain>

#### Why is the Managed Route /23 and the LAN subnet /24?

Say you have a laptop that is on the ZeroTier network and you bring it home. Now its WiFi address and ZeroTier address are in the same subnet. Which interface/address should your laptop use for internet access? <https://en.wikipedia.org/wiki/Longest_prefix_match>

### Why is an app on my phone not working over ZeroTier?

Unfortunately the iOS and Android VPN APIs won't let ZeroTier use multicast/broadcast. These are typically how apps auto-discover services on the LAN. 😭 Stay tuned for an article on bridging a ZeroTier network and a WiFi access point.

### References

- <https://systemd.network/systemd.network.html>
- <https://hackaday.io/project/162164/instructions>
