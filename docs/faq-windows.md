---
title: Windows FAQ
description: Guidance for running ZeroTier on Windows
tags: [windows, faq, troubleshooting, platform-specific]
---

### Installing ZeroTier over Windows Remote Desktop

Using the graphical ZeroTier installer won't work in an RDP session.

There is a command-line workaround, open a PowerShell with Administrative Privileges and paste:

```sh
msiexec /i "C:\Path\To\ZeroTier One.msi"
```

Try the `msiexec` silent install options too.

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

### System Service Not Reachable by UI

[System Service Not Reachable by UI](/windows-service-unreachable)

### Resolving `Port Error` {#port-error}

If you're seeing `PORT ERROR` on Windows, it's likely that the driver did not get installed correctly for some reason.  To fix this, navigate to

`C:\ProgramData\ZeroTier\One\tap-windows\x64`

then right click on the file `zttap300.inf` and select `Install` from the menu.

Note: The folder `C:\ProgramData` is hidden by default and requires Administrator privileges to access.

If you have other VPN or similar apps that require network drivers, you may want to try uninstalling them, probably rebooting, and reinstalling ZeroTier.

### Why is the ZeroTier Virtual Network Port Running at 100Mbps? {#slowport}

Windows may show the ZeroTier virtual network port as a 100Mbps or 10Mbps port. This is incorrect. It's a software defined port with no intrinsic speed limit. Windows doesn't show accurate numbers for non-physical ports that have no actual interface device.

### General Troubleshooting

If you're having trouble using ZeroTier on Windows, the following steps may be of assistance.

#### Instructions

- Make sure you have Administrative Rights on your user.
- Uninstall any other VPN software that could be conflicting with the ZeroTier setup.
- Check for any antivirus software that has additional "Internet Security" features, that could be blocking installation and trying to assume Windows Firewall functionality.
- Try different combinations of rebooting and reinstalling ZeroTier.

Side note: there were reported VPN issues in certain versions of Windows 10; those have their own fix via Microsoft.

:::info
If you continue to have issues, please check [github](https://github.com/zerotier/ZeroTierOne/issues) for any existing issues, or report a new one. Thanks!
:::

:::tip
[See community threads about ZeroTier on Windows](https://discuss.zerotier.com/search?q=windows)
:::
