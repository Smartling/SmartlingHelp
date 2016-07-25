---
layout: article
title: Forcing Alternate Content Parsing Using SL_split
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
  reviewed: false
---

When the Smartling service encounters content to be translated, a proprietary methodology is used to extract specific chunks of content. As a general rule, the Smartling service attempts to parse the smallest complete linguistic unit, with the fewest HTML tags as possible. HTML tags that are extracted are generally limited to formatting tags, where parsing the string further would potentially alter the meaning of the extracted string.  
Although you want to translate all the content, you won't want to repeatedly re-translate certain phrases because they include minor variations of the same content. If the content has a piece that you don't want translated, see [About Excluding Content](https://smartling.zendesk.com/hc/en-us/articles/201297353-About-Excluding-Content-from-Translation).

## How to Force Alternate Content Parsing

You may want to force the Smartling service to extract a string of content as a different unit from the default parsing rules. You can do this using the `SL_split` tag. For example consider the following HTML:

~~~
<p><span>View all watches</span></p>
<p><span>View all bracelets</span></p>
<p><span>View all earrings</span></p>
~~~

In this case, the phrase "View all" would need to be translated three times. To reduce overall word count and avoid retranslating this phase, you can add the `SL_split` class to the span tags:  

~~~
<p><span class="SL_split">View all</span>watches</p>
<p><span class="SL_split">View all</span>bracelets</p>
<p><span class="SL_split">View all</span>earrings</p>  
~~~

Smartling will parse this HTML so that only the following phrases appear for translation: "View all", "watches", "bracelets", and "earrings".

There may also be cases where content has been extracted as a single unit, but you would prefer it to be included as a larger parsed string. To force the parser to not break a string, where it normally would do so, use the `SL_nosplit` class.
