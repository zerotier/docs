---
title: ZeroTier Root Server Downtime
description: What happens if a ZeroTier root server goes down or fails
tags: [faq, explanation]
displayed_sidebar: docsSidebar
---

### What happens if a ZeroTier, Inc root goes down?

Our roots are globally distributed and redundant, if one fails requests will seamlessly fail-over to other roots.

If you are running your own roots the effect would be that no new connections can be established between nodes but existing connections would still work.
