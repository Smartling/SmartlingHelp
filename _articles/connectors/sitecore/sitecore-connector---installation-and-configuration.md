---
layout: article
title: Sitecore Connector - Installation and Configuration
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


## Installing Sitecore Connecter Module

**1)** Create a new database, and at the SQL Server, execute the script **Sitecore_Data.sql** (can be found in %website root%/sitecore modules/Shell/Smartling.Connector folder).

> Don't forget to update first line of the script (USE [%**your database name**%]).

**2)** Add new conneciton string to /Website/App_Config/ConnectionStrings.config, name should be "SitecoreLocalization", here's the example:

~~~
<add name="SitecoreLocalization" connectionString="user id=sa;password=Password12345;Data Source=.\SQLEXPRESS;Database=SitecoreLocalization_Data"/>
~~~

**3)** Go to the Sitecore Desktop, open Installation Wizard, and upload and then install the **Smartling.Connector.ver.[version].zip** package.

![](/uploads/versions/sitecore_install_wizard---x----465-512x---.jpg)

**4)** Add the following to the Web.config section:

~~~
<appender name="SmartlingLogFileAppender" type="log4net.Appender.SitecoreLogFileAppender, Sitecore.Logging">
&nbsp; &nbsp; <file value="$(dataFolder)/logs/SitecoreLocalization.log.{date}.txt" />
&nbsp; &nbsp; <appendToFile value="true" />
&nbsp; &nbsp; <layout type="log4net.Layout.PatternLayout"><conversionPattern value="%4t %d{ABSOLUTE} %-5p %m%n" />
&nbsp; &nbsp; </layout>
</appender>
<logger name="Smartling.Connector.Diagnostics.SmartlingLogger" additivity="false">
&nbsp; &nbsp; <level value="INFO" />
&nbsp; &nbsp; <appender-ref ref="SmartlingLogFileAppender" />
</logger>
~~~

## Configuring Sitecore Connector Module

Modify the following settings to configure Sitecore for use with Smartling.

### Profiles

Under the main settings item, **Profiles** contains one or more profiles that you can use for different content tree nodes, controlled by the **Source Path** setting.

![](/uploads/versions/sitecore_profiles---x----180-235x---.jpg)

Each profile should also contain one or more locales (target languages), that you can add using insert options.

![](/hc/en-us/article_attachments/200580013/sitecore_content.jpg)

**Target Path** and **Smartling Locale** fields are optional and can be left empty.**Smartling Locale** field allows you to override the Sitecore languages code when sent to Smartling.

### Retrieval Type

You can also specify how Smartling retrieves and displays the content.

![](/hc/en-us/article_attachments/200580043/sitecore_retrieval_type.jpg)
<br>The following options are available:

* **Published** - Replace the original string with translations that are reviewed and authorized for publishing
* **Pending** - Translator finished translation, but the translation is waiting for authorization from Editor and Reviewer roles
* **Pseudo** - Replace characters on the fly. For example, "Translate it" can be converted to something like this "~Tpa~nc~la~те ит~"
  <br>This is useful for testing and faster than machine translation.


### Callback Domain

In the **Callback Domain** field, ensure that you specify a valid URL. It must be accessible from the Internet, for example:

![](/hc/en-us/article_attachments/201141686/sitecore_domain.jpg)

### Translatable Fields

**Translatable Fields** contains commons field types.
<br>If you will translate **Dictionary** then you should add the **memo** field type to this list.

![](/hc/en-us/article_attachments/200529598/sitecore_target_state.jpg)

### Target Workflow States

By default, **Target Workflow States** contains a workflow step for **Sample Workflow**.
<br>If your items use another workflow, then you should add this step.

![](/hc/en-us/article_attachments/201144346/sitecore_target_wf.jpg)

### Target Languages

Use **Target Languages** to specify the languages to which you want to translate your content.

![](/hc/en-us/article_attachments/201144366/sitecore_target_langs.jpg)

### Excluding Fields from Translation

By default, the connector will not submit all Shared fields with textual information for translation. You can skip some fields by selecting **Exclude from translation** on the field item.

![](/hc/en-us/article_attachments/201282763/sitecore_excluding_fields.jpg)

Or skip by field name.

![](/hc/en-us/article_attachments/201144376/sitecore_excluding_2.jpg)

### Auto-Authorize

Check the&nbsp;**Auto Authorize Content** box to automatically Authorize your content into the default workflow for each language in the Smartling Dashboard, rather than sending it to your Awaiting Authorization queue.

### Test Connection

