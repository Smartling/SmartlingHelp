---
layout: article
title: 'Substitute Image, Flash, or Binary Files'
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


You may want to replace an image on the original website with a different image on a language site. The original image may have content in the original language that you wish to substitute with an alternate image or you may wish to replace an image for cultural sensitivity reasons.

In either case, simply create the appropriate language image, Flash, or downloadable binary files, place the images in the folders exactly as described below and Smartling will replace the images.

The images must retain the same name but must be located in a separate folder distinguished by language and country code (`LL_CC` where LL=language and CC=country code); for example:

* Original Language Site Images:`/images/en_US/image.jpg`
* French (Canada) Site Images: `/images/fr_CA/image.jpg`


For cases where the language is 'international' and does not use a country code, locate the images in the language folder; for example:

* Original Language Site Images: `/images/en_US/image.jpg`
* Spanish (international) Site Images: `/images/es/image.jpg`


**Note**: To use this functionality, your site must use a defined folder structure for files from the original site and the folder structure must include `/images/&lt;locale&gt;/` in the full path. Smartling will rewrite the original URLs to call the files from the language-specific folders.

If image, flash, or binary files on your source site use a different defined folder structure you must contact your client services manager to arrange custom configuration.

Example folder structures:

* Original Language Site Images: `/images/en_US/image.jpg`
* Aragonese Site Images: `/images/an_ES/image.jpg`
* Chinese (Traditional) Site Images: `/folder/images/zh_TW/image.jpg`
* Hindi Site Images:`/folder/subfolder/images/hi_IN/image.jpg`
* Spanish (international) Site Images:`/images/es/image.jpg`


Note that it may be completely appropriate to leave certain original images, Flash files, or binary files in the original language with no substitution, depending on the needs of your organization and your customers.

List of language codes: [http://en.wikipedia.org/wiki/ISO_639-1](http://en.wikipedia.org/wiki/ISO_639-1 "Link: http://en.wikipedia.org/wiki/ISO_639-1") List of country codes: [http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (https://smartling.zendesk.com/hc/admin/articles/new?section_id=200175148 "Link: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements")

**Substituting Image, Flash or Binary Files in a Cascading Style Sheet**

Smartling does not parse Cascading Style Sheet (CSS) files by default because this would cause a significant load on the system and result in increased GDN requests.

Any image, Flash or binary files located in a CSS file that you want to substitute must include a reference directly in the `&lt;style&gt;` section of the HTML; for example:

~~~
<style type="text/css">
.Button {
background-image: url("/images/en_US/image.jpg");
}
</style>
~~~

The substitution will also work if you use inline CSS attributes; for example:

~~~
<div class="Button" style="background-image:url('./images/en_US/image.jpg');">&nbsp;</div>
~~~