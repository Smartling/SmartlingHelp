---
layout: article
title: Capture GDN Content
draft: true
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


Before strings can be reviewed and translated as part of the Smartling Global Delivery Network (GDN), you must capture the content you want translated from the current source site into Smartling. You can do this manually by viewing a language URL, or by using a [web crawler](http://en.wikipedia.org/wiki/Web_crawler) to systematically browse the pages that contain source content that you want to translate. You must browse the entire site as Smartling does not 'crawl' the site. Some tools, such as [sitesucker](http://sitesucker.us/mac/mac.html) will crawl authenticated (password-protected) pages, but typically will not capture content that requires user interaction though submissions.

Smartling limits ingestion to 10,000 strings that haven't been authorized or translated. Smartling imposes these limits to avoid overloading the dashboard with unmanageable amounts of content for translation.

> If javascript ingestion is enabled for the project, you must approve javascript strings.

## Manually ingest content

**1)** At **Global Delivery Network** &gt; **Domains**, click the domain and for the language you want to ingest, click **Translate in context** to launch your site.

![large](/uploads/versions/smartling___manage_domains-2---x----897-702x---.png)

**2)** Browse each page on the site that you want to translate, and Smartling ingests this content and displays it under **Translations** &gt; **Awaiting Authorization**.

**Note:** You can also access the **Translate in Context** screen from the List View by holding the mouse over any URL.

![](/uploads/versions/smartling___translations_management_and_json_-_smartling_developer_documentation---x----1018-668x---.png)

## Ingest content using a web crawler

Use a web crawler to specify the language site URLs (such as fr.mysite.com or de.mysite.com) you want to translate using the Smartling GDN.

There may be a short delay while Smartling captures the content. Once the content is captured, you can select the strings you want to approve for translation. For more information, see [Managing Content](){: .cc-active}.

## Authorize Strings

Once you have captured your content, you must [authorize it for translation](){: .cc-active} for it to remain in the Smartling Dashboard and not expire. Unauthorized strings captured from your website will be removed from the authorization queue after four days.