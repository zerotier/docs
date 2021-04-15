---
title: ZeroTier SDK

language_tabs: # must be one of https://git.io/vQNgJ
  - c
  - rust
  - python
  - csharp
  - java

toc_footers:
  - <a href='https://www.zerotier.com'>ZeroTier Homepage</a>
  - <a href='#'>Sign Up for Central API Key</a>
  - <a href='https://github.com/zerotier/libzt'>GitHub</a>

includes:
  - errors

search: true

code_clipboard: true
---

ZeroTier Manual
======

## Introduction

ZeroTier is a smart Ethernet switch for planet Earth.

It's a distributed network hypervisor built atop a cryptographically secure global peer to peer network. It provides advanced network virtualization and management capabilities on par with an enterprise SDN switch, but across both local and wide area networks and connecting almost any kind of app or device.

This manual describes the design and operation of ZeroTier and its associated services, apps, and libraries. Its intended audience includes IT professionals, network administrators, information security experts, and developers.

The first section (2) of this guide explains ZeroTier's design and operation at a high level and is written for those with at least an intermediate knowledge of topics like TCP/IP and Ethernet networking. It's not required reading for most users, but understanding how things work in detail helps clarify everything else and helps tremendously with troubleshooting should anything go wrong.

The remaining sections deal more concretely with deployment and administration.

------

## Network Hypervisor Overview

The ZeroTier network hypervisor (currently found in the [node/](https://github.com/zerotier/ZeroTierOne/tree/master/node) subfolder of the ZeroTierOne git repository) is a self-contained network virtualization engine that implements an Ethernet virtualization layer similar to [VXLAN](https://en.wikipedia.org/wiki/Virtual_Extensible_LAN) on top of a global encrypted peer to peer network.

The ZeroTier protocol is original, though aspects of it are similar to VXLAN and IPSec. It has two conceptually separate but closely coupled layers [in the OSI model](https://en.wikipedia.org/wiki/OSI_model) sense: **VL1** and **VL2**. VL1 is the underlying peer to peer transport layer, the "virtual wire," while VL2 is an emulated Ethernet layer that provides operating systems and apps with a familiar communication medium.

### VL1: The ZeroTier Peer to Peer Network

A global data center requires a global wire closet.

In conventional networks L1 (OSI layer 1) refers to the actual CAT5/CAT6 cables or wireless radio channels over which data is carried and the physical transceiver chips that modulate and demodulate it. VL1 is a peer to peer network that does the same thing by using encryption, authentication, and a lot of networking tricks to create virtual wires on a dynamic as-needed basis.

### Network Topology and Peer Discovery

VL1 is designed to be zero-configuration. A user can start a new ZeroTier node without having to write configuration files or provide the IP addresses of other nodes. It's also designed to be fast. Any two devices in the world should be able to locate each other and communicate almost instantly.

To achieve this VL1 is organized like DNS. At the base of the network is a collection of always-present **root servers** whose role is similar to that of [DNS root name servers](https://en.wikipedia.org/wiki/Root_name_server). Roots run the same software as regular endpoints but reside at fast stable locations on the network and are designated as such by a **world definition**. World definitions come in two forms: the **planet** and one or more **moons**. The protocol includes a secure mechanism allowing world definitions to be updated in-band if root servers' IP addresses or ZeroTier addresses change.

There is only one planet. Earth's root servers are operated by ZeroTier, Inc. as a free service. There are currently twelve root servers organized into two six-member clusters distributed across every major continent and multiple network providers. Almost everyone in the world has one within less than 100ms network latency from their location.

A node can "orbit" any number of moons. A moon is just a convenient way to add user-defined root servers to the pool. Users can create moons to reduce dependency on ZeroTier, Inc. infrastructure or to locate root servers closer for better performance. For on-premise SDN use a cluster of root servers can be located inside a building or data center so that ZeroTier can continue to operate normally if Internet connectivity is lost.

Nodes start with no direct links to one another, only upstream to roots (planet and moons). Every peer on VL1 possesses a globally unique 40-bit (10 hex digit) **ZeroTier address**, but unlike IP addresses these are opaque cryptographic identifiers that encode no routing information. To communicate peers first send packets "up" the tree, and as these packets traverse the network they trigger the opportunistic creation of direct links along the way. The tree is constantly trying to "collapse itself" to optimize itself to the pattern of traffic it is carrying.

Peer to peer connection setup goes like this:

1. A wants to send a packet to B, but since it has no direct path it sends it upstream to R (a root).
2. If R has a direct link to B, it forwards the packet there. Otherwise it sends the packet upstream until planetary roots are reached. Planetary roots know about all nodes, so eventually the packet will reach B if B is online.
3. R also sends a message called *rendezvous* to A containing hints about how it might reach B. Meanwhile the root that forwards the packet to B sends *rendezvous* informing B how it might reach A.
4. A and B get their *rendezvous* messages and attempt to send test messages to each other, possibly accomplishing [hole punching](https://en.wikipedia.org/wiki/UDP_hole_punching) of any NATs or stateful firewalls that happen to be in the way. If this works a direct link is established and packets no longer need to take the scenic route.

Since roots forward packets, A and B can reach each other instantly. A and B then begin attempting to make a direct peer to peer connection. If this succeeds it results in a faster lower latency link. We call this *transport triggered link provisioning* since it's the forwarding of the packet itself that triggers the peer to peer network to attempt direct connection.

VL1 never gives up. If a direct path can't be established, communication can continue through (slower) relaying. Direct connection attempts continue forever on a periodic basis. VL1 also has other features for establishing direct connectivity including LAN peer discovery, port prediction for traversal of symmetric IPv4 NATs, and explicit port mapping using uPnP and/or NAT-PMP if these are available on the local physical LAN.

*[A blog post from 2014 by ZeroTier's original author explains some of the reasoning behind VL1's design.](http://adamierymenko.com/decentralization-i-want-to-believe/)*

### Addressing
