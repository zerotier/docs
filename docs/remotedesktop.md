---
title: Remote Desktop with ZeroTier
description: Access a network-attached device remotely through SSH or Remote Desktop software.
tags: [beginner, tutorial]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ZeroTier doesn't care whether your connected device is next to you or away at the office - a remote desktop connection has never been easier. Let's get started.

## Prerequisites

- A working ZeroTier network with 2 or more devices, per the [ZeroTier Quickstart Guide](/quickstart)

## Enable and Connect to Remote Desktop

<Tabs
  defaultValue="win"
  groupId="enableremotedesktop"
  values={[
    { label: "Windows", value: "win" },
    { label: "MacOS", value: "mac" },
    { label: "Linux", value: "linux" }
  ]}>

<TabItem value="win">

### Option 1: RDP

Follow the [recommended instructions from Microsoft](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/remote-desktop-allow-access) to enable remote desktop access on connected networks. Don't worry about port forwarding or setting up a VPN - ZeroTier will handle that for you.

Make sure to mark down your account credentials (username/password), or add an additional user as detailed. If you are logged in with your Microsoft account, the credentials for remote access will be identical to your account. Otherwise, it will be identical to your local user account in Windows.

Connect using the Managed IP address of your peers, which can be found via Central or in Administrator Powershell/CLI:

```bash
zerotier-cli peers
```

And enter credentials when prompted.

### Option 2: SSH

Windows also has [extensive documentation for OpenSSH](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui&pivots=windows-server-2025).

</TabItem>

<TabItem value="linux">

There are several options for remote access on Linux, depending on whether you need a terminal or a GUI.

### SSH (Terminal/CLI Access)

Install SSH (if not already installed):

```bash
sudo apt install openssh-server
```

Next, start start and enable the SSH Service. This is on the device that will be connected to, called the "server".

```bash
sudo systemctl enable --now ssh
```

Note down your server's credentials (user name/password). Then, connect from either Windows Powershell, MacOS Terminal (SSH installed by default), or another Linux machine with SSH:

```bash
ssh <username>@<ZeroTier-IP>
```

Enter password when prompted. Leave blank if no password.

You should now be securely connected via SSH!

</TabItem>

<TabItem value="mac">

### Option 1: SSH (Terminal/CLI Access)

Go to **System Settings -> General -> Sharing** and enable the **Remote Login** setting to start SSH.

:::note
While MacOS supports *connecting* to SSH servers as a client out of the box, it requires the above changes to allow it to act as a server itself.
:::

Note down your server's credentials (user name/password). Then, connect from either Windows Powershell, MacOS Terminal (SSH installed by default), or another Linux machine with SSH:

```bash
ssh <username>@<ZeroTier-IP>
```

Enter password when prompted. Leave blank if no password.

You should now be securely connected via SSH!

### Option 2: VNC Remote Desktop

MacOS also has native support for [VNC (Virtual Network Computing)](https://support.apple.com/guide/remote-desktop/set-up-a-computer-running-vnc-software-apdbed09830/mac), which works flawlessly over a ZeroTier connection.

</TabItem>
</Tabs>
