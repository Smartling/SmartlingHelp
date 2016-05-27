---
layout: article
title: Automating the Chrome Context Capture Extension
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

The Chrome Context Capture Extension can be automated to capture context for an entire website.

The Automation Tool is only available for Application Resource Files projects.

By default the Chrome Context Capture Extension will not override existing context.

###To use the built-in Automation Tool:

**(1)** In Chrome, navigate to **Chrome>Preferences>Extensions** and click **Options**.

![](/hc/en-us/article_attachments/207714787/Extensions.png)

**(2)** Select **Automation Tool**

![](/hc/en-us/article_attachments/207714907/Smartling_Context_Snapshot_Options.png)

**(3)** Drag your site’s sitemap.xml file into the marked area.

![](/hc/en-us/article_attachments/207648988/Smartling_Context_Snapshot_Options.png)

**Note:** In your sitemap.xml file you can create a <url-list> node populated with a list of URLs you wish to contextualize. You can also preload your Project UID and API key by adding this code at the top of your sitemap:

    <smartlingconfig>  <apikey>#######</apikey>  <projectUID>#######</projectUID></smartlingconfig>

You can download a custom sitemap template [here]().

**(4)**Set up the automation tool:

![](/hc/en-us/article_attachments/200946127/Smartling_Context_Snapshot_Options.png)

**Project UID** - Can be found on the Dashboard at **Project Settings>API.  
****API Key** - Can be found on the Dashboard at **Project Settings>API.  
****Wait** - Instructs the Chrome Context Capture Extension to wait X milliseconds after loading a page to take a snapshot. Use this feature if you have javascript that executes on loading a page.  
**Advanced** - allows you to execute custom javascript on each page before taking a snapshot.  
**URL Filter** - Filters URLs by text. Snapshots will only be taken of URLs matching your filter text.  
****Test mode** -** If checked, the Chrome Context Capture Extension will crawl the selected urls, but will not take snapshots. You can also click test next to any URL to view a preview snapshot for that URL.

**(5)** Click **Start**. The Automation Tool will capture a snapshot of each selected URL and match the snapshots to any matching strings in your project.