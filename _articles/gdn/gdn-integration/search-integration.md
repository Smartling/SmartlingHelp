---
layout: article
title: Search Integration
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url: /hc/en-us/articles/204240098
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


If your site has search functionality, it’s important for search to work as well on your translated sites as your original site. 3rd party search engine services will work on translated sites without altering your code. Embedded search features can be integrated with Smartling using specific html classes.

## 3rd Party Search Engine Services

For 3rd party search engines, all you need to do is update your settings to add your translated domains as well as your original site.

**1)** Go to your search engine’s service dashboard.

**2)** Add your translated domains to your list of sites. E.g. **ru.mysite.com**.

## Embedded Search

Smartling supports Embedded Search using html GET requests. Your search query must be in the form of a URL request parameter. To set up Embedded search integration:

**1)** Ask your Smartling Client Services Manager to enable Embedded search integration for your site.

**2)** Add the class "sl-search-input" to any `&lt;input&gt;` element used for searching. For example:

~~~
&lt;form accept-charset="UTF-8" action="/hc/en-us/search" class="search-small" method="get" role="search"&gt;
 &lt;div style="display:none"&gt;&lt;input name="utf8" type="hidden" value="&#x2713;" /&gt;&lt;/div&gt;
 &lt;input id="query" value="Dog" name="query" class="sl-search-input" placeholder="Search" type="search" /&gt;
&lt;/form&gt;
~~~

**3)** Add the class `sl-search-keyword` to any search term on the results page. For example:

~~~
...
&lt;form action="#" class="form-sort" novalidate="novalidate"&gt;
     &lt;fieldset&gt;
         &lt;div class="search-frame"&gt;
             &lt;div class="search-row"&gt;
...
             &lt;span class="text"&gt;&lt;b&gt;&lt;span class="sl-search-keyword"&gt;Dog&lt;/span&gt;&lt;/b&gt; clips (1 - 192 of 579 results)&lt;/span&gt;
...
                             &lt;div class="subpaging search"&gt;
                     &lt;div class="holder"&gt;
                         &lt;div class="frame search"&gt;
                             &lt;ul class="search-menu"&gt;
...
~~~