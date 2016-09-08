---
layout: article
title: Zendesk Connector - Translate Content
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
wistia:
  video: false
  id:
related-articles:
  - article: automatic-machine-translation
further-reading:
  - link:
    text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


The Zendesk Connector allows you to request translation of Articles and Dynamic Content and return translated content to Zendesk.

Once you have requested translation for an article or item of dynamic content, Smartling will automatically detect future changes to that article and upload new strings to Smartling for translation.

<div class="info"><strong>Notes:</strong><ul><li>If your content contains internal links, for example, links to other articles in your Help Center, these will be automatically changed in your translated file to point to the correct language. For example <code>&lt;a href="/hc/en-us/articles/204372677-Summary"&gt;</code> will become <code>&lt;a href="/hc/fr-FR/articles/204372677-Summary"&gt;</code> in your translated French article.</li><li>It is possible to swap images in your translated articles. See <a href="/support/articles/zendesk-connector-localize-images/">Localize Images</a> for details.</li></ul></div>

## Request translation

**1)** From the Smartling Dashboard, navigate to **Zendesk &gt; Translate Content**. You will see a list of all available articles in Zendesk, including the date each article was last modified. The list will include both translated and untranslated content.

> The list will include both draft and published content. You can request translations of draft content, but Context is only available for published content. We recommend marking articles that require translation with the [Outdated flag in Zendesk](){: .cc-active}.

**2)** You can switch between Article, Section, Category and [Dynamic Content](){: .cc-active} from the drop-down next to **Translate Article**.

**3)**&nbsp;Select the items you want to translate. If you have a lot of items in the list try using the Section/Category filter to narrow down the list. Check the articles, click&nbsp;**Request Translation**&nbsp;and choose your target languages.

![](/uploads/versions/smartling___translate_content_and_zendesk_connector_translate_content_-_smartling_help_center---x----1377-518x---.png)

For knowledge base articles, the Connector will also generate context for translators - showing them a real-time preview of what their translations will look like in the knowledge base:

![](/uploads/versions/download-15---x----1246-721x---.png)

## Export Translations to Zendesk

Completed translations will be exported to Zendesk automatically. You can also push translations manually. If there is no translation for a string, the original string will be exported to Zendesk when done manually. You may wish to manually push untranslated source content to your translated Help Center sites while working on translations.

### Export translations manually

From the Smartling Dashboard, navigate to **Zendesk &gt; Translation Progress**. Select the articles you want to export back to Zendesk and click **Export to Zendesk**.