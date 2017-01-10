---
layout: article
title: Rate Limiting
categories:
  - api
  - v2
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:

  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Smartling API imposes rate limits on requests to ensure that resources are shared fairly among clients. If you make a high number of requests in a short time period, some requests may fail.

If rate limiting is applied, a `429 MAX_OPERATIONS_LIMIT_EXCEEDED` response will be sent. Your integration should be setup to wait and retry a request if a `429` response is received.

Where possible, spread out your requests to avoid running into rate-limiting issues.

