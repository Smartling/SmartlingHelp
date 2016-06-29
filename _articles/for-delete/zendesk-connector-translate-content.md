---
layout: article
title: Zendesk Connector Translate Content
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: true
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


The Zendesk Connector allows you to request translation of Articles and Dynamic Content and return translated content to Zendesk.

Once you have requested translation for an article or item of dynamic content, Smartling will automatically detect future changes to that article and upload new strings to Smartling for translation.

**Note:**

* If your content contains internal links, for example, links to other articles in your Help Center, these will be automatically changed in your translated file to point to the correct language. For example '&lt;a href="/hc/en-us/articles/204372677-Summary"&gt;' will become '&lt;a href="/hc/fr-FR/articles/204372677-Summary"&gt;' in your translated French article.
* It is possible to swap images in your translated articles. See [Localize Images](/hc/en-us/articles/218450728) for details.


**To request translation:**

**(1)** From the Smartling Dashboard, navigate to **Zendesk &gt; Translate Content**. You will see a list of all available articles in Zendesk, including the date each article was last modified. The list will include both translated and untranslated content.

**Note:** The list will include both draft and published content. You can request translations of draft content, but Context is only available for published content. We recommend marking articles that require translation with the [Outdated flag in Zendesk](/hc/en-us/articles/216506578).

**(2)**You can switch between Article, Section, Category and [Dynamic Content](https://support.zendesk.com/hc/en-us/articles/203663356) from the drop-down next to **Translate Article**.

**(3)** Select the items you want to translate and click **Request Translation** and choose your target languages.

![](/uploads/versions/zendesk-translate1---x----1246-721x---.png)

For knowledge base articles, the Connector will also generate context for translators - showing them a real-time preview of what their translations will look like in the knowledge base:

![](/uploads/versions/zendesk-translate2---x----981-795x---.png)

**Export Translations to Zendesk**

Completed translations will be exported to Zendesk automatically. You can also push translations manually. If there is no translation for a string, the original string will be exported to Zendesk when done manually. You may wish to manually push untranslated source content to your translated Help Center sites while working on translations.

**To export translations manually:**

From the Smartling Dashboard, navigate to **Zendesk Translation Progress**. Select the articles you want to export back to Zendesk and click **Export to Zendesk**

![](/uploads/versions/zendesk-translate3---x----1292-810x---.png)