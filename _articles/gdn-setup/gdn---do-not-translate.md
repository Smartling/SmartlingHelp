---
layout: article
title: GDN - Do Not Translate
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
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


By default, the GDN will try to capture all the translatable content on your site. However, it’s likely that your site has at least some content which is translatable, but should not actually be translated. Some examples include:

Personal information about users

User-generated content, such as comments

High-volume or low-value content you don’t want to spend money on translating, like a blog or help content.

Proper names

Integrated content such as advertisements or external widgets.

For this reason, Smartling lets you mark content that you do and don’t want to translate in your HTML code. There are two ways you can do this:

**1)** Give the element you don’t want captured a class of ‘notranslate’.

&lt;div id=”comment-box” class=”notranslate”&gt;

A user comment you don’t want captured

.&lt;/div&gt;

**2)** Set the HTML5 ‘translate’ element to “no”:

&lt;div id=”comment-box” translate=”no”&gt;

A user comment you don’t want captured.

&lt;/div&gt;

Be careful where you place your notranslate directive, as it will apply to all child elements as well. For example:

&lt;div id=”Comments” class=”notranslate”&gt;

&lt;div class=”comment-box”&gt;

A user comment that won’t be translated.

&lt;/div&gt;

&lt;div class=”comment-box”&gt;

A second user comment that won’t be translated.

&lt;/div&gt;

&lt;/div&gt;

Note: Remember that the following HTML tags cannot take the ‘class’ attribute: base, head, html, meta, param, script & style.

Content in Title or Alt tags.

If you apply “notranslate” to an element, any ‘alt’ or ‘title’ tags will also not be captured. If you want to translate the contents of an element, but not it’s ‘alt’ or ‘title’ tags, you can add the specific classes ‘notranslate_title’ or ‘notranslate_alt’. For example:

&lt;div id=”user-details” class=”notranslate_alt” title=”{{user.name}}”&gt;

&lt;p&gt;This content will be translated.&lt;/p&gt;

&lt;p&gt;But the ‘title’ attribute will not.&lt;/p&gt;

&lt;/div&gt;

Differences from Exclude

You can also exclude strings from translation in the Smartling Dashboard. This will have a different effect on your project. Excluded strings are never translated and will always be presented in their source form. For example, if you exclude the string ‘Home’ in the Dashboard, then it will be displayed as ‘Home’ anywhere it appears on your translated sites. If you give a &lt;p&gt; tag containing the string ‘Home’ a class of ‘notranslate’, you could still capture and translate the string ‘Home’ from another part of your site.

In general, you should use exclude to identify specific content that shouldn’t be translated, and ‘notranslate’ to identify parts of your site that you don’t want translated, regardless of their current content.

Use exclude for content that appears often on your site and should never be translated, such as your brand name.

Use ‘notranslate’ for parts of your site where content changes regularly and you never want it captured. A comments section is a good example. Instead of trying to exclude each new comment on your site manually, you can mark your comments div as “notranslate” so that comments are never captured by Smartling.