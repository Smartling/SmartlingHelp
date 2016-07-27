---
layout: article
title: Do Not Localize URLs or Translate Link Text
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
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---

This rule works like Do Not Localize URLs but it applies to link text as well.

For example:

~~~html
<a href="http://www.mysite.com/about">About Us</a>
~~~

Would be served on a translated site exactly as it is on your source site.

## How to Apply

### Add a Do Not Translate or Localize URLs rule by URL, Element Class or Element ID in the Dashboard.


### Add the `sl_opaque` class to your source code

~~~html
<a class="sl_opaque" href="http://www.mysite.com/about">About Us</a>
~~~
