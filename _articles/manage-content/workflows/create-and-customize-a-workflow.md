---
layout: article
title: Create and Customize a Workflow
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
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Access Workflows from **Settings &gt; Translation Workflow**. Workflows can be created for individual projects or at the account level, so they are available for all projects under that account. Only an account owner can create Workflows at the account level.

## Create a Workflow:

**(1)** Click **+** and choose **Add Project Workflow** or **Add Account Workflow**.

![medium](/uploads/versions/smartling___translation_workflow---x----674-417x---.png)

**(2)** Name the workflow and check all languages you want the workflow to be used for.

![medium](/uploads/versions/smartling___translation_workflow-1---x----577-425x---.png)

## Customize a Workflow:

![](/uploads/versions/smartling___translation_workflow-2---x----968-165x---.png)

**(1)** Add revision steps by clicking&nbsp;**+**. Choose the step type, add a name and set the properties for the step.

![medium](/uploads/versions/smartling___translation_workflow-3---x----576-551x---.png)

| Field | Description |
| Content Assignment | If set to ‘ON’ each string must be assigned to a specific translation resource. If ‘OFF’, any resource with access to this step can work on any string. |
| Primary Action | For Revision steps, the Primary Action is either Edit or Review. This can be used for invoicing and also affects where [SmartMatched](/hc/admin/articles/201519367/) strings enter the workflow. |
| Resources can revise content | If checked, Translation Resources can edit the translation. Checking \*\*Automatically submit edits by Resources\*\* will cause strings to proceed to the next Workflow step when a Translation Resource saves an edit. |
| Resources can reject content to: | If set, Translation Resources on revision steps will be able to return content to a previous step. |
| Resources can Reject and Edit Published Content | If checked, Translation Resources assigned to this step will also be able to edit or reject published strings from this workflow. |
| Pre-publish all translation submits | If checked, any strings submitted to the next workflow step will be automatically pre-published. |

**(2)** Drag and drop steps to reorder the workflow.

**(3)** Edit or remove a step by clicking the drop-down.

**(4)** To allow Translation Resources to reject published strings, edit the **Published** step of the workflow, check **Resources can reject content to:** and select the Workflow step you want rejected content to be returned to. Only resources assigned to a step with the&nbsp;**Resources can Reject and Edit Published Content**&nbsp;option enabled will be able to reject published content.

![medium](/uploads/versions/smartling___translation_workflow-4---x----576-275x---.png)

## Add Users to a Workflow

Access to each workflow step is customizable. Content owners have access to all workflow steps, but Translation Resources and Agencies must be given access to the steps you want them to work on.

**1)** Click the drop-down next to the step name and select **Manage People**.

![](/uploads/versions/smartling___translation_workflow-5---x----978-307x---.png)

**2)** From the dialog, select a language and check the users you want to work in the step. Close the dialog when you’re done.

![medium](/uploads/versions/smartling___translation_workflow-6---x----576-245x---.png)

**3)** The dialog will only show existing users who are available to work in the step. A user is considered available if they have been invited to the project and are set up to translate the selected language. Agency translators will not be displayed. To add a new user or manage a particular user’s access to languages and workflow steps in detail, use the **Team** page. See [Add and Manage User Access](/hc/en-us/articles/201016167) for more information.

## Workflow Holds and Pre-Translation Steps

Pre-translation steps and Workflow Holds are special steps that pause the flow of content. Strings are held in the step until a Project Manager or Account Owner moves them forward. For example, you may want to use a pre-translation step if you know want to translate the content, but want to estimate costs before moving all strings into translation. A Workflow Hold can be useful before the Published step if you want to wait until all your content is translated and publish everything at once.

## Default Authorization Settings

Click&nbsp;**Language Settings** from the&nbsp;**Translation Workflow** page to set a default Workflow for each language. An authorized string will use the default Workflow for its target language unless you specify a different Workflow

![](/uploads/versions/smartling___translation_workflow-7---x----1249-497x---.png)

Note: You can also manage default workflow from each language [from the Project Summary page](){: .cc-active}.