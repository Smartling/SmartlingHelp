---
layout: article
title: How to Specify a Language-Specific CSS
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
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---
The Smartling service adds a specific class to the `<body>` tag of each language website, specific to that language. The added class is in the format `smartling-[language code]`; for example:

~~~
<body class=”smartling-fr”> (for French)

<body class=”smartling-ru”> (for Russian)

<body class=”smartling-es”> (for Spanish)
~~~

This class allows you to create language-specific CSS entries. For example, some languages may require more letters — and more width — to communicate the same message, so you may wish to allow for multi-line wrapping to better fit the translated letters, or for or character-based languages, you may want to increase the line spacing.

For a particular language, you may wish to replace an image with an alternative image containing translated or more culturally appropriate content.

For any of these examples, you can simply add additional CSS entries that will cascade from the overall body class, such as:

~~~
.smartling-fr .someclass { font-size: 12px; }
~~~

Or:

~~~
.smartling-fr .someID { font-size: 12px; }
~~~

In this case, the class `.someclass` or `.someID` will only be effective on the French site (fr), and will override the font-size attribute for the class `.someclass` or `.someID` appearing on other sites, including the original language website.