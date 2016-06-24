---
layout: article
title: AEM Classic Connector - Configure Rewrites
draft: true
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

`<a href="/content/sitename/us/**en**/ordinaryPage.html">Page Title</a>`

might be rewritten on your Spanish site as:

<a href="/content/sitename/us/**es**/ordinaryPage.html">Título de la Página</a>.

However, you may not want to rewrite every link. To control URL rewriting, go to **Web Console > Configuration**([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)) and open **com.smartling.content.impl.processors.UrlDataRewriter**. You can disable URL rewrites completely by unchecking **enabled**.

![](/hc/en-us/article_attachments/202928828/Adobe_Experience_Manager_Web_Console_-_Configuration.png)

Excluding links from rewriting can be done in two ways: You can exclude specific page fields from being rewritten, or you can specify paths that should never be rewritten.

## Excluding page fields:

If a property of one of your pages is a link that you don't want rewritten, just add the field name to the **Excluded fields** list.

![](/hc/en-us/article_attachments/202860137/Adobe_Experience_Manager_Web_Console_-_Configuration.png)

**Excluding paths**

You may have an URL path that you don't intend to translate, so you don't want to rewrite any links pointing to that path. For example, you may not want to translate the 'About' section of your site: /content/sitename/about. To exclude all URLs under this path from being rewritten, add it to the **Excluded content path** list.

![](/hc/en-us/article_attachments/202928858/Adobe_Experience_Manager_Web_Console_-_Configuration.png)  
If there is a URL or group of URLs under an excluded path that you do want rewrite, you can include them by adding them to the **Include content path** list:

![](/hc/en-us/article_attachments/202928888/Adobe_Experience_Manager_Web_Console_-_Configuration.png)

**Language Rewrites**

If a page has a **Language** property, this will be rewritten by default on translated pages to match the translated language. To disable rewriting the **Language** property, go to **Web Console > Configuration  **([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)), open **Smartling - Language Property Rewriter **and uncheck **Enabled**.

![](/hc/en-us/article_attachments/202860157/Adobe_Experience_Manager_Web_Console_-_Configuration.png)

**Path Rewrites**

Pages & components often have properties containing references to other pages (i.e. paths like `/content/<site>/**en**/some/page`). In most cases, such properties have to be amended on translated pages(e.g. changed to `/content/<site>/**es**/some/page`). By default this feature is disabled. To enable this feature, go to **Web Console > Configuration  **([http://yourdomain.com/system/console/configMgr](http://yourdomain.com/system/console/configMgr)), and open **Smartling - Path Properties Rewriter**. Add the name of each field that needs to be written.

![](/hc/en-us/article_attachments/202860187/Adobe_Experience_Manager_Web_Console_-_Configuration.png)