---
layout: article
title: "When content doesn't need to be translated"
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition:
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


Although we are in the business of translation, we’ll be the first to point out that not all of your content needs, or even should be translated. As a matter of fact, there are few different ways to exclude or eliminate content from the translation process, before or after it has been captured.&nbsp;

#### Option #1 - Exclude

**Project types availability** - Global Delivery Network, Files, and Connectors

**What you need to know about excluding** - Excluded strings are removed from the translation process entirely, never displayed to your translation resource team. Once your content is ready to be published, the excluded strings is published in its original form.

**When should you exclude content** - Use Exclude if you don’t want a string translated but still need it displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

![](/uploads/versions/exclude-1---x----1176-654x---.png)

#### Option #2 - &lt;notranslate&gt; tag

**Project types availability** - Global Delivery Network

**What you need to know about the &lt;notranslate&gt; tag**- When using the &lt;notranslate&gt; tag, content contained in the tag is eliminated from the translation process and appear unchanged from the original language.

**When should you use the &lt;notranslate&gt; tag**- Use&nbsp; if you don’t want a set or class of strings translated but still need them displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

&nbsp;If you know what HTML element the strings are being ingested from, and the element has a unique class or ID, you can simply apply the no translate rule to that specific class or ID via the GDN rule configuration.&nbsp;

![](/uploads/versions/notranslate-1---x----1671-1038x---.png)