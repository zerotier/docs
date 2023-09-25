---
title: Router Config Tips
---

ZeroTier is designed to work in as many environments as possible. We provide multiple layers of fallback so that some level of connectivity can be achieved through even the most restrictive or broken physical networks. But "some level of connectivity" does not mean "optimal connectivity." This page details the physical network configuration that we recommend for best results.

If your network configuration is hostile to peer to peer network connectivity, most of your ZeroTier traffic will end up being relayed indirectly. This slows things down considerably. Other settings such as "local isolation" can also interfere significantly with performance by forcing local traffic to traverse the Internet.

:::info
Make sure all of your nodes are updated to the latest release.
:::

### Recommended Local Network and Internet Gateway Configuration

These guidelines are consistent with the vast majority of typical deployments using commodity gateways and access points.

- Don't restrict outbound UDP traffic.
- Supporting either UPnP or NAT-PMP on your network can greatly improve performance by allowing ZeroTier endpoints to map external ports and avoid NAT traversal entirely.
- IPv6 is recommended and can greatly improve direct connection reliability if supported on both ends of a direct link. If present it should be implemented without NAT (NAT is wholly -unnecessary with IPv6 and only adds complexity) and with a stateful firewall that permits bidirectional UDP conversations.
- Don't use "symmetric" NAT. Use "full cone" or "port restricted cone" NAT. Symmetric NAT is extremely hostile to peer to peer traffic and will degrade VoIP, video chat, games, WebRTC, and -many other protocols as well as ZeroTier.
- No more than one layer of NAT should be present between ZeroTier endpoints and the Internet. Multiple layers of NAT introduce connection instability due to chaotic interactions between -states and behaviors at different levels. No Double NAT.
- NATs should have a port mapping or connection timeout no shorter than 60 seconds.
- Place no more than about 16,000 devices behind each NAT-managed external IP address to ensure that each device can map a sufficient number of ports.
- Switches and wireless access points should allow direct local traffic between local devices. Turn off any "local isolation" features. Some switches might allow finer grained control, and on -these it would be sufficient to allow local UDP traffic to/from 9993 (or in general).

### What ports does ZeroTier use?

It listens on three 3 UDP ports:

- 9993 - The default
- A random, high numbered port derived from your ZeroTier address
- A random, high numbered port for use with UPnP/NAT-PMP mappings

That means your peers could be listening on any port. To talk with them directly, you need to be able send to any port.

### Should I forward any ports in my router?

No. Let ZeroTier and UPnP, NAT-PMP, and IPv6 handle it automatically.

### System Firewalls and Security Software

If your computer has a local firewall, allow traffic to and from UDP port 9993. In some cases (such as the Windows built-in firewall) ZeroTier does this automatically if installed with one of our installation packages. In other cases such as Linux iptables we leave this to the user since there are too many variations and we do not want to accidentally corrupt user settings by trying to modify them manually.

Some systems may also have security software present that only allows select applications to communicate with the Internet. In that case you may need to locate the ZeroTier service binary and authorize it.

Finally, it's important to note that ZeroTier One's virtual network ports appear to your system just like normal LAN or WiFi ports and are subject to local firewall rules. If everything appears okay but you can't reach a local service like SSH or HTTP, check local firewall rules to ensure that desired traffic over the virtual network itself is allowed.


### Is My Device Relaying?

Look at the Network's Member List at ZeroTier Central. If a Member doesn't have a Physical IP listed, it may be relaying.
If you're comfortable with the command line, try these Command Line Interface: zerotier-cli commands: (admin/sudo privileges may be required):

```
zerotier-cli info -j
```

is "tcpFallbackActive" true? TCP fallback is the slowest form of relaying. It's a last resort.


```
zerotier-cli listpeers
```

Look for the Node ID `<ztaddr>` of the device you're trying to communicate with and see if it has an IP address listed under `<path>`. If there's no IP address, it's relaying.

There's a second form of relaying where packets bounce off ZeroTier's infrastructure. This is better than TCP relaying, but can still be subject to packet loss and high latency.


```
zerotier-cli peers
```

Is an easier to read version of listpeers . It is available in zerotier versions 1.4 and up.