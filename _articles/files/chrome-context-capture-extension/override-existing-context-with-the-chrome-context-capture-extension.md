---
layout: article
title: Override Existing Context with the Chrome Context Capture Extension
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
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
---

By default, the Smartling Chrome Content Capture Extension will not overwrite existing context for a string. To replace context for a string, either use the Reset Context action in the list view before using the Extension, or use the [Select Strings]() function to override existing context for selected strings.

You can also control context override in the Chrome Context Capture Extension by marking your site code with Smartling HTML classes. This is especially useful when automating. To override context for an entire page, just add the two classes "sl-override-context sl-translate" to the page's HTML tag.

~~~
<html>
~~~

###To override context for specific elements on the page:

**(1)** Add the "sl-notranslate" class to the HTML tag of the page.

**(2)** Add the two classes "sl-override-context sl-translate" to the elements you want to override context for. Any nested child elements will also be overwritten.
