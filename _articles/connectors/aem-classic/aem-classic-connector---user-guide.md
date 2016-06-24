---
layout: article
title: AEM Classic Connector - User Guide
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

One you have installed and configured the Smartling AEM Classic Connector, you can use Adobe to create and manage translation submissions to Smartling. For more information on installation and configuration, see [Adobe AEM Classic Connector - Installation and Configuration]().

The Smartling Adobe AEM Classic Connector adds a Smartling-specific area to AEM that allows you to manage components of of AEM needed for translation.

![](/hc/en-us/article_attachments/201460058/AEM_WCM___Project_Configuration.png)

## Creating Submissions

Once you configure your language branches you can create and submit new or existing pages in your reference language branch for translation using a workflow that automatically creates/updates pages in the language branches of your choice and submits these pages to the Smartling Translation Server.

The following procedure describes how to start the translation workflow for the page that needs to be translated. For this to work, you must have at least two language branches.

You can create a translation submission for a single page or create a bulk submission of several pages.

The sidekick also indicates if a user has updated a page submitted for translation by marking the language with.

### To create a translation submission

1) Browse to the Websites portal and double-click to open an existing page in the source language.
2) In the Sidekick, open the **Workflow** tab, then expand the **Smartling** **Translations** section.  ![](/hc/en-us/article_attachments/201444157/English.png)
3) Select the language(s) into which you would like to translate the pages and click **Translate**.  
![](/hc/en-us/article_attachments/201460238/English.png)  

4) The sidekick displays the progress of the submission.  

### To create bulk translation submissions

1) Browse to the Websites portal and double-click to open an existing page in the source language.
2) In the Sidekick, open the **Workflow** tab, then expand the **Smartling** **Translations** section.
3) Select the language(s) into which you would like to translate the pages.
4) Select **Bulk Submit**, and click **Configure**.  
![](/hc/en-us/article_attachments/201444257/English.png)
5) From the dialog box, select the pages you want to translate and click **OK**.  
![](/hc/en-us/article_attachments/201460338/English.png)  
Child pages are only available after you select a parent page.
6) Click **Translate**.  
The sidekick displays progress of the submission.  

## Managing Submissions

Once you have submitted the page(s) for translation, you can view and manage the submission on the Smartling Submission page.

![](/hc/en-us/article_attachments/201448247/Submissions.png)

1) Browse to the **Websites** portal and double-click **Smartling** > **Submissions**.
2) Use the sidebar to search submissions by title, path or status.
3) Select one or more pages. (SHIFT + click to select multiple pages).
4)Choose an action:
* **Re-send:** Submit an updated version of the page to Smartling.  
* **Download:** Manually download available translations from Smartling.  
* **Cancel:** Cancels the submission. The download scheduler will no longer check for translations and the file will be unavailable for translation

## Translation Preview

Double-clicking any page will open a preview window showing the original page and the translated page side by side. Scroll and zoom is synced between the two windows.

![](/hc/en-us/article_attachments/201448257/acqdev60_smartling_net_apps_smartling_preview_html_source__content_sap_Global_en_toolbar_target__content_sap_languages_fr_toolbar.png)

## Viewing Logs

If you encounter an error, you can access the Connector's logs from the **Websites** portal at **Smartling > Smartling Log Viewer**.

![](/hc/en-us/article_attachments/201448497/AEM_WCM___Smartling_Log_Viewer_and_Monitoring___Smartling_cq5-localization-plugin_Wiki.png)

Enter a number in the **Line count** box and click Refresh to display recent lines from the logs. This information may help Smartling technical support to diagnose an error.

![](/hc/en-us/article_attachments/201448527/Smartling_Log_Viewer.png)

