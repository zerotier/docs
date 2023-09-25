---
title: Troubleshooting
---

Tips and suggestions for troubleshooting.

:::tip Can't find an answer?
[Ask our community for help](https://discuss.zerotier.com)
:::


## Ping is not working {#ping}

First, make sure your device is authorized on the network and you're using the ZeroTier assigned Managed IP address.  Aside from that, some OSes block pings in their local firewall by default.

### Windows

ZeroTier versions 1.10.3 and greater automatically enable ping on ZeroTier adapters.


### macOS

The firewall is not enabled by default on macOS, and thus pings will not be blocked by default.  If your firewall is enabled on macOS, go into System Preferences -> Security & Privacy.  Under Firewall Options, ensure "Enable stealth mode" is disabled. Stealth mode blocks pings.

### Linux

There are far too many linux distributions out there to list instructions for all of them here.  Please refer to your distribution's documentation for how to unblock ICMP packets.


:::info Get Started
Click [here](/start/) to create your network and start adding devices.
:::



## Error: Cannot connect to ZeroTier service (or Node ID "Unknown" in the GUI apps) {#noservice}

This error means that the ZeroTier background service on your computer is either not running, or your local firewall is preventing the UI or CLI from talking to it.

### Windows 10

Open Task Manager and go to the “Services” tab.  Scroll down until you see “ZeroTierOneService”. The status column should say “Running”.  If it does not, right click on the line and click “Start”

### macOS

Open Terminal.app and execute the following commands

    sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
    sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist

### Linux

If your Linux distribution used systemd, execute:

    sudo service zerotier-one start

If not, execute:

    /etc/init.d/zerotier-one start

### Still doesn't work?

Your system firewall is likely blocking communication with the ZeroTier service.  Look up instructions for how to unblock an application from the firewall for your OS.  ZeroTier will need to be accessible via TCP port 9993 for the UI and CLI to interact with it.





