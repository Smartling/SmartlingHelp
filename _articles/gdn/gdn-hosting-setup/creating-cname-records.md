---
layout: article
title: Create CNAME Records
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

For all GDN configurations, you will need to configure CNAME settings. Depending on the hosting service you are using, configuration may vary slightly.

* [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200169046-How-do-I-add-a-CNAME-record-)   
* [GoDaddy](https://www.godaddy.com/help/manage-hosting-account-domains-4688)  
* [Network Solutions](http://www.networksolutions.com/support/cname-records-host-aliases/)   
* [Oneandone](http://help.1and1.com/domains-c36931/manage-domains-c79822/dns-c37586/enter-a-cname-for-your-subdomain-a643600.html)  
* [Register.com](https://www.register.com//customersupport/tutorials/cname.rcmx)  
* [Yahoo](https://help.luminate.com/kb/domains/set-cname-record-sln17912)  


> While your changes will appear in the name servers within minutes, please be aware that it can take up to 72 hours for new records to propagate to all nameservers on the Internet.
If you have trouble adding your CNAME record, contact your domain host directly for further assistance.

Smartling uses CNAME DNS records to direct localized traffic to the correct servers in the GDN infrastructure. DNS specifications do not allow CNAME records to be used with top-level domain records, so you cannot use top level domains with the Smartling GDN, directly. For example: ‘mysite.fr’ cannot be used directly.

## Using a TLD for your localized site

1. Set up a website on your server to handle requests to the ccTLD, for example: mysite.fr.
2. Modify your DNS settings for mysite.fr to create an “A” record for the TLD that points to your new site.
3. Add a CNAME record that points to the Smartling site (www.mysite.fr).
4. Set up your website for mysite.fr to permanently redirect all traffic to www.mysite.fr

For Apache servers you can add an .htaccess file with the following content into the root folder of your site:

~~~
Options +FollowSymlinks
RewriteEngine on
rewritecond %{http_host} ^mysite.fr [nc]
rewriterule ^(.*)$ http://www.mysite.fr/$1 [r=301,nc]
~~~

## Using Subfolders through the GDN

At the core of the Global Delivery Network is a proxy solution, and as a result Smartling has the ability to let traffic pass through the GDN or translate it. To use the Smartling GDN, create a CNAME for your source domain such as www.mycompanysite.com pointing to the Smartling CNAME so that Smartling can route all your site traffic. We then create rules and configure domains to:					

* Let any traffic for the source language pass through the GDN to then be pointed to the server hosting your content in the Source Language using either an origin domain or an IP.	  	
* Translate the content coming through in specific folders, as well as rewrite all links to the correct target folder.	 	
 	 		
> **SSL implications**: if encryption is required, an SSL certificate will need to be deployed in the Smartling infrastructure. 

## Using a Content Delivery Network

A CDN is a proxy solution that also lets you split traffic between different origin hosts for the content that is optimized for delivery. In this configuration, Rules are set up in the CDN configuration to split traffic to Smartling instead of the regular origin host.

* Cloudflare As of June 2014 Cloudflare does not support this approach.
* Akamai
    1. Click on the non-obvious Choose Optional Features link	
    2. “Configuration Attributes and Digital Properties”.			
    3. Select the Modify Path Rules option. A new section of the configuration is enabled	
    4. Modify path rule / Match Criteria /Component Path: /FOLDERNAME/ (Ignore Case)
    ~~~
    Relative (Remove Original Path): /FOLDERNAME/
      Modified Origin Server: mycompany.sl.smartling.com
      Forward HOST header: Digital Property
      Cache Key: Origin Server (mycompany.sl.smartling.com)
    ~~~
* Other CDNs (Limelight, Fastly, ChinaCache, etc): Please contact your CDN provider.

> **SSL Implications:** If encryption is required the certificates are deployed in the CDN infrastructure and traffic between the CDN and Smartling is encrypted using unsigned certificates, so no certificates will be needed in the GDN.

## HTTP Server with proxy capabilities						

In the same way you can leverage the GDN to split the traffic, an HTTP server with proxy capabilities (Apache, Nginx) has the ability to split traffic to Smartling for translated folders and to another location for source content.

* Sample Rules for Apache (with Mod_proxy)
  ~~~
  <VirtualHost REPLACEWITHIPADDRESS:80>
           ServerName domain.com
           ServerAlias www.domain.com
  
           <Proxy http://mycompany.sl.smartling.com/*>			
              Allow from all
           </Proxy>	
  				
          <LocationMatch “/langfolder1”>
               ProxyPass http://mycompany.sl.smartling.com/LANGUAGEFOLDER
               ProxyPassReverse http://mycompany.sl.smartling.com/LANGUAGEFOLDER	
               ProxyPreserveHost On				
          </LocationMatch>
  </VirtualHost>
  ~~~

* Sample Rules for nginx
  ~~~
  location ~* ^/(langfolder1|langfolder2|langfolder3)/? 
  {break;proxy_pass http://<mycompany>.sl.smartling.com; proxy_set_header Host $host;}
  ~~~

* For all other web servers and appliances, please contact the company’s technical support team.

> **SSL Implications:** If encryption is required, the certificates are deployed on your server.  Traffic between the proxy and Smartling is encrypted using unsigned certificates, so certificates will not be needed on the Smartling proxies.