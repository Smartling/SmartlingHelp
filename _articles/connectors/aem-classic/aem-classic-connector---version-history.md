---
layout: article
title: AEM Classic Connector - Version History
wistia:
  video: false
  id:
---


## Version 3.9.2 - 4/07/2017

### Bug fixes:

* Fix an issue with a resource leak which could lead to `java.lang.OutOfMemoryError: unable to create new native thread`
* Fix an URL rewriting bug when connector has more than one configuration. Now connector uses rewrite results of the 1st configuration as input for the 2nd configuration and so on


## Version 3.9.1 - 3/30/2017

### Bug fixes:

* Optimized translation download process speed for live copies
* Fixed an issue with translation download and "lock properties" feature


## Version 3.9.0 - 3/28/2017

### Features:

* Add ability to handle context requests in parallel, which improves performance of context loading
* Implemented common-purpose workflow step that may be embedded in existing workflows
* Implemented property "locking" feature. Properties edited in the target page can now be "locked" and not overwritten on subsequent translations of the source page

### Bug Fixes:

* Added reconnect in case of authentication error
* Fixed issue with incorrect encoding in context
* Fixed issue with replacing content that contains `:` symbol, so now path that contains `:` symbol is matched and replaced against rules


## Version 3.8.0 - 1/23/2017

### Features:

* Reworked functionality of internal URL rewriter. It now combines features of rewriting node paths in reference properties and in text. A property must contain only path to a node or a path should be in quotes if property contains text
* Removed backward compatibility in Smartling Workflow and introduced the new required parameter, an array of locales. Example of 3.8+


## Version 3.7.2 - 11/01/2017

### Features:

