---
title: Glossary
description: Common terms and concepts
tags: [meta, examples, hub, faq]
---

## ZeroTier

ZeroTier is a software application and service that allows you to create and manage virtual software-defined networks. It is a client application that enables devices such as PCs, phones, servers and embedded devices to securely connect to peer-to-peer virtual networks. You can download it [here](https://www.zerotier.com/download/). *ZeroTier One* refers to the client application that you install on your computer.

## Node

A physical device or virtual machine instance running ZeroTier (For instance, a laptop, a raspberry pi, or a database server in the cloud). Nodes can also be *applications* if you [link ZeroTier into your code](/sockets.md) using the Socket API. Depending on the context a node can sometimes be referred to as a [device](#device) or a [peer](#peer).

## Network

Usually this is refers to a *ZeroTier Virtual Network*. It is what your [nodes](#node) join. In order for two nodes to talk they need to join the same network. See the [Getting Started](/start/) for more info on how to set up your first network.

## Peer

A remote ZeroTier [node](#node) that your local node is communicating with. Either as a `LEAF` role (laptop, server, vm, etc) or a `PLANET` role ([root server](#root-server)). To see your peers, use the [client CLI](/cli.md).

## Node ID

Also known as *Node Address* or *Device ID* depending on the context. It is a unique 40-bit hexadecimal identifier assigned to each ZeroTier [node](#node).

## Root Server

A part of ZeroTier infrastructure. A root server (sometimes just called a root) orchestrates the direct connection between two devices and will sometimes relay traffic if a direct connection cannot be established. Typically hosted and configured by ZeroTier, Inc., but can be self-hosted. See [self-hosting](/selfhosting.md) for more info.

## Planet file

A signed configuration file that ZeroTier uses to know which [root servers](#root-server) to use. By default ZeroTier uses our root servers and gets a copy of the most current planet file automatically. Sometimes this may be referred to as a world file.

## Network Controller

A part of ZeroTier infrastructure. Typically hosted and configured by ZeroTier, Inc. it is an instance of ZeroTier that manages [network memberships](#network-membership), [rules](#rules-engine), and configurations for a ZeroTier [network](#network). When you join a ZeroTier network your [node](#node) will request membership from a specific controller. See [controller](/controller.md) for more info.

## Moon

Since the data center we inhabit is the planet, a user-defined set of roots is called a moon. When a node "orbits" a moon, it adds the moon's roots to its root server set. Nodes orbiting moons will still use planetary roots, but they'll use the moon's roots if they look faster or if nothing else is available. Moons are deprecated but you can learn more about them [here](/roots.md).

## Planet

A set of [root servers](#root-server) that form ZeroTier's connection backplane. ZeroTier, Inc. runs a gobally-distributed set of root servers that your [nodes](#node) will use by default.

## 6PLANE

A ZeroTier IPv6 addressing scheme that you can apply to your [virtual network](#network). Read more [here](/docker-6plane.md#the-6plane-addressing-scheme)

## RFC4193

A standard defining IPv6 address allocation for private networks, this can be used on your ZeroTier [virtual network](#network). Read more [here](https://datatracker.ietf.org/doc/html/rfc4193)

RFC4193 addresses are not globally routable. They fall within an address range known as Unique Local Addresses (ULA). This is similar to the private IPV4 address ranges like 10.0.0.0/8 and 192.168.0.0/16

## Earth

`Earth` or `8056c2e21c000001` was a test network operated by ZeroTier, Inc., it was decommissioned in 2023 and is no longer joinable.

## Virtual Network Port

Analogous to a *physical network port* where you'd plug in an Ethernet cable. A virtual network port is what ZeroTier creates on your computer so that applications can send and receive traffic on a ZeroTier virtual network. This is different than a *port number*.

## Virtual Backplane

A software-defined network layer that connects [nodes](#node) as if they were on the same physical switch. Think of it as if everything was on the same Local Area Network (LAN) no matter where it was located in the world.

## Network ID

A unique 16-digit hexadecimal identifier for a ZeroTier [virtual network](#network). See how to use it to join a [node](#node) to a network [here](/start/).

## Device

A physical or virtual machine running ZeroTier. Depending on the context a device can sometimes be referred to as a [node](#node) or a [peer](#peer).

## Network Membership

The relationship between a [node](#node) and a ZeroTier [network](#network), including permissions and configurations. A network membership certificate is automatically generated and sent to a node when it is authorized onto a ZeroTier virtual network.

## User

An individual who manages or interacts with ZeroTier [networks](#network).

## Admin

A [user](#user) with elevated permissions to configure and manage ZeroTier networks.

## Rules Engine

Traffic on ZeroTier networks can be observed and controlled with a system of globally applied network rules (similar to ACLs). These are enforced in a distributed fashion by both the senders and the receivers of packets. Read more about them [here](/rules.md).
