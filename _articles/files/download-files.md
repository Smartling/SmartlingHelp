---
layout: article
title: Download Files
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


Smartling allows you to download files, individually or [in bulk]().

## To download individual files:

1.  Navigate to **Content>Files**.
2.  Select the file to download.
3.  Mouse over the target language.
4.  Select from one of the file download options.

![](/hc/en-us/article_attachments/206028718/Smartling___Manage_Files.png)

## File Download Options

*   **Download (published translations)** : Download the file with all of the published translations (this includes [pre-published]() translations).
*   **Download (pseudo translations)** - The pseudo translation file contains the original strings with added characters so that it can be used for QA or layout purposes.
*   **View pending translations** - Content owners  are re-directed to the Content view, where they  can review the latest status of content still being translated or content still in the translation workflow.
*   **Download (pending translations)** - Download the file with the latest saved translations even if they have not been published or pre-published.

## Download All (CSV only)

For CSV files, you may download translations for all locales in a single file by selecting **Download translations (all locales)**. This option requires some preparation of the original file. See our [Supported Files](https://docs.smartling.com/display/docs/Supported+File+Types#SupportedFileTypes-csv) documentation for more information on downloading CSV files.

![](/hc/en-us/article_attachments/206028748/Smartling___Manage_Files.png) 

### To download multiple files as a zip:

**(1)** Switch the **Files** window to table view.

**(2)** Select the files you want to download and, from the **Actions** menu, select **Download Selected**.

![](/hc/en-us/article_attachments/206028788/Smartling___Manage_Files.png)

**(3)** Select the download type from the drop-down and the languages you want to download.

**(4)** Choose how to organize the downloaded files. You can download a zip file organized into folders by language, or a single folder, with the language added to each file name. Click **Download.**

 ![](/hc/en-us/article_attachments/206028798/Smartling___Manage_Files.png)

**(4) **A zip-file containing files will begin downloading. This may take some time, depending on the number of files. You can now navigate away from the Files page without interrupting the download. The zip file will be organized into directories according to language and the URI of each file.

## Automate

*   Our API can be used directly with our SDKs, BASH shell script or source code repository connectors.