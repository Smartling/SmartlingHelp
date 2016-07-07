---
layout: article
title: Do Not Localize URLs
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
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
  reviewed: false
---

By default, when you include an internal link on your site, Smartling automatically rewrites the link to point to the corresponding page on your translated site. For example:

~~~
<a href="http://www.mysite.com/about">About Us</a>
~~~

Might be served on your Spanish site as

~~~
<a href="http://es.mysite.com/about">Sobre Nosotros</a>
~~~

If you do not want this rewriting to occur, apply the Do Not Localize URLs rule. Under this rule, the above link would be served on your Spanish site as

~~~
<a href="http://www.mysite.com/about">Sobre Nosotros</a>
~~~

## How to Apply

### Add a Do Not Translate rule by URL, Element Class or Element ID in the Dashboard.


### Add the ‘sl_norewrite’ class to your source code

~~~
<a class="sl_norewrite" href="http://www.mysite.com/about">About Us</a>
~~~

### Add the `sl_norewrite_redirect` header to your 301 redirects

~~~
<?
Header( "HTTP/1.1 301 Moved Permanently" );
Header( "SL_NOREWRITE_REDIRECTS: 1" );
Header( "Location: http:/www.mysite.com/new/index.htm" );
?>
~~~
