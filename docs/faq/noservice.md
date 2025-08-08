---
title: ZeroTier Service Not Running
description: How to restart the ZeroTier background service when it's not running
tags: [troubleshooting, windows, macos, linux, how-to]
displayed_sidebar: docsSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This error means that the ZeroTier background service on your computer is either not running, or your local firewall is preventing the UI or CLI from talking to it.

### Windows Service

Open Task Manager and go to the "Services" tab. Scroll down until you see "ZeroTierOneService". The status column should say "Running". If it does not, right click on the line and click "Start"

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

Your system firewall is likely blocking communication with the ZeroTier service. Look up instructions for how to unblock an application from the firewall for your OS. ZeroTier will need to be accessible via TCP port 9993 for the UI and CLI to interact with it.
