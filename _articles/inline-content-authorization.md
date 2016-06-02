---
layout: article
title: Inline Content Authorization
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
---


The Smartling Translation Interface (TI) provides inline translation tools to help Account Owners and Project Managers authorize content for translation while browsing a site. This can be useful in cases where you have a Global Delivery Network (GDN) project with a significant number of strings in your authorization queue, and it’s difficult to find the strings you want translated. By using the inline translation tools in the contextual view of the Translation Interface, you can select and authorize individual strings across all available languages in the project. You can even authorize strings after your authorization queue reaches its ingestion limit.

**To access the inline translation tools**:

1.  Browse to **Global Delivery Network** > **Domains** and for the Domain you would like to edit, click **Translate in Context**.  

 

    This displays the localized site with **?smartling_editmode=1** appended to the URL.  

2.  In the contextual view, browse over a string of text and from the drop-down menu, select **Authorize for Translation**.  



    You can also click **Authorize & Next** to advance to the next string that is available for approval.  

    By default, this will send the content to the default Workflow for all locales. You can authorize select locales by clicking **Authorization Settings** and checking the languages you want to authorize.**  

    ![](/hc/en-us/article_attachments/204297057/Smartling_Translation_Management_System.png)  

    **To choose a non-default Workflow, do not use the inline authorization tool. Instead, [authorize the content](/hc/en-us/articles/201012778-Authorize-content-for-translation) at **Translations>Awaiting Authorization**.

**See also**:

*   [Contextual View](/hc/en-us/articles/201574473-Contextual-view)