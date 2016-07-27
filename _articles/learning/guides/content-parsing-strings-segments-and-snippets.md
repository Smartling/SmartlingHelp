---
layout: article
title: 'Content parsing: strings, segments, and snippets'
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition:
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


### Introduction

Whenever Smartling captures content from your file, app, or website, the system parses it into small, discrete entities, making it easier to re-order a translation whether for formatting or linguistic reasons. There are three level of parsing: first strings, then segments, and finally snippets:

**Strings**

Smartling extracts strings from the captured content based on the paragraph markers found in your content. Those markers vary depending on the content or file type.

**Segments**

Strings are parsed into segments, defined by end of sentence punctuation markers, i.e. periods, semicolons, interrogation points.

**Snippets**

Segments are divided into snippets based on formatting, e.g. bold, italic, hyperlinks, etc.

### Segment, snippets, and translation

In the Translation Interface Segments and snippets are translated individually.

* In the following example, we are translating the different segments contained in a string.
* Here the segment is divided into snippets:
* Each snippets gets it’s own target field: there a translation resource only enters the translation of whatever part of the segment is highlighted in blue, while smartling appends the formating found in the source content.


Snippets can then be re-ordered as needed. Using the contextual or code view, notice how the snippet has retained its formatting.

### Manually adding target fields

In most cases Smartling can’t allow it’s users to add target fields manually; content parsing is entirely based on underlying code, which means we can only allow translation resources to place text where there is text in the original. Adding a text field would mean disrupting the current layout of your content, or creating potential problems of content positioning and style by adding text in places where the original code has no text.

There are a few exceptions when the underlying HTML will allow for the insertion of target fields in the Translation Interface:

* Your file is an HTML file that was uploaded as such onto Smartling
* The string(s) captured are not enclosed in a block element (i.e. &lt;p&gt; or &lt;div&gt; tag).
* The string(s) has a snippet outside its inline tag.


Please note that a target field cannot be added when:

* There are no tags or styling elements in the string
* The entire string is place within tags or styling elements
* There is text outside of the tags/styling elements, but both sides of these elements already contain non-styled/tagged text.