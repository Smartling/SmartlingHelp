---
layout: article
title: Wordpress Connector - Upgrade or Uninstall
---


## Upgrade to a new version

**1)** Go to the Plugins page at **Network Admin -&gt; Plugins** (`/wp-admin/network/plugins.php`)

**2)** On the entry for the Smartling Connector, click **update now.**

![](/uploads/versions/74m0zkd---x----1190-486x---.png)

**3)** To register your Smartling cron tasks with the updated version:

**3.1)** Click **Network Deactivate**

![](/uploads/versions/0moi9kv---x----986-148x---.png)

**3.2)** Click **Network Activate**

![](/uploads/versions/k48rv9y_png__1183-807_---x----966-89x---.png)

The new version of the connector is now ready for use.

## Alternative Manual Upgrade

**1)** Go to the Plugins page at **Network Admin -&gt; Plugins** (`/wp-admin/network/plugins.php`)

**()** On the entry for the Smartling Connector, click **Network Deactivate,** then click **Delete.**

![](/uploads/versions/74m0zkd-1---x----987-123x---.png)

![](/uploads/versions/k48rv9y_png__1183-807_-1---x----966-89x---.png)

**3)** Follow the [WordPress instructions](https://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation) to upload a new version of the Smartling Connector.

**4)** On the entry for the Smartling Connector, click **Network Activate**.

**5)** Check your [Smartling Connector configuration](/knowledge-base/articles/wordpress-connector-install-and-configure/#configure-smartling-plugin){: .cc-active}.

The new version of the connector will be ready for use.

## Uninstall

**1)** Go to the Plugins page at&nbsp;**Network Admin -&gt; Plugins** (`/wp-admin/network/plugins.php`).

**2)**&nbsp;On the entry for the Smartling Connector, click **Edit**.

**3)** Select&nbsp;**unistall.php**from the **Plugin Files** column.

![](/uploads/versions/edit_plugins_-_network_admin__wpmod2_dev_smartling_net_sites_-_wordpress---x----1095-671x---.png)

**4)** Scroll to the line `//defined('SMARTLING_COMPLETE_REMOVE...`, delete the leading `//` and click **Update File**.

![](/uploads/versions/edit_plugins_-_network_admin__wpmod2_dev_smartling_net_sites_-_wordpress-1---x----1221-662x---.png)

**5)** From the Smartling Connector entry on the plugins page, click&nbsp;**Network Deactivate,** then&nbsp;**Delete.**