---
layout: article
title: 'String Sharing & Namespaces'
draft: false
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


> This article affects only accounts created after July 31st 2015 or older accounts who have chosen to enable namespace behavior.

By default, in Application Resource Files projects, strings in each file are treated as unique by Smartling. This means that uploading a new file will create new strings in the dashboard, even if they have the same text as strings in other files. This way, you can still leverage your existing translations using SmartMatch, but you also have the freedom to translate a string differently if you need to.

Sometimes, however, you may want strings to be shared between files, such as when you replace an existing file with an updated version of the same file with only a few strings changed and you don’t want to create a whole new set of strings. You can allow files to share strings by giving them the same namespace.

By default, the namespace of a file is it’s URI, which will usually be the file path/name.

![](/uploads/versions/smartling---manage-files---x----1297-437x---.png)

You can also assign a custom namespace to a file using the [smartling.namespace API directive](http://docs.smartling.com/pages/API/v1/FileAPI/Upload-File/) when you upload the file. You may wish to do this if your File URI contains version information, to avoid creating a full set of unique strings every time you update a file.

#### Example:

I upload a file **UIText.properties**&nbsp;with ten strings and translate them into all languages in my project. Later, I change one string and re-upload the file as **UIText2.properties**. I want to keep both files as both are being deployed in different versions of my app.

* **Default Behavior** - Smartling will create ten new strings for UIText2.properties, since it treats strings in each file as unique. These strings may have translations automatically applied by SmartMatch, depending on your SmartMatch settings.
* **Custom Namespace** - If I use the Smartling API to upload UIText.properties and UIText2.properties, and use the **smartling.namespace** directive to give both files a namespace of&nbsp;**UIText**, only one new string will be created when I upload **UIText2.properties**. The nine unchanged strings will be shared between the two files.

Ask your Smartling CSM if you want to enable namespace behavior for an existing account.