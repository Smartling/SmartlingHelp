---
layout: article
title: Capture Context from Webpages - Chrome Context Capture Extension
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

Smartling Account Owners and Project Managers can use the Chrome Context Capture Extension to [capture context]().

Only use the Chrome extension on **source language sites**. For example, if your primary web site is [www.domain.com](http://www.domain.com/) and the Spanish version is [es.domain.com](http://es.domain.com/), only use the extension on [www.domain.com](http://www.domain.com/).

*   [Taking a Snapshot](#taking-a-snapshot)
*   [Targeting Specific Strings](#targeting-specific-strings)
*   [Snapshot History](#snapshot-history)
*   [Improve Context Matching with Instrumented Files](#improve-context-matching-with-instrumented-files)
*   [Setting a Keyboard Shortcut](#setting-a-keyboard-shortcut)
*   [Execute Custom Javascript Prior to Snapshot](#execute-custom-javascript-prior-to-snapshot)
*   [Capturing Context on iframe Sites](#capturing-context-on-iframe-sites)

##Taking a Snapshot

**(1)** Install the Chrome Content Capture extension via the [Chrome Store](https://chrome.google.com/webstore/detail/smartling-context-capture/hbckdcedbkhjfeomlikdkgkfcibkeofi/related).

**(2)** Browse to the page you want to contextualize. Strings on the page should match strings already uploaded to a Smartling project.

**(3)** Click the Context Capture toolbar button. The extension will capture the current state of the page at the moment you click. If you want to capture a dynamic element such as a modal dialog, make sure that element is displaying on the page before you click the toolbar button.

![](/hc/en-us/article_attachments/207641868/Smartling_Global_Content_Translation_and_Localization_Solution.png)

**(4)** Login and, from the drop-down, select the destination project for the snapshot. You can preview the snapshot by clicking **Preview**.  

**Note:** The Context Capture Extension does not yet support login with a Google ID. You'll need to use your Smartling ID to login.

![](/hc/en-us/article_attachments/207642088/Smartling_Global_Content_Translation_and_Localization_Solution.png)

**(5)** Click **Send**.

Smartling posts the snapshot to the selected project. If it matches uploaded strings, Smartling displays the snapshot to translators when they edit strings.

##Targeting Specific Strings

By default, a Chrome Context snapshot will capture all strings visible on a page at that moment. You can use the string selection tool to target specific strings for contextualization and exclude strings for which the snapshot will not provide good context. For example, if you want to capture context for a modal dialog in the middle of the page, but exclude strings outside that dialog, use the selection tool to target only the dialog and its strings. Using this function will [overwrite](/hc/en-us/articles/203519607) any existing context for your selected strings.

###To use string selection:

**(1)** Follow the instructions for taking a snapshot, but before sending, click **Select strings**.

**(2)** In the snapshot preview, select strings or regions of the page with the selection tool.

![](/hc/en-us/article_attachments/207708967/Smartling_Global_Content_Translation_and_Localization_Solution.png)

If you select a region, all visible strings within that region will be included in your selection. You can also click **Select Whole Page.**

**(3)** When you have finished making your selection, click **Send**.

##Snapshot History

The History function displays a list of context snapshots and statistics about the number of successful string matches.

**(1)** From the Context Capture toolbar button, click the **Gear** > **History**. The Feedback dialog displays a list of context snapshots with information such as the number of strings updated and matched. Note, that a snapshot will only be created if context has been updated for at least one string.

![](/hc/en-us/article_attachments/207711347/Feedback.png)

**(2)** If your submission matches strings in the project, clicking the **view** link displays the new context snapshot.

**(3)** Clicking **Clear History** allows you to clear the history log. This will not affect context already in the Dashboard.

##Improve Context Matching with Instrumented Files.

Using an instrumented resource file in a test environment can help you get faster and more accurate context matching with the Chrome Context Capture Extension.

Instrumented files are a modified version of the original file with each string wrapped in invisible unicode characters generated from the string’s hashcode. On the page, strings will look exactly the same, but The Chrome Context Capture Extension can match them exactly with their equivalent strings in a Smartling project. The effects of using an instrumented file include:

*   Context matching completes faster.
*   Each variant of a string will match to its correct context.
*   If the Chrome Context Capture Extension detects at least one instrumented string on a page, only instrumented strings will be matched. This is helpful for targeting context matching to specific strings, especially when using automation.

###To use instrumented files:

**1)** From **Content>Files**, download the instrumented files containing the strings you want to contextualize. You can also download instrumented files [via API](https://docs.smartling.com/display/docs/Files+API#FilesAPI-/file/get(GET)).

![](/hc/en-us/article_attachments/207646108/Smartling___Manage_Files.png)

**2)** Deploy your web application using the instrumented files.

**3)** Use the Chrome Context Capture Extension to take context snapshots in your test environment.

##Setting a Keyboard Shortcut

To make it easier to capture difficult-to-expose elements of a page, you can set a keyboard shortcut to take a snapshot.

**(1)** In the Chrome browser, navigate to **Chrome>Preferences > Extensions** and click **Keyboard Shortcuts**.

![](/hc/en-us/article_attachments/207712247/Extensions.png)

**(2)** In the Smartling Context Capture section, type a keyboard shortcut and click **OK**.

![](/hc/en-us/article_attachments/207712347/Extensions.png)

##Execute Custom Javascript Prior to Snapshot

You can set up the Chrome Context Capture Extension to execute custom javascript on a page before taking a snapshot, for example, to show or hide certain elements on a page or to manipulate markup so that it will match strings in files.

**(1)** In **Chrome>Preferences>Extensions,** find the Chrome Context Capture Extension, and click **Options**.

**(2)** Check **Execute javascript prior to snapshot** and enter the code you wish to execute.

![](/hc/en-us/article_attachments/207712467/Smartling_Context_Snapshot_Options.png)

**(3)** Follow the procedure for [Taking a Snapshot]().

##Capturing Context on iframe Sites

Iframes are windows within a webpage that contain a separate web page, such as a web form. A regular snapshot using the Chrome Context Capture Extension will not capture content within an iframe.

Right-click on the iframe window and from the drop-down menu, select **Capture iframe**, then follow the procedure to Capture a Snapshot. 

![](/hc/en-us/article_attachments/207712587/Smartling_Global_Content_Translation_and_Localization_Solution.png)