---
layout: article
title: Using the Chrome Capture Extension with Browser Automation Software
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


If you use browser automation software - such as Selenium, PhantomJS - for testing purposes, you can set up the Chrome Context Capture Extension to integrate with your existing test scripts and take a snapshot and any point in a script.

### To use the Chrome Context Capture Extension with browser automation:

**(1)** In **Chrome&gt;Preferences&gt;Extensions**, find the Chrome Context Capture Extension, and click **Options**.

**(2)** Check **Detect Automation**.

![medium](/uploads/versions/smartling_context_snapshot_options---x----719-771x---.png)

**(3)** To take a snapshot during automation, add this code to your script.

`javascript fireSmartlingChromeExtension({ "projectId": "projectUID", "apiKey":"project-api-key", "callback":function(submissionData){ //snapshot is submitted, move on } });`

## Override Existing Context

By default, the Chrome Context Capture Extension will not override existing context, but this behavior can be customized by using your automation script to apply Smartling HTML classes to a page or to specific elements in the DOM.

### To override context for an entire page:

Add the two classes "sl-override-context sl-translate" to the page's HTML tag.

### To override context for specific elements on the page:

**(1)** Add the "sl-notranslate" class to the HTML tag of the page.

**(2)** Add the two classes "sl-override-context sl-translate" to the elements you want to override context for. Any nested child elements will also be overwritten.