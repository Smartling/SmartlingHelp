---
layout: article
title: Sitecore Connector - Upgrading to Version 1.4x
---


We made some key changes to the Sitecore Connector in version 1.4 so to upgrade from an earlier version, you will need to follow some additional steps.

**1)** You need to update your database schema for version 1.4. Connect to your database via your preferred tool and run the following script:

~~~sql
ALTER TABLE [dbo].[TranslationQueue] ADD [LastError] [nvarchar](500) NULL
GO
~~~

If you don't know your database endpoint, you can find it in your Sitecore configuration at **/Website/App_Config/ConnectionStrings.config**. The database endpoint is in the **SitecoreLocalization** entry.

**2)** Install 3 packages:
**2.1)** **Smartling.Connector.ver.1.4.0.0.zip** - Skip all items when installer will ask you. In this case you will preserve your Smartling configuration
**2.2)** **Smartling.Connector.Remote.ver.1.4.0.0.zip** - Restore value of `Server Url` property in `/sitecore/system/Modules/Smartling Connector/Context` right after installation
**2.3)** **Smartling.Connector.LinkFieldTranslator.ver.1.4.0.0.zip**

The Sitecore connector should be ready to continue translation.
