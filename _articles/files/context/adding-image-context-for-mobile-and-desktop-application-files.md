---
layout: article
title: Image Context for Mobile and Desktop Apps
---


For non-web content such as mobile or desktop apps, Image files can be uploaded to provide context.

<div class="info">If your content can be viewed in a browser, it may be preferable to capture dynamic context with the <a href="/knowledge-base/sections/chrome-context-capture-extension/">Chrome Context Capture Extension</a>.</div>

## Add Image Context files

**1)** From **Translations &gt; Image Context**, click **+** to upload an image (JPG or PNG) or drag and drop the image into the window.

![](/uploads/versions/mobilecontext---x----1242-556x---.png)

**2)** Any matches from the OCR process will be automatically selected. Select a region containing a visible string, then type a few characters of the string and select the correct string from the menu that appears. Click **Save**. Delete any incorrect matches by clicking **x** next to the string.

![](/uploads/versions/smartling---image-context---x----1272-1007x---.png)

**3)** Repeat step 2 for all the strings in the image.

## Remove Image Context files

**1)** On the image context page at **Files&gt;Image Context**, click the image.

**2)** In the Image Context dialog, click **Remove**.

## Searching for strings

When you search for a string, type as few letters of the string as possible, as the search function does not display HTML formatting or placeholders. For example:

When searching for the following string:

<div class="highlighter-rouge"><pre class="highlight"><code>&lt;b&gt;Current location is {0}&lt;/b&gt;. Click to select a new location.
</code></pre></div>

If you type the following in the searches:

`Current location is. Click to select a new location` = no results

`Current location is.` = no results

`Current location is` = correct result