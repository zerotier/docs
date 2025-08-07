---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

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
