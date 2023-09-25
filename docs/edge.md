---
title: Edge
---

:::caution End-of-Life
The ZeroTier Edge was sold as a pre-configured self-contained device, that allowed you to plug physical devices into virtual networks and bridge physical networks at multiple sites with ease. As of 2020, it is End-of-Life. A source code repository of the code running on it can be found here: https://github.com/zerotier/edge; it ran on ESPRESSObin v5 hardware.

The information below applies to any devices still in the field.
:::

### Networking Information

Each ZeroTier Edge is initialized with a factory default ZeroTier identity. This identity (which doubles as a serial number) is printed above the power connector. Coupled with ZeroTier’s ad-hoc networking capability this provides an easy way to reach the device for initial configuration.

Each Edge device joins the IPv6-unicast-only “ad-hoc” ZeroTier network `ff001601bb000000` and can be reached through this network by joining it from any PC or mobile device and then navigating to your device’s unique IPv6 virtual address.

#### Your device can be reached at:

|Protocol|Location|
|-|-|
|ZeroTier Address|########## (10-digit hex address printed on box)|
|HTTP|http://[fc44:16:1##:####:####::1]/|
|SSH|loginid@fc44:16:1##:####:####::1|

These addresses will not work if the device cannot reach the Internet. In this case, it can still be accessed by directly connecting a PC or other device to the third (`phy2`) Ethernet port and configuring your system to use the static IP address `100.64.99.94` with netmask `255.255.255.252` (`/30`). The Edge can now be reached via http and ssh at `100.64.99.93`. This IP is always available on the `phy2` port for emergency recovery if you become locked out of the device or it’s configured in a way that breaks Internet connectivity.

### Quick Start Guide

- Plug the Edge’s first Ethernet port (`phy0`) into an Ethernet network with IPv4 (DHCP) or IPv6 connectivity.
- Connect the device to power and wait 20-30 seconds.
- Join the ad-hoc ZeroTier network `ff001601bb000000` from a PC, mobile, or other devices (see www.zerotier.com to download clients).
- Once your PC or other device is online, navigate to the http address shown in the green box above.
- Create an account on the Edge and begin configuring it for bridge operation.

### Example Configurations

:::info IMPORTANT!

The Edge device itself must be designated as an Ethernet bridge on all ZeroTier virtual networks you wish to bridge to physical ports. This must be done via ZeroTier Central, or if you are running your own network controller by setting the “activeBridge” field to “true” in the Edge’s network member record. If the Edge is not authorized to act as a bridge it will not be permitted to forward Ethernet packets to and from devices other than itself.

It’s also important to understand bridging. A virtual bridge is exactly like a physical Ethernet cable stretching from point A to point B. Devices on either side will only be able to see one another at the TCP/IP level if they occupy the same IP range(s) or are given routing table entries indicating that they should access bridged IP ranges via the local LAN. This can typically be done by configuring local DHCP servers at each site to hand out appropriate routing information.
:::

#### 1. In-Line Bridge and Wireless Access Point

Connect the Edge’s `phy0` port directly to the Internet (leave its configuration set to defaults) and enter a ZeroTier virtual network for port phy1. Ensure that the checkboxes instructing the Edge to block DHCP, etc., remain unchecked so that DHCP and other auto-configuration packets will be carried across the bridge. Also, ensure that the port is not configured to itself obtain DHCP addresses and act as an uplink port.

Configure the wireless port for AP mode and enter the same ZeroTier virtual network ID there to allow direct wireless access to the virtual network.  This configuration is typically used in cases when you want to route all traffic through the bridge to a gateway in the cloud. It’s common to set up a cloud node to act as an Internet router and provide DHCP, DHCP6, IPv6-RA, DNS, and other services in this case. Multiple locations, remote users, etc. could all share the same cloud gateway to simultaneously provide enhanced security, privacy, SDWAN, and VPN functionality.

#### 2. Single Port “Magic Bridge”

Connect the Edge’s phy0 port to your internal LAN. Configure the Edge to obtain IPv4 and IPv6 addresses via this port, and also enter a ZeroTier address. Be sure to check the three boxes to instruct the Edge to block bridging of DHCP, DHCP6, and IPv6-RA packets to ensure that local DHCP servers do not interfere with servers at other locations.

Ensure that devices on the virtual network are configured to see the IP address block(s) of your physical LAN as “local.” The Edge will now bridge your local LAN to a virtual ZeroTier network, making remote resources such as cloud servers and remote workers’ laptops appear as if they’re connected to the local LAN. These remote resources should also be able to use local LAN devices like printers, smart TVs, etc.

This configuration is common when users want to provide remote access (replacing conventional VPNs) or join two office LANs together to form a single network while retaining separate Internet connections on either side. In this configuration, normal Internet traffic will use your local internet connection as usual but internal Ethernet traffic will be bridged as if a very long LAN cable were strung from one location to the other.

#### 3. Using Multiple Internet Connections

Multiple Internet connections can be used by simply connecting secondary connections to the Edge’s other Ethernet ports and configuring these ports to obtain addresses via DHCP, DHCP6, etc. Multiple connections can be used with either configuration scenario above. For the second  "magic bridge” scenario, configure the first port as instructed and then connect secondary or “back-up” Internet connections to the remaining ports. These would only be used for ZeroTier bridge traffic in this case. 

#### 4. Multiple Internet Connections on One Port (Advanced)

The Edge has only three physical ports but it can be connected to more than three Internet connections. This can be accomplished by connecting an Ethernet switch to one port and connecting multiple Internet routers to this switch. As long as each router occupies a different IP address, the Edge will be able to see each separate connection. Inside the Edge, a virtual port is created for each detected uplink and these operate independently. There is no practical limit to the number of physical uplinks that can be connected.

### Advanced Administration

Advanced users can log into the Edge via ssh using the user name and password created with the web UI. The “motd” file printed at login lists a variety of network diagnostic tools that are pre-installed and can be used to probe and debug networks. The “sudo” command is configured to allow these commands to be run as root, but we discourage users from attempting to escape “sudo” or do other things as root since changes to the device’s configuration could be lost on update or could cause problems with the software update procedure.

### Factory Reset Procedure

The Edge can be reset to factory default settings by powering the unit off, connecting the second and third Ethernet ports (`phy1` and `phy2`) directly to one another using any standard Ethernet cable, and then powering the device back on. After powering on with these ports looped wait until the internal red LED flashes rapidly and repeatedly. Then power the device off, disconnect the cable linking the two ports, and power back on.

Only a direct electrical loopback connection between the second two Ethernet ports during device startup will reset the device. Connecting both ports to the same switch or network card will not cause a factory reset, nor will directly connecting the two ports after it has already completed its startup sequence.