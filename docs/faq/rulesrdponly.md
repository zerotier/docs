---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

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