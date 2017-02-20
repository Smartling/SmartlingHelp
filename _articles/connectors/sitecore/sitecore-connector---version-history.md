---
layout: article
title: Sitecore Connector - Version History
---

## Versions 1.4.0 - 16/02/2017

> **Important!** You must complete the steps described in [Upgrade to version 1.4](/knowledge-base/articles/sitecore-connector-upgrading-to-version-1-4x/). The new DB schema is not compatible with the previous version and the Connector will stop working if you do not follow these instructions.

### Improvements:

* Sitecore introduced [presentation layout customization per language](http://www.kewlcodes.com/posts/1160/Versioned-layouts-Shared-and-final-layout-in-Sitecore-8). It means that content editor can adjust presentation (add personalization and so on) for every language without involving developers. We added native support for this feature in our connector.  
Starting from this release the connector copies `Final layout` from a source to a target language when the first revision is created. But if connector creates 2nd, 3rd, and so on revisions of target language then `Final layout` is not copied from a source. It's done to preserve your possible changes of `Final layout`.
* Added the new Sitecore Workflow action which allows to submit item to configured locales. So if you use Sitecore Workflow then upload to Smartling can be just a part of your Workflow and no need to send content to Smartling explicit. Every new content, or update in content will be submitted to Smartling automatically.
* Updates in UI:
  * Multiple upload buttons are replaced with the single large button in Smartling toolbar.
  ![toolbar](https://cloud.githubusercontent.com/assets/1511122/23136929/dec30ada-f7a7-11e6-94f7-1bfe2cd77f24.png)
  * New icons in menu.
  ![start menu](https://cloud.githubusercontent.com/assets/1511122/23136962/01c69f38-f7a8-11e6-8a63-fc3e29b04d90.png)
  * Updated **Translations Progress** screen. Now `completed` and `in progress` items are present in the same table. Added more filters.
  ![Translations Progress](https://cloud.githubusercontent.com/assets/1511122/23137046/75d70822-f7a8-11e6-8520-b1344b6c9fb0.png)


### Bugfixes:

* Fixed issue with flag icon in Stecore 8.1


## Versions 1.3.1 - 22/10/2016

### Improvements:

* Undisplayable unicode characters (codes `\u0000`-`\u0008`) are stripped before uploading content to Smartling.
* Changed the way Smartling check's progress of translations to prevent errors.
* Added more detailed logs.


### Bugfixes:

* We fixed an issue that caused errors checking and downloading translations in cases where the Sitecore language codes are different from Smartling's locale codes.


## Versions 1.3 - 30/05/2016

> **Important!** You must complete the steps described in [Upgrade to version 1.3](/knowledge-base/articles/sitecore-connector-upgrading-to-version-1-3x/). The new DB schema is not compatible with the previous version and the Connector will stop working if you do not follow these instructions.

### Improvements:

* Switched to Smartling File API v2. Read more about the new File API [here](http://docs.smartling.com/pages/API/v2/New-in-v2/). The new File API uses the Oauth 2.0, so you must generate new credentials.
* Retranslation detection. Previous connector versions downloaded an item once completed and stopped tracking changes in Smartling. The new Connector detects any changes in translation even after status is completed and keeps item's translations up to date when you retranslate something in Smartling
* Changed callback HTTP response code from 202 to 200. This is what the Smartling Callback service expects
* Previous version required that `Callback` host didnt contain a trailing slash. The new one handles trailing slash if it's present.
* Simplified installation. The `Remote` package doesn't ask question how to update items anymore
* The Connector now sets status to `completed` for items that were uploaded but don't contain strings for translation
* Set maximum of concurrent requests to Smartling to 2


### Bugfixes:

* Fixed preview button
* `Language` field validator no longer crashes when value is empty
* Updated `Word count` column on `Submissions Board`
* Fixed errors that were caused if a file was manually deleted in Smartling


## Versions 1.2.2 & 1.2.3 - 01/06/2016

### Improvements:

* Added handling for Context when item has no layout (configuration; dictionary; etc).
* Improved logging in cases where 'Translatable Fields' in the settings profile are not configured or have no content.
* Installing the Remote package no longer overrides your Context settings.
* All fields in the Smartling settings profile are now shared among all languages.


### Bugfixes:

* Connector now treats the language named in the settings profile as the source language.
* Context connection doesn't use actual settings from `/sitecore/system/Modules/Smartling Connector/Context`.


## Version 1.2.1 - 05/15/2015

### Improvements:

* Added Context panel for all items eligible for translation.
  <br>[![context](https://cloud.githubusercontent.com/assets/1511122/7654170/b37b73ee-fb23-11e4-9ccc-d3f752ddcb03.png)](https://cloud.githubusercontent.com/assets/1511122/7654170/b37b73ee-fb23-11e4-9ccc-d3f752ddcb03.png)


## Version 1.2.0 - 04/27/2015

### Improvements:

* Updated WebSocketNet library version to remove a bug which caused ping failure and subsequent connection timeouts.


## Version 1.2-beta5 - 02/03/2015

### Improvements:

* Extended Import\Export processors event args for Rewriting URLs demo processor.


### Bugfixes:

* Wrote some smartling exceptions in smartling log (instead of general sitecore log).
* Context connection doesn't use actual settings from `/sitecore/system/Modules/Smartling Connector/Context`.


## Version 1.2-beta4 - 01/12/2015

### Improvements

* New Connector Audit Log application allows you to moniter upload/download background processes.
  <br>[![smartlingauditlog](https://cloud.githubusercontent.com/assets/1511122/5736190/8b33aaf2-9bdb-11e4-93fa-de837fc8559d.png)](https://cloud.githubusercontent.com/assets/1511122/5736190/8b33aaf2-9bdb-11e4-93fa-de837fc8559d.png)
* Code related to communication with Smartling File API was extracted to separate [api-sdk-net library](https://github.com/Smartling/api-sdk-net). Sitecore Connector now uses `Smartling.Api` from Nuget repository.
* Refactored logging to make logs more readable.


### Bugfixes:

* Fixed impersonation for getting Context.
* Removed sensitive information from sample application.


### Known issues

* Context connection doesn't re-establish connection with new settings after changing `/sitecore/system/Modules/Smartling Connector/Context.`


## Version 1.2-beta2 - 11/17/2014

### Improvements:

* Added logging exception when adding item to a database fails.
* Write all exceptions (from pipelines) related to connector in smartling.log.
* Added extra logging of context communication.
* Updated documentation on Context.


### Bugfixes:

* Removed 2nd copy of db SQL script from repository.
* Added valid sql script to package.


### Known issues

* Context connection doesn't re-establish connection with new settings after changing `/sitecore/system/Modules/Smartling Connector/Context.`
