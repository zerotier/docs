---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---


### Block all traffic on ZeroTier network

Add the following to the beginning of your rules code:

```sh
drop;
```

This will only block traffic on the ZeroTier overlay network, not your physical network.
