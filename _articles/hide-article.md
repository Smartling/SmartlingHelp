---
layout: article
title: Hide Content
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

Your organization may decide to not translate specific content, so it may be appropriate to hide the original HTML element. In this case, you can use the exclusion class “SL_hide” to both exclude the content from translation and hide the original content on the translated site. This differs from the HTML class name "notranslate" which excludes the content from translation, but displays the original content on the translated site.

For example, consider the following navigation:

~~~
<ul>  
     <li>About Us</li>  
     <li>Products</li>  
     <li>Services</li>  
     <li class=”SL_hide”>Offices</li>  
     <li>Shopping Cart</li>  
</ul>
~~~

Smartling will translate all of the items in the navigation menu with the exception of “Offices”. This item will be hidden, and not display in the translation.  

Given that Smartling excludes the entire HTML element, this may affect the layout on the translated page.

**Hiding Content in the Head of a HTML Page**

You can hide content in the `<head>` of HTML page using the `SL:start:hide` class.  

For example:  

~~~
<!-- SL:start:hide -->  
<meta property="og:description" content="Smartling will exclude this content." />  
<!-- SL:end:hide -->  
~~~