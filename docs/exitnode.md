---
title: Exit Node
toc_footers:
  - <a href='https://www.zerotier.com'>ZeroTier Homepage</a>
  - <a href='#'>Sign Up for Central API Key</a>
  - <a href='https://github.com/zerotier/zerotierone'>GitHub</a>
includes:
  - errors
search: true
code_clipboard: true
---

Normally ZeroTier virtual networks run alongside your normal Internet connection and other networks. If you want to route all your Internet traffic through ZeroTier you need to configure it for default route override a.k.a. "full tunnel" mode and set up a router/gateway on your virtual network.
Step 1: Put an Edge Router on your Imaginary Lan

ZeroTier creates imaginary LANs. Default route override means that computers on your imaginary LAN will be routing Internet traffic through it. Just like a real LAN, your imaginary LAN is going to now need a gateway. Setup here is almost identical to what you'd do to configure a NAT gateway for a conventional wired LAN.

A simple cloud VPS from Digital Ocean or Vultr.com or similar makes a great low-cost gateway. For most applications their $5/month option is more than adequate since your gateway is not going to need very much RAM, disk, or CPU. Alternately you could use a VM or physical box at your own location or anything else that can run ZeroTier and be configured to route IP packets. (Replace your VPN appliance with a $35 Raspberry Pi?)

Install ZeroTier on your gateway, join your network and authorize it, and then configure it as a basic IPv4 NAT router. (As we mentioned above IPv6 hasn't been tested yet but we'll update this once we do that.) Here's an example config from a CentOS/Linux gateway that we created for our own ZeroTier company intranet on Digital Ocean:


net.ipv4.ip_forward = 1

```
*nat
:PREROUTING ACCEPT [0:0]
:INPUT ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
:POSTROUTING ACCEPT [0:0]
-A POSTROUTING -o eth0 -s 10.6.4.0/22 -j SNAT --to-source 45.32.69.220
COMMIT
*filter
:INPUT ACCEPT [0:0]
:FORWARD DROP [0:0]
-A FORWARD -i zt+ -s 10.6.4.0/22 -d 0.0.0.0/0 -j ACCEPT
-A FORWARD -i eth0 -s 0.0.0.0/0 -d 10.6.4.0/0 -j ACCEPT
:OUTPUT ACCEPT [0:0]
COMMIT
```

Our net is `10.6.4.0/22`. You will want to change this to whatever IPv4 scheme you use. Also change `45.32.69.220` in the SNAT line to the public IP of the gateway.

If your "router" doesn't not have a public IP address, you may use masquerade instead of SNAT. See the end of the article.

The `/etc/sysconfig/iptables` file depends on the `iptables-services` package on CentOS/Fedora:

```
yum install -y iptables-services
systemctl enable iptables
systemctl start iptables
```

Debian and other distributions have their own ways so you'll have to figure that out.

Step 2:  Add a Default Route

Log into ZeroTier Central and add a route to 0.0.0.0/0 via the IP address of your new virtual edge router.

Here is what ours looks like:

[ZeroTier Knowledge Base > Overriding Default Route / Full Tunnel Mode > zt-v4-default-route-config.png]

On our net 10.6.4.0/22 is our network and 10.6.6.2 is our virtual edge router's internal IP address (internal to the ZeroTier network). Obviously you'll want to use your own network's IPs instead of ours.

If you're running your own controller you'll have to do the same via its local JSON API.
Step 3: Allow Default Route Override on Member Devices

ZeroTier makes joining virtual networks as easy as joining a chat room. As a result, many of our users really do use it this way. "Hey, join network ### and check out my new site design..." It's like actual social networking! (Or social actual networking?)

Joining a network always exposes you to a certain amount of security risk. You shouldn't join networks run by people you don't trust. But since people do use ZeroTier casually, we wanted to mitigate this risk at least a little bit by requiring user approval for networks to do really invasive things... like take over your Internet connection and route all your traffic through them.

To limit such dangerous network settings we've introduce local network permissions. To use default route override you'll have to set allowDefault to true on the network in question. The Mac and Windows clients have UI to do this. Here is how to do it via command line:

```
sudo zerotier-cli set <networkId> allowDefault=1
```

Once you've set these options, try hitting http://ifconfig.io/ and checking your external IP. On some OSes you may have to restart your web browser and other apps, since OSes differ in terms of whether they apply routing changes to existing sockets and connections or only new ones. (This is an OS-level behavior we can't change.)

