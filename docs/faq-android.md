---
title: Android FAQ
description: Guidance for running ZeroTier on Android
---

### Where do I get the ZeroTier Android app?

Install from [Google Play](https://play.google.com/store/apps/details?id=com.zerotier.one)
or download the latest ZeroTierOne.apk from [here](https://download.zerotier.com/dist/).

### Does the ZeroTier One Android app share user data with third parties?

No, the ZeroTier One Android app does not share user data with other companies or organizations.

### Does the ZeroTier One Android app collect any user data?

No, the ZeroTier One Android app does not collect any user data.

### After tapping the toggle switch to connect, the switch immediately flips back to off

<!--
https://discuss.zerotier.com/t/android-app-will-not-toggle-network-on-shows-offline/16360

https://discuss.zerotier.com/t/cant-enable-the-network-cant-set-the-slider-to-the-right/17009
-->

The behavior of not connecting and immediately flipping the toggle switch back to off is most likely another VPN may be interfering.

Another VPN may be configured to be Always-on.

From [Android docs](https://developer.android.com/reference/android/net/VpnService.html):

> There can be only one VPN connection running at the same time.

You can still have ZeroTier and another VPN on the same device (and starting one will stop the other), but if one is configured as Always-on, then that will prevent the other one from starting.

Disable the other VPN as Always-on. Then you will be able to use ZeroTier.
