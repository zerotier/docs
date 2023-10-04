---
title: FAQ
description: Answers to commonly asked questions
---

### What happens if a ZeroTier, Inc root goes down?

Our roots are globally distributed and redundant, if one fails requests will seamlessly fail-over to other roots.

If you are running your own roots the effect would be that no new connections can be established between nodes but existing connections would still work.

### Can ZeroTier, Inc. See my traffic? {#can-we-see-your-traffic}

No. Your traffic is end-to-end encrypted and your device's private identity keys are never transmitted off of your device. Learn more about our [cryptograph protocol](protocol#crypto).

### Why does my peers list have nodes I don't recognize? {#unknown-peers}

The nodes are usually our infrastructure that your node needs to talk to in order to function. This includes things like: [Root servers](roots) and [Controllers](controller). Or possibly nodes from a previously joined network.

The command `zerotier-cli peers` shows a list of nodes that your node knows about. Nodes can not talk to each other unless they are joined and authorized on the same network.

:::info How to identify a controller
A controller is a ZeroTier node. The first 10 digits of a Network ID is the controller’s address.
:::

### What is error `NOT_FOUND`? {#notfound}

When your ZeroTier Client is showing NOT_FOUND as your network status, this usually means that you've entered your network ID incorrectly and are trying to join a non-existent network.  Please check your network ID and try again.

### High Latency & Relaying {#relaying}

If you're experiencing high latency (or high ping times), it's possible the connection between two nodes is being Relayed.  The command `zerotier-cli peers` (available in 1.4.x and above) will give you information on what if any connections are being relayed.  The output will look something like this:

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

If you see the peer you're trying to contact in the RELAY state, that means packets are bouncing through our root servers because a direct connection between peers cannot be established.  Side effects of RELAYING are increased latency and possible packet loss.  See [Router Configuration Tips](routertips) for how to resolve this.

:::tip
If you experience high latency or packet jitter for more than four hours please contact your network admin as this may be a sign of a serious network condition.
:::

### Will transfers go faster on paid accounts? {#paymore}

ZeroTier performance is not at all related to your account or subscription level. You may be able to change things on your end to enable faster connections between peers, however.

In the best case scenario, and in most cases, ZeroTier connects peer-to-peer and none of your network traffic travels through our servers.  This means transfers go as fast as your CPU & network can compress, encrypt and send packets, and how fast the remote end can receive them.

There are some cases, such as hostile NATs & firewalls in which your encrypted packets do indeed get relayed through our root servers.  Relaying through our root adds latency. The packets must travel farther physically than they would for a direct, peer to peer connection.

We do not throttle any of these packets, nor can we read the contents of the packets due to encryption.  We also, however, cannot guarantee connection reliability when this happens.  We do our best effort to get your packets where they need to go, but this is not always possible.

### Where can I find old versions of ZeroTier? {#old-versions}

See [Releases](./releases.md#old)

### What is Earth?

`Earth` or `8056c2e21c000001` was a test network operated by ZeroTier, Inc., it was decommissioned in 2023.

### How do I Update Zerotier? {#update}

When you update ZeroTier, your configuration stays. You don't need to re-join your networks.

#### macOS and Windows

Grab the latest version from the [download page](https://www.zerotier.com/download) and run the installer

#### Linux

Use your OS's package manager.  eg `apt` on Debian based distributions, or `yum` or `dnf` on RedHat based distributions.

#### iOS and Android

Use the respective app stores.

### How to clear or reset your ZeroTier address {#reset-address}

If you would like to clear or reset ZeroTier's address on a device (the 10-digit address node ID) or you have cloned a device and you want to prevent it from using the same address, follow these steps in order:

#### Step 1. Stop the service

##### On Windows

- On Windows this is done with the service manager. (Open the Start Menu and start typing "service")

On Mac you can open a terminal and use
Stop Mac Service

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
```

##### On Linux this is usually

```sh
sudo systemctl stop zerotier-one
```

or

```sh
sudo service zerotier-one stop
```

#### Step 2. Delete the files identity.public and identity.secret from ZeroTier's working directory

- On Windows this is usually `\ProgramData\ZeroTier\One`
- On Mac this is `/Library/Application Support/ZeroTier/One`
in your terminal, type open `/Library/Application Support/ZeroTier/One` to open the folder in Finder.
- On Linux this is usually `/var/lib/zerotier-one`

#### Step 3. Restart the service

##### On Windows

Starting via the service manager on Windows

##### On Mac

```sh
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

##### On Linux

```sh
sudo systemctl start zerotier-one
```

or

```sh
sudo service zerotier-one start
```

When started without identities ZeroTier will generate new ones. You will need to authorize this new identity on any networks.

:::tip Can't find an answer?
[Ask our community for help](https://discuss.zerotier.com)
:::

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::
