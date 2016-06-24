---
layout: article
title: Wordpress Connector - User Guide
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


Once you have installed and configured the Smartling plugin, you can send content to Smartling, download translations to your translated sites and monitor the status of your submissions.

## Translate an individual Post, Page, Category, or Tag

Translation for individual pieces of content is handled by the Smartling Widget, displayed in the top-right corner of the window

![](/uploads/versions/edit_post_-_my_personal_site_-_wordpress---x----1115-648x---.png)

> The Smartling Widget only becomes functional when the post is saved.

Submit content to Smartling

Select all target languages as you want translated and click **Send to Smartling.**

![](/uploads/versions/2bdcc9ce-d95e-11e4-8ad5-a40f3492135b_png__999-907_---x----281-259x---.png)

After content has been submitted, the Smartling Widget will display a progress indicator for each language. If you want to add additional languages or if the content of the post has changed, click **Send to Smartling** again to resubmit.

![](/uploads/versions/88ae825a-d95e-11e4-8338-783a32b33686_png__996-903_---x----285-250x---.png)

Click **Download** to get translations from Smartling and apply them to your translated sites.

## Translate Content in Bulk

To manage large amounts of content at once, use the Bulk Submit page to see all pages, posts, categories and tags.

![](/uploads/versions/d0550700-d95e-11e4-9b7e-4845cc92c1aa_png__328-199_---x----331-196x---.png)

The Bulk Submit page shows detailed information for every item under a content type, including the publication status, when the item was last updated, and a list of current translation locales.

![](/uploads/versions/425bc3de-d95f-11e4-956d-f3270881fa93_png__994-675_---x----987-674x---.png)

**(1)** Select the content type.
<br>**(2)** Select your target languages
<br>**(3)** Select the content to submit.
<br>**(4)** Click **Send to Smartling**.

> When using bulk submit, there may be a slight delay before the content appears in the Smartling Dashboard.

## Monitoring Smartling Submissions in the Submissions Board

The Submissions board shows every item that has been submitted to Smartling.

![](/uploads/versions/posts_-_my_personal_site_-_wordpress---x----324-142x---.png)

**(1)** Filter by type and status.
<br>**(2)** Search by keyword.
<br>**(3)** Resend or Download any individual item by clicking the links revealed by mouseover.
<br>**(4)**&nbsp;Enqueue selected items for Upload or Download using the **Bulk Actions** menu.

![](/uploads/versions/submissions_board_-_my_personal_site_-_wordpress---x----1033-702x---.png)

> The **Enqueue for Upload/Download** bulk actions add the selected items to a queue of items that will be uploaded by a Cron task. This is to stop large uploads from slowing down your Wordpress instance.

## Lock a Translated Post

If you want to prevent a translated post from being affected by changes to the original post, you can lock the translation.

**(1)** Switch to the dashboard for your translated site from&nbsp;**My Sites &gt; Network Admin &gt; Sites**.

![](/uploads/versions/sites_-_network_admin__smartling_sites_-_wordpress---x----1272-615x---.png)

**(2)** Select the post you want to lock and check **Translation Locked** in the **Publish&nbsp;**widget.

![](/uploads/versions/edit_post_-_my_french_company_site_-_wordpress---x----291-356x---.png)