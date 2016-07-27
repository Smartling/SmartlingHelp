---
layout: article
title: Adobe AEM Touch Connector - Version History
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
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


## Version 2.1.0 - 03/25/2016 (current)

### Improvements & Fixes:

* Improved string sharing behavior for the case where multiple versions of the same page are being translated at the same time. As of the version 2.0.0 strings have been shared within a page, but if the page was copied into one or more [launches](https://docs.adobe.com/docs/en/aem/6-1/author/site-page-features/launches.html) then strings in these copies were considered completely different. As of 2.1.0, strings are shared among the page and all its versions in different launches.
* The **connector package has been renamed** from "Smartling Translation Connector" to the "Smartling-Translation-Connector". We recommend **to manually remove** the old package after installation.


## Version 2.0.0 - 12/11/2015

### Improvements & Fixes:

The **string sharing** behavior in Smartling TMS **has been significantly changed** in this release:

* Identical strings on different pages are treated as unique strings in Smartling.
* If a page was submitted more than once as part of different Jobs, Smartling continues to share translations along all copies of the page.
* Users can now control how Smartling should treat identical strings on the same page. Duplicates can be ingested as a single string or as unique strings. This feature is disabled by default but can be enabled from the Configuration Console.


![](/uploads/versions/3776b166-a017-11e5-8c10-6c2ae28db3de---x----1738-476x---.png)