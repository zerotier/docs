---
title: (Win) System Service Not Reachable by UI
description: On windows, system service becomes unreachable by UI or via API. This is a known issue and how to work around it.
tags: [windows, troubleshooting, flag]
---

Occasionally, the system service will become unreachable from the ZeroTier UI client. Most often this happens when the ZeroTier service has been restarted, and also if there is a custom local.conf file in the ZeroTier/One folder. The problem is a windows service claiming the 9993 port before the ZeroTier system service can.

ZeroTier on your device is split into the UI/CLI which connect to a separate system service. Occasionally, the frontend UI and/or CLI will lose connection to the ZeroTier system service.

## Confirm you have this specific issue

1. Quit ZeroTier UI client
2. Open the windows services window, find the zerotier service, and stop it.
3. Open an elevated powershell terminal and navigate to C:/ProgramData/ZeroTier/One
4. Run the system service manually so you can see output: `./zerotier-one_x64.exe -C`
5. If you see an error saying issue binding to port 9993, you've encountered this bug and this fix should work for you.

## Fix

1. Stop manually running system service.
2. Open services window and find "IP Helper" service. Stop it
3. Retry starting the zerotier-one exe via CLI. If it works, this fix succeeded.
4. Stop manual system service, start zerotier service in service menu
5. Start IP Helper service again.

ZeroTier should now be reachable by the UI client when you restart it.

## Why does this happen?

Not entirely sure. IP helper service is a windows service that provides tunneling for IPv6 over IPv4. IP helper grabs 9993 before ZeroTier can. The issue persists through reboots. In the resource monitor, you can see which ports are bound to which services. IP helper is the culprit.

Do you use Docker or WSL and ZeroTier? One of those might be reserving the port in IP Helper.

Try this in a Admin Powershell

```sh
netsh interface portproxy show all
```

is 9993 in the results?

Try to delete the entry

```sh
netsh interface portproxy delete help
```

Or try killing Docker or WSL and see if the problem goes away.
