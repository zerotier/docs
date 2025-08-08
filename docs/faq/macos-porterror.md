---
title: Resolve PORT_ERROR on macOS
description: How to fix ZeroTier PORT_ERROR issues on Mac by authorizing kernel extensions
tags: [troubleshooting, macos, installation]
displayed_sidebar: docsSidebar
---

### Resolving PORT_ERROR on macOS {#port-error}

On newer macOS versions the user must explicitly authorize new extensions. PORT_ERROR on Mac is typically caused by the ZeroTier tun/tap driver failing to load.

If you are having this problem (especially on High Sierra and newer) try visiting the "General" tab of the "Security & Privacy" system preferences dialog. There you will be able to approve new extensions. Approve any ZeroTier extensions and then try restarting the ZeroTier service by opening a terminal and typing:

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
```

Followed by:

```sh
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

Restarting the system will also accomplish this.

NOTE that authorization of kernel extensions will NOT work in remote desktop sessions. Apple requires it to be done directly on the system console. Via a remote session you can click the button but it will have no effect. We are not aware of any known work-around for this.

[//]: # "cspell:disable-next-line "

ALSO if the mouse/track-pad is emulated by a 3rd party application (MagicPrefs, BetterTouchTool, Synergy, etc.), it won't work.
If it's still not working

Via [wanjochan on github](https://github.com/zerotier/ZeroTierOne/issues/467#issuecomment-426852518):

Here my steps for your fellows reference:

- `sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist`
- `sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist`
- open "Security and Privacy" and try click Allow ZeroTier /_maybe no effects....never mind, just continue_/
- REBOOT the OSX /_VERY IMPORTANT_/
- open "Security and Privacy" and try click Allow ZeroTier AGAIN /_if it still there_/
- `sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist`
- `sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist`
- `zerotier-cli listnetworks` /_now the PORT_ERROR should be gone_/
- ping your nodes on the network should now being OK
