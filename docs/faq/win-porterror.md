---
title: Resolve PORT_ERROR on Windows
description: How to fix ZeroTier PORT_ERROR issues on Windows by installing drivers
tags: [troubleshooting, windows, installation]
displayed_sidebar: docsSidebar
---

### Resolving `Port Error` {#port-error}

If you're seeing `PORT ERROR` on Windows, it's likely that the driver did not get installed correctly for some reason.  To fix this, navigate to

`C:\ProgramData\ZeroTier\One\tap-windows\x64`

then right click on the file `zttap300.inf` and select `Install` from the menu.

Note: The folder `C:\ProgramData` is hidden by default and requires Administrator privileges to access.

If you have other VPN or similar apps that require network drivers, you may want to try uninstalling them, probably rebooting, and reinstalling ZeroTier.
