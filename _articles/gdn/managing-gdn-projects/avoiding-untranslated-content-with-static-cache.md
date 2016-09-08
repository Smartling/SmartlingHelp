---
layout: article
title: Avoiding Untranslated Content with Static Cache
draft: false
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Sites delivered through Smartling’s GDN may need a strategy for avoiding untranslated content appearing on localized sites after they have completed their initial full site translation. This occurs when you publish changes to your source site and have not yet translated them. With no translation available, the GDN will serve partially untranslated pages.

The first strategy to avoid untranslated content appearing on your localized sites is to use a content creation process that allows your changes to go through the translation workflow before they are published in the original language. However, not everyone can wait for translations before publishing updates to the content in the original language. In this case you have a choice: you can allow untranslated content to appear on the localized sites, or your can choose to use the older version of the fully translated pages until the new content and changes have had a chance to go through the translation workflow. Use Smartling’s Static Cache feature to use these fully translated versions of your pages.

Using a Static Cache allows you to take a snapshot of the current state of your translated sites which will be used to avoid showing untranslated content. Once the changes have been fully translated, you can refresh your cache, bringing your localized pages in sync with your original site.

Not all sites can benefit from using the static cache feature and it may be that only some parts of your site can be cached. Generally speaking, a significant amount of dynamic content on a page will prevent effective caching.

## Set up Static Cache for your site

**1)** Contact your Smartling Client Services manager to request Static Cache be enabled on your site. Smartling will analyse your site to determine where caching can be effectively used. This process may take a few days.

**2)** Once static caching is enabled. You can manage your cache from Global Delivery Network &gt; Configuration by selecting the Static Cache tab.

![](/uploads/versions/static-cachce1---x----1235-789x---.png)

**3)** The page shows a list of all Domains in your project. For each domain that requires caching, set the switch to ON.

**4)** Once caching has been enabled, each page will be cached the first time it is requested through the GDN. You can fill the cache manually by browsing your translated website or by using a crawler. From then on, requests to that domain will be served from the cache and any changes to your source site will not be reflected in cached domains.

## Using static cache to prevent untranslated content appearing on your translated sites

When preparing to make changes to your site, make sure caching is ON for your translated domains. Then you can make changes to your source site, capture your new content and begin translating. When your translated content is published you need to reset your cache. There are two ways to do this

### Automatic

When all strings on a page for a particular domain have published translations, the cache for that page will be reset automatically.

### Manually from the Static Cache page

You can reset the cache for an entire domain by clicking Reset from the Static Cache configuration page. If you want to reset only a specific page, enter the URL in the text box and click Reset. You can also enter the URL of an asset such as a style sheet or JavaScript file.

![](/uploads/versions/static-cache2---x----671-53x---.png)

Some sites rely on non-HTML assets, most commonly CSS or JavaScript files, for serving content. These assets will not be captured by the automatic cache reset when strings on a page are translated, or by using the inline Translation Interface. To reset these assets, you must use the Static Cache Configuration page and specify the URL of the asset.