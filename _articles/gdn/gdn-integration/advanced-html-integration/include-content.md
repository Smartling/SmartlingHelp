---
layout: article
title: Include Content
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

For most GDN sites, all translatable content is captured by default. However, it is possible to set up your site defaults to capture no content, and mark only the content you want translated. In this case you can use the class `translate` or set the HTML5 attribute `translate` to `yes`.

~~~html
<div>
	<p>Default behavior applies, this content is not translated.</p>
</div>

<div class="translate">
	<p>This content will be captured for translation</p>
</div>
~~~

> Unlike the `translate` class, no other classes can be nested inside a `notranslate` block.