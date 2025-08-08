---
title: File Sharing on macOS
description: How to set up file sharing from Mac to other ZeroTier network members
tags: [faq, macos, tutorial, how-to]
displayed_sidebar: docsSidebar
---

### File Sharing on a Mac

If you're [already up and running](/start), here's how to share files from your Mac to other members on your ZeroTier network.

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
If you're still having trouble, see: [Router Configuration Tips](/routertips)
:::
