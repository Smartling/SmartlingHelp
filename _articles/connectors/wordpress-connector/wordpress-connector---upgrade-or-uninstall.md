---
layout: article
title: Wordpress Connector - Upgrade or Uninstall
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

## Upgrade to a new version

**(1)** Go to the Plugins page at **Network Admin -> Plugins** (/wp-admin/network/plugins.php)

**(2)** On the entry for the Smartling Connector, click **update now.**

![](/hc/en-us/article_attachments/206533027/74m0zKd.png)

**(3)** To register your Smartling cron tasks with the updated version:

**(3.1)** Click **Network Deactivate**

![](/hc/en-us/article_attachments/206533287/0moI9KV.png)  


**(3.2)** Click **Network Activate**

![](/hc/en-us/article_attachments/206533337/k48RV9Y_png__1183_807_.png)

The new version of the connector is now ready for use.

### Alternative Manual Upgrade

**(1)** Go to the Plugins page at **Network Admin -> Plugins** (/wp-admin/network/plugins.php)

**(2)** On the entry for the Smartling Connector, click **Network Deactivate,** then click **Delete.**

![](/hc/en-us/article_attachments/206533857/74m0zKd.png)

![](/hc/en-us/article_attachments/206504348/k48RV9Y_png__1183_807_.png)

**(3)** Follow the [WordPress instructions](https://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation) to upload a new version of the Smartling Connector.

**(4)** On the entry for the Smartling Connector, click **Network Activate**.

**(5)** Check your [Smartling Connector configuration]().

The new version of the connector will be ready for use.

## Uninstall

**(1)** Go to the Plugins page at **Network Admin -> Plugins** (/wp-admin/network/plugins.php).

**(2)** On the entry for the Smartling Connector, click **Edit**.

**(3)** Select **unistall.php**from the **Plugin Files** column.

![](/hc/en-us/article_attachments/208694948/Edit_Plugins___Network_Admin__wpmod2_dev_smartling_net_Sites___WordPress.png)

**(4)** Scroll to the line `//defined('SMARTLING_COMPLETE_REMOVE...`, delete the leading `//` and click **Update File**.

![](/hc/en-us/article_attachments/208712527/Edit_Plugins___Network_Admin__wpmod2_dev_smartling_net_Sites___WordPress.png)

**(5)** From the Smartling Connector entry on the plugins page, click **Network Deactivate,** then **Delete.**