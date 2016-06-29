---
layout: article
title: Sort Translated Content
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


When you translate a list of items, the translated list may no longer be sorted in the proper order. For example, if you translate the following alphabetical list of countries into Spanish:

~~~
<select name="countryList">
     <option value="Albania">Albania</option>
     <option value="Germany">Germany</option>
     <option value="South Africa">South Africa</option>
     <option value="United States">United States</option>
</select>
~~~

The translated list will appear as:

~~~
<select name="countryList">
     <option value="Albania">Albania</option>
     <option value="Germany">Alemania</option>
     <option value="South Africa">Sudáfrica</option>
     <option value="United States">Estados Unidos</option>
</select>
~~~

The list is no longer in alphabetical order (Sudáfrica should appear after Estados Unidos).

Smartling helps you sort translated text in ascending or descending order by using the `sl_sort` and `sl_sort_desc` tags. If the example above includes sl_sort, and when translated to Spanish, the countries are listed in alphabetical order.

~~~
<select name="countryList" class="SL_sort"> 
     <option value="Albania">Albania</option>
     <option value="Germany">Alemania</option>
     <option value="United States">Estados Unidos</option>
     <option value="South Africa">Sudáfrica</option>
</select>
~~~


If you want the countries listed in descending order, use the `sl_sort_desc` tag:

~~~
<select name="countryList" class="SL_sort_desc">
     <option value="South Africa">Sudáfrica</option>
     <option value="United States">Estados Unidos</option>
     <option value="Germany">Alemania</option>
     <option value="Albania">Albania</option>
</select>
~~~

**<span id="preserve" class="wysiwyg-font-size-large">Preserve Top</span>**

In cases where you want to keep a specific item at the top of the list, such as instructions for selecting an option, use the `sl_sort_preserve_top` tag. Here's an example:

~~~
<div>
<select class="SL_sort_preserve_top">
<option value="Select Country">Select a Country</option>
     <option value="South Africa">Sudáfrica</option>
     <option value="United States">Estados Unidos</option>
     <option value="Germany">Alemania</option>
     <option value="Albania">Albania</option>
</select>
</div>
~~~

**Note**: Smartling won't translate `<option>` elements without a specified `value=""`. It's valid HTML to just have `<option>Germany</option>`, but in that case the browser will use the text "Germany" as the form field value. If you specify a value, Smartling will translate and sort accordingly.


