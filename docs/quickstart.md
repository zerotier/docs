---
title: Quickstart Guide
description: Get connected in 5 minutes
tags: [tutorial, newcomer, installation, client, central, admin]
category: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ZeroTier Quickstart

Let's create, connect to, and test a new ZeroTier network in just a few minutes.  
For a more detailed look at ZeroTier, or if you'd like a boost to functionality like file sharing, SSH, network rules, and more, see our [Advanced Start Guide](/advancedstart).

## 1. Create ZeroTier Account & Network

1. Visit [my.zerotier.com](https://my.zerotier.com/) in your web browser
2. Sign up for a free account (no credit card required)
3. Click the **Create A Network** button
4. **Copy the Network ID** - this is a 16-character code like `d5e04297a16fa690`

## 2. Download ZeroTier

See our [downloads](https://www.zerotier.com/download/) page. Install and make sure the application is running.

## 3. Join Your Network


<Tabs
  defaultValue="mac"
  groupId="client-join"
  values={[
    { label: "macOS", value: "mac", },
    { label: "Windows", value: "windows", },
    { label: "Command Line", value: "linux", },
    { label: "Mobile", value: "mobile", }
  ]}>

<TabItem value="mac">

ZeroTier is in your menubar. Select "join" from the menu.

![image](./images/mac-menubar-01.png)
![image](./images/mac-menubar-02.png)

</TabItem>

<TabItem value="windows">

ZeroTier is in your task tray. Select "join" from the menu.

![image](./images/windows-tray-01.png)
![image](./images/windows-tray-02.png)

</TabItem>
<TabItem value="linux">
On Linux, you need to be root, or use `sudo` in front of the commands.  
On macOS, `sudo` is not required.  
On Windows, you need to use an Admin Prompt. Type "powershell" into the start menu, then right click and "Open as Admin"

```sh
% zerotier-cli info
200 info 8af72edda7 1.10.2 ONLINE

% zerotier-cli join d5e04297a16fa690
200 join OK
```

</TabItem>
<TabItem value="mobile">

![image](./images/ios-01.png)
![image](./images/ios-02.png)

</TabItem>

</Tabs>


## 4. Authorize Your Devices

1. Go back to your browser tab with [my.zerotier.com](https://my.zerotier.com/)
2. Click on your network name
3. Scroll down to the **Members** section
4. You should see your device(s) listed - **check the Auth? box** for each one

*Your devices should now show "OK" status instead of "Access Denied"*

## 5. Test Your Connection

Note that you will need two or more devices connected to your network to successfully test.

### Find Your IP Addresses:
In the **Members** section on the website, note the **Managed IP** addresses (like `10.147.17.101`). Copy the **Managed IP** of a host different to the one you will be testing from.

### Open Command Prompt/Terminal:

<Tabs
  defaultValue="mac"
  groupId="test-connection"
  values={[
    { label: "macOS", value: "mac", },
    { label: "Windows", value: "windows", },
    { label: "Linux", value: "linux", }
  ]}>

<TabItem value="mac">

- Press `Cmd + Space`, type "terminal", press Enter

Enter this command, replacing 'MANAGED_IP' with the Managed IP of another client on your network: 
```bash
ping -n 3 MANAGED_IP
```
</TabItem>

<TabItem value="windows">

- Press `Windows key + R`, type "cmd", press Enter
- Or search for "Command Prompt" in the Start menu

Enter this command, replacing 'MANAGED_IP' with the Managed IP of another client on your network:
```bash
ping -n 3 MANAGED_IP
```
</TabItem>

<TabItem value = "linux">
- Press 'Ctrl + Alt + T' or search for "Terminal"

Enter this command, replacing 'MANAGED_IP' with the Managed IP of another client on your network:
```bash
ping -n 3 MANAGED_IP
```

</TabItem>
</Tabs>

**Success looks like this:**
```
PING 10.147.17.101 (10.147.17.101): 56 data bytes
64 bytes from 10.147.17.101: icmp_seq=0 ttl=64 time=15.2 ms
64 bytes from 10.147.17.101: icmp_seq=1 ttl=64 time=12.1 ms
64 bytes from 10.147.17.101: icmp_seq=2 ttl=64 time=11.8 ms
```

**You did it!** Your devices are now securely connected and acting like they're on the same LAN.

## Troubleshooting

- **"Access Denied":** Check device is authorized on my.zerotier.com
- **Ping fails:** Verify both devices show "OK" status
- **Windows ping:** May need to enable ICMP in Windows Firewall

