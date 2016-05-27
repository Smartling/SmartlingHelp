---
layout: article
title: Importing Translations
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
migration-checklist:
  internal-links: false
  images: false
  FAQs: false
  related: false
---

Account Owners and Project Managers can import translations for Android, iOS, Java Properties, gettext, XML, JSON, YAML, Qt, CSV, RESX and PRES files. You can import strings and overwrite any existing translations, and you can place the strings in different workflow states.

You cannot import translations unless there are source strings in the Smartling Dashboard to match those translations to. You must [upload your source file](/hc/en-us/articles/201468376) first, then import your translations. Smartling matches translated strings with source strings that share the same key, so you can only import translations for files that use key/value pairs. If you have [integration directives](http://docs.smartling.com/pages/supported-file-types/) in the source file, you should add the same directives to the translated file to make sure Smartling can match the strings.

**To import translations**:

1.  From the **Files** page, click the file for which you want to import translations, and next to the language, select**Import Translations**.  

   

2.  In the Import Translations dialog box, select the corresponding translated file and the workflow step at which you want the translations: **First Revision Step** or **Published**. The content is imported into the language's default workflow. **Note:**if your default language workflow has no post-translation steps, you'll only be able to "Publish" .  

 

3.  A success message will display the total number of matched strings and list any import errors. An issue will be automatically created for each string with an import error.  


The most common import error is a placeholder mismatch. This may be caused by having different placeholder directives in the original and translated files. If a later import has no errors, these issues will be resolved automatically.

Importing content is also available via API: [http://docs.smartling.com](http://docs.smartling.com/)

