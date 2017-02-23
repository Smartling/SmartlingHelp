---
layout: article
title: Setup your GDN Site
---


This article covers basic setup for serving your site through the GDN. For all setups, there are four basic steps to this process:

**1)** Add your source domain to Smartling
<br>**2)** Setup your translated sites
<br>**3)** Create CNAME records for your translated sites
<br>**4)** Verify your connection.

## Add your source domain to Smartling

Setting up any GDN site begins with adding your source domain to Smartling. This allows Smartling to begin capturing translatable strings from your site and lets you begin to set up your translated sites.

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----663-500x---.png)

In your GDN project, navigate to **Global Delivery Network &gt; Domains** and click the **+** button. Enter your base domain, for example `smartlinghotels.com`{: .highlighter-rouge}, and set a label and environment type. You will need to add your Production environment to serve your translated sites, but you may also wish to add staging or development domains so that you can start capturing your source content for translation before it reaches your production site.

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----574-429x---.png)

## Setup your translated sites

Once your source domain is added to Smartling, you can begin to capture and translate source strings. In order to serve translations, however, you will need to create DNS records for your translated sites. These can be set up in five different ways: Subdomains, TLD/ccTLDs, Subfolders, Cookies and Language Headers.

### Subdomains

When you set up your localized sites on subdomains, the translated domain is part of a larger domain; for example, es.domain.com or fr.domain.com. On the pro side, a subdomain is easy to set up, allows for easy failover configuration, and offers a clear separation of sites. On the con side it is not the most SEO friendly set up: content under ccTLDs and subfolders tends to be better ranked by search engines.

**1)** In your Smartling project, navigate to **Global Delivery Network &gt; Domains** and select your source domain. Under the language you want to set up, click **Edit Domain Settings**. In the configuration dialog, set `Domain Setup Type`{: .highlighter-rouge} to `Subdomain`{: .highlighter-rouge}.

**2)** Set the following properties:

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----670-541x---.png)

* Enter the localized domain.

* Check `Protected`{: .highlighter-rouge} if you do not wish the translated site to be crawled by search engines.

