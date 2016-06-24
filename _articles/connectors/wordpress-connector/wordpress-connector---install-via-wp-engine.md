---
layout: article
title: Wordpress Connector - Install Via WP Engine
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

The Wordpress Connector is available to sites managed via [WP Engine](https://wpengine.com/). Follow the steps below to instal and configure the Connector.

## Create and configure a site from the  WP engine

**(1)** From WP Engine, in the **Installs** field, click **Add install**

![](/hc/en-us/article_attachments/204214958/image02.png)

**(2)** Complete the form and select **Multisite**.

![](/hc/en-us/article_attachments/204213147/image09.png)

The install will take several minutes.

**(3)** Now login to WordPress and navigate to **My Sites > Network Admin > Dashboard**.

![](/hc/en-us/article_attachments/204214968/image03.png)  


**(4)** Install the following plugins

*   Multilingual Press
*   WP Crontrol
*   Smartling Connector

## Configure Multilingual Press and creating translated sites.

**(1)** Navigate to My Sites > Network Admin > Sites and edit your primary site.

![](/hc/en-us/article_attachments/204213117/image04.png)

**(2)** Go to the MultilingualPress tab, choose your default language and save.

![](/hc/en-us/article_attachments/204214978/image08.png)

**(3)** For each language:

*   Click create site
*   Complete the form and select the main site

![](/hc/en-us/article_attachments/204213157/image06.png)  


> If you want to set up subdomains you will need to contact customer support.

## Configuring WP Crontrol

**(1)** Edit your wp-config file and add the line:

`define('DISABLE_WP_CRON', true);`

**(2)** Return to your main site Dashboard and navigate to **Tools > Crontrol**

![](/hc/en-us/article_attachments/204214938/image05.png)  


**(3)** Locate **smartling_cron_task**

![](/hc/en-us/article_attachments/204214948/image00.png)

**(4)** In the field **Event schedule** select the desired interval and save.

![](/hc/en-us/article_attachments/204213167/image10.png)  


**(5)** If you want to save your interval, go to **Settings > Cron Schedules**

![](/hc/en-us/article_attachments/204213127/image01.png)

Complete the form and save.

![](/hc/en-us/article_attachments/204213137/image07.png)  