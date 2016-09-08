---
layout: article
title: Inline Content Authorization
draft: false
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


The Smartling Translation Interface (TI) provides inline translation tools to help Account Owners and Project Managers authorize content for translation while browsing a site. This can be useful in cases where you have a Global Delivery Network (GDN) project with a significant number of strings in your authorization queue, and it’s difficult to find the strings you want translated. By using the inline translation tools in the contextual view of the Translation Interface, you can select and authorize individual strings across all available languages in the project. You can even authorize strings after your authorization queue reaches its limit.

## Access inline translation tools

**1)** Browse to **Global Delivery Network &gt; Domains** and for the Domain you would like to edit, click **Translate in Context**.

![](/uploads/versions/inline-authorization---x----1802-1328x---.png)

**2)** This displays the localized site with `?smartling_editmode=1` appended to the URL.

**3)** In the contextual view, browse over a string of text and from the drop-down menu, select **Authorize for Translation**.

![](/uploads/versions/inline-auhtorization-2---x----1086-778x---.png)

You can also click **Authorize & Next** to advance to the next string that is available for approval.

By default, this will send the content to the default Workflow for all locales. You can authorize select locales by clicking **Authorization Settings** and checking the languages you want to authorize.

![](/uploads/versions/inline-authorization-3---x----598-264x---.png)

> To choose a non-default Workflow, do not use the inline authorization tool. Instead, [authorize the content from the list view](/support/articles/authorize-content-from-the-list-view/).

