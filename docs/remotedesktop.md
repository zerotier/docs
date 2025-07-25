---
title: Remote Desktop with ZeroTier
description: Access a network-attached device remotely through SSH or Remote Desktop software.
tags: [beginner, tutorial]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ZeroTier doesn't care whether your connected device is next to you or away at the office - a remote desktop connection has never been easier. Let's get started.

## Establish a ZeroTier Network

If you don't already have a network, follow the [Quickstart Guide](/quickstart) to create an establish a ZeroTier network. Ensure your devices can connect to each other by testing via `ping`.

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

Follow the [recommended instructions from Microsoft](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/remote-desktop-allow-access) to enable remote desktop access on connected networks. Don't worry about port forwarding or setting up a VPN - ZeroTier will handle that for you.

Make sure to mark down your account credentials (username/password), or add an additional user as detailed. If you are logged in with your Microsoft account, the credentials for remote access will be identical to your account. Otherwise, it will be identical to your local user account in Windows.

Connect using the Managed IP address of your peers, which can be found via Central or in Administrator Powershell/CLI:

```bash
zerotier-cli peers
```

And enter credentials when prompted.

</TabItem>

<TabItem value="linux">

There are several options for remote access on Linux, depending on whether you need a terminal or a GUI.

### Option 1: SSH (Terminal/CLI Access)

1. **Install SSH** (if not already installed):

```bash
sudo apt install openssh-server
```

2. Start and enable the SSH service - this is on the device that will be connected to, called the "server".

```bash
sudo systemctl enable --now ssh
```

3. Note down your server's credentials (user name/password)
4. Connect from either Windows Powershell or MacOS Terminal (SSH installed by default) or another Linux machine with SSH

```bash
ssh <username>@<ZeroTier-IP>
```

5. Enter password when prompted. Leave blank if no password.
6. You should now be securely connected via SSH!

</TabItem>

<TabItem value="mac">

### Option 1: SSH (Terminal/CLI Access)

1. Go to **System Settings -> General -> Sharing** and enable the **Remote Login** setting to start SSH.

:::note
While MacOS supports *connecting* to SSH servers as a client out of the box, it requires the above changes to allow it to act as a server itself.
:::

2. Note down your server's credentials (user name/password) as well as their ZeroTier address

3. Connect from either Windows Powershell or MacOS Terminal (SSH installed by default) or another Linux machine with SSH
```bash
ssh <username>@<ZeroTier-IP>
```

4. Enter password when prompted. Leave blank if no password.

5. You should now be securely connected via SSH!

### Option 2: VNC Remote Desktop

MacOS also has native support for (VNC (Virtual Network Computing))[https://support.apple.com/guide/remote-desktop/set-up-a-computer-running-vnc-software-apdbed09830/mac].


</TabItem>
</Tabs>