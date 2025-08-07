---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
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
[Client Isolation Rules](/faq-rules.md#client-isolation) and [RDP Only Rules](/faq-rules#rdp-only)
:::