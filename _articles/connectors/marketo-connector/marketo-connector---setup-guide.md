---
layout: article
title: Marketo Connector - Setup Guide
---


## Setup a Marketo API Role

Smartling uses Marketo’s API to import your emails to the Smartling Dashboard and return translated emails to the Marketo Dashboard. To set up the Connector, you need to create an API Role, dedicated API user and a LaunchPoint service in the Marketo Dashboard. Your Smartling CSM will then be able to enable the Marketo Connector for your Smartling project.

To do this, follow the steps in the Quickstart Guide for [Marketo REST API](http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/). When you configure permissions for the API role, you only need to grant **Access API &gt; Read-Write Assets**.

![](/uploads/versions/marketo___roles_-_admin---x----593-595x---.png)

![](/uploads/versions/image-1---x----485-332x---.png)

When you have set up your API role, API User and Launchpoint service,

## Set up API details in the Smartling Dashboard.

At Project Settings &gt; Marketo Settings, provide your marketo Client Id, Client Secret, Endpoint and Identity.

![](/uploads/versions/smartling___marketo_settings---x----1230-839x---.png)

You can find these settings in the Marketo Dashboard:

* **Client ID and Client Secret:** Available in the Marketo Admin Dashboard at **Integration &gt; Launchpoint** after you setup your Smartling service.
  <br>![](/uploads/versions/marketo___installed_services_-_admin---x----1133-770x---.png)
* **Endpoint & Identity URLs:** Available in the Marketo Admin Dashboard at **Integration &gt; Web Services
  <br>![](/uploads/versions/marketo___web_services_-_admin---x----949-864x---.png)**


## Translation Settings

From **Project Settings &gt; Marketo Settings**, you can configure your translation languages, and options for exporting translations to Marketo.

At the top of the settings page, check each translation language for your Marketo content.

![](/uploads/versions/smartling___marketo_settings-2---x----1225-377x---.png)