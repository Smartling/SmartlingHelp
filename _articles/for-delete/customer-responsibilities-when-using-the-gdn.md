---
layout: article
title: Customer Responsibilities When Using the GDN
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
  articles:
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
  articles:
  others:
    - link:
      text:
migration-checklist:
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---

The following article applies to Global Delivery Network project types.

Availability of translated sites through the GDN can be affected by issues with your source site. You are responsible for your source site, and Smartling is not accountable for any unavailability of, or errors with, translated sites caused by issues with your source site. For example:

*   If your source site is unavailable, translated sites will be unavailable. Similarly, if your source site is slow, translated sites will be slow.
*   If you do not provide Smartling with a [valid SSL Certificate](/hc/en-us/articles/201297583-SSL-Certificate-Requirements-for-the-GDN) for translated sites, HTTPS pages on your translated sites may not work correctly.
*   If your code is [not well-formed](/hc/en-us/articles/201053017-Smartling-Global-Delivery-Network-Content-Coding-Requirements) or does not conform to W3C standards, translated sites may be unavailable or content may not display as expected.

The GDN may attempt to automatically correct issues with your source code, for example, by closing unclosed tags. This may cause errors with how your content is parsed in the TMS or how it displays on translated sites. You are responsible for errors caused by source code which does not meet the GDN integration requirements.