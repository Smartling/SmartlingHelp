---
layout: article
title: AEM Classic Connector - Configure Rewrites
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
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


On translated sites, it is often necessary to rewrite URLs so they point to target pages in the appropriate language. The Adobe AEM Classic Connector allows you to configure rewrites in three ways:

## URL Rewrites

By default, Smartling will rewrite URLs on translated pages to point to your translated site. For example, this link:

`&lt;a href="/content/sitename/us/\*\*en\*\*/ordinaryPage.html"&gt;Page Title&lt;/a&gt;`

might be rewritten on your Spanish site as:

`&lt;a href="/content/sitename/us/\*\*es\*\*/ordinaryPage.html"&gt;T&iacute;tulo de la P&aacute;gina&lt;/a&gt;`

However, you may not want to rewrite every link. To control URL rewriting, go to **Web Console &gt; Configuration**([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)) and open **com.smartling.content.impl.processors.UrlDataRewriter**. You can disable URL rewrites completely by unchecking **enabled**.

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration---x----2292-752x---.png)

Excluding links from rewriting can be done in two ways: You can exclude specific page fields from being rewritten, or you can specify paths that should never be rewritten.

## Excluding page fields

If a property of one of your pages is a link that you don't want rewritten, just add the field name to the **Excluded fields** list.

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration-1---x----1618-752x---.png)

## Excluding paths

You may have an URL path that you don't intend to translate, so you don't want to rewrite any links pointing to that path. For example, you may not want to translate the 'About' section of your site: /content/sitename/about. To exclude all URLs under this path from being rewritten, add it to the&nbsp;**Excluded content path** list.

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration-2---x----1602-740x---.png)

<br>If there is a URL or group of URLs under an excluded path that you do want rewrite, you can include them by adding them to the&nbsp;**Include content path** list:

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration-3---x----1622-748x---.png)

## Language Rewrites

If a page has a **Language** property, this will be rewritten by default on translated pages to match the translated language. To disable rewriting the **Language** property, go to **Web Console &gt; Configuration** ([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)), open **Smartling - Language Property Rewriter** and uncheck **Enabled**.

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration-4---x----1614-484x---.png)

## Path Rewrites

Pages & components often have properties containing references to other pages (i.e. paths like `/content/&lt;site&gt;/en/some/page`). In most cases, such properties have to be amended on translated pages(e.g. changed to `/content/&lt;site&gt;/es/some/page`). By default this feature is disabled. To enable this feature, go to **Web Console &gt; Configuration** ([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)) , and open **Smartling - Path Properties Rewriter**. Add the name of each field that needs to be written.

![](/uploads/versions/adobe_experience_manager_web_console_-_configuration-5---x----1612-618x---.png)