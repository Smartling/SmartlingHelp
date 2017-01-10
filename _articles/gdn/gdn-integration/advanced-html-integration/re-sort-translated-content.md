---
layout: article
title: Re-Sort Translated Content
---


It’s common to alpha sort content in `select` or `ul` elements on your page. For example, in an Address form, you might have an alphabetized list of countries. If these elements are simply listed on your source site in the correct order for English, then your translated sites will appear out of order when, for example, ‘Germany’ becomes ‘Deutschland’.

You can manage this by including the class  `sl_sort` in your list. If this class is present, Smartling will reorder the content so it displays correctly in each language.

> While we provide this method for convenience, keep in mind that it will work only for latin character languages. Where possible, consider implementing a robust JavaScript-based sorting solution.

~~~html
<select name="countryList" class="sl_sort">
     <option value="Albania">Albania</option>
     <option value="France">France</option>
     <option value="Germany">Germany</option>
     <option value="South Africa">South Africa</option>
     <option value="United States">United States</option>
</select>
~~~

## Variations
* `sl_sort_desc` - will sort content Z->A.
* `sl_sort_preserve_top` - keeps the first entry in place regardless of language.
