---
layout: article
title: Smartling Bot
draft: true
Applies to:
  GDN: true
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


Smartling uses bots to capture GDN content and create context for strings in Smartling projects. Occasionally, these service can place a considerable load on your site. To improve performance, it is recommended that you whitelist all Smartling User-Agents.

Smartling bot User-Agent headers take the following form:

~~~
Mozilla/5.0 (compatible; SmartlingBot/[XX]; +http://support.smartling.com/hc/en-us/articles/204443157)
~~~

where `/[XX]` is a suffix denoting the particular service performed by the bot.

For more information or to contact smartling, [visit our support site](/).