---
title: Block All Traffic Rules
description: How to block all network traffic on a ZeroTier network using rules
tags: [faq, rules, examples]
displayed_sidebar: docsSidebar
---


### Block all traffic on ZeroTier network

Add the following to the beginning of your rules code:

```sh
drop;
```

This will only block traffic on the ZeroTier overlay network, not your physical network.
