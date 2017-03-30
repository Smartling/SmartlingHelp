---
layout: article
title: Zendesk Connector - Localize Images
---


In addition to translating your text content, you may want to display different images on your translated sites. For example, if you markup a screenshot with textual information, the translated version of that content should have its own image. Even if they are just product screenshots, the reader should see the screenshot in their language to insure the best understanding.

Smartling provides a feature to help you automate the process of using localized images in your localized content. &nbsp;This feature is applied by the Smartling Zendesk connector and is **not a feature of the Zendesk platform**. It uses a common image file naming convention to manage localized versions of what are essentially the same image.

The basic approach works like this: &nbsp;

If you want an image to be localized update the file name of the source language version of the image to have the source language locale ID in its name. When Smartling detects that the source content has images with this convention, it will look for a version of the image file with the target locale ID and if found it will use that image in the localized version of the article that is published to Zendesk.&nbsp; If an image doesn’t use the naming convention or if a specific target language doesn’t have a corresponding localized version, then that target language will simply use the same image as the original.

It’s important to use this feature if you want localized images because it is not recommend that you make any edits to the localized content in Zendesk when Smartling is being used to translate the content. &nbsp;Any changes made to the localized content directly in Zendesk may be lost whe Smartling updates the localized content updates can be triggered automatically or manually depending on &nbsp;your configuration. Smartling will always overwrite the localized content no matter what its state is. Using this feature and convention will save you the trouble of needing to manually assign localized images and make sure they will always be used no matter what updates are made to the content translations in Smartling.

&nbsp;

<div class="info">Localized images will have the same re-sizing applied as your source image, so for best results, your localized images should have the same original dimensions as your source image.</div>

<div class="info">This convention uses the <a href="https://support.zendesk.com/hc/en-us/articles/203761906-Language-codes-for-Zendesk-supported-languages">Zendesk locale codes</a>&nbsp;in the image file names, not the Smartling locale code. &nbsp;For example the Zendesk locale code for German is de, for localized German images use de in the file name. &nbsp;If you are using French (France) the locale code is fr-FR.</div>

## Step by Step Guide

**1)**&nbsp;For the image that shows the original source language (your primary language), use the source language’s Zendesk locale code in the name. For example, if your file is `LocalizedImage.png`{: .highlighter-rouge.highlighter-rouge}, and your source language is English (United States), rename the file `LocalizedImage_en-us.png`{: .highlighter-rouge.highlighter-rouge}. &nbsp;You must use this convention on the file you upload to Zendesk and your link to it in the article.&nbsp;

**2)** Insert the image into your Zendesk article, position and resize it as you like.

![](/uploads/versions/smartling-dev-2---x----1168-741x---.png)

**3)** Rename your localized images to have the same base name as your source image, but with the appropriate locale code. For example, `LocalizedImage_fr-FR.png`{: .highlighter-rouge.highlighter-rouge} and `LocalizedImage_de.png`{: .highlighter-rouge.highlighter-rouge}.

**4)** In the Zendesk Editor, click **Insert Image**. Upload each of your localized images, but do **not** click Insert. Click **Close** when all your images are uploaded. Make sure to save/update the article in the source language so that your file uploads will be saved and associated with the article. &nbsp;They will be listed as “unused” images.

![](/uploads/versions/smartling-dev-3---x----657-534x---.png)

> Zendesk does not display image names, only thumbnails. So check that you have named your files correctly before uploading.

**5)** [Translate](/knowledge-base/articles/zendesk-connector-translate-content/) your Zendesk article as normal.

Once your translated articles are published, they should display on your translated sites in the same position and at the same size as the source image.

![](/uploads/versions/l-oca-lize-d-ima-ges--smartling-dev--french----x----648-623x---.png)