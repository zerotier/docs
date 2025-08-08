---
title: Install ZeroTier over Windows Remote Desktop
description: How to install ZeroTier on Windows when using Remote Desktop Protocol
tags: [faq, windows, installation, how-to]
displayed_sidebar: docsSidebar
---

### Installing ZeroTier over Windows Remote Desktop

Using the graphical ZeroTier installer won't work in an RDP session.

There is a command-line workaround, open a PowerShell with Administrative Privileges and paste:

```sh
msiexec /i "C:\Path\To\ZeroTier One.msi"
```

Try the `msiexec` silent install options too.
