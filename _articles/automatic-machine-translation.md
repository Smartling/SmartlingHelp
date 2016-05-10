---
layout: article
title: Automatic Machine Translation
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
wistia:
  video: false
  id:
related-articles:
  - article:
further-reading:
  - link:
    text:
---

**Note:** There are two ways to implement machine translation in Smartling. This article helps you automatically apply temporary Machine Translation to all content in your project. You may wish to use this method to quickly generate translated files for QA purposes, or as a stopgap to start serving new content immediately on your translated sites while you work on high-quality human translations. If you want to permanently apply machine translation to published content, for example, to save costs on low-priority content, see [Integrate Machine Translation into a Workflow](/hc/en-us/articles/217216587).

Smartling is not a computer-generated translation service provider, but can connect with third-party translation providers such as the Google Translate API.

Enabling Automatic Machine Translation will affect GDN and Files projects differently:

*   For Files projects, machine translations will be pre-populated in the list view but will not enter the translation workflow. If you download a file with the [Pending Translations](/hc/en-us/articles/201468416#DownloadOptions) option, the machine translation will be included.
*   For GDN projects, any strings on a GDN page without a translation will be replaced with machine-translated strings. A message is appended to the footer of the page to warn the user that the page contains machine translation.

You can add your computer-generated translation key and turn computer-generated translation on and off at **Project Settings** >**External Translation**.

1.  If you are using the Google Translate API, you must obtain an API Key. Do not specify any IP addresses for the key. **Note:** Google Translate API is a paid service and you need to have a project set up in the Developers Console with billing enabled before you create a working API Key.
2.  Copy your API Key into the **Google Translate API Key (V2) **field.
3.  Click **Save**
4.  Turn Automatic Machine Translation to **ON.   

    ![](/hc/en-us/article_attachments/205109578/Smartling___Machine_Translation.png)  
    **

<span style="font-size: 13px;"> </span>