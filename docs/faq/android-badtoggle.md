---
title: Android Toggle Switch Immediately Flips Back Off
description: Fix Android app connection issues when toggle switch immediately returns to off position
tags: [troubleshooting, android, mobile-app]
displayed_sidebar: docsSidebar
---

### After tapping the toggle switch to connect, the switch immediately flips back to off

<!--
https://discuss.zerotier.com/t/android-app-will-not-toggle-network-on-shows-offline/16360

https://discuss.zerotier.com/t/cant-enable-the-network-cant-set-the-slider-to-the-right/17009
-->

The behavior of not connecting and immediately flipping the toggle switch back to off is most likely caused by another VPN interfering.

Another VPN may be configured to be Always-on.

From [Android docs](https://developer.android.com/reference/android/net/VpnService.html):

> There can be only one VPN connection running at the same time.

You can still have ZeroTier and another VPN on the same device (and starting one will stop the other), but if one is configured as Always-on, then that will prevent the other one from starting.

Disable the other VPN as Always-on. Then you will be able to use ZeroTier.
