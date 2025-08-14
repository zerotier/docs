---
title: Start and Stop ZeroTier on macOS
description: How to control the ZeroTier system service on Mac computers
tags: [faq, macos, how-to]
displayed_sidebar: docsSidebar
---

### Start and Stop ZeroTier on your Mac

The ZeroTier menubar app is a separate process from the system service that makes ZeroTier work. You can quit the menubar app from it's menu and the system service will continue to run.

To stop/start the ZeroTier system service, open Terminal.app and paste these commands:

Stop

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
```

Start

```sh
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```
