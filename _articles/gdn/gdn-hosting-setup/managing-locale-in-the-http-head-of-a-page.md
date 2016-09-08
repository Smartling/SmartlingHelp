---
layout: article
title: Managing Locale in the HTTP Head of a Page
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

## Including Locale in the HTTP Header

The Smartling Global Delivery Network issues a custom http header describing the current language-locale for the request, in the format:

X-LANGUAGE-LOCALE: [language_code]-[COUNTRY_CODE]

For example:

**French (France)**: X-LANGUAGE-LOCALE: fr-FR
<br>**French (Canada)**: X-LANGUAGE-LOCALE: fr-CA
<br>**English (United Kingdom)**: X-LANGUAGE-LOCALE: en-GB
<br>**Spanish (International)**: X-LANGUAGE-LOCALE: es
<br>**Russian**: X-LANGUAGE-LOCALE: ru-RU

The header names are case sensitive, but the language and locale name (for example fr-FR) are **not** case sensitive.

You can add server-side logic to detect the language in use and add appropriate language-specific logic. This might be useful for such things as language-specific options, setting language defaults for the user or customizing checkout experiences.

## Excluding or Specifying Localized Content in the `<head>` of a page

Localized content consists of strings from your source site that you may want to completely replace with entirely different content in your translated locales. This could be either different source content that requires translation, or locale-specific content that is already translated such as a client testimonial. Smartling refers to this as content 'swap'.

You can exclude or specify custom localized content in the meta tags (keywords and descriptions) and title tag that appear in the `&lt;head&gt;` tag of a page by using the Smartling "notranslate" and "SL:swap" HTML comments.

**Here's an example that swaps meta keywords:**

~~~
<!-- SL:swap-start:id:/page/html.html-keywords -->
<meta name="keywords" content="keyword1, keyword2, keyword three">
<!-- SL:swap-end -->
~~~

**To exclude content**:

~~~
<!-- SL:start:notranslate -->
 <meta property="og:description" content="Smartling will exclude this content." />
<!-- SL:end:notranslate -->
~~~

**To localize content**:

~~~
<!-- SL:swap-start:id:UniqueID -->
<meta property="og:description" content="This content will appear in Smartling at Content > Localized Content" />
<!-- SL:swap-end -->
~~~

**UniqueID** is unique HTML ID that you specify and must be unique across all ID's in your content

If you tag meta keywords for swapping to localize content (instead of excluding content using 'do not translate'), Smartling will treat the swapped content as a comma-separated list.

## Title and Meta

Text appearing within the page `&lt;title&gt;&lt;/title&gt;` tags, as well as the keywords and description `&lt;meta&gt;` tags will always be translated and need not be marked for translation.