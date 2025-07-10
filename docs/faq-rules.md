---
title: Rules FAQ
description: Rules for common use cases
tags: [rules, faq, examples, platform-specific]
---

:::info
Check [the manual](./rules.md) for theory about how rules work.
:::

### Setting tags and capabilities on network members

Once you have saved a rule set that includes capabilities or tags, the capabilities or tags matrix will appear at the bottom of the Flow Rules section.

### Client Isolation

Do you have a couple server or admin nodes, but you don't want members to be able to talk to each other?

```sh
accept ethertype arp;

tag server
  id 2
  enum 0 No
  enum 1 Yes
  default No;

# if neither member is a "server", break
break not tor server 1;

# This is required because the default action is 'drop'.
accept;
See the "Tags Matrix" in the section below after saving the rules. Set your servers to "Yes"
```

### Block all traffic on ZeroTier network

Add the following to the beginning of your rules code:

```sh
drop;
```

This will only block traffic on the ZeroTier overlay network, not your physical network.

### Remote Desktop Only {#rdp-only}

A network that can only be used for remote desktop.

```sh
Check the manual for more information.
accept ethertype arp; # so nodes can find each other
drop not ipprotocol tcp;
accept dport 3389; # Destination is RDP
drop chr tcp_syn and not chr tcp_ack; # No new TCP connections (except RDP)
accept; # Accept what's left, returning RDP traffic
```

This is a common request, but we're not sure this is best pattern for rules. See the manual and the other examples in the wiki.

In particular, this has the disadvantage of blocking RDP's UDP mode.

Locking down UDP

### Gradual Permissions

A network that gives limited access to Authorized members.

More access can be gradually granted with the rules engine.

This could be used on a public or a private network.

```sh
tag admin # employee workstations
  id 1
  flag 0 yes
  default 0
  ;

# authorized members can't do anything but be ssh'd into
# use ssh to login to member device, get it's serial number, name, etc to find out what kind of access it should have

# arp and ping only work if at least one node is "admin"
accept ethertype arp and tor admin 1; 
accept ipprotocol icmp4 and tor admin 1; 

# allow return traffic for established tcp connections
accept chr tcp_ack;

# ssh initiated from admins is allowed
accept dport 22 and ipprotocol tcp and tseq admin 1; 

# once approved, member is allowed to participate in network as normal
cap approved
  id 1
  accept;
;

break; 

# N=<network-id>
# M=<node-id>
# TOKEN=<api-token>
# CAP_ID=1
# curl -X POST https://my.zerotier.com/api/network/$N/member/$M --header "Authorization: token $TOKEN"  -d "{\"config\": { \"capabilities\": [$CAP_ID] }}"
```
