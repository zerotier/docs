---
title: Unknown Peers
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

### Why does my peers list have nodes I don't recognize? {#unknown-peers}

The nodes are usually our infrastructure that your node needs to talk to in order to function. This includes things like: [Root servers](/glossary.md#root-server) and [Controllers](/what-is-a-controller.md). Or possibly nodes from a previously joined network. The command `zerotier-cli peers` shows a list of nodes that your node knows about. Nodes can not talk to each other unless they are joined and authorized on the same network. Our root servers and controllers do not have access to you nodes' encryption keys and thus cannot decrypt your traffic.

:::info How to identify a controller
A controller is a ZeroTier node. The first 10 digits of a Network ID is the controller's address.
:::