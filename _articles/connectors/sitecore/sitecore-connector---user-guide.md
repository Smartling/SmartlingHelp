---
layout: article
title: Sitecore Connector - User Guide
draft: false
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


After installing and configuring the module, you can schedule translation on **Smartling** tab.

![](/uploads/versions/sitecore_sl_tab---x----576-78x---.jpg)

## Schedule translation

**1)** Click **Upload** and select target languages.
<br>Only languages that contain Project Id and API Key information display.

![](/uploads/versions/sitecore_bulk_submit---x----360-351x---.jpg)

**2)** Select the items you want to translate.
<br>Schedule translation of individual items by deselecting **Translate Subitems**.

![](/uploads/versions/sitecore_root_source---x----432-599x---.jpg)

Before scheduling the translation, you can review the changes

![](/uploads/versions/sitecore_review_changes---x----432-599x---.jpg)

When the items are queued for translation in Smartling, Sitecore displays a confirmation.

![](/uploads/versions/sitecore_confirm---x----432-285x---.jpg)

## Review status of translations

From the Start Menu, select **Translation Status**.

![](/uploads/versions/sitecore_start_menu---x----360-588x---.jpg)

You can also download items directly from the queue.
<br>This will not affect Smartling and will create a new version of the item (partially translated) in Sitecore.

![](/uploads/versions/sitecore_submissions---x----576-349x---.jpg)

A Content Editor Warning displays status, and a red light indicates that the item changed after it was sent to translation.

![](/uploads/versions/sitecore_content_status---x----360-244x---.jpg)

![](/uploads/versions/sitecore_content_folders---x----144-142x---.jpg)

> If you want auto-translated items to move to a specific workflow state use the Target Workflow State field in the module settings.

## Reviewing Translations

The Smartling connector automatically downloads translations and creates a new version of items, but by default new translated versions are not available. You should manually publish all items, and after this you can switch your site to another language.

If your site doesn't have a language selector, you can do this manually by adding parameter to the URL:

`?sc_lang=ru-RU`

## Translating Media Items

You can use the connector to translate files from the media library. They will need be sent to a separate Smartling project.

![](/uploads/versions/sitecore_media---x----504-275x---.jpg)

**Note**: As the item and the document associated with it will be sent to the different Smartling projects, they can be downloaded separately. Watch the **Content Type** column when downloading translations manually via Smartling Submissions application.

By default Sitecore creates Unversioned media items. Templates of such media items contain shared fields and cannot be translated. In this case you can save translations to another tree and cannot save fields translations or translated files to the original node. But you can change this behavior by using Versioned media items templates. Sitecore gives you control which templates to use for media items. You can find it in **Web.config**.

~~~
<!-- MEDIA - UPLOAD AS VERSIONABLE AS DEFAULT
    This setting controls if uploaded media is versionable by default or not.
-->
~~~