* Cancel live copy inheritance on property level if component (dialog) is configured to show "locks" for every property.
* The [Path Rewrites](/knowledge-base/articles/aem-classic-connector-configure-rewrites/#path-rewrites) mechanism now supports extensions.

### Bug Fixes:

* Fixed an issue with proxy authentication. The connector could not provide context when working through an HTTP proxy.
* Fixed a memory leak in the connector.
* Fixed translation progress calculation. If content was uploaded without authorization, then connector will not treat such files as completed. Progress will remain 0% until at least one string will be authorized and translated later.


## Version 3.7.1 - 09/12/2016

### Bug Fixes:

* Fixed an issue with the connector not starting on AEM 6.2.


## Version 3.7.0 - 29/11/2016

### Features:

* *AEM 5.6.1 is no longer supported*. Minimal compatible version is 6.0.
* Performance improvements added for AEM 6.x.
* Live copy handling: cancel inheritance for page-level properties.
* Live copy handling: keep inheritance locks if component strings were not modified.

### Bug Fixes:

* Fixed delay when starting translations from the Sidekick.


## Version 3.6.1 - 23/11/2016

This new major release is fully backwards compatible with 3.5.x

### Features:

* Added compatibility with AEM 6.2 version.
* Added language sorting in the Sidekick.

### Bug Fixes:

* Connector now prevents status checks or downloads on submissions with states NEW, FAILED and CANCELED.
* Fixed an issue with sending image metadata.


## Version 3.6.0 - 14/11/2016

This new major release is fully backwards compatible with 3.5.x

### Features:

* The Connector creates a new revision of a translated page any time new translations are saved.

### Bug Fixes:

* Fixed a bug that caused visual context errors when AEM machine has no internet access and proxy is explicitly configured via OSGi Web Console.
* Fixed bugs that caused translations to fail for pages created under folders and pages with names equal to locale codes.


## Version 3.5.3 - 30/09/2016

### Features:

* Usability improvements for Bulk Translation dialog when called from the Sidekick.

### Bug Fixes:

* Fixed a bug that created errors on dictionaries that have messages without an explicitly specified key.


## Version 3.5.2 - 23/09/2016

### Features:

* Added the ability to [treat dictionary strings as unique](https://support.smartling.com/hc/en-us/articles/201428916#unique) in a Smartling project.

### Bug Fixes:

* Improved messaging when returning a 202 response if sending content for translation from the sidekick.


## Version 3.5.1 - 07/07/2016

### Bug Fixes:

* Fixed an issue with proxy configuration.


## Version 3.5.0 - 07/01/2016

**Note**: This version of the AEM Classic connector switches to using version 2 of the Smartling API. After upgrading you will need to follow the [migration instructions](/knowledge-base/articles/aem-classic-connector-upgrade-to-version-3.5.0/).

### Features:

* Added the ability to configure an HTTP proxy in a single place to be used by the connector - via the Felix OSGi Console, at the *Smartling - Network Settings* configuration entry.
* Removed the API URL from the Project Configuration dialog. Now the endpoint can be changed via the Felix OSGi Console.
* Added the ability to customize regular expressions used to cut placeholders from translated strings. Please, note that this is **potentially dangerous** operation.

### Bug Fixes:

* Fixed an issue with sending non-structured content via Advanced Node Translator on Windows machines.
* Fixed a minor issue with the Advanced Node Translator which used to lead to false-positive ERRORs in log files.

## Version 3.4.0 - 04/01/2016

### Features:

* Method for sending only approved content for translation (introduced in 3.3.0) has been significantly affected by this release. Previously, 'approved content' meant *the latest revision of the page*. As of the 3.4.0, approved content is *the latest **published** version of a page*.

### Bug Fixes:

* Project Configurations were not displayed after being imported as a package from the environment with the different AEM version.
* Bulk Submit dialog didn't display content tree on AEM 6.1
* Context was created even when explicitly disabled in the server configuration


## Version 3.3.5 - 03/16/2016

### Bug Fixes:

* Fixed incorrect property mapping behaviour for some cases.
* Fixed broken translate button in the Sidekick caused by conflict with customer's custom client-side code.


## Version 3.3.3 - 12/18/2015

### Bug Fixes:

* Fixed a bug that caused problems working with proxies that did not require any authentication.


## Version 3.3.2 - 10/29/2015

### Bug Fixes:

* Bulk upload failed to send pages for translation in some cases.
* Fixed exception when connector tries to download translation but original page is already deleted.
* Fixed exception for getting translation progress status when smartling config was deleted after sending page for translation.


## Version 3.3.1 - 10/02/2015

### Bug Fixes:

* A user could not cancel translation from AEM if the corresponding file had been previously deleted in the Smartling Dashboard.


## Version 3.3.0 - 10/02/2015

### Connector prerequisites

* Java version 1.7 and above
* AEM version 5.6 and above

### Features:

* Users can now configure what should be sent for translation: the last revision instead or recent page changes.
  <br>[![capture-245](https://cloud.githubusercontent.com/assets/5095539/10275566/0073a1f6-6b51-11e5-97b4-5cda30e0e076.png)](https://cloud.githubusercontent.com/assets/5095539/10275566/0073a1f6-6b51-11e5-97b4-5cda30e0e076.png)
* Connector now will keep the order of sibling pages in language branches according to original pages

### Bug Fixes:

* Fixed behavior of submissions statuses for some edge cases.


## Version 3.2.6 - 09/09/2015

### Bug Fixes:

* Fix related to translation of properties which contain JSON


## Version 3.2.5 - 09/07/2015

### Features:

* Added `Cancel translation` action to the `Submissions Board` and `Translation Control Center`. Now, a user can remove a page from the translation queue without leaving AEM. The connector will automatically remove the file from the Smartling Dashboard and suspend status checks.[![image](https://cloud.githubusercontent.com/assets/5525470/9717492/e4eca314-557b-11e5-9f95-4905d01ecc3a.png)](https://cloud.githubusercontent.com/assets/5525470/9717492/e4eca314-557b-11e5-9f95-4905d01ecc3a.png)[![image](https://cloud.githubusercontent.com/assets/5525470/9717563/63c06068-557c-11e5-87c9-eccf10e02cf6.png)](https://cloud.githubusercontent.com/assets/5525470/9717563/63c06068-557c-11e5-87c9-eccf10e02cf6.png)

### Bug Fixes:

* Live copy Relationship is not cancelled for a placeholder in cases where an original node is a Blueprint and Live copy at same time.


## Version 3.2.4 - 07/17/2015

### Bug Fixes:

* Fixed download malfunction in Advanced node translator.
* User can now edit Source Path on Smartling settings.
* Fixed errors with submissions Board when Smartling configuration was broken or changed.
* Disable preview mode when submission no longer has an appropriate Smartling configuration.


## Version 3.2.3 - 06/15/2015

### Bug Fixes:

* Fixed failure to get HTML for context when multiple cookies are returned.
* Fixed failure to upload HTML for context in environment with proxy.
* Mixing types are now properly copied.
* Added missed frozen property to exclude list.
* Save language copy for Non-page Translation mode.


## Version 3.2.2 - 04/14/2015

### Features:

* Preview translated and original pages side by side. Preview buttons were added in Sidekick, Submissions Board and TCC.
  * Translation Control Center
    [![preview](https://cloud.githubusercontent.com/assets/2843692/7136345/c0bc0678-e2b8-11e4-81cb-70daf7934f0f.png)](https://cloud.githubusercontent.com/assets/2843692/7136345/c0bc0678-e2b8-11e4-81cb-70daf7934f0f.png)
  * Submissions Board
    [![preview2](https://cloud.githubusercontent.com/assets/2843692/7136405/2e91d862-e2b9-11e4-89b5-3f49c6edd7b1.png)](https://cloud.githubusercontent.com/assets/2843692/7136405/2e91d862-e2b9-11e4-89b5-3f49c6edd7b1.png)
  * Preview
    [![preview](https://cloud.githubusercontent.com/assets/1511122/7141027/e7bac35c-e29c-11e4-932b-360b39098e37.png)](https://cloud.githubusercontent.com/assets/1511122/7141027/e7bac35c-e29c-11e4-932b-360b39098e37.png)
* Added dictionary processing in Translation Control Center (TCC)
[![dictionary](https://cloud.githubusercontent.com/assets/2843692/7136371/eec94f1c-e2b8-11e4-8f9e-13153502a42f.png)](https://cloud.githubusercontent.com/assets/2843692/7136371/eec94f1c-e2b8-11e4-8f9e-13153502a42f.png)
* Added security control to TCC buttons.
* Made Target Info mandatory in project configuration.
* Return different error messages in case we cannot load context or node doesn't have context.

### Bug Fixes:

* Added standard header to all smartling pages.
* Removed obsolete custom templates.
* Fixed message text in Connector Audit log.
* Added more logs in Connector Audit log.
* Added validation for Target Info in settings.
* Fixed broken layout if user changed size of browser window.
* Fixed an issue with locating Smartling config by source path which caused some content to be sent to wrong projects.
* Fixed broken Submissions Board page.
* Disallow to set set root path "/" as source path and target path in configuration.


## Version 3.2.1 - 03/18/2015

* Bulk Download on Submissions Board
  [![submissions000331](https://cloud.githubusercontent.com/assets/1511122/6717471/17625edc-cd83-11e4-938c-19ad51fec4fe.png)](https://cloud.githubusercontent.com/assets/1511122/6717471/17625edc-cd83-11e4-938c-19ad51fec4fe.png)

* New Search panel on Submissions Board and Filter by status
  [![submissions000332](https://cloud.githubusercontent.com/assets/1511122/6717486/3915340a-cd83-11e4-89cd-06fda88f274b.png)](https://cloud.githubusercontent.com/assets/1511122/6717486/3915340a-cd83-11e4-89cd-06fda88f274b.png)

* Export submissions in CSV file and Smartling log
  [![smartling log viewer000335](https://cloud.githubusercontent.com/assets/1511122/6718151/e792c728-cd87-11e4-9126-088ce66a5872.png)](https://cloud.githubusercontent.com/assets/1511122/6718151/e792c728-cd87-11e4-9126-088ce66a5872.png)

* Pilot version of Translation Control Center

  * Known issues: supports translation/status only for page nodes. Non-page nodes and i18n coming soon
    [![translation control center000333](https://cloud.githubusercontent.com/assets/1511122/6717923/3871081e-cd86-11e4-8380-723b3c8455e9.png)](https://cloud.githubusercontent.com/assets/1511122/6717923/3871081e-cd86-11e4-8380-723b3c8455e9.png)
    [![translation control center000334](https://cloud.githubusercontent.com/assets/1511122/6717927/44b4737c-cd86-11e4-9001-7838974646af.png)](https://cloud.githubusercontent.com/assets/1511122/6717927/44b4737c-cd86-11e4-9001-7838974646af.png)

* Migration tools - new tool for renaming source path in submissions

### Bug Fixes:

* Use security options for `Re-send` button on Submissions Board
* Fixed a bug that caused issues saving Project Configurations.
* Added meaningful names for submission statuses
* Fixed bug that prevented copying/pasting property mapping
* Fixed bug that prevented Sidekick from initializing on Property Mapping page
* Fixed Submissions board filter issue.
* Fixed issue with downloading from sidekick.
* Logs added for CMS Gateway client library.


## Version 3.2.0 - 02/16/2015

### Features:

* Supports permissions for translation workflow actions (preview, download, translate).
* Synchronization of placeholder layout in case of standard node (based on revisions). Connector now creates revision of original node implicit and uses it as layout source for synchronization of target node before applying translations.
* Use separate files for same content (node) but different languages. Changes in content don’t affect languages that are already in progress.
* Two new columns: "Time Submitted" and "Time Applied" on the Submission Board.
* Ability to re-send multiple submissions from Submissions Board.

### Bug Fixes:

* Property mapping is not applied to all hierarchy in some cases
* Multiple hyperlinks are rewritten with the last one
* Bulk submit. Grandchildren doesn't submitted for translation
* Bulk submit does not exclude 2nd level descendants properly
* Translation status icon is incorrect in sidekick if page doesn't have translation
* Invalid User ID is stored when page is sent for translation
* Reviewer annotation shouldn't be sent for translation
* Page title is not updated on submissions board when page is re-submitted

### Known Issues:

* Synchronization of placeholder layout works well for sites based on language copy but doesn't work at all if target site is Live copy, because rollouts mechanism is responsible for this


## Version 3.1.6 - 01/16/2015

### Features:

* `Internal URL Parser` and `Rewrite Internal URL Processor` were removed and replaced by the new service. If you used them before then all settings will be lost. Administrator must configure the new service `Internal URL Rewriter`. It look like a previews
* `Language Copy Manager` used for creation of language copy.
* `Path Property Rewriter`, `Language Property Rewriter` and `Internal URL Rewriter`will be run after translation download (were run before translation download in previous release)

### Bug Fixes:

* Fixed URL pattern at translation processing.
* Fixed replace of multiple links in a single property.
* Don't copy all child pages under current page if target page doesn't exist.


## Version 3.1.5 - 01/16/2015

### Features:

* Customize placeholder preparation process (PPP):
  * Add custom processors to placeholder preparation pipeline (flexible configuring of PPP for different customers).
  * Order of processor is determined by its Ranking property. Ranking is set in the OSGi.
  * Configuration Console for each processor.
* Out of the box 2 processors:
  * `Path Property Rewriter` rewrites internal links in properties.
  * `Language Property Rewriter` component that is responsible for rewriting`jsr:language.`
  * `Language Property Rewriter` is enabled by default and could be changed at `Smartling - Language Property Rewriter` in the OSGi Configuration Console.

### Bug Fixes:

* Context stopped to work after update\configure some OSGI components.
* Made automatic Context reconnect more robust in case of network errors.

### Known Issues:

* `Path Property Rewriter` was refactored in this version. If you used it before then all previous settings will be lost. Administrator must configure `Path Property Rewriter` to specify which properties have to be rewritten.
* Properties that are subject to rewriting, *should not* be sent for translation.


## Version 3.1.4 - 01/06/2015

### Features:

* The new `Connector Audit` log is available at Siteadmin > Smartling > Submission Logs.
* Ability to configure which non-translatable page-level properties should be synchronized (from original to placeholder nodes).

### Improvements:

* Updates to 3.0.8 -> 3.1.x migration process.
* Added new server-side validation before send page for translation.
* Improved logging.

### Bug Fixes:

* Cleaned up live relationship when source page is a live copy.
* Verified context connection settings during profile editing.
* Fixed creation of duplicated submissions.
* Added icon for Smartling Log Viewer.
* Upload only submissions in `New` state.