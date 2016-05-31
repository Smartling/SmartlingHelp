---
layout: article
title: 'Content Capture: String Ingestion Limits'
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


When you ingest content into Smartling, you may occasionally reach the limit of content that can be captured for your project:

**Global Delivery Network Projects**

Smartling limits ingestion to **10,000 strings** to the authorization queue. Smartling imposes these limits to avoid overloading the dashboard with unmanageable amounts of content for translation.

**Files-Based Projects**

Files projects do not have a limit of strings that can be ingested, but we do [limit the size of files that can be uploaded](/hc/en-us/articles/201209266#Limits).

**If you have reached the limit of content that can be ingested:**

*   Authorize, exclude, or delete strings so that new strings can be captured.
*   For Global Delivery Network Project, use [in-context authorization](/hc/en-us/articles/202297526-Inline-Content-Authorization-).
*   Contact your Client Services Manager