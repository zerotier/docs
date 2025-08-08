---
title: Expand or Change Network Subnet
description: How to make your ZeroTier network subnet bigger or change to a different IP range
tags: [faq, central, tutorial]
displayed_sidebar: docsSidebar
---

## Can I make my subnet bigger?

Yes. Your network's existing members will keep their existing IPs.

1. Create a new, larger Managed Route.
2. Delete the old, smaller Managed Route.
3. Change IPv4 Auto-Assign from Easy to Advanced
4. Delete the existing range
5. Add the new, bigger range

For example, if your network was on the Easy Mode `192.168.195.*` (/24)

- Change the managed route to 192.168.194.0/**23**
- Change the auto assign range to:  192.168.194.1 to 192.168.**195**.254

If you change to a completely different, non-overlapping subnet, your network's members will get new IPs in the new range, and keep their old IPs. You will have to delete the old IPs from each member if you don't like to see them in the list.

For example, if you change from `192.168.195.*` to `10.244.*.*`, then the member nodes will have IPs in both ranges, like: 192.16.195.1 and 10.244.1.1

IPs don't actually get applied on the operating system unless the network has a matching managed route.
