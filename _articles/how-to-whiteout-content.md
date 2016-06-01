---
layout: article
title: How to Whiteout Content
draft: true
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
  internal-links: false
  images: false
  FAQs: false
  related: false
---
For security or privacy reasons, your organization may want to whiteout HTML content so that it does not appear for translators and editors reviewing the site. In this case, you can use the class “**whiteout**” to ensure that strings appear with placeholders that users cannot edit.

For example, the following HTML:

~~~
<html>  
<body>  
Public text  
<div class="sl_whiteout">  
Private text  
<div>Private text in a subtag</div>  
</div>  
</body>  
</html>
~~~

Appears as the following in the Translator Interface for professional translators and other roles:

Public text  
******* ****  
******* **** ** * ******

Smartling also displays placeholders (***) that are not editable for any elements nested inside the whiteout class.

Smartling does not store the "whiteout" content anywhere in the Smartling infrastructure.