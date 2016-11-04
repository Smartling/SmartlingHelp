---
layout: article
title: Callbacks
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

Some events in Smartling can trigger callbacks to a specified URL. Callbacks usually let you know when an action is completed. For example, a file or string is translated in a particular locale or a translation job is complete.

## General Information

* Callbacks are issued from IP 184.73.255.141. To make sure you receive necessary callbacks, you should whitelist this IP address.

## Callbacks

### String is translated for a locale

This callback is sent to the URL provided in the [Create Strings](/developers/api/v2/strings/create-strings/) request. It can be sent as a GET or POST request. The POST request looks like:

~~~json
{
    "projectId":"9db9036e6",
    "hashcode":"0361626e34448db7bcc510501c4f0d26",
    "localeId":"fr-FR",
    "type":"string.localeCompleted",
    "ts":"1476112501495"
}
~~~

A GET request includes the same information as querystring parameters: `?projectID=9db9036e6` etc.