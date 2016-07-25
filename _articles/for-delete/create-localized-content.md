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
  reviewed: false
---


In some cases, you may want to completely replace content from your source site with entirely different content. For example, you may offer different features or benefits for different markets and you want to modify the translated content. Another common example, is that you simply need to change locale-specific content that doesn't need translation; for example, a street address or client testimonial written in that language.

You can do this in a couple of ways: You can swap in new content that can then be translated in Smartling or you can specify the content directly by marking it "do not translate" because the content will be completely localized (for example, an address) or is already translated.

To swap content, tag the source HTML content that you want to localize, ingest content in one of your target languages, and it appears on in Smartling at **Global Delivery Network** &gt; **Content** **Swaps** where you can enter the localized HTML.

**To create localized content for a language**

1. Tag the source HTML using the class `SL_swap` and a unique ID that identifies the content block. For example:


~~~
&lt;div class="SL_swap" id="address1"&gt;&lt;b&gt;9 - 900 West 17th Street&lt;/b&gt;&lt;span&gt;&lt;/div&gt;
~~~

1. In one of your target languages, ingest the content you tagged by browsing the site.
2. In Smartling, browse to **Global Delivery Network** &gt; **Content Swaps**.
3. From the drop-down menu, select the language.
4. For each ID, under **Localized Content**, enter the localized HTML.
   <br>Smartling will replace all the HTML within the `SL_swap` &lt;div&gt; tag with the HTML you provide. This HTML will be different for each language your site supports, and displays anywhere you have a `SL_swap` block with the same ID on the site.
5. By default, the HTML inside the `SL_swap` &lt;div&gt; tag is added to the translation queue for translation into that language. If you would prefer not to translate the HTML, select **Do Not Translate**.
6. Click **Save**.


**Examples**

These are some typical ways to use localized content.

**Swap but Do Not Translate Content**

In this case you provide the localized content and don't need to involve translators. This is useful for swapping a phone number, mail or email address, or another detail that you want to exclude from translation, and present the swapped content only in locations that you specify.

**To swap but not translate content for a language**:

1. Tag the source HTML using the class 'SL_swap' and a unique ID that identifies the content block. Here's an example for an address:


~~~
&lt;div class="SL_swap" id="address1"&gt;&lt;b&gt;9 - 900 West 17th Street&lt;/b&gt;&lt;/div&gt;
~~~

1. In one of your target languages, ingest the content you tagged by browsing the site.
2. In Smartling, browse to **Global Delivery Network** &gt; **Content Swaps**, and from the drop-down menu, select the language.
3. For each ID, select **Do Not Translate**.
4. In the **Localized Content** box, enter the local address.
5. Click **Save**.


**Swap and Translate Localized Content**

In this case, you provide localized content that you want translated. This is useful for providing a localized URL such as locale-specific support pages.

**To swap and translate the localized content for a langauge**:

1. Tag the source HTML using the class `SL_swap` and a unique ID that identifies the content block. Here's an example for a support URL:


~~~
&lt;div class="SL_swap" id="support"&gt;&lt;a href="[http://support.mysite.com"&gt;Support&lt;/a&gt;&lt;/div](http://support.mysite.com%22%3ESupport%3C/a%3E%3C/div)&gt;
~~~

1. In one of your target languages, ingest the content you tagged by browsing the pages where this content appears on your site.
2. In Smartling, browse to **Global Delivery Network** &gt; **Content** **Swaps**, and from the drop-down menu, select the language.
3. For each ID, in the **Localized Content** box, enter the support URL that you want translated; for example:


~~~
&lt;a href="[http://es-support.mysite.com"&gt;Support&lt;/a](http://es-support.mysite.com%22%3ESupport%3C/a)&gt;.
~~~

1. Click **Save**.


**Tips**

The following tips may help you use localized content:

* When you ingest the content that you want to localize, it appears on the content tab as it originally appears on your site. After you update the content you need to re-browse the pages where the localized content appears to ensure that it continues in the workflow based on your customizations.
* The content appears exactly as entered in the **Localized content** box, so ensure that the translated content displays correctly on your site.
* You can use the `&lt;span&gt;` class to tag localized content rather than overloading existing tags with class and id. For example:


~~~
&lt;a class ="SL_swap" id="phone" href="http://support.mysite.com"&gt;Support&lt;/a&gt;
~~~

only allows you to swap the string support, but not the `&lt;a&gt;` tag attributes, whereas:

~~~
&lt;span class ="SL_swap" id="phone"&gt;&lt;a href="http://support.mysite.com"&gt;Support&lt;/a&gt;&lt;/span&gt;
~~~

* If you use `SL_Swap` on an inline tag like `&lt;span&gt;`, Smartling treats that content as a block-level tag. This may cause unintended consequences, so when possible use a block level tag like `&lt;div&gt;` to wrap the content you want to swap, and position the div according to whether you want the swap to include or exclude other block tags.