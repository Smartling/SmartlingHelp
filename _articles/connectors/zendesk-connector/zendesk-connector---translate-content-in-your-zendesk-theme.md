---
layout: article
title: Zendesk Connector - Translate Content in Your Zendesk Theme
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: true
wistia:
  video: false
  id:
related-articles:
  - article: automatic-machine-translation
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


Smartling uses the Zendesk API to retrieve Articles and Dynamic Content from your Zendesk account for translation. Text that is part of your Zendesk Theme is not directly available via the Zendesk API.

However, you can make your Theme content available for translation in Smartling by replacing text in your theme with Zendesk Dynamic Content.

<div class="info">
See the <a href="https://support.zendesk.com/hc/en-us/articles/203661426-Change-your-Help-Center-design-using-Dynamic-Content">Zendesk documentation</a> for more information about Dynamic Content.
</div>

**1)** Copy the text you want to localize from your Zendesk theme.

![](/uploads/versions/download-16---x----548-415x---.png)

**2)** In your Zendesk Dashboard, create a new piece of Dynamic Content and paste in your theme text.

![](/uploads/versions/smartling-dev---agent---x----1037-666x---.png)

**3)** Replace the text in your Zendesk theme with your new Dynamic Content tag.

![](/uploads/versions/smartling-dev-1---x----547-396x---.png)