If it doesn't work, debug as you normally would with traceroute on your hosts and tcpdump on the gateway.

Avoid enabling allowDefault on more than one network at once. The result of this will depend on your OS but is also not likely to be what you want. (In the GUI we'll probably prohibit this.)
Step 3a: A Linux Gotcha: rp_filter

Linux's networking stack is complex and almost absurdly feature-rich. This is a good thing and a bad thing. You can do almost anything with it, probably including but not limited to IP over avian carrier. But it also has a lot of weird little edge cases that can bite.

For a Linux host to route via a ZeroTier network, you may (depending on distribution) need to change a setting called rp_filter:

sudo sysctl -w net.ipv4.conf.all.rp_filter=2

RedHat has an article explaining the details of this. Put it in /etc/sysctl.conf to make it permanent.

Oddly enough this is not required on the gateway/router, only participating members running Linux that want to enable allowDefault.
Step 4: Now for IPv6 (optional)

With IPv6 you don't need NAT, which makes setup at this step a lot simpler! Our /etc/sysconfig/ip6tables looks like:

```
*filter
:INPUT ACCEPT [0:0]
:FORWARD DROP [0:0]
-A FORWARD -i zt+ -s 2001:19f0:6001:01a6::/64 -j ACCEPT
-A FORWARD -i eth0 -d 2001:19f0:6001:01a6::/64 -j ACCEPT
:OUTPUT ACCEPT [0:0]
COMMIT
```

You will want to change 2001:19f0:6001:01a6::/64 to the IPv6 /64 address prefix of your gateway. Then you'll want to do sudo systemctl enable ip6tables ; sudo systemctl restart ip6tables or whatever the equivalent is on your distribution to apply these rules.

How to configure ip6tables varies by distribution. Our guide assumes CentOS/Fedora but others may put it somewhere other than /etc/sysconfig/ip6tables. Refer to your own distribution's documentation.
Step 4c: Configure IPv6 Addressing on Your Virtual Network

For our configuration we enabled both IPv6 auto-assign from range and IPv6 auto-assign based on ZeroTier's RFC4193 IPv6 addressing scheme. It should also work to assign the gateway an IPv6 address from the same global prefix as everyone else and then use that for your default route, but we like the use of an NDP-emulated RFC4193 address since it makes initially reaching the gateway faster.

Our example gateway has the internal RFC4193 IPv6 address fd80:56c2:e21c:2467:3d99:9322:c55a:1da6, so we set that as our IPv6 default route (the IPv6 equivalent of 0.0.0.0 is ::0/0). We also added a /80 route to the subset of our gateway's global IPv6 /64 from which we are going to assign addresses to our member devices. As with IPv4, ZeroTier will not push managed IP addresses that do not fall within an assigned local LAN route.

Our network's IPv6 routing config looks like this:

[ZeroTier Knowledge Base > Overriding Default Route / Full Tunnel Mode > zt-ipv6-routes.png]

Then we will want to configure ZeroTier Central's controller to automatically assign public IPv6 addresses to our devices by defining an IPv6 auto-assign range. You can do the same via the JSON API if you are running your own controller.

Ours looks like:

[ZeroTier Knowledge Base > Overriding Default Route / Full Tunnel Mode > zt-ipv6-range.png]

This will assign every device an IPv6 address in 2001:19f0:6001:01a6:00ff::/80, which since it's within our gateway's /64 of 2001:19f0:6001:01a6::/64 will be globally routable!
Step 4d: allowGlobal and allowDefault

For IPv6 you must enable both allowGlobal and allowDefault on your member devices, or at least on those that you want to participate. Allowing default route override is required to allow the override of ::0/0, while allowGlobal is required to allow your network's controller to assign global IPv6 addresses. Without allowGlobal ZeroTier networks are only allowed to assign addresses and routes within private IP space.
Step 4e: Set Up Gateway NDP Proxying (not always needed)

At this point you should stop and make sure that (1) your devices are getting assigned IPv6 addresses, (2) your member device(s) can ping your gateway's private RFC4193 IPv6 address, and (3) member devices can also ping your gateway's global external IPv6 address. The latter verifies that the gateway is in fact forwarding IPv6 traffic.

If the above tests work, try pinging a global IPv6 address like ping6 ipv6.google.com. If that doesn't work you probably need to proxy NDP requests for the hosts behind your gateway.

While providers like Digital Ocean and Vultr.com will happily hand you a wildcard /64, they do not necessarily set a route to your entire IPv6 /64 in their own routers. They probably do this to prevent routing table bloat on their side. Instead they rely upon IPv6 neighbor lookup (NDP) to find out what IP address(es) your VM has assigned to itself.

The problem is that now your VM is a router and wants to get traffic for a whole bunch of IPs in its /64, not just the one it's got assigned to its primary network interface. To do this, it's going to have to answer IPv6 NDP queries for those IPs.

The Linux kernel can't do this, or at least can't for every IP in your /64 without manually specifying each. Luckily there is a nice little project on GitHub called ndppd that can do this for you.

Your distribution may have a package.

```
apt install ndppd
```

If your distro doesn't have the package: Install gcc, g++, and make on your gateway and then:

```
git clone https://github.com/DanielAdolfsson/ndppd
cd ndppd
make
sudo make install
```

Now you'll want to copy ndpd.conf-dist from the ndppd source tree to /etc/ndppd.conf and edit it. We just had to edit the prefix under their example rule entry:

rule 2001:19f0:6001:01a6:00ff:0000:0000:0000/80 {

That tells nndpd to answer NDP requests for the entire /80 from which we'll be assigning IPv6 addresses to our devices. Obviously you will need to change that IP prefix to your own.

There is a handy program to help you with ip subnetting: apt install ipcalc


The rule should use the  static or iface option. We saw some flakiness with auto.


Then you'll want to start nndpd and tell it to start on boot.

```
systemctl start ndppd
systemctl enable ndppd
```

Once nndpd is running try ping6 ipv6.google.com again from one of your devices. For us it worked right away!

Congratulations! You now have a global IPv6 address for every device on your virtual network.

```
curl -4 ifconfig.co
curl -6 ifconfig.co
```

Should return your ZeroTier gateway addresses.
Step 4f: IPv6 Security (optional)

This configuration gives every device on your ZeroTier network a real globally reachable IPv6 address. This is wonderful but also possibly a little bit dangerous.

If you don't want everything to be wide open like that you can use ip6tables rules to implement a stateful firewall that allows all outbound IPv6 traffic but limits inbound traffic to packets that are replies to outbound ones.

This can be done by using an alternative configuration like:

```
*filter
:INPUT DROP [0:0]
:FORWARD DROP [0:0]
-A FORWARD -i zt+ -s 2001:19f0:6001:01a6::/64 -j ACCEPT
-A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT
:OUTPUT ACCEPT [0:0]
COMMIT
```

This allows outgoing IPv6 from the ZeroTier side but only allows incoming IPv6 if it's related to an existing connection or association.

Much more sophisticated configurations are possible. For example you could insert specific rules allowing specific kinds of inbound traffic like ssh (22), http (80), or https (443) by adding these rules ahead of the stateful one. Unfortunately documentation on the Internet on ip6tables is significantly more sparse than for IPv4 iptables.


Appendix


MASQUERADE

Masquerade let's you specify an interface instead of an address. From the MAN page:

    This target is only valid in the nat table, in the POSTROUTING chain. It should only be used with dynamically assigned IP (dialup) connections: if you have a static IP address, you should use the SNAT target. Masquerading is equivalent to specifying a mapping to the IP address of the interface the packet is going out, but also has the effect that connections are forgotten when the interface goes down. This is the correct behavior when the next dialup is unlikely to have the same interface address (and hence any established connections are lost anyway).

```
*nat
:PREROUTING ACCEPT [0:0]
:INPUT ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
:POSTROUTING ACCEPT [0:0]
-A POSTROUTING -o eth0 -j MASQUERADE
COMMIT
*filter
:INPUT ACCEPT [0:0]
:FORWARD DROP [0:0]
-A FORWARD -i $ZT_IFACE -o $WAN_IFACE -j ACCEPT
-A FORWARD -i $WAN_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
:OUTPUT ACCEPT [0:0]
COMMIT
```

FreeBSD

The allowDefault=1 setting on FreeBSD clients can't work. See this github issue for a work-around https://github.com/zerotier/ZeroTierOne/issues/580.

We've disable the Allow Default setting on FreeBSD starting on versions newer than 1.10.6 until we can find a solution.