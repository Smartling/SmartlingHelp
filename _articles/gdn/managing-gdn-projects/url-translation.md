---
layout: article
title: URL Translation
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
  articles:
  faqs:
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
  articles:
  faqs:
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


Your site’s URLs often contain information about your content. Your ‘About’ page probably has the url ‘/about/’. When you translate your site, it’s often a good idea to translate your URLs too, as this makes your site easier to read and can improve your search rankings. If you serve your translated site through Smartling’s GDN you can capture and translate your URLs along with the rest of your content.

To make sure that we don’t break any links on your site, we need to follow a few steps to deploy URL translations.

1) Capture your URLs.

2) Authorize the URLs you want to translate

3) When translation is complete, switch over to translated URLs

Capture your URLs

URLs are translated like any other string in the GDN and are captured when a page is served. To get started, go to Content &gt; URL Translation and make sure Enable capture of URL strings is checked.

Now, as your translated sites are browsed, Smartling will begin to capture URLs. You can use a crawler to capture URLs more quickly. You can also manually add URLs by clicking +Add URL.

Authorize URLs you want to translate

As your URLs are captured they will be displayed at Content &gt; URL Translation. The default view shows your source URLs. To authorize URLs for translation, select a language from the language dropdown.

For each language, you can authorize individual URLs by clicking Translate or check multiple URLs and choose Request Translation from the Actions menu.

URL strings will be authorized into the default workflow for the language. You will see a ‘Translation in Progress’ message next to each requested URL.

Switch over to Translated URLs

To serve any translated URLs, the Enable URL Translation functionality box must be checked on theContent &gt; URL Translation page. Unchecking this box at any time will turn off all translated URLs. For a consistent launch, you may want to leave this box unchecked until all URLs are translated.

To enable serving a translated URL, select a language and either switch individual URLs ON or by checking multiple URLs and selecting Enable URL.

Filter out URLs you don’t want to translate

Your site may include URLs that you don’t want to translate, for example, URLs for resources like JavaScript files. While having them in Content &gt; URL Translation won’t affect functionality, it can make it more difficult to find the URLs you do want to translate. To filter out these unwanted URLs &nbsp;go to the URL Filters tab and click Add Filter. A filter is formated as a Java Regular Expression inside ellipses. For example, (/+.js/) will exclude any URLs ending in .js.