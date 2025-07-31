---
title: USB Device Sharing with VirtualHere
description: Share USB devices across a ZeroTier network using VirtualHere.
tags: [beginner, external, usb]
---

[VirtualHere](https://www.virtualhere.com/) allows you to remotely access and share USB devices - keyboards, Point of Sale devices, and many more - over a local network.

When paired with ZeroTier, VirtualHere enables secure and seamless USB device sharing between connected machines, even across different physical locations.

## How It Works

- Install VirtualHere USB Server on the machine with the physical USB device.
- Install the VirtualHere USB Client on the receiving machine.
- Connect to the host using the **ZeroTier IP address** of the USB server.
- Select and use the shared USB device as if it were plugged in locally.

## External Resources

- [VirtualHere Download & Setup Guide](https://www.virtualhere.com/)
- [ZeroTier Quickstart Guide](/quickstart)
