---
layout: article
title: Migrate to v2
categories:
  - api
  - v2
dev: true
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

  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Many of Smartling’s v1 API methods are scheduled to be deprecated March 1 2017, so all users should start preparing to transition to v2 methods. Migrating your existing integrations from v1 to v2 requires four steps.

## Create an authentication strategy

Where v1 requests were authorized with an API key, v2 requests use Oauth 2.0\. A valid access token must be included in the header of each request. This means that you need to set up some way of passing a valid token to your API requests. See [Authentication]() for full details. Depending on how you are using the API, there are two main approaches:

*   Make a separate Authentication request before each request to obtain an access token. If accessing the API intermittently or as part of a script, this is likely to be the easiest solution.
*   Set up a process to obtain and periodically refresh an access token, then make it available as a variable. Consider this approach if you’re integrating Smartling into an application or making a high volume of requests.

## Change your requests to use path variables

While v1 request URLs were static, v2 APIs use path variables to identify projects and locales. To switch to v2, you’ll need to update how you assemble your requests to generate the correct request URL for the project and locale you want to access.

## Switch over to v2 URLs

Smartling’s v2 API gives you some new options for managing your content (see [New in v2](/developers/API/v2/New-in-v2/) for details). Consider taking advantage of the new endpoints when you switch to v2\. To maintain your current functionality, see the [table below](#EndpointMap) for the most direct v2 equivalent of each v1 endpoint.

## Update necessary parameters - especially Arrays

Many v2 requests use similar parameters to their v1 equivalents, with a few key differences. Parameters that referenced ‘Approve’ in v1, now use ‘Authorize’ to match the terminology used in the Smartling Dashboard. Additionally, some requests now take Array arguments. These are marked in the documentation for each request. Array arguments must be passed in array format, even if there is only one value.

You should now be ready to start using Smartling API v2.

<!-- ## V1 to v2 Endpoints - Nearest Equivalent

<div dir="ltr">

<table class="table"><colgroup><col width="179"> <col width="413"></colgroup> 

<thead>

<tr>

<th>

v1 Endpoint

</th>

<th>

v2 Endpoint

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

/v1/file/upload

</td>

<td>

POST - /files-api/v2/projects/{projectId}/file

</td>

</tr>

<tr>

<td>

/v1/file/get

</td>

<td>

GET - /files-api/v2/projects/{projectId}/locales/{localeId}/file

</td>

</tr>

<tr>

<td>

/v1/file/list

</td>

<td>

GET - /files-api/v2/projects/{projectId}/files/list

</td>

</tr>

<tr>

<td>

/v1/file/status

</td>

<td>

GET - /files-api/v2/projects/{projectId}/locales/{localeId}/file/status

</td>

</tr>

<tr>

<td>

/v1/file/rename

</td>

<td>

POST - /files-api/v2/projects/{projectId}/file/rename

</td>

</tr>

<tr>

<td>

/v1/file/delete

</td>

<td>

POST - /files-api/v2/projects/{projectId}/file/delete

</td>

</tr>

<tr>

<td>

/v1/file/last_modified

</td>

<td>

GET - /files-api/v2/projects/{projectId}/file/last-modified

</td>

</tr>

<tr>

<td>

/v1/file/get-translations

</td>

<td>

POST - /files-api/v2/projects/{projectId}/locales/{localeId}/file/get-translations

</td>

</tr>

<tr>

<td>

/v1/file/import

</td>

<td>

POST - /files-api/v2/projects/{projectId}/locales/{localeId}/file/import

</td>

</tr>

<tr>

<td>

/v1/project/locale/list

</td>

<td>

GET - projects-api/v2/projects/{projectId}

</td>

</tr>

</tbody>

</table>

</div> -->