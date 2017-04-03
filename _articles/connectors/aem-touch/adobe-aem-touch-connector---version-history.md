---
layout: article
title: Adobe AEM Touch Connector - Version History
wistia:
  video: false
  id:
---


## Version 3.2.0 - 03/07/2017&nbsp;

### Improvements & Fixes

* New workflow on the top of AEM Translation framework to translate a page into multiple languages using a single job in Smartling.&nbsp;
* Add a way to automatically promote launches after their content is translated.

Important: This release changes the approach to "string uniqueness". Depending linguistic assets settings, translation memory may not be used automatically, and strings will appear for translation even if present in TM. Additionally, it's not possible to use variants with the new "jobs" workflow.

## &nbsp;

## Version 3.1.1 - 02/09/2017&nbsp;

### Improvements & Fixes

* Fixed issues with HTTP proxy support
* Fixed issue with submitting content when the target locale is disabled in Smartling.

## &nbsp;

## Version 3.1.0 - 12/01/2016

### Improvements & Fixes

* The connector now uses Smartling API v2 and is not backwards compatible with earlier versions. After installing you must create [v2 credentials](http://docs.smartling.com/pages/API/v2/Authentication/) and add them to each Cloud Configuration.
* Improved context capture performance.
* Fixed issue with missing context on some configurations of AEM.
* A separate log file `smartling.touch.log`{: .highlighter-rouge} has been created to capture all the log messages coming from the Connector.

## &nbsp;

## Version 3.0.1 - 08/19/2016

### Improvements & Fixes

* Improved performance of the connector under heavy loads.

## &nbsp;

## Version 3.0.0 - 07/13/2016

### Improvements & Fixes

Support for AEM 6.2 with the following limitations:

* Due date on a translation job is not supported even if set on the AEM side.
* Reject translation from AEM is not fully supported: once translation is rejected in AEM, the only option is to cancel all the translation job manually, wait until translation is corrected and request translation once again as a new job in AEM.

## &nbsp;

## Version 2.2.0 - 07/01/2016

### Improvements & Fixes

* Added the ability to configure an HTTP proxy in a *single place* to be used by the connector - via Felix OSGi Console, *Smartling - Network Settings* configuration entry.
* Support anonymous proxy configuration via Java System properties.
* Fixes to translation context to improve quality and make troubleshooting easier.

## &nbsp;

## Version 2.1.0 - 03/25/2016

### Improvements & Fixes

* Improved string sharing behavior for the case where multiple versions of the same page are being translated at the same time. As of the version 2.0.0 strings have been shared within a page, but if the page was copied into one or more [launches](https://docs.adobe.com/docs/en/aem/6-1/author/site-page-features/launches.html) then strings in these copies were considered completely different. As of 2.1.0, strings are shared among the page and all its versions in different launches.
* The **connector package has been renamed** from “Smartling Translation Connector” to the “Smartling-Translation-Connector”. We recommend **to manually remove** the old package after installation.

## &nbsp;

## Version 2.0.0 - 12/11/2015

### Improvements & Fixes

The string sharing behavior in Smartling TMS **has been significantly changed** in this release:

* Identical strings on different pages are treated as unique strings in Smartling.
* If a page was submitted more than once as part of different Jobs, Smartling continues to share translations along all copies of the page.
* Users can now control how Smartling should treat identical strings on the same page. Duplicates can be ingested as a single string or as unique strings. This feature is disabled by default but can be enabled from the Configuration Console.

![](/uploads/versions/3776b166-a017-11e5-8c10-6c2ae28db3de---x----1738-476x---.png)