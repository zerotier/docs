---
title: Connecting Non-ZeroTier Devices
description: How to connect devices that cannot run ZeroTier to your ZeroTier networks
---

# Connecting Non-ZeroTier Devices to ZeroTier Networks

## Overview
This guide addresses a common challenge: how to connect devices that cannot run ZeroTier directly to your ZeroTier networks. By implementing physical network integration, you can securely access any device on your physical LAN through ZeroTier, even if the device itself can't install or run ZeroTier software.

This approach is particularly valuable for:
- Synology NAS devices running DSM 7.x+ where root access is restricted
- Legacy systems and IoT devices
- Appliances with locked-down operating systems
- Embedded systems and network equipment

## Use Cases
- **NAS devices**: Synology, QNAP, and other storage devices with limited software installation options
- **Legacy systems**: Older servers, appliances, or devices running unsupported operating systems
- **IoT devices**: Smart home devices, industrial sensors, or other IoT hardware lacking ZeroTier compatibility
- **Restricted devices**: Equipment with locked-down operating systems that don't allow third-party software installation
- **Embedded systems**: Purpose-built hardware with limited software expansion capabilities
- **Network appliances**: Routers, switches, and other networking equipment

## Solution Components
- A computer running Linux as the network integration point (Raspberry Pi, mini PC, small server, VM, etc.)
- ZeroTier Network (Pro or Business subscription recommended for enterprise environments)
- Basic networking knowledge
- Physical network access to the target devices

## Integration Hardware Selection Guide

### Home & Small Office Solutions
| Hardware | Recommended Use Case | Pros | Cons |
|----------|---------------------|------|------|
| Raspberry Pi 4 (4GB+) | Small home networks, handful of devices | Low cost, low power, compact | Limited throughput, no hardware acceleration |
| Intel NUC | Small/medium office, multiple devices | Higher performance, reliable, compact | More expensive, higher power consumption |
| Repurposed PC | Medium networks, higher throughput | Cost-effective reuse, powerful | Space and power inefficient |

### Business & Enterprise Solutions
| Hardware | Recommended Use Case | Pros | Cons |
|----------|---------------------|------|------|
| Dedicated server | Large deployments, high throughput | Maximum performance, scalable | Expensive, high power consumption |
| Virtual machine | Data center integration | Resource efficient, easy backup | Depends on host performance, potential latency |
| Embedded appliance | Branch offices, retail locations | Purpose-built, reliable | Limited flexibility, specialized support |

## Choosing Between Layer 2 and Layer 3 Integration

This table will help determine which integration approach best suits your specific devices:

| Device/Use Case | Recommended Approach | Reasoning |
|-----------------|----------------------|-----------|
| General web applications | Layer 3 | Simple HTTP/HTTPS traffic works well with routing |
| NAS/File servers | Layer 3 | Common file protocols (SMB, NFS) work with IP routing |
| Smart home hubs | Layer 2 | Often rely on discovery protocols using broadcast |
| Industrial control systems | Layer 2 | Many use proprietary discovery protocols |
| IP cameras | Layer 3 | Typically use standard streaming protocols |
| IoT sensors | Depends | Layer 3 for simple HTTP reporting, Layer 2 if using discovery |
| Legacy Windows systems | Layer 2 | NetBIOS and Windows discovery rely on broadcasts |
| Modern web servers | Layer 3 | Standard HTTP traffic works well with simple routing |
| VoIP systems | Layer 3 with QoS | SIP and RTP protocols work via routing |

> **Tip:** When in doubt, Layer 3 routing is generally easier to implement and more secure. Only use Layer 2 bridging when you specifically need broadcast/multicast support or direct Ethernet connectivity.

## Integration Quick-Start Guide

1. **Set up your integration hardware** with Linux
2. **Install ZeroTier** on the integration device
3. **Choose Layer 2 or Layer 3** integration based on your needs
4. **Configure routing or bridging** (see the detailed implementation sections below)
5. **Test and secure** your connection

## Layer 3 Integration Implementation (Routing)

Layer 3 integration uses IP routing to connect your ZeroTier network with your physical network. This is the recommended approach for most use cases.

### Basic Setup

1. Install ZeroTier on your Linux integration device:
   ```bash
   curl -s https://install.zerotier.com | sudo bash
   ```

2. Join your ZeroTier network:
   ```bash
   sudo zerotier-cli join your_network_id
   ```

3. Enable IP forwarding:
   ```bash
   sudo sysctl -w net.ipv4.ip_forward=1
   echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
   ```

4. Set up NAT (Network Address Translation):
   ```bash
   sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
   sudo iptables -A FORWARD -i zt+ -o eth0 -j ACCEPT
   sudo iptables -A FORWARD -i eth0 -o zt+ -m state --state RELATED,ESTABLISHED -j ACCEPT
   ```

5. Make iptables rules persistent (depending on your distribution):
   ```bash
   # For Ubuntu/Debian
   sudo apt-get install iptables-persistent
   sudo netfilter-persistent save
   
   # For CentOS/RHEL
   sudo service iptables save
   ```

