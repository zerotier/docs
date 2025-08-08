---
title: Metrics and Monitoring
description: How to monitor and observe your ZeroTier networks and nodes
tags: [faq, devops, tutorial, reference]
displayed_sidebar: docsSidebar
---

### Metrics and Monitoring

ZeroTier Inc doesn't have access to your traffic. We don't currently supply a monitoring "dashboard" for your networks and nodes. You can build your own!

- [ZeroTier Metrics Observability Tutorial](https://github.com/zerotier/metrics-tutorial)
- [Prometheus Metrics](https://github.com/zerotier/ZeroTierOne#prometheus-metrics) for the zerotier-one agent are available. Pipe these into the common prometheus/grafana setup.
- Use your preferred monitoring tool _over_ your ZeroTier networks. Some examples: Prometheus [Blackbox exporter](https://github.com/prometheus/blackbox_exporter), [SmokePing](https://oss.oetiker.ch/smokeping/), [UptimeKuma](https://uptime.kuma.pet/)
- [Traffic Observation and Interception](/rules.md#traffic-observation-and-interception)
