---
layout: article
title: SSL Certificate Requirements for the GDN
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
  reviewed: false
---

If your source website has a Secure Sockets Layer (SSL) certificate and uses the HTTPS protocol, you must obtain and maintain an SSL certificate for your language domains. If there are several language domains in scope a “wildcard” certificate or a UC/SAN certificate is preferable to obtain coverage for all subdomains appropriate for your original website and alternate language websites. **The GDN will not operate for your HTTPS pages unless you provide Smartling with a valid SSL certificate.**

**Wildcard Certificates**  

A wildcard SSL certificate secures your website URL and an unlimited number of subdomains at the level you specify; for example, the wildcard certificate `*.mysite.com`, secures es.mysite.com, de.mysite.com, shop.mysite.com (but does not secure mysite.com, es.shop.mysite.com or de.shop.mysite.com).

The advantage of using a wildcard SSL certificate is that you can add any number of language subdomains without having to purchase or provide Smartling with another SSL certificate. This is a good solution if your site has multiple subdomains or a single domain that must be secure; for example, `*.secure.mysite.com`.

**UC/SAN Certificates**  

A Unified Communications Certificate (UCC) is a SSL certificate that allows you to secure a primary domain, and up to 99 additional Subject Alternative Names, in a single certificate; for example, you can create a single UC certificate to cover:  

mysite.com  
[www.mysite.com](http://www.mysite.com)  
es.mysite.com  
shop.mysite.com  
mysite.de  
shop.mysite.es  

Most providers allow you to update the list of covered domains, but check with your SSL certificate provider for details.

Please confer with Smartling to determine the most appropriate certificate option. Once you provide Smartling with the private key (created when you generate the certificate signing request), the certificate and the intermediate certificate bundle, Smartling will install the appropriate certificate(s) for your localized sites.

Your organization is responsible for obtaining and maintaining all necessary SSL certificates, including any required periodic renewals, and for ensuring that Smartling is provided with said certificates. Smartling is not responsible for errors resulting from a failure to maintain and supply Smartling with your SSL certificates as described above.