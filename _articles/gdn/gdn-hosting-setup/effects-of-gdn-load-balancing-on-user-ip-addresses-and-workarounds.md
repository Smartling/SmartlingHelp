---
layout: article
title: Effects of GDN load-balancing on user IP addresses and workarounds
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

The Smartling Global Delivery Network typically includes load-balanced network components. Under certain conditions, the user’s source IP address as received by your alternative language site(s) may resolve to the load balancer, rather than the user’s actual IP address. Incorrect IP addresses may negatively impact your website, especially for IP address logging or location-based services that geo-encode based on IP address.

Smartling load balancers issue an additional header: `X-FORWARDED-FOR` in the format:

~~~
X-FORWARDED-FOR: [Client ip], [Smartling ip]
~~~

The best-practice approach to resolving the client’s IP address is to check for the existence of the X-FORWARDED-FOR http header:

*   If the header exists and is not empty, use the client IP address provided in this header
*   If the `X-FORWARDED-FOR` does not exist or is empty, use the Remote Address for the client IP address
