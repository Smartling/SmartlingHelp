---
layout: article
title: Everything you need to know about language selectors
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


Translating your site is just one of the many parts in the localization process. Another important step is ensuring that your end-users are properly directed to the language site of their choice.

**How does Smartling know to send end-users to the translated site of their choice?**

We actually don’t! To ensure you that your end-users are directed to the correct translated version of your site you’ll need to use your own solution.

**What are the different types of solutions available?**

There are quite few [types of website language selection solutions available](https://searchenginewatch.com/sew/how-to/2105398/5-options-for-choosing-a-country-region-or-language-selector). Some might be better suited than others depending on how you are looking at targeting your foreign audiences:

* **Geographic Map Selector**: A selector showing a map where a user can click on their country.
* **Country Selector**: A selector typically on the homepage where a user can choose their country on a list.
* **Language Selector**: A selector allowing the user to choose another language option for the website.
* **Forced IP or “ghost” Selector**: Utilizing geo IP location technology, a user is automatically sent to the country based on their IP address.


**Does Smartling provide its own solution?**

We do offer an embeddable language selector available to Subdomain and ccTLD-type sites. the selector’s code can be pasted onto your site’s template. Not only does the language selector adds [customizable language drop-down](/support/articles/everything-you-need-to-know-about-language-selectors/) list to your site, it also detects the the user’s browser language preferences and automatically redirects them to the appropriate translation of your site.

**Can I use another language selector than the one you are offering?**

You can and should if your site is folder or cookie-based. Very often, simple HTML will do:

~~~
<div class="lang_selector sl_opaque">
 <ul>
    <li><a href="http://www.yoursite.com">English</a></li>
    <li><a href="http://fr.yoursite.com">Fran&ccedil;ais</a></li>
    <li><a href="http://es.yoursite.com">Espa&ntilde;ol</a></li>
 </ul>
</div>
~~~

And if you want to add fancy options, such as putting the current language on top, you’ll need to source your own javascript/CSS.

**Are there more seamless ways to direct end-users to a translated version of my site?**

you might want to consider a server-side solution which “force-directs” the user to a translated version of your site based on their browser language settings or IP location:

* **Accept-language Header**


The browser, through the Accept-language header, sends out, as part of the request for a webpage, the user’s language preferences, stored in their browser settings. The server then reads that header and redirects the user to the appropriate translated version of your page. Please work with your network team to implement the appropriate server-side code.

* **Forced IP or “ghost” selector**


In the case of Forced IP, the server uses the IP address location of the requester to decide which translated version of your site to display. In addition to implementing server-side code, you’ll need to use IP Geolocation technologies such as [Maxmind](https://www.maxmind.com/en/home) to help you determine where the end-user’s computer is actually located.

**Other Resources**

Smartling Help Center: [Install and customize the Smarting Language Selector](/support/articles/everything-you-need-to-know-about-language-selectors/)

Smartling Blog: [A few tips on Navigation for multilingual site](https://www.smartling.com/blog/a-few-tips-for-language-navigation-on-multilingual-sites/)