---
title: Basic GDN Integration using Rules and Classes
layout: section
subsections:
  - title: none
subarticles:
  - title: Do Not Translate
  - title: Do Not Localize URLs
  - title: Do Not Localize URLs or Translate Link Text
  - title: Hide Content
  - title: Do Not Capture Content
  - title: Whiteout
wistia:
  video: false
  id:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


By default, Smartling captures all translatable content on your site and serves translations to users on your translated sites. However, there is almost always some content that you don’t want translated. Some examples include:

* Personal information about users
* User-generated content, such as comments
* High-volume or low-value content you don’t want to spend money on translating, like a blog.
* Proper names
* Integrated content such as advertisements or external widgets.
* Dates and Times
* Currency
* SKUs, Product IDs, etc


Smartling’s GDN Rules help you to identify and manage this content. Rules tell Smartling how to handle a section of content on your site. For example, to not translate a particular paragraph, to translate the text of a hyperlink but leave the URL unchanged, or even to remove a section of content from translated sites.

Rules can be applied to content at two levels:

* to whole pages by URL,
* To individual HTML elements on a page


Most Rules can be applied in two different ways. The first way is to create a rule in the Smartling Dashboard at **Global Delivery Network &gt; Configuration**, under the **Rules** tab.

![](https://lh6.googleusercontent.com/UefLXkF4mqVZwW84sPNeMhkskzE5khms7NyK0nGWoLPozXompkrgAfkcUaqBmGrO2CVtR0_f2jmI7pvomvNP5p7VpuUpyZPO45DNvthRjtcS_DgQcfIX7Cz_e0iYDUyx4-RBkNm4)

The second way is to add special Smartling classes directly to your site’s source code. For example to not translate a paragraph of text:

~~~html
<p class="notranslate">This paragraph won’t be captured for translation</p>
~~~

Be aware that the rule will also be applied to all child elements of the element given the Smartling class:

~~~html
<div id="Comments" class="notranslate">
    <div class="comment-box">
        A user comment that won’t be translated.
    </div>
    <div class="comment-box">
        A second user comment that won’t be translated.
    </div>
</div>
~~~

> Remember that the following HTML tags cannot take the `class` attribute: `base`, `head`, `html`, `meta`, `param`, `script` & `style`.

Both methods have the same effect on content. Which you choose to implement will depend on how easily you can edit the source code of your site and whether you already have classes or IDs that you can use to identify content.

## Difference from Excluding strings

You can also exclude strings from translation in the list view. This has a slightly different effect. If you exclude the string ‘Hello!’ from the list view, any instances of the string ‘Hello!’ on your site will not be translated. If you apply a Do Not Translate rule to a `<h1>` element on your site containing the word ‘Hello!’, that content will not be captured by Smartling for translation. If the string ‘Hello!’ appears elsewhere in your site, for example, inside a regular `<p>` tag, it will be captured and translated as normal.

As a general best practice, you should use Exclude in the Smartling dashboard for identifying particular text that you don’t ever want translated. For sections of your site that you know you will never want translated, use a Rule..For example the comment section of your site; Instead of trying to exclude each new comment on your site manually, you can give your comments `<div>` the `notranslate` class so that comments are never captured by Smartling.