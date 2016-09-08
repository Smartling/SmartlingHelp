---
layout: article
title: Do Not Capture Content
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


The Do Not Capture Content rule can only be applied to whole pages. When it is applied to a page, Smartling continues to serve existing translations for that page on your translated sites, but it will not capture any changes you make to the content after applying the rule. For example:

If your source page has the heading

~~~
<h1>Hello!</h1>
~~~

And it is translated on your Spanish site as

~~~
<h1>Hola!</h1>
~~~

If you apply a Do Not Capture Content rule to the page, and change your source to read

~~~
<h1>Greetings</h1>
~~~

This new string will not be captured for translation and your Spanish site will continue to show

~~~
<h1>Hola!</h1>.
~~~

A good use of this rule is to capture a page once, authorize the permanent content that you want to translate, then apply the Do Not Capture Content rule and delete content from parts of the page you don’t want to translate.

## How to Apply

### Add a Remove Content from Page rule by Element Class or Element ID in the Dashboard.

![](/uploads/versions/smartling___global_delivery_network_configuration---x----979-149x---.png)