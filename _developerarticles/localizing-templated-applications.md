---
layout: article
title: Localizing Templated Applications
categories:
  - supported-file-type
dev: true
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Many modern web stacks use HTML-like templates to compile a browser view. This can happen on the server or client side. HTML-like template styles include [Angular](https://angularjs.org/), [Backbone](http://backbonejs.org/), [Ember](http://emberjs.com/), [Blaze,](http://guide.meteor.com/blaze.html) [Handlebars](http://handlebarsjs.com/), [EJS](http://www.embeddedjs.com/), etc. Because these files look a lot like HTML, and sometimes even have a `.html` extension, you may want to upload them to Smartling as HTML files and try to translate them. However, Smartling does not support parsing HTML-like templates as HTML files.

If you are localizing a templated application, the best practice is to externalize ALL strings into a resource file and translate that resource file, rather than translating the template. Libraries are available for most web platforms to pass strings to your templating engine in the correct language, according to client IP address or the user's stated preference. This is optimal both for translation with Smartling and for performance and scalability of your localized app.