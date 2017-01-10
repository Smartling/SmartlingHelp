---
layout: article
title: AEM Classic Connector - User Guide
wistia:
  video: false
  id:
---


One you have installed and configured the Smartling AEM Classic Connector, you can use Adobe to create and manage translation submissions to Smartling. For more information on installation and configuration, see [Adobe AEM Classic Connector - Installation and Configuration](){: .cc-active}.

The Smartling Adobe AEM Classic Connector adds a Smartling-specific area to AEM that allows you to manage components of of AEM needed for translation.

![](/uploads/versions/aem_wcm___project_configuration---x----639-541x---.png)

## Creating Submissions

Once you configure your language branches you can create and submit new or existing pages in your reference language branch for translation using a workflow that automatically creates/updates pages in the language branches of your choice and submits these pages to the Smartling Translation Server.

The following procedure describes how to start the translation workflow for the page that needs to be translated. For this to work, you must have at least two language branches.

You can create a translation submission for a single page or create a bulk submission of several pages.

The sidekick also indicates if a user has updated a page submitted for translation by marking the language with.

### To create a translation submission

**1)** Browse to the Websites portal and double-click to open an existing page in the source language.

**2)** In the Sidekick, open the **Workflow** tab, then expand the **Smartling** **Translations** section.

![](/uploads/versions/english-1---x----238-467x---.png)

**3)** Select the language(s) into which you would like to translate the pages and click&nbsp;**Translate**.

![](/uploads/versions/english-2---x----234-463x---.png)

**4)** The sidekick displays the progress of the submission.

### To create bulk translation submissions

**1)** Browse to the Websites portal and double-click to open an existing page in the source language.

**2)** In the Sidekick, open the **Workflow** tab, then expand the **Smartling** **Translations** section.

**3)** Select the language(s) into which you would like to translate the pages.

**4)** Select **Bulk Submit**, and click **Configure**.

![](/uploads/versions/english-3---x----280-458x---.png)

**5)** From the dialog box, select the pages you want to translate and click **OK**.

![](/uploads/versions/english-4---x----397-394x---.png)

Child pages are only available after you select a parent page.

**6)** Click **Translate**.

The sidekick displays progress of the submission.

## Managing Submissions

Once you have submitted the page(s) for translation, you can view and manage the submission on the Smartling Submission page.

![](/uploads/versions/submissions---x----1351-517x---.png)

**1)** Browse to the **Websites** portal and double-click **Smartling** &gt; **Submissions**.

**2)** Use the sidebar to search submissions by title, path or status.

**3)** Select one or more pages. (SHIFT + click to select multiple pages).

**4)** Choose an action:

* **Re-send:** Submit an updated version of the page to Smartling.
* **Download:** Manually download available translations from Smartling.
* **Cancel:** Cancels the submission. The download scheduler will no longer check for translations and the file will be unavailable for translation


## Translation Preview

Double-clicking any page will open a preview window showing the original page and the translated page side by side. Scroll and zoom is synced between the two windows.

![](/uploads/versions/acqdev60_smartling_net_apps_smartling_preview_html_source__content_sap_global_en_toolbar_target__content_sap_languages_fr_toolbar---x----1076-838x---.png)

## Viewing Logs

If you encounter an error, you can access the Connector's logs from the **Websites** portal at **Smartling &gt; Smartling Log Viewer**.

![](/uploads/versions/aem_wcm___smartling_log_viewer_and_monitoring_-_smartling_cq5-localization-plugin_wiki---x----536-541x---.png)

Enter a number in the **Line count** box and click Refresh to display recent lines from the logs. This information may help Smartling technical support to diagnose an error.

![](/uploads/versions/smartling_log_viewer---x----1071-838x---.png)