---
layout: article
title: SmartMatch Settings
draft: true
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

SmartMatch is a process that occurs every time you add new content into Smartling. It compares new strings against existing translations in your [Translation Memory]() to automatically apply translations to strings you've translated before.

SmartMatch has six levels of exactness for a match and allows you to select a target workflow step for each level. Strings are SmartMatched, will be added to the workflow steps you have selected. Settings for more exact matches take precedence.

This allows you to control how carefully you check SmartMatched strings. For example, you may wish to send complete matches straight to Published, but send matches with different whitespace or HTML tags to a revision step to be checked. You also have the option of sending SmartMatched strings to the first revision step and pre-publish them. This gets the translations live on your site, or present in translated file downloads, straight away, but gives you the opportunity to review before making them final.

SmartMatch settings are managed as part of a [Leverage Configuration]().

You can configure SmartMatch settings at six levels of certainty:

![](/hc/en-us/article_attachments/205893168/Smartling___Translation_Memory.png)

**100% match with variants matching**
The entire string, including text, whitespace, HTML tags and variant metadata matches.

**100% match without variants matching**
The entire content of the string, including text, whitespace & HTML tags matches, but the variant metadata is different.

**100% match without whitespace matching**
The text of the strings matches, but there may be whitespace differences.

**100% match without markup matching**
The text of the string matches, but may have different HTML markup tags.

**100% match ignoring case**
The text of the string matches, but case may be different.

**Match from any combination of the above**
The text of the string matches, but variant metadata, whitespace, markup and case may be different.  

##The SmartMatch Report

To access your SmartMatch Report go to **Content** > **SmartMatch**. To run SmartMatch manually, select **Re-Match All Strings**.

![](/hc/en-us/article_attachments/205908917/Smartling___SmartMatch_Report.png)