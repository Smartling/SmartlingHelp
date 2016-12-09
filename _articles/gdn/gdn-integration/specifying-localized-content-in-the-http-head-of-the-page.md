---
layout: article
title: Specifying localized content in the HTTP head of the page
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
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
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Content swaps also work on `<title>` and `<meta>` elements in the head of the page:

~~~
<!-- SL:swap-start:id:/page/html.html-keywords -->
<meta name="keywords" content="Paris, reservation, hotel">
<!-- SL:swap-end -->
~~~

If you tag meta keywords for swapping, Smartling will treat the swapped content as a comma-separated list.