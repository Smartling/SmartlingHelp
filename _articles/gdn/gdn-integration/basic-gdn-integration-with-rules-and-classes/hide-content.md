---
layout: article
title: Hide Content
draft: false
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

The Hide rule prevents an element from appearing on your translated sites completely. For example, if you have physical business locations in the US, but not in other markets, you may wish to hide relevant sections of your site in those markets. So if your Site navigation looks like this:

~~~html
<ul>
	<li>About Us</li>
	<li>Products</li>
	<li>Stores</li>
	<li>Cart</li>
</ul>
~~~

You may want to show it on translated sites as

~~~html
<ul>
	<li>About Us</li>
	<li>Products</li>
	<li>Cart</li>
</ul>
~~~

This can be achieved through a Hide rule.

You might also want to hide meta content in your page header that only applies to your source site.

## How to Apply

### Add a Remove Content from Page rule by Element Class or Element ID in the Dashboard.

> You still may have to add ‘id’ or ‘class’ attributes to your source code if they are not already present.

### Add the `sl_hide` class to your source code

~~~html
<ul>
	<li>About Us</li>
	<li>Products</li>
	<li class=”sl_hide”>Stores</li>
	<li>Cart</li>
</ul>
~~~

### Add comments around content in your page header

~~~html
<!-- SL:start:hide -->
<meta property="og:description" content="Smartling will exclude this content." />
<!-- SL:end:hide -->
~~~