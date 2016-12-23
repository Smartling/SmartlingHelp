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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Smartling Account Owners,  Project Managers, Agency Account Owners, and Translation Resource Managers are able to add users and manage user access.

## User Roles and Responsibilities

When you set up a new user, you give them access to a limited number of features defined by their role:

* **Account Owner** -  Manages the translation process from capture to delivery including settings  and users, across all projects under the account.
* **Project Manager** -  Manages the translation process from capture to delivery within a particular project including settings and users.
* **Agency Account Owner**  Assigns content for translation and monitors progress until delivery.
* **Translation Resource Manager** -  Assigns Translation Resources to workflows and steps to which they have access. A Translation Resource Manager (TRM) may be part of the client's project team or an translation agency. Agency TRMs can manage only Translation Resources from their agency.
* **Translation Resource** - Translates, edits or rejects, or reviews assigned content.
* **Requester** (if enabled) - Uploads, downloads and monitors jobs for translation from a limited view of the Smartling dashboard. The Requester Portal must be enabled by your Smartling CSM. More detail is available in our Requester Portal documentation. 





<style>
  td.bool {
    text-align: center;
  }
  th {
    text-align: center;
    }

</style>


## User Permissions


<table>
<thead>
    <th></th>
    <th>Account Owner</th>
    <th>Project Manager</th>
    <th>Agency Owner</th>
    <th>Translation Resource Manager</th>
    <th>Translation Resource</th>
    <th>Translation Requester</th>
</thead>

<tbody>

{% for function in site.data.userroles %}

<tr>
    <td>{% if function.CategoryHeading %}<strong>{% endif %}{{function.FunctionName}}{% if function.CategoryHeading %}</strong>{% endif %}</td>
    <td class="bool">{% if function.AccountOwner %} X {% endif %}</td>
    <td class="bool">{% if function.ProjectManager %} X {% endif %}</td>
    <td class="bool">{% if function.AgencyOwner %} X {% endif %}</td>
    <td class="bool">{% if function.TranslationResourceManager %} X {% endif %}</td>
    <td class="bool">{% if function.TranslationResource %} X {% endif %}</td>
    <td class="bool">{% if function.Requester %} X {% endif %}</td>
</tr>


{% endfor %}

</tbody>



</table>

