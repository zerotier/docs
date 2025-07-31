---
title: Network File Sharing with ZeroTier
description: Share files between any user on your ZeroTier network.
tags: [beginner, tutorial]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ZeroTier creates a secure virtual network between devices, allowing seamless file sharing whether you're on Windows, macOS, or Linux. Here’s how to share files step-by-step.

## Prerequisites

- A working ZeroTier network with 2 or more devices, per the [ZeroTier Quickstart Guide](/quickstart)

## Step 2: Enable File Sharing

Choose your platform and follow the OS-specific file sharing setup instructions:

<Tabs
  defaultValue="win"
  groupId="enableremotedesktop"
  values={[
    { label: "Windows", value: "win" },
    { label: "MacOS", value: "mac" },
    { label: "Linux", value: "linux" }
  ]}>

<TabItem value="win">

### Windows

1. Open `Control Panel > Network and Sharing Center`.
2. Click `Change advanced sharing settings`.
3. Enable: `Network discovery` and `File and printer sharing`
4. Right-click the folder to share -> `Properties` -> `Sharing` tab -> `Share…` or `Advanced Sharing…`.

</TabItem>

<TabItem value="mac">

### macOS

1. Open `System Settings -> General -> Sharing`.
2. Enable **File Sharing**.
3. Add folders and configure user permissions.

Use [Apple’s File Sharing Guide](https://support.apple.com/guide/mac-help/share-files-and-folders-on-mac-mchlp1657/mac) for more information.

</TabItem>

<TabItem value="linux">

### Linux

**Option 1: Samba (SMB)**  
Install and configure Samba:

```bash
sudo apt install samba
sudo nano /etc/samba/smb.conf
```

Add a share:

```ini
[shared]
   path = /home/username/shared
   read only = no
   browsable = yes
```

Set a Samba password:

```bash
sudo smbpasswd -a username
```

Restart Samba:

```bash
sudo systemctl restart smbd
```

</TabItem>
</Tabs>

## Step 3: Transfer Files

Once sharing is enabled:

- **Windows to Mac/Linux:** Open `\\<ZeroTier IP>\SharedFolder` in File Explorer.
- **Mac to Windows/Linux:** Use Finder → `Connect to Server` with `smb://<ZeroTier IP>`.
- **Linux to Others:** Use file browser (as Mac) or CLI with `smbclient`, `scp`, or mount the share.

## Optional: Use SFTP Instead (All Platforms)

If you prefer SSH-based transfer:

1. Install an SSH server on the host device.
2. Connect using an SFTP client like [FileZilla](https://filezilla-project.org/) or `scp`.

**Example:**

```bash
scp file.txt user@192.168.x.x:/path/to/destination
```
