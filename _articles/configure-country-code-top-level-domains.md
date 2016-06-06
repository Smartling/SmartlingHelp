---
layout: article
title: Configure Country Code Top-Level Domains
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: false
  CMS-Connectors: false
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
---


 In one of your target languages, ingest the content you tagged by browsing the pages where this content appears on your site.
3.  In Smartling, browse to ******Global Delivery Network** > **Content** **Swaps******, and from the drop-down menu, select the language.
4.  For each ID, in the **Localized Content** box, enter the support URL that you want translated; for example:  
    <a href="[http://es-support.mysite.com">Support</a](http://es-support.mysite.com%22%3ESupport%3C/a)>.
5.  Click **Save**.

## Tips

The following tips may help you use localized content:

*   When you ingest the content that you want to localize, it appears on the content tab as it originally appears on your site. After you update the content you need to re-browse the pages where the localized content appears to ensure that it continues in the workflow based on your customizations.
*   The content appears exactly as entered in the **Localized content** box, so ensure that the translated content displays correctly on your site.
*   You can use the <span> class to tag localized content rather than overloading existing tags with class and id. For example,  
    <a class ="SL_swap" id="phone" href="[http://support.mysite.com">Support</a](http://support.mysite.com%22%3ESupport%3C/a)>  
    only allows you to swap the string support, but not the <a> tag attributes, whereas:  
    <span class ="SL_swap" id="phone"><a href="[http://support.mysite.com">Support</a></span](http://support.mysite.com%22%3ESupport%3C/a%3E%3C/span)>
*   If you use SL_Swap on an inline tag like <span>, Smartling treats that content as a block-level tag. This may cause unintended consequences, so when possible use a block level tag like <div> to wrap the content you want to swap, and position the div according to whether you want the swap to include or exclude other block tags.