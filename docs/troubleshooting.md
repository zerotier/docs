---
title: Troubleshooting
description: Tips and suggestions for troubleshooting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip Can't find an answer?
[Ask our community for help](https://discuss.zerotier.com)
:::

## Ping is not working {#ping}

First, make sure your device is authorized on the network and you're using the ZeroTier assigned Managed IP address.  Aside from that, some OSes block pings in their local firewall by default.

### Windows Firewall

ZeroTier versions 1.10.3 and greater automatically enable ping on ZeroTier adapters.

### macOS Firewall

The firewall is not enabled by default on macOS, and thus pings will not be blocked by default.  If your firewall is enabled on macOS, go into System Preferences -> Security & Privacy.  Under Firewall Options, ensure "Enable stealth mode" is disabled. Stealth mode blocks pings.

### Linux Firewalls

There are far too many Linux distributions out there to list instructions for all of them here.  Please refer to your distribution's documentation for how to unblock ICMP packets.

:::info Get Started
Click [here](/start/) to create your network and start adding devices.
:::

## Error: Cannot connect to ZeroTier service (or Node ID "Unknown" in the GUI apps) {#noservice}

This error means that the ZeroTier background service on your computer is either not running, or your local firewall is preventing the UI or CLI from talking to it.

### Windows Service

Open Task Manager and go to the "Services" tab.  Scroll down until you see "ZeroTierOneService". The status column should say "Running".  If it does not, right click on the line and click "Start"

### macOS Service

Open Terminal.app and execute the following commands

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

### Linux Service

If your Linux distribution uses systemd, execute:

```sh
sudo service zerotier-one start
```

If not, execute:

```sh
/etc/init.d/zerotier-one start
```

### Still doesn't work?

Your system firewall is likely blocking communication with the ZeroTier service.  Look up instructions for how to unblock an application from the firewall for your OS.  ZeroTier will need to be accessible via TCP port 9993 for the UI and CLI to interact with it.

## Emergency Instructions

"It was working, but now it's not and I'm not sure why. And I need to get up and running quick."

First, check with your friendly firewall admin that no configuration in the physical network connection has changed.

See the [CLI](cli) article for help with the CLI.

We're not aware of any bugs that require these steps, or we'd fix them, but sometimes people try the below.

Listed in order of severity:

### Restart the service

<Tabs
  defaultValue="mac"
  groupId="client-restart"
  values={[
    { label: "macOS", value: "mac", },
    { label: "Windows", value: "windows", },
    { label: "Linux", value: "linux", }
  ]}>

<TabItem value="mac">

Open Terminal.app, paste the below, and press enter:

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

It will ask you for your password. It's the password you use to log in to your mac.

</TabItem>

<TabItem value="linux">

```sh
systemctl restart zerotier-one
```

</TabItem>

<TabItem value="windows">

- Type "Services" into the Start Menu to open the Windows Services Manager
- Start and Stop the zerotier-one service in the Windows Services Manager.

</TabItem>
</Tabs>

### Leave all networks and rejoin them

Use the UI, or

`zerotier-cli leave <network-id>` and `zerotier-cli join <network-id>`

### Stop service, Delete peers.d, Start service

Find peers.d in the [zerotier system directory](http://localhost:3000/config#system)

### Reset Node ID

The new node ID will have be re-authorized on any networks, and the node's managed IP address manually re-assigned if needed.

- Stop the service
- Move or delete identity.secret and identity.public files in the [zerotier system directory](http://localhost:3000/config#system)

- Delete peers.d too
- Start the service
