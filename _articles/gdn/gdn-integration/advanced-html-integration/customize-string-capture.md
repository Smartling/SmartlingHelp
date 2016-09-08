---
layout: article
title: Customize String Capture
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

By default, Smartling captures each block-level tag as a single string. However, you may wish to alter this behavior to avoid having to retranslate content when you have a high number of similar block-level elements. You may also want to split up breadcrumbs or titles, depending on how these are generated in your platform.

For example, if your breadcrumbs are displayed like this:

~~~html
<p><a href="/home">Home</a> / <a href="/Support">Support</a> / <a href="/Download-Files/">Download Files</a></p>
~~~


You can add sl_split tags to capture each section as it’s own string:

~~~html
<p><span class="sl_split"><a href="/home">Home</a> / </span><span class="sl_split"><a href="/Support">Support</a> / </span><span class="sl_split"></span><a href="/Download-Files/">Download Files</a></span></p>
~~~

> When customizing string splitting behavior, always keep your translators in mind. Each string is translated separately in the Smartling Translation Interface. Lowering the number of words you need to translate using methods like `sl_split` may risk confusing translators and possibly lowering your translation quality.

## Variations
* `Sl_nosplit` - forces Smartling not to create separate strings where it normally would. For example, applying `sl_nosplit` to a `<ul>` tag would capture a single string for an entire list.
