---
layout: article
title: Magento Connector - User Guide
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


Once you have [set up the Magento Connector](){: .cc-active}, you can send items to Smartling for translation, either individually, or in bulk, and download completed translations to your translated stores.

## Translate a single item

**(1)**&nbsp;From the item page, go to **Smartling Translations**, select the languages you want to translate into and click **Send to Smartling**.

![](/uploads/versions/image02-1---x----682-609x---.png)

**(2)** The content will be sent to Smartling the next time the **upload_bulk_content** task is run. To run the task immediately, go to **System &gt; Scheduler**, check **upload_bulk_content** and select **Run now** from the **Actions** menu.

![](/uploads/versions/image04-1---x----944-330x---.png)

## Translate Items in Bulk

**(1)** Go to **Smartling** &gt; **Smartling Bulk Submit**.

**(2)** Select a content type, check the languages you want to translate into and click **Continue**.

![](/uploads/versions/image00-1---x----586-341x---.png)

**(3)** Select the items you want to translate and click **Continue**.

![](/uploads/versions/image03-1---x----1059-616x---.png)

## Manually download translation

**(1)** Go to **Smartling &gt; Submissions.**

**(2)** You will see a list of all items that have been uploaded to Smartling, with a progress indicator for each item.

**(3)** Click **Download** next to any item, or select multiple items and choose **Download** from the **Actions** menu.

The translated content will be added to your translated stores.

![](/uploads/versions/image01-2---x----1331-617x---.png)