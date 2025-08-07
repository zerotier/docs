---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---

### Installing ZeroTier over Windows Remote Desktop

Using the graphical ZeroTier installer won't work in an RDP session.

There is a command-line workaround, open a PowerShell with Administrative Privileges and paste:

```sh
msiexec /i "C:\Path\To\ZeroTier One.msi"
```

Try the `msiexec` silent install options too.