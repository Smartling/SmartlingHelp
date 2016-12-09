---
layout: article
title: Translating and excluding title and meta tags
draft: false
Applies to:
  GDN: true
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

Text appearing within the `<title>` tags of a page, or in `<meta>` keywords and description tags, will always be translated, by default. 

These tags can be excluded from translation with the `notranslate` attribute, like:  

~~~html
<title notranslate>Booking a room</title>
~~~

