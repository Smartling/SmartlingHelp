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

**1)** In the Sitecore Content Editor, navigate to **System > Modules > Smartling Connector** and copy the **Callback Token** value. Store it somewhere safe.

**2)** Generate Smartling API v2 Credentials for your Sitecore project. Follow [these instructions](http://docs.smartling.com/pages/API/v2/Authentication/) and save your **User Identifier** and **Token Secret**.

3) You need to update your database schema for version 1.3\. Connect to your database via your preferred tool and run the following script:

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

**1)** Open the Sitecore Content Editor, navigate to **Systems > Settings > Validation Rules > Field Rules > System** and delete the **SitecoreLocalizationApiKey** entry.

![](/hc/en-us/article_attachments/207708968/97ddbf32-2671-11e6-931c-e964b62630b0.png)

**2)** Update your Smartling Configuration profiles.

* Navigate to **System > Modules > Smartling Connector > Context** and update your **Server URL**. 

![](/hc/en-us/article_attachments/207709168/03151998-2371-11e6-91ec-6ab89877af7f.png)  


*   Go to each of your Profiles under **System > Modules > Smartling Connector > Profiles** and update your project details, including your **User Identifier** and **Token Secret**.  

![](/hc/en-us/article_attachments/207710068/9eb7c72a-2370-11e6-8cf8-793dbc00620f.png)

**3)** Go to **System > Modules > Smartling Connector > Callback** and paste in your saved **Callback Token** value.

![](/hc/en-us/article_attachments/207710388/Content_Editor.png)

The Sitecore connector should be ready to continue translation.