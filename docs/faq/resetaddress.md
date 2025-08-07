---
title: FAQ
description: Answers to commonly asked questions
tags: [faq, troubleshooting, hub]
---


### How to clear or reset your ZeroTier address {#reset-address}

If you would like to clear or reset ZeroTier's address on a device (the 10-digit address node ID) or you have cloned a device and you want to prevent it from using the same address, follow these steps in order:

#### Step 1. Stop the service

##### On Windows

On Windows this is done with the service manager. (Open the Start Menu and start typing "service")

##### On macOS

On macOS you can open a terminal and use

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
```

##### On Linux

This is usually

```sh
sudo systemctl stop zerotier-one
```

or

```sh
sudo service zerotier-one stop
```

#### Step 2. Delete the files identity.public and identity.secret from ZeroTier's working directory

- On Windows this is usually `\ProgramData\ZeroTier\One`
- On Mac this is `/Library/Application Support/ZeroTier/One`
  in your terminal, type open `/Library/Application Support/ZeroTier/One` to open the folder in Finder.
- On Linux this is usually `/var/lib/zerotier-one`

#### Step 3. Restart the service

##### On Windows {#restart-windows}

Starting via the service manager on Windows

##### On Mac {#restart-mac}

```sh
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

##### On Linux {#restart-linux}

```sh
sudo systemctl start zerotier-one
```

or

```sh
sudo service zerotier-one start
```

When started without identities ZeroTier will generate new ones. You will need to authorize this new identity on any networks.