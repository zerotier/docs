---
title: AWS
description: Guidance for using ZeroTier with AWS
tags: [aws, troubleshooting, platform-specific]
category: Guide
---

### Slow/Low Speed Connectivity with EC2

Security Group settings cause this common issue in EC2.  In order to communicate with other peers effectively,

ZeroTier must be able to accept direct connections from any host on at least UDP port 9993, and also be able to send UDP packets to any host on just about any port. Ensure entries similar to the following are in your Security

Group configuration for inbound traffic:

![AWS outbound rules](./images/aws-outbound-rules.png)

You may need something similar to this in your outbound rules as well if it is anything other than allow all traffic.

### AWS Nat Gateway

AWS Nat Gateways put up a Symmetric NAT in front of your EC2 instances. Unfortunately, Symmetric NAT is non-conducive to peer-to-peer traffic of any kind, and will not work well with ZeroTier.
