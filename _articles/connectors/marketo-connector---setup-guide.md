---
layout: article
title: Marketo Connector - Setup Guide
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

## Setup a Marketo API Role

Smartling uses Marketo’s API to import your emails to the Smartling Dashboard and return translated emails to the Marketo Dashboard. To set up the Connector, you need to create an API Role, dedicated API user and a LaunchPoint service in the Marketo Dashboard. Your Smartling CSM will then be able to enable the Marketo Connector for your Smartling project.

To do this, follow the steps in the Quickstart Guide for [Marketo REST API](http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/). When you configure permissions for the API role, you only need to grant **Access API > Read-Write Assets**.

![](/hc/en-us/article_attachments/204531807/Marketo___Roles___Admin.png)  

![](/hc/en-us/article_attachments/202435108/image__1_.png)

When you have set up your API role, API User and Launchpoint service,

## Set up API details in the Smartling Dashboard.

At Project Settings > Marketo Settings, provide your marketo Client Id, Client Secret, Endpoint and Identity.

![](/hc/en-us/article_attachments/204531767/Smartling___Marketo_Settings.png)

You can find these settings in the Marketo Dashboard:

*   **Client ID and Client Secret:**
    Available in the Marketo Admin Dashboard at **Integration > Launchpoint** after you setup your Smartling service.
    ![](/hc/en-us/article_attachments/204531827/Marketo___Installed_Services___Admin.png)

*   **Endpoint & Identity URLs:**
    Available in the Marketo Admin Dashboard at **Integration > Web Services**
    ![](/hc/en-us/article_attachments/204532007/Marketo___Web_Services___Admin.png)  


## Translation Settings

From **Project Settings > Marketo Settings**, you can configure your translation languages, and options for exporting translations to Marketo.

At the top of the settings page, check each translation language for your Marketo content.

![](/hc/en-us/article_attachments/203839887/Smartling___Marketo_Settings.png)