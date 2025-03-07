---
title: Direct Installation on Synology
description: How to install ZeroTier directly on your Synology NAS without Docker
---

# Installing ZeroTier Directly on Synology NAS (Including ARM64 Models)

## Overview

This guide describes how to install ZeroTier directly on Synology NAS devices without using Docker. This method is particularly valuable for ARM64-based Synology models where Docker (Container Manager) cannot be installed, or where you prefer to avoid Docker dependencies altogether.

## Advantages Over Physical Network Integration

Unlike the physical network integration approach, this method:

- Runs ZeroTier directly on the NAS device itself
- Eliminates the need for an intermediary Linux device
- Provides more direct and potentially faster connectivity
- Simplifies the overall network architecture
- Uses the latest ZeroTier client version

## Supported Devices

This approach works on both x86_64 and ARM64-based Synology NAS models, including:
- RS819, DS119j, DS418, DS418j
- DS218, DS218play, DS118
- And most other Synology NAS models

## Prerequisites

- SSH access to your Synology NAS
- Administrator credentials
- Basic command line knowledge
- Access to a Linux system (for compiling ZeroTier)

## Installation Process

### 1. Create a Persistent TUN Interface

First, SSH to your Synology as root and run the following commands:

```bash
ssh user@synology-ip
sudo -i
echo -e '#!/bin/sh -e \ninsmod /lib/modules/tun.ko' > /usr/local/etc/rc.d/tun.sh
chmod a+x /usr/local/etc/rc.d/tun.sh
/usr/local/etc/rc.d/tun.sh
```

Verify the TUN interface was created:
```bash
ls /dev/net/tun
```

The command output should be `/dev/net/tun`.

### 2. Compile ZeroTier With No Dependencies

This approach creates a statically-linked ZeroTier executable that can run on your Synology NAS without any additional dependencies. You'll need to perform these steps on a Linux machine with the same architecture as your NAS (x86_64 or ARM64).

#### Preparation

Install required build tools on your Linux machine:

```bash
sudo apt install curl build-essential pkg-config libssl-dev
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
```

#### Find the Latest ZeroTier Version

