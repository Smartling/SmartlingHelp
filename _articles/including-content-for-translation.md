---
layout: article
title: Including Content for Translation
draft: true
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
migration-checklist:
  internal-links: false
  images: false
  FAQs: false
  related: false
---
You may want to only translate content specifically tagged for translation. In this case, Smartling can setup your site to not ingest any content by default. In these cases, you need to tag the content to translate with the “translate” class, and if necessary, nest the “notranslate” class within these tags to exclude any dynamic elements. For example:
```<div id="1" class="translate">Some content   <div id="2" class="notranslate">Dynamic content</div>   </div>```

Smartling supports the HTML5 "translate" attribute, so you can also include content tagged with the attribute translate="yes".