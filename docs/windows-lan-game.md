---
title: LAN Game Announcements
description: Problems With LAN Game Announcements and Broadcasts on Windows
---

On Windows, users trying to use LAN games, Bonjour/mDNS, or other broadcast or multicast protocols may have problems with those protocols announcing over ZeroTier networks. This is a [known Windows issue, and a work-around is documented on Microsoft Technet](https://social.technet.microsoft.com/Forums/windows/en-US/72e7387a-9f2c-4bf4-a004-c89ddde1c8aa/how-to-fix-the-global-broadcast-address-255255255255-behavior-on-windows?forum=w7itpronetworking).

There is also a [small open source utility called WinIPBroadcast](https://github.com/dechamps/WinIPBroadcast) available that assists by relaying broadcasts between interfaces.

You can also try adjusting the [Interface Priority](https://www.google.com/search?q=windows+interface+priority) in Windows. Try this first.

We've also heard of people disabling their WiFi adapter, launching the game, and re-enabling WiFi.

Make sure Broadcast is enabled on your ZeroTier network's settings.

#### Further Help from a ZeroTier User

The solution that worked reliably for me was to lower the metric for the ENTIRE ZeroTier Virtual Interface [not just one route, as suggested by others]. This resulted in multicast and broadcast routes being preferred on the ZeroTier network which resolved many "cannot see others in LAN" problems when running games over ZeroTier. The only downside is, that this will break broadcasts/multicasts on the physical network or other networks (except ARP and DHCP, which seemed to work just fine).

So apparently it's only possible to switch between interfaces and choose which one should be preferred. Therefore you should revert your changes when you're done - I found two ways to do this: Disable the zerotier service and start it up again. This seemed to "clear" the metrics and reset them to their default values, always preferring the physical wire. Another obvious solution is to manually set the metrics to it's previous value, using the same command.

The following are code examples on how to to this, designed for the Windows bash (.bat files). These scripts usually need to be run as Administrator - there are ways to automatically elevate bash scripts, [see this link](https://stackoverflow.com/a/12264592)

```
@echo off >NUL
@SETLOCAL enableextensions enabledelayedexpansion
set "NetConID="
  wmic NIC where Description="ZeroTier One Virtual Port" ^
    list /format:textvaluelist.xsl>"%temp%\wmcnc.txt" 2>&1
  for /F "tokens=1* delims==" %%I in ('type "%temp%\wmcnc.txt"') do (
    if /i "%%I"=="NetConnectionID" set "NetConID=%%~J"
  )
del "%temp%\wmcnc.txt" 2>nul
netsh interface ipv4 set interface "!NetConID!" metric=1
```

This script would set the metric of the ZeroTier interface to the lowest allowed (20 or so) metric, which usually resolves "broadcasts/multicasts not getting send over ZeroTier" issues
