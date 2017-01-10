---
layout: article
title: User Roles
draft: false
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


Smartling Account Owners, Project Managers, Agency Account Owners, and Translation Resource Managers are able to add users and manage user access.

## User Roles and Responsibilities

When you set up a new user, you give them access to a limited number of features defined by their role:

* **Account Owner** - Manages the translation process from capture to delivery including settings and users, across all projects under the account.
* **Project Manager** - Manages the translation process from capture to delivery within a particular project including settings and users.
* **Agency Account Owner** Assigns content for translation and monitors progress until delivery.
* **Translation Resource Manager** - Assigns Translation Resources to workflows and steps to which they have access. A Translation Resource Manager (TRM) may be part of the client’s project team or an translation agency. Agency TRMs can manage only Translation Resources from their agency.
* **Translation Resource** - Translates, edits or rejects, or reviews assigned content.
* **Requester** (if enabled) - Uploads, downloads and monitors jobs for translation from a limited view of the Smartling dashboard. The Requester Portal must be enabled by your Smartling CSM. More detail is available in our Requester Portal documentation.

<style type="text/css">td.bool {
    text-align: center;
  }
  th {
    text-align: center;
    }</style>

## User Permissions

| &nbsp; | Account Owner | Project Manager | Agency Owner | Translation Resource Manager | Translation Resource | Translation Requester |
| --- | --- | --- | --- | --- | --- | --- |
| **PROJECT VIEW** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Global Search | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Clone a project | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Archive a project | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Rename a project | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| **SUMMARY VIEW** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Create a new project | X
{: .bool} | X\*
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Wordcount | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Progress preview | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Jobs | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Add/Delete/ Edit a language | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Workflow summary view | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| **JOBS** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add Job | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| View/Edit Details | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| Fuzzy Match report | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Archive/Unarchive | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| Progress Report | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| Upload a file to a job | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| Download translated files from a job | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | X
{: .bool} |
| **STYLE GUIDE** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Manage Style Guide (create, edit, delete) | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Assign Style Guide | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| **GLOSSARY** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add new term | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Create new glossary | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Export glossary | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Enable/disable suggestions | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Assign Glossary | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| **CONTENT MANAGEMENT** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Upload/download files | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Authorize/Exclude/Delete strings | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add tags to strings | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add/remove strings from a job | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Assign / unassign strings | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add strings instructions | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| View strings history | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Create, view, and resolve issues | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Translate/Edit (Access Translation Interface | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Submit/push strings to the the next workflow step | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Move strings between workflows | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Publish strings | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Search/filter strings | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| **TRANSLATION INTERFACE** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Translate/edit content | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Create/edit terms in the glossary | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X\*
{: .bool} | &nbsp;
{: .bool} |
| View Translation Memory matches | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Add/view/resolve issues | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Reorder segments and manage spaces | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Code view | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| **SETTINGS** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Add/remove users | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Upload/import Translation Memory | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Export Translation Memory as a .TMX file | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Manage SmartMatch settings | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Generate Fuzzy Match estimates | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Manage External Translation | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Customize dashboard | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| **REPORTS** | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Fuzzy Match Report | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |
| Words under Management | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} | &nbsp;
{: .bool} |
| Translation Resource word count | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | X
{: .bool} | &nbsp;
{: .bool} |