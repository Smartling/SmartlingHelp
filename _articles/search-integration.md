---
layout: article
title: Search Integration
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

If your site has search functionality, it’s important for search to work as well on your translated sites as your original site. 3rd party search engine services will work on translated sites without altering your code. Embedded search features can be integrated with Smartling using specific html classes.

##3rd Party Search Engine Services

For 3rd party search engines, all you need to do is update your settings to add your translated domains as well as your original site.

**1)** Go to your search engine’s service dashboard.

**2)** Add your translated domains to your list of sites. E.g. **ru.mysite.com**.

##Embedded Search

Smartling supports Embedded Search using html GET requests. Your search query must be in the form of a URL request parameter. To set up Embedded search integration:

**1)** Ask your Smartling Client Services Manager to enable Embedded search integration for your site.

**2)** Add the class "sl-search-input" to any `<input>` element used for searching. For example:

~~~
<form accept-charset="UTF-8" action="/hc/en-us/search" class="search-small" method="get" role="search">
 <div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /></div>
 <input id="query" value="Dog" name="query" class="sl-search-input" placeholder="Search" type="search" />
</form>
~~~

**3)** Add the class `sl-search-keyword` to any search term on the results page. For example:

~~~
...
<form action="#" class="form-sort" novalidate="novalidate">
     <fieldset>
         <div class="search-frame">
             <div class="search-row">
...
             <span class="text"><b><span class="sl-search-keyword">Dog</span></b> clips (1 - 192 of 579 results)</span>
...
                             <div class="subpaging search">
                     <div class="holder">
                         <div class="frame search">
                             <ul class="search-menu">
...
~~~

