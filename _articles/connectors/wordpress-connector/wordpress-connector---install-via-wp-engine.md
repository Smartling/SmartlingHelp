---
layout: article
title: Wordpress Connector - Install Via WP Engine
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


The Wordpress Connector is available to sites managed via [WP Engine](https://wpengine.com/). Follow the steps below to instal and configure the Connector.

## Create and configure a site from the WP engine

**(1)** From WP Engine, in the **Installs** field, click **Add install**

![](/uploads/versions/image02-2---x----797-65x---.png)

**(2)** Complete the form and select **Multisite**.

![](/uploads/versions/image09---x----600-432x---.png)

The install will take several minutes.

**(3)** Now login to WordPress and navigate to **My Sites &gt; Network Admin &gt; Dashboard**.

![](/uploads/versions/image03-2---x----339-111x---.png)

**(4)** Install the following plugins

* Multilingual Press
* WP Crontrol
* Smartling Connector


## Configure Multilingual Press and creating translated sites.

**(1)** Navigate to My Sites &gt; Network Admin &gt; Sites and edit your primary site.

![](/uploads/versions/image04-2---x----238-88x---.png)

**(2)** Go to the MultilingualPress tab, choose your default language and save.

![](/uploads/versions/image08---x----824-254x---.png)

**(3)** For each language:

* Click create site
* Complete the form and select the main site


![](/uploads/versions/image06-1---x----1210-599x---.png)

> If you want to set up subdomains you will need to contact customer support.

## Configuring WP Crontrol

**(1)** Edit your wp-config file and add the line:

`define('DISABLE_WP_CRON', true);`

**(2)** Return to your main site Dashboard and navigate to **Tools &gt; Crontrol**

![](/uploads/versions/image05-1---x----322-122x---.png)

**(3)** Locate **smartling_cron_task**

![](/uploads/versions/image00-2---x----1719-76x---.png)

**(4)** In the field **Event schedule** select the desired interval and save.

![](/uploads/versions/image10---x----922-481x---.png)

**(5)** If you want to save your interval, go to **Settings &gt; Cron Schedules**

![](/uploads/versions/image01-3---x----316-207x---.png)

Complete the form and save.

![](/uploads/versions/image07-1---x----931-336x---.png)