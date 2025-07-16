---
title: Network Microsegmentation
description: Use flow rules to prevent devices on the same network from communicating
tags: [tutorial, example, admin, central]
---

## Create a network for each role

Devices can join multiple networks at once. Networks are free on my.zerotier.com. Each network can have its own [Network Flow Rules](/rules.md). "Network A allows only RDP traffic." for example.

### Pros {#network-pros}

- Easy
- Automatic authorization of nodes with SSO/OIDC

### Cons {#network-cons}

- Multiple sets of subnets, IP addresses, etc… to maintain. Can be [automated with Terraform.](/terraform.md#network-segmentation)
- Mobile devices can connect to only 1 network at a time

### Summary {#network-summary}

- Create a ZeroTier network for each role: _Red, Green, and Blue. Or: Sales, HR, IT. Or: Dev, Prod, Staging_. Or: _Customer A_, _Customer B_
- Join shared resources to multiple networks
- Join users to the networks they need access to

<img src="/img/microsegmentation-network-list.png" alt="drawing" width="420"/>

## ZeroTier Network Flow Rules

Tag network members with roles.

### Pros {#rules-pros}

- Fine grained, low-level access control
- One network config and set of members to maintain

### Cons {#rules-cons}

- Tricky to build rule sets
- Rules not integrated with OIDC yet

### Summary {#rules-summary}

- Create a network
- Use the Flow Rules to segment the network

Here is the simplest possible [ZeroTier Flow Rules](/rules.md) example.
More complex rules can be mixed in with these. See the docs or contact us for help.

Replace the default rules with:

```sh
tag role id 1
    default 0
    flag 0 red
    flag 1 green
    flag 2 blue
;

drop tand role 0;

accept;
```

Devices will be able to talk only if they have at least one overlapping role. The tagging system is based on bitwise math, which we won't try to explain here.
Basically: Rename "red" "green" and "blue" with your real role names. Add more roles by adding flags in increasing order: _flag 3 yellow, flag 4 indigo_

After saving a rule set with tags. A tag interface appears below:

<img src="/img/microsegmentation-tags-matrix.png" alt="drawing" width="200"/>
