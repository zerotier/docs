---
title: Troubleshooting
description: Troubleshooting common issues
tags: [faq, troubleshooting, hub]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Emergency Instructions

"It was working, but now it's not and I'm not sure why. And I need to get up and running quick."

First, check with your friendly firewall admin that no configuration in the physical network connection has changed.

See the [CLI](cli.md) article for help with the CLI.

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

Find peers.d in the [zerotier system directory](config.md#system)

### Reset Node ID

The new node ID will have be re-authorized on any networks, and the node's managed IP address manually re-assigned if needed.

- Stop the service
- Move or delete identity.secret and identity.public files in the [zerotier system directory](config.md#system)

- Delete peers.d too
- Start the service

### What is PORT_ERROR {#port-error}

A `PORT_ERROR` can happen when the [Virtual Network Port](glossary.md#virtual-network-port) cannot be brought online for some reason. See specific instructions for resolving this on [macOS](faq-macos.md#port-error).