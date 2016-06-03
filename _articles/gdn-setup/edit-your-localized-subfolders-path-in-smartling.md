---
layout: article
title: Edit your Localized Subfolders Path in Smartling
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

An alternative to using translated domains, is to host your translations in folders. I.e. [www.mycompanysite.com/language]()

When hosting your translation in a subfolder, the traffic will need to be split between requests for source content (going to your web server) and translated content (going to the Smartling GDN). Your options to split traffic are using the Smartling Global Delivery Network, a Content Delivery Network, or web server or network appliance (ie Netscaler, F5) with proxy capabilities. 

Once you’ve set your domain in Smartling edit the settings for your localized domain

![](/hc/en-us/article_attachments/207962747/Smartling___Manage_Domains.png)

In the **Edit Domain Dialog box**, modify the following:

![](/hc/en-us/article_attachments/207962947/Smartling___Manage_Domains.png)

*   **Domain Set-up Type** tells Smartling the type of domain set-up to expect. Choose **Folder**
*   **Protected:** Check Protected if your site is not publicly available so that it doesn’t get crawled by search engines.
*   **Localized Regex**: If you require a localized Regular expression, include a Localized Regex URL.
*   **CNAME**: CNAME is the hostname to which localized domain DNS records point and may be different for every domain. For more information, see: [Configuring CNAME Settings]().
*   **Localized folder**: this is the path to the folder that contains the translation for a given language
*   **Source folder:** this is the path where the Smartling GDN will fetch the content for translation.
*   **X-Language-Locale:** With every request Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your applications method of indicating the language. For example if you need Portuguese for Brazil to use the code “pr-BR” instead of the default “pt-BR” you can can set that here
*   ****DNS Verified**:** Smartling tries to verify that a domain points at the designated CNAME. If the CNAME does not point directly at Smartling - because of a Content Delivery Network (CDN) - or Smartling cannot immediately determine that a domain record exists, then you can click Verify DNS to force verification. DNS must be verified before a localized domain resolves.

For more information on setting up localized folders on a CDN or Web server download the following documentation: