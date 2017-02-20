---
layout: article
title: Sitecore Connector - Upgrading to Version 1.3x
---


We made some key changes to the Sitecore Connector in version 1.3 so to upgrade from an earlier version, you will need to follow some additional steps.

## Before Installation

**1)** In the Sitecore Content Editor, navigate to **System &gt; Modules &gt; Smartling Connector** and copy the **Callback Token** value. Store it somewhere safe.

**2)** Generate Smartling API v2 Credentials for your Sitecore project. Follow [these instructions](http://docs.smartling.com/pages/API/v2/Authentication/) and save your **User Identifier** and **Token Secret**.

**3)** You need to update your database schema for version 1.3. Connect to your database via your preferred tool and run the following script:

~~~sql
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

**1)** Open the Sitecore Content Editor, navigate to **Systems &gt; Settings &gt; Validation Rules &gt; Field Rules &gt; System** and delete the **SitecoreLocalizationApiKey** entry.

![](/uploads/versions/97ddbf32-2671-11e6-931c-e964b62630b0-1---x----596-286x---.png)

**2)** Update your Smartling Configuration profiles.

* Navigate to **System &gt; Modules &gt; Smartling Connector &gt; Context** and update your **Server URL**.
  <br>![](/uploads/versions/03151998-2371-11e6-91ec-6ab89877af7f-1---x----660-447x---.png)
* Go to each of your Profiles under **System &gt; Modules &gt; Smartling Connector &gt; Profiles** and update your project details, including your **User Identifier** and **Token Secret**.
  <br>![](/uploads/versions/9eb7c72a-2370-11e6-8cf8-793dbc00620f-1---x----772-814x---.png)
  <br>


**3)** Go to **System &gt; Modules &gt; Smartling Connector &gt; Callback** and paste in your saved **Callback Token** value.

![](/uploads/versions/content_editor---x----756-593x---.png)

The Sitecore connector should be ready to continue translation.