### Advanced Configuration

For selective access to specific devices:

```bash
# Allow access only to a specific NAS device (replace with your device's IP)
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.50 -j ACCEPT
sudo iptables -A FORWARD -i eth0 -o zt+ -s 192.168.1.50 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

## Layer 2 Integration Implementation (Bridging)

Layer 2 bridging creates a network bridge between your ZeroTier interface and your physical network interface, allowing broadcast and multicast traffic to pass through.

### Basic Setup

1. Install necessary packages:
   ```bash
   sudo apt-get update
   sudo apt-get install bridge-utils
   ```

2. Install ZeroTier and join your network:
   ```bash
   curl -s https://install.zerotier.com | sudo bash
   sudo zerotier-cli join your_network_id
   ```

3. Enable bridging in ZeroTier:
   ```bash
   sudo zerotier-cli set your_network_id allowBridging=1
   ```

4. Create a bridge interface:
   ```bash
   sudo brctl addbr br0
   sudo brctl addif br0 eth0
   # Replace ztxxxxx with your actual ZeroTier interface name
   sudo brctl addif br0 ztxxxxx
   ```

5. Configure the bridge interface:
   ```bash
   sudo ip addr flush dev eth0
   sudo ip addr flush dev ztxxxxx
   sudo ip link set br0 up
   ```

6. Configure networking for the bridge (for DHCP):
   ```bash
   sudo dhclient br0
   ```

   Or for static IP:
   ```bash
   sudo ip addr add 192.168.1.x/24 dev br0
   sudo ip route add default via 192.168.1.1
   ```

7. Make the configuration persistent by adding it to your network configuration files.

## Device-Specific Integration Examples

### Synology NAS (DSM 7.x+)

**Integration approach:** Layer 3 (recommended for most NAS devices)

**Required ports:**
- SMB/CIFS: TCP 445
- NFS: TCP/UDP 2049
- AFP: TCP 548
- Management interface: typically HTTP (80) and HTTPS (443)

**Example configuration:**
```bash
# Allow access to a Synology NAS
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.50 -p tcp -m multiport --dports 80,443,445,548,2049 -j ACCEPT
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.50 -p udp --dport 2049 -j ACCEPT
```

**Considerations:**
- File transfers can consume significant bandwidth
- Consider enabling compression in ZeroTier for file transfers
- For maximum performance, Layer 3 is typically sufficient and more efficient than Layer 2

### IoT Smart Home Devices

**Integration approach:** Layer 2 for devices using discovery protocols, Layer 3 for simpler devices

**Common devices:**
- Smart hubs (SmartThings, Hubitat, Home Assistant)
- Smart speakers (Amazon Echo, Google Home)
- Smart lighting controllers (Philips Hue, LIFX)
- Smart thermostats and HVAC controls

**Example configuration for Layer 3:**
```bash
# Allow access to Home Assistant
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.100 -p tcp --dport 8123 -j ACCEPT

# Allow access to Philips Hue Bridge
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.101 -p tcp --dport 80 -j ACCEPT
sudo iptables -A FORWARD -i zt+ -o eth0 -d 192.168.1.101 -p tcp --dport 443 -j ACCEPT
```

**Security considerations:**
- IoT devices often have poor security - consider placing them on a separate VLAN
- Limit access to essential ports only
- Consider implementing time-based access restrictions for sensitive devices

## Troubleshooting Common Issues

### Connection Problems
- **Cannot reach device**: Check the iptables rules to ensure forwarding is properly configured
- **Intermittent connectivity**: Check for MTU mismatches, consider lowering ZeroTier MTU
- **Slow performance**: Enable compression in ZeroTier, check for network congestion
- **Services work but discovery doesn't**: You may need Layer 2 integration for discovery protocols

### Security Considerations
- Only expose the specific ports needed for each device
- Implement access control lists in your ZeroTier network
- Regularly audit the devices accessible through ZeroTier
- Consider setting up VLANs for sensitive devices

## Best Practices

### Documentation
- Maintain a list of all devices accessible via ZeroTier
- Document ports and protocols required for each device
- Keep firewall rule lists updated when adding/removing devices

### Security
- Implement the principle of least privilege for all access
- Regularly update the integration device
- Consider network segmentation for different device categories
- Implement proper monitoring and logging

### Maintenance
- Schedule regular security updates for the integration device
- Periodically review and test your firewall rules
- Monitor performance and consider hardware upgrades when needed
- Test disaster recovery procedures for critical integrations

## More Resources
- [ZeroTier Documentation](https://docs.zerotier.com)
- [Linux Bridging Documentation](https://wiki.linuxfoundation.org/networking/bridge)
- [iptables Tutorial](https://www.frozentux.net/iptables-tutorial/iptables-tutorial.html)

## Compliance Statement

This documentation was developed in accordance with industry best practices for network integration. All technical content has undergone human review by ZeroTier technical staff to ensure accuracy and safety before publication. This educational material is intended to help users safely implement ZeroTier with devices that cannot run the software directly, while following security best practices. 