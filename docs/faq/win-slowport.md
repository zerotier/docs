---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

### Why is the ZeroTier Virtual Network Port Running at 100Mbps? {#slowport}

Windows may show the ZeroTier virtual network port as a 100Mbps or 10Mbps port. This is incorrect. It's a software defined port with no intrinsic speed limit. Windows doesn't show accurate numbers for non-physical ports that have no actual interface device.
