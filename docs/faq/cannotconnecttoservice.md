---
title: Cannot Connect to ZeroTier Service
description: Fix connection errors between ZeroTier UI/CLI and background service
tags: [troubleshooting, client]
displayed_sidebar: docsSidebar
---

### Error: Cannot connect to Zerotier service {#cannot-connect-to-service}

This error means that the ZeroTier background service on your computer is either not running, or your local firewall is preventing the UI or CLI from talking to it.

#### Windows {#service-windows}

Open Task Manager and go to the "Services" tab. Scroll down until you see `ZeroTierOneService`. The status column should say `Running`. If it does not, right click on the line and click `Start`

#### macOS {#service-mac}

Open Terminal.app and execute the following commands

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

#### Linux {#service-linux}

If your Linux distribution uses systemd, execute `sudo service zerotier-one start`

If not, execute `sudo /etc/init.d/zerotier-one start`

### Still doesn't work?

Your system firewall is likely blocking communication with the ZeroTier service. Look up instructions for how to unblock an application from the firewall for your OS. ZeroTier will need to be accessible via TCP port 9993 for the UI and CLI to interact with it.
