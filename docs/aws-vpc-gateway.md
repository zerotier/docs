---
title: Amazon VPC Gateway
description: Make your Amazon VPC accessible via ZeroTier
---

This guide assumes that you've already created an Amazon VPC and you want to make it accessible from a ZeroTier virtual network and vice-versa.

It also assumes that your VPC's IP address scheme does not conflict with the one you use in your ZeroTier network. If it does we recommend renumbering one or the other. If you can't do that you'll need to delve into some advanced iptables usage to implement weird bidirectional NAT hacks.

### Step 1: Create an EC2 Instance to Act as a Gateway

ZeroTier doesn't require much CPU or memory. Unless you're planning on pumping a lot of data a t2.nano instance is typically sufficient. You can use any Linux distribution. This guide assumes the CentOS-derived Amazon AMI.

This instance should have an external IP address assigned to it and it should have a security group that allows bidirectional UDP traffic on port `9993` at a minimum. We recommend allowing all UDP traffic since ZeroTier can bind to other ports as well. Allowing direct traffic will greatly improve performance.

### Step 2: Disable VPC Source/Dest Check On Your Gateway Instance

In the console this is found under `Actions`->`Networking`->`Change Source/Dest Check`. This can also be done via the AWS API or command line tools.

This allows your gateway instance to use IPs on your VPC other than just the one it's assigned, such as the ones on your ZeroTier network that it will be routing to/from.

### Step 3: Enable IPv4 IP Forwarding On Your Gateway Instance

Edit `/etc/sysctl.conf` and `set net.ipv4.ip_forward` to `1`. You will also want to go ahead and enable it for the current running instance with a command like `sudo sysctl -w net.ipv4.conf.all.forwarding=1`.

On the default Amazon AMI instance forwarding is globally allowed if enabled. That's fine for testing but for production we recommend using `iptables` rules to constrain forwarding to designated IP address ranges. That's beyond the scope of this guide but there's a lot of material out there on how to do this.

### Step 4: Install ZeroTier On Your Gateway and Join Your Virtual Network

See our download page for Linux installation instructions. After installing ZeroTier on your gateway, join your virtual network and then go to ZeroTier Central (or your own controller's API) and authorize the gateway on your virtual network. Ping the gateway from another system on your virtual network to see if it's working.

### Step 5: Tell Your ZeroTier Network How to Reach Your VPC

In ZeroTier Central (or via your own controller's API) add a route to your VPC's IP address range via your gateway's ZeroTier-side IP address (not its VPC-side IP).

Our VPC is `10.10.6.0/24`, our ZeroTier network is `10.6.4.0/22`, and our VPC gateway host is `10.6.6.115`, so we added a route to `10`.`10.6.0/24` via `10.6.6.115`.

It may take a minute or two for this route to become available on ZeroTier nodes.

### Step 6: Tell Your VPC How To Reach Your ZeroTier Network

Devices in your VPC will now need a route to your ZeroTier network by way of your gateway instance. Get the Amazon instance ID of your gateway (ours is `i-92f96a4f`) and in your VPC configuration's "Route Tables" section edit your VPC's routing table(s) and add a route to your ZeroTier network via this instance.

For our test we added a route to `10.6.4.0/22` via `i-92f96a4f`.

### Step 7: Test It

On a ZeroTier network connected host try pinging some internal IPs in your VPC, and vice versa. If everything above worked you should be able to do so. Try a traceroute and you should see a one-hop route via your gateway.
