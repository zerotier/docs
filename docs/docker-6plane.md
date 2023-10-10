---
title: 6PLANE with Docker
description: NDP Emulated 6PLANE with Docker
---

6PLANE provides a convenient way to assign private IPv6 backplane addresses to Docker containers, virtual machines, and any other case where you have M hosts hosting N "things." In 6PLANE mode each device gets a fully routable IPv6 `/80`, allowing it to assign up to `2^48` addresses to things it hosts. Routing is accomplished by way of the NDP emulation "magic" described below.

### The 6PLANE Addressing Scheme

6PLANE assigns every host on a ZeroTier virtual network an IPv6 address within a private `/40` network like `fcf9:b03a:12::/40`. The 8-bit fc prefix indicates a private IPv6 network with an "experimental" assignment scheme (not important here), while the remaining 32 bits are computed by XORing the upper and lower 32 bits of the network ID together. This yields a unique deterministic prefix for every ZeroTier virtual network.

Inside this network the controller will hand out IPv6 unicast addresses like `fcf9:b03a:1289:e92c:eee5::1` to every participant. Look closely and you'll see our `/40` followed by another `40` bits: `89:e92c:eee5`. This is the 40-bit ZeroTier address of the host.

### The Magic: NDP Emulation

IPv6 hosts find one another on Ethernet networks using a protocol called [NDP](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol). It's basically IPv6's version of IPv4's [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol). For ordinary IPv6 addresses NDP will work on ZeroTier networks as expected, but for ZeroTier's "special" IPv6 private addressing modes (6PLANE and RFC4193) NDP is emulated.

NDP emulation means that your local ZeroTier node intercepts IPv6 NDP queries and responds on behalf of the target, skipping multicast entirely. ZeroTier nodes can do this because in 6PLANE and `RFC4193` addressing modes each IPv6 address contains the 40-bit ZeroTier device address of its owner. Since Ethernet MACs on ZeroTier networks are computed from the ZeroTier address and the network ID, your local node can emulate NDP because it already knows the answer.

One clear benefit of NDP emulation is speed and scalability. By skipping NDP lookup connections can avoid one handshake and happen more quickly, and eliminating the need for multicast makes it easier for networks to scale to millions or billions of devices. Multicast is also one of the heavier parts of the ZeroTier core. Addressing modes that render it unnecessary will make it easier to shrink the ZeroTier core for tiny IoT devices.

Both the RFC4193 and 6PLANE modes invoke NDP emulation but 6PLANE shortens the network ID portion to a 32-bit unique identifier to yield a `/40` network prefix followed by a 40-bit ZeroTier address. That leaves 48 "wildcard" bits at the end that ZeroTier's NDP emulation simply ignores, magically delegating a routable `/80` to every host. The host gets `::1` but is free to assign the rest.

Since "routing" is done at layer-2 with NDP emulation you don't need big routing tables or complex layer-3 topologies with routers as points of failure. Since multicast is skipped for these addresses connections are fast and networks can scale to millions or billions of hosts without trouble. The network still behaves like a flat Ethernet network so IPv4, other kinds of IPv6 addresses (NDP emulation ignores these), and multicast all work as expected.

After you enable 6PLANE on a network, try firing up `tcpdump` on a target host's `zt#` interface and then pinging its ::1 address. You'll see the usual ICMPv6 ECHO/ECHO-reply traffic. Now try pinging some random address under its /80 like `fc##:####:####:####:####:feed:dead:beef`. You'll see ICMPv6 ECHO requests for those too but no replies. That's because the host is receiving these packets due to our NDP emulation magic but does not actually have this address assigned to any interface. All the host has to do is take this address or route these packets to something behind it and this address or any other will instantly work.

### Using 6PLANE With Docker

6PLANE's /80-per-host format is not an accident. It was designed specifically to plug right into Docker. Just follow the [Docker IPv6 instructions](https://docs.docker.com/engine/userguide/networking/default_network/ipv6/) and hand over that /80 and even more magic will happen and all will be right with the universe.

