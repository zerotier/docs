---
title: Troubleshooting
description: Troubleshooting common issues
tags: [faq, troubleshooting, hub]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Ping is not working {#ping}

First, make sure your device is authorized on the network and you're using the ZeroTier assigned Managed IP address. Aside from that, some OSes block pings in their local firewall by default.

### Windows Firewall

ZeroTier versions 1.10.3 and greater automatically enable ping on ZeroTier adapters.

### macOS Firewall

The firewall is not enabled by default on macOS, and thus pings will not be blocked by default. If your firewall is enabled on macOS, go into System Preferences -> Security & Privacy. Under Firewall Options, ensure "Enable stealth mode" is disabled. Stealth mode blocks pings.

### Linux Firewalls

There are far too many Linux distributions out there to list instructions for all of them here. Please refer to your distribution's documentation for how to unblock ICMP packets.
