---
layout: article
title: Placeholders in Files
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: true
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
  internal-links: false
  images: false
  FAQs: false
  related: false
---


In Files projects, you can exclude dynamic content from translation by using placeholder code.

For example, the .properties string:

`welcome=Hi, %s! Welcome to Smartling.`

is captured by Smartling with the placeholder code intact, allowing you to translate the static text and let your application populate the dynamic content.

![](/uploads/versions/excludedynamiccontent---x----1005-742x---.png)

**Positional Information in Placeholders**

Smartling automatically adds positional information to all placeholders, since translators sometimes need to alter the positioning of words in a sentence. This will not affect the way your site or app works. For example, for the string

`string1=Welcome, %s. You have %s in your account.`

Smartling will output:

`string1=Welcome, %1$s. You have %2$s in your account.`

**Custom Placeholders**

You can use Smartling Files API or file directives to specify a custom placeholder format when uploading a file. See the [Files API](https://docs.smartling.com/display/docs/Files+API) and [Supported File Types](https://docs.smartling.com/display/docs/Supported+File+Types) documentation for more details on placeholders for each file type.