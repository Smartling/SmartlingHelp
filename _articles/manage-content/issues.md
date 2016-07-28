---
layout: article
title: Issues
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url:
wistia:
  video: true
  id: quji34kue9
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
  reviewed: true
---


![](/uploads/versions/smartling___translations_management-14---x----972-395x---.png)

Issues are a way for users working on a translation workflow to communicate with other users about the original source content and translations. For example, a Translator might create an Issue to ask a question about terminology in a particular string. By using Issues, you can record any communication about a string, and this can be seen by anyone working on it. Issues streamline the translation workflow. Translators get answers to their questions about the original content so they can translate it quickly and correctly.  Translation resources can review and provide feedback about translations collaboratively. Issues can be created, commented on and resolved.

[Markdown-format links](/hc/en-us/articles/216722378) are supported in issue text.

> The processes below are for managing Issues from the List View. The same functionality is also accessible from the **Issues** tab of the Translation Interface.

## Issue Categories

There are two kinds of issues: **Source String** **issues** and **Translation issues**. The kind of issue you create will affect who sees the issue in the dashboard and receives notifications about it. Each string can support multiple issues.

### Source String:

Issues or questions about the original content, such as clarification about the meaning of the original string or a mistake/typo. Source string issues are not language specific and will be visible to all users with access to the string in any language. By default, Account Owners, Project Managers will receive notification about Source String issues if they have enabled notifications.  The Translation Resource who opens the Source String Issue and any other who comments on it will receive notifications about comments and state change.

#### Types:

* Question/Clarification
* Typo/Misspelling


#### Visibility and Notifications:

* All users can see, comment on and close source string issues.
* Email notifications for source string issues are sent to all Account Owners and Project Managers for the project as well as any other users who participated in the issue by opening or commenting.


### Translation:

Issues dealing with the translation of the string for a particular language. Translation issues will be visible to Account Owners, Project Managers, and Translation Resources working in the same language.

#### Types:

* Poor Translation
* Review Translation
* Doesn’t Fit Space
* Placeholder Issues - placeholders in the translated string do not match the source string.
* Placeholder Mismatch (created automatically only during translation Imports)


#### Visibility and Notifications:

* Translation issues can be seen, commented on and closed by all Account Owners and Project Managers for the project and any Translation Resources, Translation Resource Managers and Agency Owners working in the relevant language.
* Email Notifications are sent to any Translation Resources and Translation Resource Managers that worked on the translation as well as anyone who opened or commented on the issue. Account Owners and Project managers don’t receive notifications unless they open or comment on a translation issue.


## Create an Issue:

**1)** Open the issues dialog from the string action menu (also accessible from the **String History** tab in the Translation Interface).

![](/uploads/versions/smartling___translations_management-15---x----952-223x---.png)

**2)** From the issues dialog, select **Open New Issue**.

![](/uploads/versions/smartling___translations_management-16---x----974-468x---.png)

**3)** Select the kind and type of issue, enter a description and click **Open this issue.**

![](/uploads/versions/smartling___translations_management-17---x----542-303x---.png)

## Comment on and Close an Issue

**1)** Strings with issues are marked in the list view by a red bar. Click the bar to open the issues dialog. You can also access the issues dialog from the Translation Interface.

![](/uploads/versions/smartling___translations_management-18---x----462-82x---.png)

**2)** In the issues dialog, click the arrow to open the issue you want to comment on.

![](/uploads/versions/smartling___translations_management-19---x----973-564x---.png)

**3)** Type your comment in the text field and click **Comment**. If your comment resolves the issue, click **Comment & Close**.

![](/hc/en-us/article_attachments/203374338/Smartling___Translations_Management.png)

## Editing Issues and Comments

You can edit the text of issues and comments you created at any time. Just open the issue and click the pencil **icon** that appears on mouseover.

![](/uploads/versions/smartling___translations_management-20---x----974-630x---.png)

## Tips for managing Issues:

* At any time, Account Owners and Project Managers can view and manage all open issues for all their projects from the [Account Dashboard](/hc/en-us/articles/214197607#Projects).
* Anyone can close an issue, but it is often good practice to let the person who opened an issue close it, to make sure they are satisfied with the resolution.
* You can manage your e-mail notification preferences from the Project Notifications tab of your Smartling Profile
* Account Owners and Project Managers can keep track of issues in the [Issues Report](){: .cc-active}.
* We recommend that issues get resolved before the translation is published. We allow content to be published with open issues because most users don’t want to hold up their translation workflow, however, it’s good practice to resolve all issues so that the reports will accurately reflect your project’s current state. If needed you can return translations for editing after they are published in order to address the issue.
* Content owners (Account Owners and Project Managers) should respond to Source String Issues as fast as possible.  When translators open source string issues there is a good chance they are not able to proceed with translation or don’t feel confident in creating a translation because they need resolution of their question. It’s also a strong indication that there might be integration/content capture issues that need to be resolved, and the string shouldn’t be translated at all.


## Permissions and Notifications Quick Reference

|        | **Source String Issues**       | **Translation Issues** |
| **Account Owner**       | Can see, comment and close. Receives notifications for all issues.       | Can see, comment and close. Receives notifications if they opened or commented on the issue. |
| P**roject Manager**       | Can see, comment and close. Receives notifications for all issues.       | Can see, comment and close. Receives notifications if they opened or commented on the issue. |
| **Translation Resource/ Translation Resource Manager**       | Can see, comment and close. Receives notifications only if they have opened or commented on the issue.       | Can see, comment and close only if they have access to the language at issue. Receives notifications if they have worked on the translation or if they opened or commented on the issue. |
| **Agency Owner**       | Can see, comment and close. Receives notifications only if they have opened or commented on the issue.       | Can see, comment and close only if they have access to the language at issue. Receives notifications if they opened or commented on the issue. |