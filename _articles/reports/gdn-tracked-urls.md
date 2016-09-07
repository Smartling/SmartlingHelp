---
layout: article
title: GDN Tracked URLs
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: false
  CMS-Connectors: false
edition: Express
redirect-url: /hc/en-us/articles/201012768
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Account owners and project managers can track and obtain reports on the number of localized requests for specific pages served through the Smartling Global Delivery Network by configuring up to 10 tracked URLs.

You can add URLs at **Reports &gt; Tracked URLs &gt; Configure URLs**.

![](/uploads/versions/smartling___tracked_urls---x----1248-887x---.png)

You can then view request reports for the URLs, and filter by locale.

## Optional Parameters

You can use wildcard "\*" symbols to generate a report that cumulatively counts all pages that match the wildcard - not broken down by matching URL. For example, if you track:

`/user/\*/profile/\*`

You will receive one line item in reports showing cumulative request that matched `/user/\*/profile/\*` - not a breakdown of the specific pages.

You can specify specific parameters using wildcards; for example, `/checkout/success?complete=true`
