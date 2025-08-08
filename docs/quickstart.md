---
title: Quickstart Guide
description: Get connected in under 5 minutes!
tags: [tutorial, newcomer, installation, client, central, admin]
category: Getting Started
---

Connect two devices and ping your first server in under 5 minutes.

## 1. Create Network

1. Visit [my.zerotier.com](https://my.zerotier.com/) in your web browser and log in
2. Click the **Create A Network** button
3. **Copy the Network ID** - this is a 16-character code like `d5e04297a16fa690`

*Keep this browser tab open - you'll need it in step 4.*

## 2. Install ZeroTier and Join Your Network

Visit our [downloads page](https://www.zerotier.com/download) and install ZeroTier on each device that will connect to this network.

## 3. Join Your Network

### On PC/MacOS

1. Locate the ZeroTier icon in your menu bar (if MacOS) or system tray (if Windows)
2. Click the icon -> **Join New Network...**
3. Paste your Network ID and click **Join**

### Using CLI

ZeroTier's command line interface (CLI) works on any device with an accessible terminal.

```bash
sudo zerotier-cli join NETWORK_ID
```

## 4. Authorize Your Devices

1. Go back to your browser tab with [my.zerotier.com](https://my.zerotier.com/) and click on your network
2. Scroll down to the **Members** section - you should see your devices connected from the step above
3. For each device, toggle the left checkbox. Then, click **Authorize**

*Your devices should now show a green checkbox under the* ***Auth*** *column*

## 5. Test Your Connection

### Find Your IP Addresses

In the **Members** section on the website, note the **Managed IP** addresses (like `192.168.191.242`)

### Test the Connection

Type this command in any terminal, replacing `MANAGED_IP` with one of your device's IP addresses (be sure to ping a device separate from the one you are using!):

```bash
ping -n 3 MANAGED_IP
```

**Success looks like this:**

```bash
PING 10.147.17.101 (10.147.17.101): 56 data bytes
64 bytes from 10.147.17.101: icmp_seq=0 ttl=64 time=15.2 ms
64 bytes from 10.147.17.101: icmp_seq=1 ttl=64 time=12.1 ms
64 bytes from 10.147.17.101: icmp_seq=2 ttl=64 time=11.8 ms
```

**You did it!** Your devices are now securely connected.

## Leaving a Network

When you no longer need to be connected to a network, you can leave it:

- Click the ZeroTier icon in your menu bar/system tray
- Click the network name to uncheck it (or use **Network Details** to uncheck the Connected checkbox)
- To permanently remove a network, use **Network Details** -> **Delete Network**

Alternatively, use the CLI command:

```bash
sudo zerotier-cli leave NETWORK_ID
```

## Next Steps

- [SSH and Remote Desktop](/remotedesktop)
- [Network File Sharing](/filesharing)
- [Host a website across your network](/website)
