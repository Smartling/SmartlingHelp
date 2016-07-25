---
layout: article
title: Pseudo translations
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


Translating a string can often make it longer, which can cause UI problems if the translation doesn't fit the available space.

Smartling gives you the option of downloading a file with 'pseudo translations' - which are simply the original strings with extra characters added - to increase the length of each string. Pseudo translations allow you to test your UI's tolerance for longer strings without having to wait for translation to be completed.

By default, downloading pseudo translations increases the length of the original strings by 30 percent.

## Customizing Pseudo Translations

If you want a higher rate of inflation that the standard, you can set a custom rate of inflation, between 50 and 100 percent, by using file integration or an API directive. Check Smartling's [Supported File Types](http://docs.smartling.com/pages/supported-file-types/) information for your files to see if the 'pseudo_inflation' directive is supported.