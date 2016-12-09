---
layout: article
title: New in v2
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
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Smartling is rolling out a new, expanded suite of APIs. Beginning with Authentication and Files APIs. API v1 is still supported but will be deprecated on March 1 2017.

Version 2 of FilesAPI will be familiar to you if you’ve used v1 but there are some important differences to keep in mind while you’re getting started.

See our [Migration guide](/developers/api/v2/migrate-to-v2/) for help getting started.

## Authentication

V2 APIs replace the single API key with Oauth 2.0 authentication, requiring an access token to be included in the header of every request. Tokens are obtained via an Authenticate request containing a User ID and User Secret.

See [Authentication](/developers/api/v2/authentication/) for more information.

## Path Variables

Some V2 URLs contain path variables that you need to consider when you write your calls. In FilesAPI there are two path variables that may appear in a URL.

*   `projectId` - the unique identifier for a Smartling project. You can find this information in the Smartling dashboard at **Project Settings > API**.

*   `locale` - the locale code for a translated file. You can find a full list of locale codes used in each of your projects in the Smartling dashboard at **Project Settings > API**.

## New Terminology

Some terminology and parameter names in v2 are different from their v1 equivalents. Changes include

*   To bring the API in line with Smartling's Dashboard terminology, the API uses 'authorize' instead of 'approve'. For example, the `localesToApprove` parameter in the v1 version of [Upload File](http://docs.smartling.com/pages/API/v1/FileAPI/Upload-File/) call is now `localeIdsToAuthorize` in v2
*   URLs now use hyphens (-) instead of underscores (_). For example: `/last_modified` is now `/last-modified`

## Arrays

Most Smartling API arguments are strings, but some v2 calls take arrays as arguments to return information on multiple files or locales.

**www-url-encoded:**

    ?localeId[]=de-DE&localeId[]=fr-FR

Don’t forget the square brackets for array values, even if you’re only passing a single argument.

**Form Parameters:**

     -F "localeId[]=fr-FR" -F "localeId[]=de-DE"

**JSON:**

    {"localeIds":["es-ES","zh-CN"]}

## New Options

If you’re already using v1 of Smartling’s File API, you may be able to improve on your integration with the new, more powerful calls included in v2. Significant new options include:

*   You now have four different options for downloading files:
    *   Download a single translated file;
    *   Download all locales for a single file as a .ZIP archive
    *   Download multiple files for multiple locales as a .ZIP archive
    *   Download translations for all locales in a single CSV file
*   Choose between detailed status of a file in a single locale or a summary for all locales.
*   Check last modified dates for a selected locale