Using our example `fcf9:b03a:12::/40` network we would configure Docker on host `89e92ceee5` like this:

```sh
dockerd --ipv6 --fixed-cidr-v6="fcf9:b03a:1289:e92c:eee5::/80"
```

Now every container on this host will get an IPv6 `/128` within its `fcf9:b03a:1289:e92c:eee5::/80` host network that is globally reachable by all other `hosts on fcf9:b03a:12::/40`.

### Instant IPv6 Docker Backplane

Create a network at [my.zerotier.com](https://my.zerotier.com/) (or on your own controller). Enable IPv6 and 6PLANE addressing.

On each Docker host run `curl -s https://install.zerotier.com/ | bash`. This runs a script that adds our ZeroTier APT or YUM repository to your Linux system and then installs the zerotier-one package and starts the service. Our [ZeroTier One download page](https://www.zerotier.com/download.shtml) contains a two-line GPG-verified alternative if you want something a bit more secure than just curl|bash with https validation.

Now join each host to your 6PLANE network with `sudo zerotier-cli join ################` where the `#`'s are your network's 16-digit ID. Don't forget to authorize them on your controller so they can get certificates and actually communicate.

Finally, configure Docker on each host to assign container IPv6 addresses from that host's `/80`. You can generate your host's `/80` from your network's `/40` with a chunk of bash script like:

```sh
fc##:####:##`cut -c 1-2 /var/lib/zerotier-one/identity.public`:`cut -c 3-6 /var/lib/zerotier-one/identity.public`:`cut -c 7-10 /var/lib/zerotier-one/identity.public`::/80
```

Replace `##:####:##` with the appropriate digits from your 6PLANE network's `/40` prefix.

Since most distributions' Docker configuration files are actually bash scripts that are included or source'd you might be able to just drop that chunk of script into a file like `/etc/sysconfig/docker` (CentOS/Fedora) to make every host auto-configure itself.

Now you have a global zero-configuration private peer-to-peer Docker backplane network that connects every container and can scale forever with no address conflicts or topology hassles. Since ZeroTier abstracts away the underlying physical network and erases the LAN/WAN distinction your backplane will work across locations, data centers, and cloud providers with no additional setup. Adding more Docker hosts is just a matter of bringing them up and authorizing them on the controller.

Plugging this into things like Kubernetes, Terraform, Puppet, Chef, etc. is left as an exercise to the reader but should not be difficult.
Other Uses of 6PLANE

6PLANE plays nice with Docker but there's nothing Docker-specific about it. It can just as easily be used with full-blown VMs, LXC containers, LXD, and so forth. There's nothing Linux-specific about it either. It would work fine with BSD jails, Vagrant boxes on a Mac, Hyper-V hosts on Windows, etc. as long as the host can be configured to route its `/80` through to its containers or VMs.

You could also create a global IPv6 private address backplane for an organization by installing ZeroTier on a Linux router box or VM at each physical site and then configuring that site's IPv6 router or DHCPv6 server to assign each host an IPv6 address from the site's `/80` and a route to the network's `/40` via the router host running ZeroTier. This provides a more scalable alternative to Ethernet bridging as a way to create a completely transparent multi-site LAN.

### ZeroTier and Docker

With 6PLANE we are probably done with Docker, or at least with Docker integration in a host-based network backplane model. (Network Containers, which is about to become our SDK, addresses the self-contained in-container model.) For a while we've considered creating a Docker libnetwork integration, but we're optimistic at this point that it will not be necessary. The 6PLANE model is so simple and its integration with Docker so automatic and trouble-free that no Docker-specific integration is likely to be necessary.

What is worth exploring is integration of this scheme with provisioning and orchestration tools like Kubernetes, etc. An architecture may be possible that allows for instant automated zero-configuration deployment of container hosts anywhere (any cloud, any device, on or off premise). That's likely what we'll explore next in the Docker space.