* `Localized Regex`{: .highlighter-rouge}: Any subdomain that matches the regular expression provided will be translated through the Smartling proxy. For example: `es(.\\*).mydomain.com`{: .highlighter-rouge} will match `es-es.smartlinghotels.com, and es-mx.smartlinghotels.com.

* `Alternate Endpoint`{: .highlighter-rouge}: Use this field when the source content should come from a different location yet still references the source domain name. For example, if you enter an IP of `88.88.88.88`{: .highlighter-rouge} and your source domain configuration is `www.smartlinghotels.com`{: .highlighter-rouge}, Smartling will point all requests for source content to that IP with a host header of `www.smartlinghotels.com`{: .highlighter-rouge}.

* `X-Language-Locale`{: .highlighter-rouge}: With every request, Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your application’s method of indicating the language. For example if you need Portuguese for Brazil to use the code `pr-BR`{: .highlighter-rouge} instead of the default `pt-BR`{: .highlighter-rouge} you can can set that here.

**3)** Create a subdomain record on your server and use a [CNAME](#create-cname-records) record to point it to the `CNAME`{: .highlighter-rouge} value given in the configuration dialog.

### TLD/ccTLD

For Top-Level Domains (TLD)/ Country Code Top Level Domains (ccTLD) the country code is placed at the end of a URL, like: `www.smartlinghotels.fr`{: .highlighter-rouge}. TLD/ccTLDs offer clear geotargeting and separation of site, a set up that tends to be favored by Search Engines. It can also be very expensive as each foreign domain will need to be secured, and some countries have Strict ccTLD requirements, such as having a local business presence in order to secure the domain. Maintaining user sessions over multiple, separate country domains presents additional complexity. To create this setup, you will need to acquire all the TLDs you intend to use.

**1)** In your Smartling project, navigate to **Global Delivery Network &gt; Domains** and select your source domain. Under the language you want to set up, click **Edit Domain Settings**. In the configuration dialog, set `Domain Setup Type`{: .highlighter-rouge} to `TLD/ccTLD`{: .highlighter-rouge}.

**2)** Set the following properties:

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----676-544x---.png)

* Enter the localized domain.

* Check `Protected`{: .highlighter-rouge} if you do not wish the translated site to be crawled by search engines.

* `Localized Regex`{: .highlighter-rouge}: Any subdomain that matches the regular expression provided will be translated through the Smartling proxy. For example: .

* `Alternate Endpoint`{: .highlighter-rouge}: Use this field when the source content should come from a different location yet still references the source domain name. For example, if you enter an IP of `88.88.88.88`{: .highlighter-rouge} and your source domain configuration is `www.smartlinghotels.com`{: .highlighter-rouge}, Smartling will point all requests for source content to that IP with a host header of `www.smartlinghotels.com`{: .highlighter-rouge}.

* `X-Language-Locale`{: .highlighter-rouge}: With every request, Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your application’s method of indicating the language. For example if you need Portuguese for Brazil to use the code `pr-BR`{: .highlighter-rouge} instead of the default `pt-BR`{: .highlighter-rouge} you can can set that here.

**3)** Create a subdomain record on your server and use a [CNAME](#create-cname-records) record to point it to the `CNAME`{: .highlighter-rouge} value given in the configuration dialog.

### Folders

Smartling determines the language sites based on a folder, for example: `www.domain.com/fr`{: .highlighter-rouge}. Search Engines usually recognize language subfolders and provide better rankings, while a CDN will accelerate content delivery just as it would for English. When hosting your translation in a folder, the traffic will need to be split between requests for source content (going to your web server) and translated content (going to the Smartling GDN). Your options to split traffic are using the Smartling Global Delivery Network, a Content Delivery Network(CDN), or a web server or network appliance with proxy capabilities (such as Netscaler or F5). Be aware that configuration can be very complex and setup can take longer than other solutions.

**1)** In your Smartling project, navigate to **Global Delivery Network &gt; Domains** and select your source domain. Under the language you want to set up, click **Edit Domain Settings**. In the configuration dialog, set `Domain Setup Type`{: .highlighter-rouge} to `Folder`{: .highlighter-rouge}. Give a value for your source folder (this is probably either blank or `en`{: .highlighter-rouge}) and localized folder (`fr`{: .highlighter-rouge}, `zh-CN`{: .highlighter-rouge}, etc).

**2)** Set the following properties:

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----673-637x---.png)

* Enter the localized domain.

* Check `Protected`{: .highlighter-rouge} if you do not wish the translated site to be crawled by search engines.

* `Localized Regex`{: .highlighter-rouge}: Any address that matches the regular expression provided will be translated through the Smartling proxy.

* `Alternate Endpoint`{: .highlighter-rouge}: Use this field when the source content should come from a different location yet still references the source domain name. For example, if you enter an IP of `88.88.88.88`{: .highlighter-rouge} and your source domain configuration is `www.smartlinghotels.com`{: .highlighter-rouge}, Smartling will point all requests for source content to that IP with a host header of `www.smartlinghotels.com`{: .highlighter-rouge}.

* `X-Language-Locale`{: .highlighter-rouge}: With every request, Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your application’s method of indicating the language. For example if you need Portuguese for Brazil to use the code `pr-BR`{: .highlighter-rouge} instead of the default `pt-BR`{: .highlighter-rouge} you can can set that here.

**3)** Create a domain on your server and use a [CNAME](#create-cname-records) record to point it to the `CNAME`{: .highlighter-rouge} value given in the configuration dialog.

### Cookies / HTTP Header Values

In this scenario, the source server returns a HTTP header or sets a cookie containing the locale that should be served.

> You should only use this setup when the source configuration requires it as the translated content is invisible to search engines.

**1)** In your Smartling project, navigate to **Global Delivery Network &gt; Domains** and select your source domain. Under the language you want to set up, click **Edit Domain Settings**. In the configuration dialog, set `Domain Setup Type`{: .highlighter-rouge} to `Cookie Value`{: .highlighter-rouge} or `HTTP HEADER`{: .highlighter-rouge}. Give a value for your localized domain and the cookie/header value (`fr`{: .highlighter-rouge}, `zh-CN`{: .highlighter-rouge}, etc).

**2)** Set the following properties:

![](/uploads/versions/smartling---manage-domains--smartling-hotels----x----670-615x---.png)

* Check `Protected`{: .highlighter-rouge} if you do not wish the translated site to be crawled by search engines.

* `Localized Regex`{: .highlighter-rouge}: Any address that matches the regular expression provided will be translated through the Smartling proxy.

* `Alternate Endpoint`{: .highlighter-rouge}: Use this field when the source content should come from a different location yet still references the source domain name. For example, if you enter an IP of `88.88.88.88`{: .highlighter-rouge} and your source domain configuration is `www.smartlinghotels.com`{: .highlighter-rouge}, Smartling will point all requests for source content to that IP with a host header of `www.smartlinghotels.com`{: .highlighter-rouge}.

* `X-Language-Locale`{: .highlighter-rouge}: With every request, Smartling sends an HTTP header with the locale code for the language. The format of the code can be customized from the default to map it to your application’s method of indicating the language. For example if you need Portuguese for Brazil to use the code `pr-BR`{: .highlighter-rouge} instead of the default `pt-BR`{: .highlighter-rouge} you can can set that here.

**3)** Create your localized domain on your server and use a [CNAME](#create-cname-records) record to point it to the `CNAME`{: .highlighter-rouge} value given in the configuration dialog.

## Create CNAME records

For all GDN configurations except cookies/language headers, you will need to configure CNAME settings. Depending on the hosting service you are using, configuration may vary slightly.

* [Cloudflare](https://support.cloudflare.com/hc/en-us/articles/200169046-How-do-I-add-a-CNAME-record-)
* [GoDaddy](https://www.godaddy.com/help/manage-hosting-account-domains-4688)
* [Network Solutions](http://www.networksolutions.com/support/cname-records-host-aliases/)
* [Oneandone](http://help.1and1.com/domains-c36931/manage-domains-c79822/dns-c37586/enter-a-cname-for-your-subdomain-a643600.html)
* [Register.com](https://www.register.com//customersupport/tutorials/cname.rcmx)
* [Yahoo](https://help.luminate.com/kb/domains/set-cname-record-sln17912)

> While your changes will appear in the name servers within minutes, please be aware that it can take up to 72 hours for new records to propagate to all nameservers on the Internet. If you have trouble adding your CNAME record, contact your domain host directly for further assistance.

Smartling uses CNAME DNS records to direct localized traffic to the correct servers in the GDN infrastructure. For subdomains, this is as simple as creating a CNAME record for each subdomain. DNS specifications do not allow CNAME records to be used with top-level domain records, so you cannot use top level domains with the Smartling GDN, directly. For example: `mysite.fr`{: .highlighter-rouge} cannot be used directly.

### Using a TLD for your localized site

1. Set up a website on your server to handle requests to the ccTLD, for example: `smartlinghotels.fr`{: .highlighter-rouge}.
2. Modify your DNS settings for `smartlinghotels.fr`{: .highlighter-rouge} to create an “A” record for the TLD that points to your new site.
3. Add a CNAME record that points to the Smartling site (`www.smartlinghotels.fr`{: .highlighter-rouge}).
4. Set up your website for `smartlinghotels.fr`{: .highlighter-rouge} to permanently redirect all traffic to `www.smartlinghotels.fr`{: .highlighter-rouge}.

For Apache servers you can add an .htaccess file with the following content into the root folder of your site:

<div class="highlighter-rouge"><pre class="highlight"><code>Options +FollowSymlinks
RewriteEngine on
rewritecond %{http_host} ^mysite.fr [nc]
rewriterule ^(.\*)$ http://www.mysite.fr/$1 [r=301,nc]
</code></pre></div>

### Subfolders through the GDN

At the core of the Global Delivery Network is a proxy solution, and as a result Smartling has the ability to let traffic pass through the GDN or translate it. To use the Smartling GDN, create a CNAME for your source domain such as www.mycompanysite.com pointing to the Smartling CNAME so that Smartling can route all your site traffic. We then create rules and configure domains to:

* Let any traffic for the source language pass through the GDN to then be pointed to the server hosting your content in the Source Language using either an origin domain or an IP.
* Translate the content coming through in specific folders, as well as rewrite all links to the correct target folder.

> **SSL implications**: if encryption is required, an SSL certificate will need to be deployed in the Smartling infrastructure.

### Subfolders through a Content Delivery Network

A CDN is a proxy solution that also lets you split traffic between different origin hosts for the content that is optimized for delivery. In this configuration, Rules are set up in the CDN configuration to split traffic to Smartling instead of the regular origin host.

* Cloudflare As of June 2014 Cloudflare does not support this approach.
* Akamai
  <br>**1)** Click on the non-obvious Choose Optional Features link
  <br>**2)** “Configuration Attributes and Digital Properties”.
  <br>**3)** Select the Modify Path Rules option. A new section of the configuration is enabled
  <br>**4)** Modify path rule `/ Match Criteria /Component Path: /FOLDERNAME/`{: .highlighter-rouge} (Ignore Case)

<div class="highlighter-rouge"><pre class="highlight"><code>Relative (Remove Original Path): /FOLDERNAME/
  Modified Origin Server: mycompany.sl.smartling.com
  Forward HOST header: Digital Property
  Cache Key: Origin Server (mycompany.sl.smartling.com)
</code></pre></div>

* Other CDNs (Limelight, Fastly, ChinaCache, etc): Please contact your CDN provider.

> **SSL Implications:** If encryption is required the certificates are deployed in the CDN infrastructure and traffic between the CDN and Smartling is encrypted using unsigned certificates, so no certificates will be needed in the GDN.

### Subfolders through a HTTP Server with proxy capabilities

In the same way you can leverage the GDN to split the traffic, an HTTP server with proxy capabilities (Apache, Nginx) has the ability to split traffic to Smartling for translated folders and to another location for source content.

* Sample Rules for Apache (with Mod_proxy)

  <div class="highlighter-rouge"><pre class="highlight"><code>&lt;VirtualHost REPLACEWITHIPADDRESS:80&gt;
           ServerName domain.com
           ServerAlias www.domain.com

           &lt;Proxy http://mycompany.sl.smartling.com/\*&gt;
              Allow from all
           &lt;/Proxy&gt;

          &lt;LocationMatch &ldquo;/langfolder1&rdquo;&gt;
               ProxyPass http://mycompany.sl.smartling.com/LANGUAGEFOLDER
               ProxyPassReverse http://mycompany.sl.smartling.com/LANGUAGEFOLDER
               ProxyPreserveHost On
          &lt;/LocationMatch&gt;
  &lt;/VirtualHost&gt;
  </code></pre></div>
* Sample Rules for nginx

  <div class="highlighter-rouge"><pre class="highlight"><code>location ~\* ^/(langfolder1|langfolder2|langfolder3)/?
  {break;proxy_pass http://&lt;mycompany&gt;.sl.smartling.com; proxy_set_header Host $host;}
  </code></pre></div>
* For all other web servers and appliances, please contact the company’s technical support team.

> **SSL Implications:** If encryption is required, the certificates are deployed on your server. Traffic between the proxy and Smartling is encrypted using unsigned certificates, so certificates will not be needed on the Smartling proxies.

## Test your configuration

Before your translated site can be delivered through the GDN, you must verify that your DNS settings work. From the configuration dialog for the translated domain, click **Verify DNS**. If verification is not successful, check your CNAME settings. You may simply wait for your DNS records to propagate to all name servers.