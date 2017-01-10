---
layout: article
title: Download Files
---


Smartling allows you to download files, individually or in bulk.

## Download individual files

**1)** Navigate to **Content &gt; Files**.

**2)** Select the file to download.

**3)** Mouse over the target language.

**4)** Select from one of the file download options.

![](/uploads/versions/smartling___manage_files---x----1237-830x---.png)

### File Download Options

* **Download(published translations)**:

  Download the file with all of the published translations (this includes [pre-published](/knowledge-base/articles/manage-content-in-translation-content-owners/#pre-publish){: .cc-active} translations).
* **Download (pseudo translations)** - The pseudo translation file contains the original strings with added characters so that it can be used for QA or layout purposes.
* **View pending translations** - Content owners&nbsp; are re-directed to the Content view, where they&nbsp; can review the latest status of content still being translated or content still in the translation workflow.
* **Download (pending translations)** -

  Download the file with the latest saved translations even if they have not been published or pre-published.


## Download All (CSV only)

For CSV files, you may download translations for all locales in a single file by selecting&nbsp;**Download translations (all locales)**. This option requires some preparation of the original

file. See our [Supported Files](https://docs.smartling.com/display/docs/Supported+File+Types#supportedfiletypes-csv) documentation for more information on downloading CSV files.

![](/uploads/versions/smartling___manage_files-1---x----1012-542x---.png)

### Download multiple files as a zip

**1)**&nbsp;Switch the&nbsp;**Files** window to table view.

**2)** Select the files you want to download and, from the&nbsp;**Actions** menu, select&nbsp;**Download Selected**.

![](/uploads/versions/smartling___manage_files-2---x----1245-532x---.png)

**3)** Select the download type from the drop-down and the languages you want to download.

**4)**&nbsp;Choose how to organize the downloaded files. You can download a zip file organized into folders by language, or a single folder, with the language added to each file name. Click&nbsp;**Download.**

![](/uploads/versions/smartling___manage_files-4---x----574-452x---.png)

**5** A zip-file containing files will begin downloading. This may take some time, depending on the number of files. You can now navigate away from the Files page without interrupting the download. The zip file will be organized into directories according to language and the URI of each file.

## Download Business Documents from the List View

For documents that include significant visual context, such as Business Documents and HTML files, we provide a shortcut to download the file with any current translations from the List View.

![](/uploads/versions/smartling___translations_management---x----1045-314x---.png)

> This shortcut is intended primarily to help Translators get full context for documents they are translating. For full download options, use the Files page or the [File API](https://docs.smartling.com/){: .cc-active}.

## Automate

Our [File API](https://docs.smartling.com/) can be used directly, with our SDKs, BASH shell scripts, or source code repository connectors.