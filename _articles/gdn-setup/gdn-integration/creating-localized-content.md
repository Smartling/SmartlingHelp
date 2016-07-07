---
layout: article
title: Creating Localized Content
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

Sometimes translation isn’t enough. You may want to completely replace a section of content on a translated site. There are three basic ways to swap out content in the GDN. Hide can also be used to not show source language content on translated sites

* Set up a content swap using the element class sl_swap.
* Take advantage of automatic image/flash/binary file swaps by using a predefined folder structure.
* Use language-specific CSS.

## Content Swaps
> Content swaps are provided as a convenient way to manage small amounts of localized content. If this is something you need to do a lot, consider implementing server-side logic to serve appropriate resources based on HTTP request headers.

Sometimes you want to use content on a localized site that isn’t ‘translated’, just different. For example, you may want to substitute the address of your local office in a particular country, or you may want to replace a customer testimonial from a US customer with one from a Spanish customer. You can achieve this using the ‘sl_swap’ class. First you need to tag the content that you want to swap out. Note that for a swap to work, the element MUST have a unique ID.

~~~htmls
<div class="testimonial sl_swap" id="testimonial1">
	<img src="/images/testimonials/greg.png">
	<p>I used this product and joy returned to my life!</p>
</div>
~~~

> Do not nest sl_swap tags!

You will need to make sure you have captured your source content by browsing to that page on one of your translated sites. Then you can add your localized content in the Smartling Dashboard.

1) Go to Global Delivery Network > Content Swaps and select a language.

2) Find your content by ID, and write your alternative content in the box marked Localized Content.

3) If you don’t need to translate your localized content - our local testimonial, for example, is already in the correct language - check the Do not translate box.

4) Click Save

<blockquote class="info">
<p>If you do need to translate your swapped content, you will need to browse to the translated page again to capture it for translation.</p>
</blockquote>

> If you repeat your source content in your swap for some languages, remember that they will not change if you alter the source content.

### Content Swap Tips
* Make sure you check that your swapped content displays as expected on your translated sites.
* To avoid overloading existing elements, you can always surround them with a <span> tag and use that to hold the sl_swap class and unique id.
* Be aware that using sl_swap on an inline tag will cause Smartling to treat it as a block tag. This may cause unexpected results. So use a block tag where possible and be sure to check that the resulting content displays as expected.


## Automatic Image, Flash & Binary Swaps

Smartling has built some naming conventions into our GDN setup to allow you to swap out images and other resources automatically on your translated sites. 

Examples of our default rules are below. If your site uses a substantially different structure, you can contact your success manager to set up a rule for your needs.

### Images

To take advantage of automatic image swapping, you need to store images for your site with the folder structure ‘/images/<locale>’. For example. To use a different banner image on your translated sites, store the images as ‘/images/en-US/banner.jpg’ for your source site, and ‘images/es-ES/banner.jpg’ for your Spanish site.

Then, if you include the image on your source site like:

~~~html
<img src="/images/en_US/banner.jpg">
~~~

Smartling will automatically transform this on your Spanish site to;

~~~html
<img src="/images/es_ES/banner.jpg">
~~~