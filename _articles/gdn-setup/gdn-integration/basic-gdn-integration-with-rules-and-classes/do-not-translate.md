---
layout: article
title: Do Not Translate
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

## Add a Do Not Translate rule by URL, Element Class or Element ID in the Dashboard.


## Add the ‘notranslate’ class to your source code

~~~
<p class=”notranslate”>This paragraph won’t be captured for translation</p>
~~~

If you add ‘notranslate’ to an inline tag at the very beginning of a string, the string will be split instead of a placeholder being created. This may be unwanted behavior. In these cases, you may want to [create a placeholder rule]() in the dashboard instead. For example:

<p><span class="notranslate">5</span> items in cart.</p>

Will be captured as ` items in cart.`

## Set the HTML5 ‘translate’ attribute to ‘no’

~~~
<p translate=”no”>This paragraph won’t be captured for translation</p>
~~~

## Add the classes `sl_notranslate_alt` or `sl_notranslate_title` to prevent an element's `alt` or `id` tag from being captured.

~~~
<div id=”user-details” class=”notranslate_alt” title=”{{user.name}}”>
	<p>This content will be translated.</p>
	<p>But the ‘title’ attribute will not.</p>
</div>
~~~
