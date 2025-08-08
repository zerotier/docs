---
title: Windows Remote Desktop Disconnects
description: How to fix Remote Desktop disconnection issues over ZeroTier networks
tags: [troubleshooting, windows, how-to]
displayed_sidebar: docsSidebar
---

### Windows Remote Desktop Disconnects

Here are some possible mitigations.

First, make sure your ZeroTier connections are optimal: [Router Config Tips](/routertips)

#### Disable UDP

- Run `gpedit.msc`. (type `edit group policy` into the Start Menu)
- Navigate to `Computer Configuration` > `Administration Templates` > `Windows Components` > `Remote Desktop Services` > `Remote Desktop Connection Client`.
- Set the `Turn Off UDP On Client` setting to Enabled.

See this superuser post for more options and info

#### Lower RDP Experience Settings

If the purpose of your ZeroTier network is solely remoting into office workstations, don't miss our example rule sets

:::tip See Also
[Client Isolation Rules](/faq/rulesnodeisolation) and [RDP Only Rules](/faq/rulesrdponly)
:::
