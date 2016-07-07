---
layout: article
title: Re-Sort Translated Content
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


It’s common to alpha sort content in select or list elements on your page. For example, in an Address form, you might have an alphabetized list of countries. If these elements are simply listed on your source site in the correct order for English, then your translated sites will appear out of order when, for example, ‘Germany’ becomes ‘Deutschland’.

You can manage this by including the class  `sl_sort` in your list. If this class is present, Smartling will reorder the content so it displays correctly in each language.

> While we provide this method for convenience, keep in mind that it will work only for latin languages. Where possible, consider a robust JavaScript-based sorting solution.

~~~html
<select name="countryList" class="sl_sort">
     <option value="Albania">Albania</option>
     <option value="Germany">Germany</option>
     <option value="South Africa">South Africa</option>
     <option value="United States">United States</option>
</select>
~~~

## Variations
* `sl_sort_desc` - will sort content Z->A.
* `sl_sort_preserve_top` - keeps the first entry in place regardless of language.
