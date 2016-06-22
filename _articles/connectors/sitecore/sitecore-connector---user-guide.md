---
layout: article
title: Sitecore Connector - User Guide
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


After installing and configuring the module, you can schedule translation on **Smartling** tab.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200520896/sitecore_sl_tab.jpg)

## Schedule translation

**1)** Click **Upload** and select target languages.
<br>Only languages that contain Project Id and API Key information display.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200558268/sitecore_bulk_submit.jpg)

**2)** Select the items you want to translate.
<br>Schedule translation of individual items by deselecting **Translate Subitems**.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200558288/sitecore_root_source.jpg)

Before scheduling the translation, you can review the changes

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200601687/sitecore_review_changes.jpg)

When the items are queued for translation in Smartling, Sitecore displays a confirmation.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200520936/sitecore_confirm.jpg)

## Review status of translations

From the Start Menu, select **Translation Status**.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200603153/sitecore_start_menu.jpg)

You can also download items directly from the queue.
<br>This will not affect Smartling and will create a new version of the item (partially translated) in Sitecore.

![](https://smartling.zendesk.com/hc/en-us/article_attachments/200603173/sitecore_submissions.jpg)

A Content Editor Warning displays status, and a red light indicates that the item changed after it was sent to translation.

![](/hc/en-us/article_attachments/200526316/sitecore_content_status.jpg)

![](/hc/en-us/article_attachments/200604903/sitecore_content_folders.jpg)

> If you want auto-translated items to move to a specific workflow state (other than initial in their workflow) use [Target Workflow State](){: .cc-active} field in the module settings.

## &gt;Reviewing Translations

The Smartling connector automatically downloads translations and creates a new version of items, but by default new translated versions are not available. You should manually publish all items, and after this you can switch your site to another language.

If your site doesn't have a language selector, you can do this manually by adding parameter to the URL:

`?sc_lang=ru-RU`

## Translating Media Items

You can use the connector to translate files from the media library. They will be sent to a separate Smartling project. You can setup this project under the **Media** section in [Settings](/hc/en-us/articles/202088268#configure).

![](/hc/en-us/article_attachments/200603097/sitecore_media.jpg)

**Note**: As the item and the document associated with it will be sent to the different Smartling projects, they can be downloaded separately. Watch the **Content Type** column when downloading translations manually via Smartling Submissions application.

By default Sitecore creates Unversioned media items. Templates of such mediatimes contain shared fields and cannot be translated. In this case you can save translations to another tree and cannot save fields translations or translated files to the original node. But you can change this behavior if you will use Versioned mediaitems templates. Sitecore gives you control which templates to use for mediaitems. You can find it in **Web.config**.

~~~
<!--&nbsp; MEDIA - UPLOAD AS VERSIONABLE AS DEFAULT
&nbsp; &nbsp; &nbsp; This setting controls if uploaded media is versionable by default or not.
-->
~~~