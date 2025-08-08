---
title: ZeroTier App Crashes or Fails to Launch
description: Fix ZeroTier tray or menubar app crashes and launch failures
tags: [troubleshooting, client, flag]
displayed_sidebar: docsSidebar
---

### Tray / Menubar App crashes

- go into your [user config](https://docs.zerotier.com/config#user) directory
- delete authtoken.secret
- go into the "One" directory from there
- delete the authtoken.secret in the "One" directory
- restart the app
