---
layout: article
title: Automatic Machine Translation
redirect-url: /hc/en-us/articles/201685913
---


> There are two ways to implement machine translation in Smartling. This article helps you automatically apply temporary Machine Translation to all content in your project. You may wish to use this method to quickly generate translated files for QA purposes, or as a stopgap to start serving new content immediately on your translated sites while you work on high-quality human translations. If you want to permanently apply machine translation to published content, for example, to save costs on low-priority content, see [Integrate Machine Translation into a Workflow](/knowledge-base/articles/integrate-machine-translation-into-a-workflow/).

Smartling is not a computer-generated translation service provider, but can connect with third-party translation providers such as the Google Translate API.

Enabling Automatic Machine Translation will affect GDN and Files projects differently:

* For Files projects, machine translations will be pre-populated in the list view but will not enter the translation workflow. If you download a file with the [pending translations](/knowledge-base/articles/download-files/#file-download-options) option, the machine translation will be included.

* For GDN projects, any HTML strings on a GDN page without a translation will be replaced with machine-translated strings. A message is appended to the footer of the page to warn the user that the page contains machine translation. Strings in JSON and JavaScript will not be machine translated until they are authorized.

You can add your computer-generated translation key and turn computer-generated translation on and off at **Project Settings &gt;External Translation**.

**1)** If you are using the Google Translate API, you must obtain an API Key. Do not specify any IP addresses for the key.

> Google Translate API is a paid service and you need to have a project set up in the Developers Console with billing enabled before you create a working API Key.

**2)** Copy your API Key into the Google Translate API Key (V2) field.

**3)** Click Save

**4)** Turn Automatic Machine Translation to ON.

![](/uploads/versions/smartling---machine-translation-1---x----1239-705x---.png)