Browse to module settings (/sitecore/system/Modules/Smartling Connector) and verify your connection by clicking **Test Connection**.

![](/hc/en-us/article_attachments/200580313/sitecore_testconnection.jpg)

### Auto-Authorize

Check the Auto Authorize Content box to automatically Authorize your content into the default workflow for each language in the Smartling Dashboard, rather than sending it to your Awaiting Authorization queue.

## Installing Sitecore Remote Connector (Optional)

Go to Sitecore Desktop, and install **Smartling.Connector.Remove.ver.[version].zip** package.

## Configuring Sitecore Remote Connector (Optional)

**1)** Open Sitecore Content Editor and browse to **/sitecore/system/Modules/Smartling Connector/Context** . It contains the following settings:

~~~
\*   \*\*Server Url\*\* - the remote module uses this URL for requesting HTML and resources such as CSS\JS\Img. In general, it should contain the domain of your site. Please don't use 'localhost' as the Server Url. If you test the connector on a local environment, then register the name in a hosts file and use it in the browser.
\*   \*\*Impersonated User\*\* - User account that used for getting HTML. If you didn't provide an user account, then Sitecore uses anonymous access.
\*   \*\*Enabled\*\* - You can enable\disable Context for translation

    ![](/hc/en-us/article_attachments/201286433/sitecore_context.jpg) 2) Browse to each of your settings profiles (items under \*\*/sitecore/system/Modules/Smartling Connector/Profiles\*\*). 3) Click \*\*Connect\*\*, and the remote module will use the \*\*Api Key\*\* + \*\*Project Id\*\* for connecting to the Smartling context Service.
~~~

![](/hc/en-us/article_attachments/201286463/sitecore_connect.jpg)

## Installing Extended Support for the General Link Field (Optional)

This package allows you to translate the **Link Description** property of **General Link**. By default, the connector doesn't send it for translation.

![](/hc/en-us/article_attachments/200493566/sitecore_general.jpg)

**1)** Go to Sitecore desktop.

**2)** Install the **Smartling.Connector.LinkFieldTranslator.ver.[version].zip** package.

## Configuring Translation of General Link

In general, the **LinkFieldTranslator** package doesn't require additional configuration.

![](/hc/en-us/article_attachments/200493566/sitecore_general.jpg)

## Uninstalling Sitecore Connector Module

**1)** Remove the following sections from Web.config:

~~~
<appender name="SmartlingLogFileAppender" type="log4net.Appender.SitecoreLogFileAppender, Sitecore.Logging">
&nbsp; <file value="$(dataFolder)/logs/SitecoreLocalization.log.{date}.txt" />
&nbsp; <appendToFile value="true" />
&nbsp; <layout type="log4net.Layout.PatternLayout">
&nbsp; &nbsp; <conversionPattern value="%4t %d{ABSOLUTE} %-5p %m%n" />
&nbsp; </layout>
</appender>
<logger name="SitecoreLocalization.Module.Diagnostics.SmartlingLogger" additivity="false">
&nbsp; <level value="INFO" />
&nbsp; <appender-ref ref="SmartlingLogFileAppender" />
</logger>
~~~

**2)** Remove *SitecoreLocalization _connection* string from /**Website/AppConfig/ConnectionStrings.config**.

**3)** Remove the module configuration file: **/Website/App_Config/Include/SitecoreLocalization.config**.

**4)** Remove the **/Website/sitecore modules/Shell/SitecoreLocalization** folder.

**5)** Remove items (and subitems) at the following locations:

**Master Database**

~~~
\sitecore\system\Modules\Smartling Connector\sitecore\system\Settings\Validation Rules\Field Rules\System\SitecoreLocalization Api Key\sitecore\system\Settings\Validation Rules\Field Rules\System\SitecoreLocalization Api Url\sitecore\system\Settings\Validation Rules\Field Rules\System\SitecoreLocalization Project Id\sitecore\templates\User Defined\SitecoreLocalization
~~~

**Core Database**

~~~
\sitecore\content\Applications\Translation Status\sitecore\content\Applications\Content Editor\Ribbons\Chunks\Translate\Translate\sitecore\content\Applications\Content Editor\Ribbons\Chunks\Translate\Translate\Run Agents\sitecore\content\Applications\Content Editor\Ribbons\Contextual Ribbons\SitecoreLocalization Settings\sitecore\content\Documents and settings\All users\Start menu\Left\Smartling Translate.item\sitecore\content\Documents and settings\All users\Start menu\Left\Smartling Status
~~~