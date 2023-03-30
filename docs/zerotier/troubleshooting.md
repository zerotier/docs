---
title: Troubleshooting & FAQ

code_clipboard: true
custom_edit_url: null
---

# Troubleshooting & FAQ

## Ping is not working

First, make sure your device is authorized on the network and you're using the ZeroTier assigned Managed IP address.  Aside from that, some OSes block pings in their local firewall by default.

### Windows

Windows does block pings by default. To enable pings on Windows, follow the following steps

1. Click the search bar on your taskbar and search for "Windows Firewall" then click it to open
2. Click "Advanced Settings" on the left.
3. From the left pane of the resulting window, click "Inbound Rules"
4. In the right pane, find the rules titled "File and Printer Sharing (Echo Request - ICMPv4-In).
5. Right click each rule and choose "Enable Rule"

### macOS

The firewall is not enabled by default on macOS, and thus pings will not be blocked by default.  If your firewall is enabled on macOS, go into System Preferences -> Security & Privacy.  Under Firewall Options, ensure "Enable stealth mode" is disabled. Stealth mode blocks pings.

### Linux

There are far too many linux distributions out there to list instructions for all of them here.  Please refer to your distribution's documentation for how to unblock ICMP packets.

## Router Configuration Tips

ZeroTier is designed to work in as many environments as possible. We provide multiple layers of fallback so that some level of connectivity can be achieved through even the most restrictive or broken physical networks. But "some level of connectivity" does not mean "optimal connectivity." This page details the physical network configuration that we recommend for best results.

If your network configuration is hostile to peer to peer network connectivity, most of your ZeroTier traffic will end up being relayed indirectly. This slows things down considerably. Other settings such as "local isolation" can also interfere significantly with performance by forcing local traffic to traverse the Internet.

### Recommended Local Network and Internet Gateway Configuration

* Don't restrict outbound UDP traffic.
* Supporting either UPnP or NAT-PMP on your network can greatly improve performance by allowing ZeroTier endpoints to map external ports and avoid NAT traversal entirely.
IPv6 is recommended and can greatly improve direct connection reliability if supported on both ends of a direct link. If present it should be implemented without NAT (NAT is wholly unnecessary with IPv6 and only adds complexity) and with a stateful firewall that permits bidirectional UDP conversations.
* Don't use "symmetric" NAT. Use "full cone" or "port restricted cone" NAT. Symmetric NAT is extremely hostile to peer to peer traffic and will degrade VoIP, video chat, games, WebRTC, and many other protocols as well as ZeroTier.
* No more than one layer of NAT should be present between ZeroTier endpoints and the Internet. Multiple layers of NAT introduce connection instability due to chaotic interactions between states and behaviors at different levels. No Double NAT.
* NATs should have a port mapping or connection timeout no shorter than 60 seconds.
* Place no more than about 16,000 devices behind each NAT-managed external IP address to ensure that each device can map a sufficient number of ports.
* Switches and wireless access points should allow direct local traffic between local devices. Turn off any "local isolation" features. Some switches might allow finer grained control, and on these it would be sufficient to allow local UDP traffic to/from 9993 (or in general).

### What ports does ZeroTier use?

It listens on three 3 UDP ports:

* 9993 - The default
* A random, high numbered port derived from your ZeroTier address 
* A random, high numbered port for use with UPnP/NAT-PMP mappings

That means your peers could be listening on any port. To talk with them directly, you need to be able send to any port.

### Should I forward any ports in my router?

You shouldn't need to.  Between ZeroTier's UDP hole punching techniques, UPnP, NAT-PMP, and IPv6, ZeroTier *should* be able to get through without you manually opening ports.

### System Firewalls and Security Software

If your computer has a local firewall, allow traffic to and from UDP port 9993. In some cases (such as the Windows built-in firewall) ZeroTier does this automatically if installed with one of our installation packages. In other cases such as Linux iptables we leave this to the user since there are too many variations and we do not want to accidentally corrupt user settings by trying to modify them manually.

Some systems may also have security software present that only allows select applications to communicate with the Internet. In that case you may need to locate the ZeroTier service binary and authorize it.

Finally, it's important to note that ZeroTier One's virtual network ports appear to your system just like normal LAN or WiFi ports and are subject to local firewall rules. If everything appears okay but you can't reach a local service like SSH or HTTP, check local firewall rules to ensure that desired traffic over the virtual network itself is allowed.

### High Latency & Relaying

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

If you see the peer you're trying to contact in the RELAY state, that means packets are bouncing through our root servers because a direct connection between peers cannot be established.  Side effects of RELAYING are increased latency and possible packet loss.  See "Router Configuration Tips" above for how to resolve this.

## Will transfers go faster on paid accounts?

ZeroTier performance is not at all related to your account or subscription level. You may be able to change things on your end to enable faster connections between peers, however.

In the best case scenario, and in most cases, ZeroTier connects peer-to-peer and none of your network traffic travels through our servers.  This means transfers go as fast as your CPU & network can compress, encrypt and send packets, and how fast the remote end can receive them.

There are some cases, such as hostile NATs & firewalls in which your encrypted packets do indeed get relayed through our root servers.  Relaying through our root adds latency. The packets must travel farther physically than they would for a direct, peer to peer connection. 

We do not throttle any of these packets, nor can we read the contents of the packets due to encryption.  We also, however, cannot guarantee connection reliability when this happens.  We do our best effort to get your packets where they need to go, but this is not always possible.  

## Why does my peer list have nodes I don't recognize?

`zerotier-cli peers` shows a list of nodes that your node knows about. 
 
Nodes can not send TCP/IP traffic to each other unless they are joined and authorized on the same network. 
 
The peers you are seeing could be: 

* ZeroTier, Inc. root servers: These are hard-coded into the client
* Network Controllers: A network controller is a ZeroTier node. The first 10 digits of a Network ID is the controller’s address. 
* Nodes discovered from a previously joined and left network. 
 
But again, they can’t see your traffic unless they are on the same network.

## Network Status `NOT_FOUND`

When your ZeroTier Client is showing `NOT_FOUND` as your network status, this usually means that you've entered your network ID incorrectly and are trying to join a non-existent network.  Please check your network ID and try again.

## Error: Cannot connect to ZeroTier service (or Node ID "Unknown" in the GUI apps) 

This error means that the ZeroTier background service on your computer is either not running, or your local firewall is preventing the UI or CLI from talking to it.

### Windows 10

Open Task Manager and go to the “Services” tab.  Scroll down until you see “ZeroTierOneService”. The status column should say “Running”.  If it does not, right click on the line and click “Start”

### macOS

Open Terminal.app and execute the following commands

    sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist 
    sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist

### Linux 

If your Linux distribution used systemd, execute:

    sudo service zerotier-one start

If not, execute:

    /etc/init.d/zerotier-one start

### Still doesn't work?

Your system firewall is likely blocking communication with the ZeroTier service.  Look up instructions for how to unblock an application from the firewall for your OS.  ZeroTier will need to be accessible via TCP port 9993 for the UI and CLI to interact with it.

## How do I Update Zerotier?

When you update ZeroTier, your configuration stays. You don't need to re-join your networks.

### macOS and Windows

Grab the latest version from the [download page](https://www.zerotier.com/download) and run the installer

### Linux

Use your OS's package manager.  eg `apt` on Debian based distributions, or `yum` or `dnf` on RedHat based distributions.

### iOS and Android

Use the respective app stores.
