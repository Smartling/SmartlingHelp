---
layout: article
title: Sitecore Connector - Upgrading to Version 1.3x
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


We made some key changes to the Sitecore Connector in version 1.3 so to upgrade from an earlier version, you will need to follow some additional steps.

## Before Installation

**1)**&nbsp;In the Sitecore Content Editor, navigate to&nbsp;**System &gt; Modules &gt; Smartling Connector** and copy the&nbsp;**Callback Token** value. Store it somewhere safe.

**2)** Generate Smartling API v2 Credentials for your Sitecore project. Follow [these instructions](http://docs.smartling.com/pages/API/v2/Authentication/) and save your **User Identifier** and **Token Secret**.

**3)** You need to update your database schema for version 1.3. Connect to your database via your preferred tool and run the following script:

~~~
SET QUOTED_IDENTIFIER ON
GO
ALTER TABLE [dbo].[TranslationQueue] ADD [LastModified] [datetime]
GO
UPDATE [dbo].[TranslationQueue]
SET [LastModified]=0
GO
ALTER TABLE [dbo].[TranslationQueue] ALTER COLUMN [LastModified] [datetime] NOT NULL
GO
~~~

If you don't know your database endpoint, you can find it in your Sitecore configuration at **/Website/App_Config/ConnectionStrings.config**. The database endpoint is in the **SitecoreLocalization** entry.

## Install

You can now upload and install the new 1.3 packages. Be sure to install all packages before you continue with the configuration.

## After Installation

**1)**&nbsp;Open the Sitecore Content Editor, navigate to&nbsp;**Systems &gt; Settings &gt; Validation Rules &gt; Field Rules &gt; System** and delete the **SitecoreLocalizationApiKey** entry.

![](/uploads/versions/97ddbf32-2671-11e6-931c-e964b62630b0-1---x----596-286x---.png)

**2)**&nbsp;Update your Smartling Configuration profiles.

* Navigate to **System &gt; Modules &gt; Smartling Connector &gt; Context** and update your **Server URL**.
  <br>![](/uploads/versions/03151998-2371-11e6-91ec-6ab89877af7f-1---x----660-447x---.png)
* Go to each of your Profiles under&nbsp;**System &gt; Modules &gt; Smartling Connector &gt; Profiles** and update your project details, including your **User Identifier** and&nbsp;**Token Secret**.
  <br>![](/uploads/versions/9eb7c72a-2370-11e6-8cf8-793dbc00620f-1---x----772-814x---.png)
  <br>&nbsp;


**3)** Go to&nbsp;**System &gt; Modules &gt; Smartling Connector &gt; Callback** and paste in your saved&nbsp;**Callback Token**&nbsp;value.

![](/uploads/versions/content_editor---x----756-593x---.png)

The Sitecore connector should be ready to continue translation.