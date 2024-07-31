---
title: ZeroTier Security
description: Security is central to what we do at ZeroTier
---

ZeroTier is trusted by millions of users across thousands of organizations to provide secure, private networking. Our product and platform are designed to keep data confidential, minimize the user/organizational data collected, and preserve user privacy.

## How We Protect Our Users

ZeroTier networks are designed to be secure by default. We use strong, modern cryptography, and minimize the data we collect about our users, their network, and the devices connected to them.

### Our Product

All traffic on ZeroTier networks is encrypted using asymmetric encryption, utilizing private keys that never leave the device. That keeps device data private, and ensures the integrity of all traffic.

We also collect very minimal metadata about active networks and devices. Because ZeroTier routes traffic directly between peers, our infrastructure cannot observe or modify packets on user/organizational networks.

In addition, the source code to our client agent is [available from GitHub](https://github.com/zerotier/ZeroTierOne). ZeroTier can be used via our [signed binary packages](https://www.zerotier.com/download/), [command-line installer](https://install.zerotier.com), or run through a self-hosted deployment. Either way, users/organizations benefit from the same focus on privacy and security.

### Platform Security

ZeroTier’s production applications are deployed to a managed cloud environment, using best practices for testing, deployment, and administration. This includes automated build + test processes, continuous monitoring of our infrastructure, and the use of network segmentation to keep sensitive systems from being reachable from untrusted hosts.

All production system access is authenticated and authorized using single sign-on (SSO), multi-factor authentication (MFA), and role-based access control (RBAC). Critical services are restricted to private networks, using native cloud provider controls and secure remote access services.

### Development Process

ZeroTier uses automated testing, mandatory code review, and signing of released packages to ensure that the code we write is secure and that distributed binaries match the code as tested + reviewed.

We also track and address security issues in any 3rd-party software dependencies using automated scans and reporting against known vulnerabilities.

## Incident Response

We take reports of any security issues in our product or services very seriously. We provide a direct reporting channel (security@zerotier.com) and use PGP encryption to ensure the integrity and privacy of messages.

Any incidents related to security issues within ZeroTier’s core service offerings will be assigned a public Common Vulnerability and Disclosure (CVE) code. We provide potentially-impacted customers time to assess and mitigate issues in their own deployments before publicly sharing details of any vulnerability.

## Business Practices

All ZeroTier employees are subject to a formal background check and confidentiality/non-disclosure agreement. We require annual security training for our entire staff.

ZeroTier reviews all vendors’ security policies and disclosures to ensure they meet our own requirements and commitments to our users.

## Privacy

Maintaining our users’ privacy is core to what we do and how we work at ZeroTier. Connecting to and using ZeroTier networks does not require account registration or any other personal information, and users can sign up for our managed platform (https://my.zerotier.com) using only an email address.

We collect and log only the data needed to provide our services, such as the IP addresses of network members and usage logs for administrative access. No additional data or telemetry leaves a device without an explicit opt-in choice, and all collected telemetry is anonymized.

ZeroTier does not share any user information with 3rd parties except when it is strictly required or for our business operations (billing and support). We do not sell any customer information, analytics, or usage data.

See our full [Privacy Policy](https://www.zerotier.com/privacy-policy) for more details.

