---
layout: article
title: Importing Translations
---


## Introduction

There are two ways to import translations in Smartling. &nbsp;This article covers resource file based translation imports.

This kind of translation import is based on a one:one mapping of an original language resource file and its translated version. This is useful if you are migrating from another tool or process to Smartling and you want to import the translations that have already been done. &nbsp;Another option is importing&nbsp;[TMX files that can then be configured](http://help.smartling.com/knowledge-base/articles/translation-memory/#import) as part of a linguistic package.&nbsp; Using resource file based imports are then better option when you have them as you are getting an “exact” import of a translation. &nbsp;

### Example

When might you have resource files versus TMX files? &nbsp;A simple example of resource files is for a mobile application files. &nbsp;The original language and translated mobile resource files have a 1:1 mapping. &nbsp;The resource file has “keys” which allow for the mapping of the original strings and the translations. You can import following the direction on this page. &nbsp;First you upload the original language file, then you "import" each translated version (one language at a time). &nbsp;Anything in the resource file that wasn't previously translated is now available fro translation in Smartling. &nbsp;This full process is described in detail below.

Contrast this with a Microsoft Word document that has been translated. The Word document has no keys and so its translation cannot be directly imported. &nbsp;However if you have a TMX file that contains these translations you can import your TMX file and use that to get leverage on future updates to the Word document within the Smartling platform. &nbsp;First you upload the original file. Then you import your TMX file into the appropriate Linguistic Package. &nbsp;When you authorize the Word document for translation, the Smartling platform will attempt to SmartMatch all the content in it using the Translation Memory (which includes the TMX files that have the translations. &nbsp;In most cases all your previous translations will be perfectly re-used. However due to differences in how other platform process Word documents and created TMX files some of the content that might have been previously translated may not SmartMatch. &nbsp;All content that is not translated or SmartMatched is now available for translation in Smartling. &nbsp;See the linguistic package documentation about TMX imports for more information about this process.&nbsp;

### Usage

Account Owners and Project Managers can import translations for Android, iOS, Java Properties, gettext, XML, JSON, YAML, Qt, CSV, RESX and PRES files. You can import strings and overwrite any existing translations, and you can place the translations in different workflow states.

You cannot import translations unless the source strings is in the Smartling project with the same "key". &nbsp;You must [upload your source file](/knowledge-base/articles/upload-and-manage-files/) first, then import your translations. Smartling matches translated strings with source strings that share the same key for that specific file, so you can only import translations for files that use key/value pairs. If you have [integration directives](http://docs.smartling.com/pages/supported-file-types/) in the source file, you should add the same directives to the translated file to make sure Smartling can match the strings.

**1)** From the **Files** page, click the file for which you want to import translations, and next to the language, select**Import Translations**.

![](/uploads/versions/import1---x----1250-788x---.png)

**2)** In the Import Translations dialog box, select the corresponding translated file and the workflow step at which you want the translations: **First Revision Step** or **Published**. The content is imported into the language’s default workflow.

> If your default language workflow has no post-translation steps, you’ll only be able to choose **Published**.

![medium](/uploads/versions/import2---x----571-455x---.png)

**3)** A success message will display the total number of matched strings and list any import errors. An issue will be automatically created for each string with an import error.

![medium](/uploads/versions/import3---x----576-379x---.png)

The most common import error is a placeholder mismatch. This may be caused by having different placeholder directives in the original and translated files. If a later import has no errors, these issues will be resolved automatically.

NOTE: HTML processing and file imports are not compatible. &nbsp;Directing Smartling to HTML process the strings in a file can break the string into smaller components and therefore they cannot be assigned a key, and a translation cannot be imported. &nbsp; If you have a key based resource file with previously translated strings that you would also like to have HTML processed, you must first upload the file without HTML processing, import the translations, then re-upload the source file with HTML processing turned on. &nbsp;Smartling will create new and different strings, and may be able to use SmartMatch to apply translations to them, but some of the strings may need to be completely re-translated within Smartling. &nbsp;HTML processing of strings is recommended only if your individual strings contains large blocks of content that are formatted with HTML that are not well translated as individual strings. &nbsp;Contact Smartling if you are not sure the best way to handle your resource files.

<div class="info">Importing content is also available via <a href="http://docs.smartling.com">API</a>.</div>