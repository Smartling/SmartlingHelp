---
layout: article
title: AEM Touch Connector - Installation and Configuration
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Smartling's AEM Touch Connector allows you to submit content for translation and automatically download the content to Adobe AEM once translations are complete. It also provides dynamic context for your content so that Translators can see how each string will fit into your translated sites.

Once the connector is installed, you can manage your translations through Adobe Experience Manager's [translation projects](http://docs.adobe.com/docs/en/aem/6-1/administer/sites/translation.html).

## Create and configure the Smartling Cloud Service

**1)** Under Cloud Services, find the Smartling service and click **Configure now**.
<br>![](/uploads/versions/2015-05-18_04_04_32_pm---x----2220-954x---.png)

**2)** Create a new Cloud Configuration.
<br>![](/uploads/versions/2015-05-18_04_05_27_pm---x----2724-1336x---.png)

3) Click **Edit** and enter your API Key and Project ID - these can be found in the Smartling Dashboard at **Project Settings &gt; API**.
<br>![](/uploads/versions/2dcd121b5_-_connector_test---x----1648-688x---.png)

## Context Configuration

The AEM Touch Connector uses a Smartling ProjectId and ApiKey for connecting to the Smartling Context service. Only one Adobe instance can provide context to each Smartling project. If you need to use context on multiple CQ instances (for example, development, quality assurance and/or staging servers), use a different Smartling ProjectId + ApiKey for each. This only applies for providing context and doesn't limit uploading content from different CQ instances into single Smartling project.

The Smartling Context configuration includes following settings:

* **Server URL** - the domain name of your author server
* **User** - the AEM account name that should be used for capturing context. You can use an account with read-only or limited permissions


## To configure context

**1)**In the Web console, open **Components** (`/system/console/configMgr`)

![](/uploads/versions/9a86b7d2-fd52-11e4-846d-6c2fcf41673f---x----1662-580x---.png)

**2)** Find the context component “Smartling - Context Preview Settings”. No defaults are provided. An AEM Administrator **must explicitly configure** the Context Preview Settings.

## Disabling context

To fully disable Context, use the “Smartling - Context Connection Manager” component and uncheck **Enabled**.

![](/uploads/versions/945d38e2-e4eb-11e4-84ba-77e36cc1b8e5---x----1210-432x---.png)

Context is **enabled** by default.

## Configure String Sharing

By default, Smartling will treat strings as being unique to each page - that is, if identical strings are included on multiple pages, Smartling will capture the string for translation each time. This gives you flexibility to translate a string differently for different context or space requirements. If you want your pages to share strings - to capture a string only once for your whole site and duplicate the translation wherever that string appears, you can enable string sharing by navigating to the **Smartling - String Duplicates Processor** component and unchecking **Send page content with variants**.

![](/uploads/versions/3776b166-a017-11e5-8c10-6c2ae28db3de---x----1738-476x---.png)