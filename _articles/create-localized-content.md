---
layout: article
title: Create Localized Content
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
In some cases, you may want to completely replace content from your source site with entirely different content. For example, you may offer different features or benefits for different markets and you want to modify the translated content. Another common example, is that you simply need to change locale-specific content that doesn't need translation; for example, a street address or client testimonial written in that language.

You can do this in a couple of ways: You can swap in new content that can then be translated in Smartling or you can specify the content directly by marking it "do not translate" because the content will be completely localized (for example, an address) or is already translated.

To swap content, tag the source HTML content that you want to localize, ingest content in one of your target languages, and it appears on in Smartling at **Global Delivery Network** > **Content** **Swaps** where you can enter the localized HTML.

**To create localized content for a language**

1.  Tag the source HTML using the class `SL_swap` and a unique ID that identifies the content block. For example:  

~~~   
<div class="SL_swap" id="address1"><b>9 - 900 West 17th Street</b><span></div>
~~~

2.  In one of your target languages, ingest the content you tagged by browsing the site.
3.  In Smartling, browse to **Global Delivery Network** > **Content Swaps**.
4.  From the drop-down menu, select the language.
5.  For each ID, under **Localized Content**, enter the localized HTML.  
    Smartling will replace all the HTML within the `SL_swap` <div> tag with the HTML you provide. This HTML will be different for each language your site supports, and displays anywhere you have a `SL_swap` block with the same ID on the site.
6.  By default, the HTML inside the `SL_swap` <div> tag is added to the translation queue for translation into that language. If you would prefer not to translate the HTML, select **Do Not Translate**.
7.  Click **Save**.

**Examples**

These are some typical ways to use localized content.

**Swap but Do Not Translate Content**

In this case you provide the localized content and don't need to involve translators. This is useful for swapping a phone number, mail or email address, or another detail that you want to exclude from translation, and present the swapped content only in locations that you specify.

**To swap but not translate content for a language**:

1.  Tag the source HTML using the class 'SL_swap' and a unique ID that identifies the content block. Here's an example for an address: 

~~~
    <div class="SL_swap" id="address1"><b>9 - 900 West 17th Street</b></div>
~~~
2.  In one of your target languages, ingest the content you tagged by browsing the site.
3.  In Smartling, browse to **Global Delivery Network** > **Content Swaps**, and from the drop-down menu, select the language.
4.  For each ID, select **Do Not Translate**.
5.  In the **Localized Content** box, enter the local address.
6.  Click **Save**.

**Swap and Translate Localized Content**

In this case, you provide localized content that you want translated. This is useful for providing a localized URL such as locale-specific support pages.

**To swap and translate the localized content for a langauge**:

1.  Tag the source HTML using the class `SL_swap` and a unique ID that identifies the content block. Here's an example for a support URL:  

~~~
    <div class="SL_swap" id="support"><a href="[http://support.mysite.com">Support</a></div](http://support.mysite.com%22%3ESupport%3C/a%3E%3C/div)>
~~~
2.  In one of your target languages, ingest the content you tagged by browsing the pages where this content appears on your site.
3.  In Smartling, browse to **Global Delivery Network** > **Content** **Swaps**, and from the drop-down menu, select the language.
4.  For each ID, in the **Localized Content** box, enter the support URL that you want translated; for example: 

~~~
    <a href="[http://es-support.mysite.com">Support</a](http://es-support.mysite.com%22%3ESupport%3C/a)>.
~~~
5.  Click **Save**.

**Tips***

The following tips may help you use localized content:

*   When you ingest the content that you want to localize, it appears on the content tab as it originally appears on your site. After you update the content you need to re-browse the pages where the localized content appears to ensure that it continues in the workflow based on your customizations.
*   The content appears exactly as entered in the **Localized content** box, so ensure that the translated content displays correctly on your site.
*   You can use the `<span>` class to tag localized content rather than overloading existing tags with class and id. For example:

~~~
    <a class ="SL_swap" id="phone" href="[http://support.mysite.com">Support</a](http://support.mysite.com%22%3ESupport%3C/a)>  
~~~
    
only allows you to swap the string support, but not the `<a>` tag attributes, whereas:  

~~~
    <span class ="SL_swap" id="phone"><a href="[http://support.mysite.com">Support</a></span](http://support.mysite.com%22%3ESupport%3C/a%3E%3C/span)>
~~~

*   If you use `SL_Swap` on an inline tag like `<span>`, Smartling treats that content as a block-level tag. This may cause unintended consequences, so when possible use a block level tag like `<div>` to wrap the content you want to swap, and position the div according to whether you want the swap to include or exclude other block tags.