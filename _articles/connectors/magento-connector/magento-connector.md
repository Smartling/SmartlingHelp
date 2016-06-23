---
layout: article
title: Magento Connector - Install and Configure
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


Smartling Magento Connector allows you to upload your Magento content to Smartling and download translations to your Localized Stores. Ask your Smartling Customer Service representative for information about pricing and help installing the package.

## Create a Smartling Settings Profile

This step gives the connector the necessary details to use Smartling’s API to upload content and download translations.

**(1)** Go to **System** &gt; **Smartling Settings** &gt; **Settings Profile** and click **Add New**

**(2)** Choose your original website:

![](/uploads/versions/image07---x----687-166x---.png)

**(3)** Enter your Smartling project details and locale codes for each translated website.

![](/uploads/versions/image00---x----599-610x---.png)

## Create Localization Folders

**(1)** Create folders for each locale under /app/locale/  in Magento folder.

![](/uploads/versions/image04---x----359-266x---.png)

**(2)** In your Magento dashboard, go to **System** &gt; **Manage stores**.

**(3)** Select each **store view** and set the **Localization Directory** to the folder you created.

![](/uploads/versions/image01-1---x----573-312x---.png)

## Configure attributes for translation

The Magento Connector can translate Products, Categories, Attributes, CMS Pages, CMS Static Blocks and Localization Files.

For Products, Categories, CMS Pages and CMS Static Blocks we have to check attributes to translate:

**(1)** In the Magento Dashboard, go to **System &gt; Smartling Settings &gt; Fields for Translation** and select a content type.

![](/uploads/versions/image02---x----474-594x---.png)

**(2)** You will see a complete set of attributes for your chosen content type. Select the attributes you want to send to Smartling for translation. Unchecked attributes will remain in their original form in all translated stores.

![](/uploads/versions/image05---x----668-458x---.png)

## Set up the Scheduler

Smartling Magento Connector uses three scheduled tasks to manage content.

**(1)** In the Magento dashboard, go to **System &gt; Scheduler**.

**(2)** Use a standard Cron Expression (for example, \*/5 \* \* \* \*  means ‘every five minutes’) to set the frequency for each of these three tasks.

* **upload_bulk_content** - Uploads all content you have selected to upload to Smartling.
* **check_statuses** - Updates the translation status of all content currently in progress.
* **check_files** - updates the list of content displayed in the Smartling Submissions view.


![](/uploads/versions/image06---x----963-320x---.png)

## Logging and testing [optional]

**(1)** From the Magento dashboard, go to **System** &gt; **Configuration** page and select the **Developer** tab.

**(2)** Under **Log Settings**, set **Enabled** to **Yes** and specify a log file name.

### Enable test mode

Under **Smartling Settings**, set **Test Mode** to **Yes.** Test Mode uploads content as soon as it is submitted.

![](/uploads/versions/image03---x----734-642x---.png)