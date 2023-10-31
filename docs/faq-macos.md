---
title: macOS FAQ
description: Guidance for running ZeroTier on macOS
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

### File Sharing on a Mac

If you're [already up and running](./start.md), here's how to share files from your Mac to other members on your ZeroTier network.

#### Setup File Sharing

[Apple's normal instructions apply.](https://support.apple.com/guide/mac-help/set-up-file-sharing-on-mac-mh17131/mac)

Joining a ZeroTier network is like connecting the same WiFi or plugging in to the same Ethernet switch as your other devices, so things mostly "Just Work".
Many virtual network products do not have this convenient property. ZeroTier works at Layer 2.

#### Look at the Network section of Finder's sidebar

It seems to take a while for Macs to notice each other the first time. Then they start showing up in the Network tab of the Finder.

#### That's it

That's pretty much it. Screen Sharing and Media Sharing should work over ZeroTier too.

You can share files from your [Mac to Windows](https://support.apple.com/guide/mac-help/share-mac-files-with-windows-users-mchlp1657/mac) computers too.

:::tip
If you're still having trouble, see: [Router Configuration Tips](./routertips.md)
:::

### Port Error {#port-error}

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

ALSO if the mouse/trackpad is emulated by a 3rd party application (MagicPrefs, BetterTouchTool, Synergy, etc.), it won't work.
If it's still not working

Via wanjochan on [github](https://github.com/zerotier/ZeroTierOne/issues/467#issuecomment-426852518):

Here my steps for your fellows reference:

- `sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist`
- `sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist`
- open "Security and Privacy" and try click Allow ZeroTier /*maybe no effects....nevermind, just continue*/
- REBOOT the OSX /*VERY IMPORTANT*/
- open "Security and Privacy" and try click Allow ZeroTier AGAIN /*if it still there*/
- `sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist`
- `sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist`
- `zerotier-cli listnetworks` /*now the PORT_ERROR should be gone*/
- ping your nodes on the network should now being OK

### Uninstall ZeroTier from your Mac {#uninstall}

Open Terminal.app and paste the below and press return

```sh
sudo "/Library/Application Support/ZeroTier/One/uninstall.sh"
```

This will cleanly uninstall ZeroTier One, preserving only your secret identity.

:::tip
[See community threads about ZeroTier on macOS](https://discuss.zerotier.com/search?q=macos)
:::
