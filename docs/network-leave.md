---
title: Leave Network
description: Removing your node from a ZeroTier virtual network
tags: [tutorial, client]
category: 
---

When you leave a network, your device won't talk to devices on that network.

### macOS and Windows

The macOS and Windows UIs have two ways to leave networks:

- Opening the main menu shows all connected networks with a checkmark next to it. Simply click the network you wish to leave. (Clicking an unchecked network will re-join the network).
- Click the Network Details menu item. This will bring up details of all networks known to the client. Uncheck the Connected checkbox of the network you wish to leave.

In case you never wish to connect to a certain network again, you can completely remove it from the user interface. Click `Network Details...` in the application menu. Find the network you wish to delete and click `Delete Network`

### Command Line

From the command line, simply execute `zerotier-cli leave ################` with `################` being the 16-digit network ID of the network you wish to leave. On UNIX based OSes, this requires sudo. On Windows this requires an administrator command prompt.
