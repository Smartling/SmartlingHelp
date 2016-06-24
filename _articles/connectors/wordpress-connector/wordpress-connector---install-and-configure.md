---
layout: article
title: Wordpress Connector - Install and Configure
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

Smartling’s WordPress Connector allows you to integrate Smartling translations into your WordPress site. The Connector uploads new content to Smartling and downloads translations to the appropriate site.

## Prerequisites:

Before you can install the Smartling Connector, you need to have the following in your WordPress installation:

*   WordPress version 4.3 or higher
*   [Multisite mode](http://codex.wordpress.org/Create_A_Network) enabled.
*   [Multilingual Press](https://wordpress.org/plugins/multilingual-press/) free plugin must be installed.
*   A Smartling project of the CMS Connectors type.
*   PHP Version 5.4 or higher.
*   PHP extensions
*   mb_string
*   curl

## Configure Multilingual Press Plugin

**(1)** Go to **My Sites - Network Admin - Sites** (/wp-admin/network/sites.php)

![](/hc/en-us/article_attachments/206600747/My_Sites___wpmod2_dev_smartling_net___WordPress.png)

**(2)** Add a new site for each translated language.

**(3)** For each site, including your original site, set the language in the **Multilingual Press** tab.

**(4)** For your original site **only**, check the box next to each translated site under the **Relationships** heading.

![](/hc/en-us/article_attachments/206569248/Edit_Site__wpmod2_dev_smartling_net___Network_Admin__wpmod2_dev_smartling_net_Sites___WordPress.png)

## Install Smartling Plugin

**(1)** Download the zipped plugin folder from the [Connectors](https://dashboard.smartling.com/connectors.htm) page in the Smartling Dashboard.

**(2)** Follow the WordPress [Manual Plugin Installation](https://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation) process to install the plugin.

## Configure Smartling Plugin

**(1)** Go to **Smartling Connector - Settings** (/network/admin.php?page=smartling-settings)

![](/hc/en-us/article_attachments/206569278/Sites___Network_Admin__wpmod2_dev_smartling_net_Sites___WordPress.png)

**(2)** Create one or more settings profiles. To begin, click **Add Profile**.

![](/hc/en-us/article_attachments/206600837/Configuration_profiles___Network_Admin__wpmod2_dev_smartling_net_Sites___WordPress.png)

**(3)** Set **Project ID** and User Identifier and User Secretand save the settings. The Connector uses version 2 of Smartling's API. You need to [obtain a User ID and User Secret](http://docs.smartling.com/pages/API/v2/Authentication/) for the Connector.

**(4)** Select the **Default Locale** and save settings.

**(5)** Select your target locales and enter the locale code for each language, e.g. fr-FR for ‘French - FRANCE’ If you are unsure of the correct locale codes, check [**Project Settings > API**](https://dashboard.smartling.com/settings/api.htm) for a list of codes for your project.

**(6)** Set retrieval type. This determines the type of translations that will be retrieved from Smartling. See our documentation for [retrieval options]().

**(7)** Select your resubmit preference. **Automatically** means the Connector resubmits content to Smartling whenever a change is detected.**Manually** means the user must resubmit content.

**(8)** By default the **Auto Authorize** option is off, so you must go to the Smartling dashboard and authorize all strings for translation. By turning on this option all sent strings will be Authorized for translation automatically.

![](/hc/en-us/article_attachments/206569128/Profile_setup___wpmod2_dev_smartling_net___WordPress.png)

**(8)** Click **Save Changes**.  

## Configure WP Cron

The Wordpress Connector uses WP-Cron to run regular tasks. See here for further information about [hooking WP-Cron into the system task scheduler](https://developer.wordpress.org/plugins/cron/hooking-into-the-system-task-scheduler/).

**(1)** Ensure that the domain name of your Wordpress site is resolved on the server by pinging it when you're logged in via ssh. e.g.:  
 
`ping mywordpressinstallation.com`

If you get a response like `Could not resolve host: mywordpressinstallation.com`, then you will need to add a record to your `/etc/hosts` file

**(2)** To configure a Cron task, edit your crontab (using the appropriate user `nginx`\ `www-data`)

    sudo -u nginx crontab -e

**(3)** Add a line to the end of the file

    */5 * * * * curl http://mywordpressinstallation.com/wp-cron.php  > /dev/null 2>&1

or

    */5 * * * * wget -O - -q -t 1 http://mywordpressinstallation.com/wp-cron.php

This will run Wordpress cron every 5 minutes.

> Remember to leave at least one blank line at the end of the file.

**(4)** Edit your `wp-config.php` file and add the following line

    define('DISABLE_WP_CRON', true);