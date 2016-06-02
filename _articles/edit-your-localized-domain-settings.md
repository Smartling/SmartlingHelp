---
layout: article
title: Edit Your Localized Domain Settings
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

Once you’ve set your domain in Smartling edit the settings for your localized domain



In the **Edit Domain Dialog box**, modify the following:

*   **Domain Set-up Type** tells Smartling the type of domain set-up to expect. In this case Select **Subdomain** or **TLD/ccTLD**


*   **Protected**: Check **Protected** if your site is not publicly available so that it doesn’t get crawled by search engines.
*   **Localized Regex:** If you require a localized Regular expression, include a **Localized Regex** URL.
*   **CNAME**: **CNAME** is the hostname to which localized domain DNS records point and may be different for every domain. For more information, see: [Configuring CNAME Settings](/hc/en-us/articles/201552036-Configuring-CNAME-Settings).
*   **Alternate Endpoint:** Use the **Alternate Endpoint** (or Proxy Pass) when the source content should come from a different location and references the source domain name. For example, a source domain that is an IP address requiring a host header with a fully qualified domain name to resolve, and produces content referencing that domain name.

~~~
Target Host: www.domain.com
Alternate Endpoint: 127.0.0.1
~~~

*   **X-Language-Locale:** With every request Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your applications method of indicating the language. For example if you need Portuguese for Brazil to use the code “pr-BR” instead of the default “pt-BR” you can can set that here.

*   **DNS Verified**: Smartling tries to verify that a domain points at the designated CNAME. If the CNAME does not point directly at Smartling - because of a Content Delivery Network (CDN) - or Smartling cannot immediately determine that a domain record exists, then you can click Verify DNS to force verification. DNS must be verified before a localized domain resolves.