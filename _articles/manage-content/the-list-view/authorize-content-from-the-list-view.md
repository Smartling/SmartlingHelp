---
layout: article
title: Authorize/Unauthorize Content from the List View
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


Before content is translated, you must Authorize it. You can find unauthorized content at **Content &gt; Translations** by setting the stage filter to **Awaiting Authorization**. Smartling gives you two ways to authorize content: default and custom.

## Default authorization

To authorize strings for all languages in a project and send strings to the default workflow for each language, click **Authorize** for an individual string, and **Authorize Group** to authorize all strings in a URL or file.

![](/uploads/versions/smartling___translations_management-8---x----1226-599x---.png)

## Custom Authorize

To authorize strings on a per-language basis or specify a workflow for those strings:

**1)** Use the checkboxes to select the strings that you want to authorize, or set your filter to a single workflow step if you want to authorize all strings in that step.

**2)** From the Actions menu, select **Authorize for Translation** to authorize selected strings only or **Authorize All** to authorize all content matching the current filter.

![](/uploads/versions/smartling___translations_management-9---x----1343-601x---.png)

**3)** In the Authorize dialog box, select your languages, the Workflow for each language and a [job](/knowledge-base/articles/jobs/){: .cc-active}, if desired. Click **Submit**.

![medium](/uploads/versions/smartling___translations_management-10---x----571-431x---.png)

## Partially Authorized Content

The Awaiting Authorization List View can be configured to show partially authorized strings - that is, they have been authorized for one or more languages, but not for all languages in the project. To show these strings, check **Show Partially Authorized**.

![small](/uploads/versions/smartling___translations_management-11---x----254-482x---.png)

## Unauthorize Content

If you have authorized content for translation by mistake, Smartling allows Account Owners and Project Managers to unauthorize strings from the List View. Unauthorized strings are returned to the **Awaiting Authorization** queue. The unauthorize action is recorded in the string's history.

> Only strings without a translation can be unauthorized.

**1)** From **Content &gt; Translations**, select one or more strings and choose **Unauthorize** from the **Action** menu.

![](/uploads/versions/unauthorize---x----2470-1016x---.png)

**2)** Select the languages you want to unauthorize and click **Submit**.

![medium](/uploads/versions/unauthorize2---x----1128-632x---.png)