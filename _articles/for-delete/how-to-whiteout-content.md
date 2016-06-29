---
layout: article
title: How to Whiteout Content
draft: true
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
---


For security or privacy reasons, your organization may want to whiteout HTML content so that it does not appear for translators and editors reviewing the site. In this case, you can use the class “**whiteout**” to ensure that strings appear with placeholders that users cannot edit.

For example, the following HTML:

~~~html
&lt;html&gt;
&lt;body&gt;
Public text
&lt;div class="sl_whiteout"&gt;
Private text
&lt;div&gt;Private text in a subtag&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
~~~

Appears as the following in the Translator Interface for professional translators and other roles:

Public text
<br>**\*\***\* **\*\*
<br>\*\*****\* \*\*** \*\* \* **\*\***

Smartling also displays placeholders (\*\*\*) that are not editable for any elements nested inside the whiteout class.

Smartling does not store the "whiteout" content anywhere in the Smartling infrastructure.