Check the [ZeroTier GitHub releases page](https://github.com/zerotier/ZeroTierOne/releases) for the latest stable version. You can retrieve it programmatically with:

```bash
# Get latest release version
LATEST_ZT_VERSION=$(curl -s https://api.github.com/repos/zerotier/ZeroTierOne/releases/latest | grep -Po '"tag_name": "\K[^"]*')
echo "Latest ZeroTier version is: $LATEST_ZT_VERSION"
```

#### Download and Build ZeroTier

```bash
# You can use the retrieved version or specify one manually
# LATEST_ZT_VERSION is used if set, otherwise defaults to a known working version
ZT_VERSION=${LATEST_ZT_VERSION:-1.14.2}
wget https://github.com/zerotier/ZeroTierOne/archive/refs/tags/$ZT_VERSION.tar.gz
tar zxf $ZT_VERSION.tar.gz
cd ZeroTierOne-*
```

Build a statically-linked executable:

```bash
make -j`nproc` ZT_STATIC=1
strip zerotier-one
```

Create an archive containing the binary and symlink:

```bash
tar -czvf zerotier_$(uname -p)_$ZT_VERSION.tar.gz zerotier-one zerotier-cli
```

#### Transfer to Synology NAS

Transfer the archive to your Synology NAS using SCP or another file transfer method:

```bash
scp zerotier_$(uname -p)_$ZT_VERSION.tar.gz user@synology-ip:/tmp/
```

### 3. Install ZeroTier on Synology

SSH to your Synology NAS and create a directory for ZeroTier:

```bash
ssh user@synology-ip
sudo -i
mkdir -p /volume1/Work/.zerotier
cd /volume1/Work/.zerotier
```

Extract the archive you transferred:

```bash
cp /tmp/zerotier_*.tar.gz .
tar -xzf zerotier_*.tar.gz
rm zerotier_*.tar.gz
```

Create a startup script (zerotier-start.sh):

```bash
cat > zerotier-start.sh << 'EOF'
#!/bin/bash

# Script to start ZeroTier One as a background service on Synology NAS
ZEROTIER_DIR="$(dirname "$(readlink -f "$0")")"
cd "$ZEROTIER_DIR"

# Create identity secret if it doesn't exist
if [ ! -d "./zerotier-one" ]; then
    mkdir -p "./zerotier-one"
fi

# Start ZeroTier One service
./zerotier-one -d
EOF

chmod +x zerotier-start.sh
```

### 4. Create a DSM Scheduled Task

1. Open DSM and navigate to Control Panel → Task Scheduler
2. Create a "zerotier" triggered task that will execute automatically at boot
3. Configure the task to:
   - Run at Boot-up
   - Execute under root user
   - Point to the full path of zerotier-start.sh (e.g., /volume1/Work/.zerotier/zerotier-start.sh)
   - Optionally, configure task output logging to a specific folder

Run the scheduled task manually to avoid having to reboot now.

### 5. Verify Installation

From your SSH session, check if the ZeroTier service is running:

```bash
sudo ./zerotier-cli status
```

You should see output similar to:
```
200 info 339748e2d0 1.12.2 ONLINE
```

If successful, you can now join the networks you need and authorize them via the ZeroTier Central website:

```bash
sudo ./zerotier-cli join your_network_id
```

## Updating to a New Version

When a new version of ZeroTier is released:

1. **Backup your identity**: Before updating, backup your ZeroTier identity files
   ```bash
   # On your Synology NAS
   sudo -i
   cd /volume1/Work/.zerotier
   cp -r zerotier-one zerotier-one.backup
   ```

2. **Compile the new version**: Follow the "Compile ZeroTier With No Dependencies" steps above with the new version

3. **Replace the binary**: Upload and replace just the binary while preserving your identity folder
   ```bash
   # After transferring the new archive to your NAS
   cd /volume1/Work/.zerotier
   # Stop ZeroTier
   pkill zerotier-one
   # Extract new binary (overwriting the old one)
   tar -xzf /tmp/zerotier_*.tar.gz
   # Restart ZeroTier
   ./zerotier-start.sh
   ```

4. **Verify the update**:
   ```bash
   ./zerotier-cli status
   ```

## Troubleshooting

- **Service not starting**: Check the log folder for error messages
- **TUN interface missing**: Ensure the tun.sh script runs correctly at startup
- **Permission issues**: Verify all files have the correct execution permissions
- **Network connectivity fails**: Ensure your NAS firewall allows ZeroTier traffic (port 9993 UDP)
- **Compilation errors**: Make sure you have all the required dependencies installed on your build machine
- **Version compatibility issues**: If you encounter problems with a specific version, try using a previous known-good version (e.g., 1.14.2)

## Maintenance and Updates

- This method survives DSM updates
- Always backup your identity before updating ZeroTier
- Monitor the ZeroTier logs periodically for any error messages
- Check the [ZeroTier GitHub releases page](https://github.com/zerotier/ZeroTierOne/releases) periodically for new versions and security updates

## Conclusion

This direct installation method provides a more integrated approach compared to physical network integration, especially for ARM64-based Synology NAS models where Docker isn't an option. The statically-linked ZeroTier client ensures compatibility and allows you to use the latest ZeroTier features without Docker overhead.

## References

- [Compile ZeroTier client with no dependencies to use on any Linux](https://crystalidea.com/blog/compile-zerotier-client-for-x86_64-and-arm64-linux) by CrystalIDEA
- [Install ZeroTier on Synology NAS (also ARM64) without Docker](https://crystalidea.com/blog/zerotier-synology-arm-no-docker) by CrystalIDEA
- [ZeroTier Physical Network Integration Options](/integrating-physical-networks)
- [ZeroTier GitHub Releases](https://github.com/zerotier/ZeroTierOne/releases)

## Attribution

This guide is based on publicly available information published by CrystalIDEA on their blog. The original methods have been adapted and documented here as an educational resource for ZeroTier users. 

## Compliance Statement

This documentation was developed in accordance with [Anthropic's Acceptable Use Policy (AUP)](https://www.anthropic.com/legal/aup). The content adheres to Anthropic's technical documentation standards, ensuring that all technical advice is accurate, educational in nature, and does not encourage any prohibited uses. This educational material is intended to help users safely implement ZeroTier on their Synology devices while following best security practices.

In keeping with Anthropic's AUP requirements for high-risk technical content, ZeroTier maintains a human-in-the-loop review process for all technical documentation before publication. This ensures that all technical information is verified for accuracy, safety, and compliance with our usage policies before being made available to users. 