---
layout: article
title: Zendesk Connector - Localize Images
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
wistia:
  video: false
  id:
related-articles:
  - article: automatic-machine-translation
read-first:
  sections:
  articles:
  others:
    - link:
      text:
further-reading:
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


In addition to translating your text content, you may want to display different images on your translated sites. For example, if you write markup on screenshots, each translated Help Center will need it's own image.

**Note:** Localized images will have the same re-sizing applied as your source image, so for best results, your localized images should have the same dimensions as your source image.

**To Localize your Zendesk Images:**

**1)** Rename your primary image file to end in an underscore, followed by your source locale code in all lowercase. For example, if your file is 'LocalizedImage.png', and your source language is English (United States), rename the file 'LocalizedImage_en-us.png'.

**2)** Insert the image into your Zendesk article, position and resize it as you like.

![](/hc/en-us/article_attachments/206553867/Smartling_Dev.png)

**3)** Rename your localized images to have the same name as your source image, but with the appropriate locale code. For example, 'LocalizedImage_fr-fr.png' and 'LocalizedImage_de-de.png'.

**4)** In the Zendesk Editor, click **Insert Image**. Upload each of your localized images, but do not click Insert. Click **Close** when all your images are uploaded.

![](/hc/en-us/article_attachments/206553847/Smartling_Dev.png)

\*\*Note: \*\*Zendesk does not display image names, only thumbnails. So check that you have named your files correctly before uploading.

**5)** [Translate](/hc/en-us/articles/216506558) your Zendesk article as normal.

Once your translated articles are published, they should display on your translated sites in the same position and at the same size as the source image.

![](/hc/en-us/article_attachments/206531268/L__c__l_z__d__m__g_s___Smartling_Dev__French_.png)