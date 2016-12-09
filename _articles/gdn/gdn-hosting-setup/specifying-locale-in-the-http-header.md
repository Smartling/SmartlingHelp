---
layout: article
title: Specifying Locale in the HTTP Header
draft: false
Applies to:
  GDN: true
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


You can specify the current language-locale in the http head of a page, and you can also exclude or specify custom localized content.

## Using the `X-Language-Locale` HTTP Header to determine the requested language

The Smartling Global Delivery Network issues a custom http header describing the current language-locale for the request, in the format:

`X-LANGUAGE-LOCALE: [language_code]-[COUNTRY_CODE]`

For example:

**French (France)**: `X-LANGUAGE-LOCALE: fr-FR`
<br>**French (Canada)**: `X-LANGUAGE-LOCALE: fr-CA`
<br>**English (United Kingdom)**: `X-LANGUAGE-LOCALE: en-GB`
<br>**Spanish (International)**: `X-LANGUAGE-LOCALE: es`
<br>**Russian**: `X-LANGUAGE-LOCALE: ru-RU`

The header names are case sensitive, but the language and locale name (for example fr-FR) are **not** case sensitive.

You can add server-side logic to detect the language in use and add appropriate language-specific logic. This might be useful for such things as language-specific options, setting language defaults for the user or customizing checkout experiences.



