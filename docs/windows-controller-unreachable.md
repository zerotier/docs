---
title: (Win) Controller Not Reachable by UI
description: On windows, controller becomes unreachable by UI or via API. This is a known issue and how to work around it.
---

Occasionally, the controller will become unreachable from the ZeroTier UI client. Most often this happens when the ZeroTier service has been restarted, and also if there is a custom local.conf file in the ZeroTier/One folder. The problem is a windows service claiming the 9993 port before the ZeroTier controller can.

## Confirm you have this specific issue

1. Quit ZeroTier UI client
2. Open the windows services window, find the zerotier service, and stop it.
3. Open an elevated powershell terminal and navigate to C:/ProgramData/ZeroTier/One
4. Run the controller manually so you can see output: `./zerotier-one_x64.exe -C`
5. If you see an error saying issue binding to port 9993, you've encountered this bug and this fix should work for you.

## Fix
1. Stop manually running controller.
2. Open services window and find "IP Helper" service. Stop it
3. Retry starting the ZeroTier controller via CLI. If it works, this fix succeeded. 
4. Stop manual controller, start zerotier service in service menu
5. Start IP Helper service again.

ZeroTier should now be reachable by the UI client when you restart it.