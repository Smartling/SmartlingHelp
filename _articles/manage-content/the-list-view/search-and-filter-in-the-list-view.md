---
layout: article
title: Search and Filter in the List Views
redirect-url: /hc/en-us/articles/203416736
---


There are several ways to filter your content in the list view. Your options will vary depending on your user type.

![](/uploads/versions/smartling___translations_management-21---x----2488-1396x---.png)

## Filter by content type

* **Awaiting Authorization:** Content that has been captured but not authorized for translation.
* **In Progress:** Content that has been authorized but not yet published.
* **Completed:** Content that has been published.
* **Excluded**: Content that has been excluded from translation.


## Filter by status

![small](/uploads/versions/smartling___translations_management-22---x----392-560x---.png)

* **Pending assignment:** Translations are authorized but still need to be assigned to translators
* **Available for pre-publishing:** Translations can be [pre-published](/knowledge-base/articles/manage-content-in-translation-content-owners/#pre-publish) but will remain in the workflow until all workflow steps are complete.
* **Not Translated:** No translation is saved for the string.
* **Translated:** A translation is saved for the string.
* **Unresolved issues:** Displays all strings that still have open issues or questions.
* **Translation Same As Source** - A translation has been saved for the string, which exactly matches the source string.'


## Filter by workflow/step

Allows you to show only strings belonging to a workflow or steps within a workflow. You can select a whole workflow with a checkbox, or any number of individual steps.

![medium](/uploads/versions/smartling___translations_management-23---x----1546-908x---.png)

> If your project has only one workflow, you see a simplified drop-down filter showing the steps of your workflow.

## History Search

Search for strings by their history. Select an action, a date range and, optionally, a user to find matching strings. Available actions may include:

* **Content Assigned** - A string was assigned to a resource. This applies to workflow steps where the Assignment feature is enabled.
* **Content Authorized** - A string was authorized for translation.
* **Content Moved** - A string was moved from one workflow or workflow step to another.
* **Translation Submitted** - A string was submitted from the translation step to the next step in a workflow.
* **Edit Submitted** - A string was submitted from an editing step to the next step in a workflow.
* **Review Submitted** - A string was submitted from a review step to the next step in a workflow.
* **Content Unauthorized** - A previously authorized string was unauthorized (shown in&nbsp;**Awaiting Authorization**&nbsp;view only).


For example, this search returns all strings authorized by the user 'Account Owner' in the last 7 days.

![small](/uploads/versions/smartling___translations_management-24---x----536-632x---.png)

## Keyword Search

Search both original source string and translations for keywords. Smartling searches are not case sensitive and do not support search operators.

## Filter by string properties

Click the down arrow next to the keyword search.

![small](/uploads/versions/smartling___translations_management-25---x----267-606x---.png)

* **URL:** Filter by URL to find content within a particular file or from a particular link on your website. When using the URL filter, Smartling may display search results from other URLs if that content is shared. In a GDN project, Smartling associates the first URL from which content is captured with that string. If the same string appears on other URLs (e.g. navigation) it will only be associated with one single URL. For Files projects, URLs may be the file name or may be the name of the image context file if one has been applied.
* **File Name:** Search for all strings belonging to a particular file. This filter works similarly to the URL search, but will always show all strings belonging to a particular file, even if image context has caused the strings to have different URLs.
* **Key/Variant**: If the string is a [variant](/knowledge-base/articles/unique-strings-and-variants/) use this filter to look up the Translations by variant or key metadata.
* **Context:** Finds strings that have or do not have visual context. This filter appears for files projects only.
* **Search by Translation Resource:** Find strings currently assigned to a specific Translation Resource.
* **Job:** Find strings that are part of a specific Job, or have no Job assigned.
* **Search by Domain:** If you have multiple domains setup in your project, filter content by domain.
* **Search by Tag:** Filter for translations by [tags](/knowledge-base/articles/tagging-strings/).
* **Active/Inactive Strings:** Show strings which are active, [inactive](/knowledge-base/articles/inactive-strings/) or both.


## Settings

Use the toggle buttons to turn context thumbnails on and off.

Click the gear wheel to choose to show string context and workflow step name against each string in the list view.

> If you choose ‘Show Workflow Step Name’, you can also instantly set the filter to the workflow step of any string by clicking the step name.