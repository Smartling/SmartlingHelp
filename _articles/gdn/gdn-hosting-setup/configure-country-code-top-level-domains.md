---
layout: article
title: Configure Country Code Top-Level Domains
---

Smartling uses CNAME DNS records to direct localized traffic to the correct servers in the GDN infrastructure. DNS specifications do not allow CNAME records to be used with top-level domain records, so you cannot use top level domains with the Smartling GDN, directly.

To use a TLD for your localized site:

**1)** Setup a website on your server to handle requests to the ccTLD, for example: mysite.fr.  
**2)** Modify your DNS settings for mysite.fr to create an “A” record for the TLD that points to your new site.  
**3)** Add a www CNAME record (www.mysite.fr) that points to the Smartling site (fr.mysite.com).  
**4)** Setup your website for mysite.fr to permanently redirect all traffic to www.mysite.fr

For Apache servers you can add a .htaccess file with the following content into the root folder of your site:

~~~
Options +FollowSymlinks   
RewriteEngine on   
rewritecond %{http_host} ^mysite.fr [nc]   
rewriterule ^(.*)$ http://www.mysite.fr/$1 [r=301,nc]
~~~