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

This callback is sent to the URL provided in the [Create Strings](/developers/api/v2/strings/create-strings/) request. It can be sent as a GET or POST request, thouh only the POST request includes translations. The POST request looks like:

~~~json
{
  "projectId": "51df0cf05",
  "hashcode": "3325fc569a651bef02a93732e48701b4",
  "localeId": "fr-FR",
  "type": "string.localeCompleted",
  "translations": [
    {
      "translation": "Bonjour!",
      "pluralForm": null,
      "modifiedDate": "2016-12-01T14:18:00Z"
    }
  ]
}
~~~

A GET request includes the same information - with the exception of the `translations` object as querystring parameters: `?projectID=9db9036e6` etc. 