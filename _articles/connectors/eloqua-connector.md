---
layout: article
title: Eloqua Connector
Applies to:
  GDN: false
  Application-Resource-Files: false
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

Smartling’s Eloqua Connector lets you use Smartling’s Global Fluency Platform to translate your content, including Emails, Landing Pages and Dynamic Content. Once the Connector is set up, you can download your original content from Eloqua for translation in Smartling. Completed content is automatically exported to Eloqua, or translations at any stage can be exported manually.

## Setup the Connector

**1)** Set up a Connector-type project and ask your Smartling Success Manager to turn on the Eloqua connector for the project.

**2)** Log into the project, navigate to **Eloqua > Translate Content** and click **Login to Eloqua**.

**![](/hc/en-us/article_attachments/211335928/Smartling___Translate_Content__Connector_Project_.png)**

**3)** You will be taken to the Eloqua login page to authorize Smartling to access your account.

![](/hc/en-us/article_attachments/212870368/Eloqua_-_Customer_Login.png)

<div class="info">
While it is not required, it's a good idea to create a new Eloqua user for the Connector to use. That way, content added by the Connector won't be confused with that created by a regular user and the Connector will continue to function if any of your Eloqua users are disabled.
</div>

**4)** Navigate to **Project Settings > Eloqua Settings** and set up your preferences for resubmitting translated content. If you select **Auto**, once you request translation for a piece of content, any further changes you make to the source content in Eloqua will be automatically uploaded to Smartling for translation.

![](/hc/en-us/article_attachments/213021887/Smartling___Eloqua_Settings__Smartling_-_Eloqua_.png)

## Translate content

**1)** In your Smartling project, navigate to **Eloqua > Translate content**.

**2)** Select the content type you want to translate: Email, Landing Page or Dynamic Content.

**3)** Check the items you want translated and click **Request Translation. **Note that if you are translating an Email, the connector will pick up any related Dynamic Content items automatically.

![](/hc/en-us/article_attachments/211470447/Smartling___Translate_Content__Connector_Project_.png)

**4)** Select your target languages and click **Request Translation**.

![](/hc/en-us/article_attachments/211470467/Smartling___Translate_Content__Connector_Project_.png)

Your selected items will be authorized into the default workflow for each language.

## Monitor translation progress

Navigate to **Eloqua > Translation Progress.**

The page displays a list of all Eloqua content authorized for translation. A separate entry is created for each language. When translation of an item is 100% complete it will be automatically exported back to Eloqua. You can also manually export an incomplete translation at any time by checking the item and clicking **Export to Eloqua**.

![](/hc/en-us/article_attachments/211336788/Smartling___Translation_Progress__Connector_Project__and_capture-context-from-webpages---chrome-context-capture-extension_md_-_SmartlingHelp2_-____Documents_WebstormProjects_SmartlingHelp2_.png)

In Eloqua, translated items will have the same filename as the original, but with the language code added to the end.

![](/hc/en-us/article_attachments/211336828/Eloqua_10.png)


## Change Eloqua Users

To change the credentials used to access your Eloqua account, go to **Project Settings > Eloqua Settings** and select **Disconnect from Eloqua**. You can then log in again with a new set of credentials.

![](/hc/en-us/article_attachments/213023227/Smartling___Eloqua_Settings__Smartling_-_Eloqua_.png)