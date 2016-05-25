---
layout: article
title: Manage Languages
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:https://app.cloudcannon.com/editor#/site/19991/collections/_articles/automatic-machine-translation.md
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
  internal-links: false
  images: false
  FAQs: false
  related: false
---

_The following article applies to Global Delivery Network, _Application Resource File_, Business Document, and CMS Connector project types._

Smartling gives Account Owners the ability to add and delete languages in a project.

**To add a language:**

**(1)**From the **Content** summary screen, Click **Add language  


**

**(2)** In the Add Language Dialog box, select:

*   The **Language** you want to add.
*   A **Style guide** from your style guide library.
*   A **Default Translation Workflow** for authorized content in the new language.
*   The **Authorization** type:

*   **Authorize all active string**: all strings already active in the project will be authorized for translation
*   **Synchronize with a language**: use this option if you'd like to authorize the same strings authorized in another language (and have the option to select a language)
*   **I'll decide later**: the strings will be added to your awaiting authorization queue, where you'll be able to authorize them manually

*   **Sync Exclusions With -** Use this option to exclude strings for the new language based on excluded strings in another. This option is only available if you have chosen **Synchronize with a language**, above.



**(3)** Click **Add**.

You can [manage workflow settings](/hc/en-us/articles/203604913-Create-and-Customize-a-Workflow#Default) for the new language at**Project Settings > Workflow Settings**

**To delete a language:**

From the **Summary**screen, mouseover to the right of the language you wish to delete and click **X**.



Once you've deleted a language:

*   Published websites through the GDN will go offline.
*   You will no longer be able to download translated files in the deleted language.
*   Translations from the deleted language will no longer be counted towards your Words Under Management and your total will decrease.
*   Translations already completed in the deleted language will remain available in the Translation Memory and can be leveraged by other projects that share the same Translation Memory.
*   Translations are not permanently lost. You can add the language back to the project at any time using **Add Languages** from the summary screen. Strings from the re-added language will return to whatever Workflow step they were in at the time they were deleted.

**To edit a language:**

From the **Summary** screen, mouseover to the right of the language you want to edit and click the **pencil** icon.



From the edit dialog box, you can select the [default workflow](/hc/en-us/articles/203604913-Create-and-Customize-a-Workflow#Default) and [style guide](/hc/en-us/articles/201427556) for the language.
