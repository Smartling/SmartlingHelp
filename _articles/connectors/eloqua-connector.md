---
layout: article
title: Eloqua Connector
---


Smartling’s Eloqua Connector lets you use Smartling’s Global Fluency Platform to translate your content, including Emails, Landing Pages and Dynamic Content. Once the Connector is set up, you can download your original content from Eloqua for translation in Smartling. Completed content is automatically exported to Eloqua, or translations at any stage can be exported manually.

## Setup the Connector

**1)** Set up a Connector-type project and ask your Smartling Success Manager to turn on the Eloqua connector for the project.

**2)** Log into the project, navigate to&nbsp;**Eloqua &gt; Translate Content** and click&nbsp;**Login to Eloqua**.

**![](/uploads/versions/smartling---translate-content--connector-project----x----1212-424x---.png)**

**3)**&nbsp;You will be taken to the Eloqua login page to authorize Smartling to access your account.

![](/uploads/versions/eloqua---customer-login---x----1490-1210x---.png)

<div class="info">While it is not required, it's a good idea to create a new Eloqua user for the Connector to use. That way, content added by the Connector won't be confused with that created by a regular user and the Connector will continue to function if any of your Eloqua users are disabled.</div>

**4)** Navigate to&nbsp;**Project Settings &gt; Eloqua Settings** and set up your preferences for resubmitting translated content. If you select&nbsp;**Auto**, once you request translation for a piece of content, any further changes you make to the source content in Eloqua will be automatically uploaded to Smartling for translation.

![](/uploads/versions/smartling---eloqua-settings--smartling---eloqua----x----1602-1126x---.png)

## Translate content

**1)** In your Smartling project, navigate to&nbsp;**Eloqua &gt; Translate content**.

**2)** Select the content type you want to translate: Email, Landing Page or Dynamic Content.

**3)** Check the items you want translated and click&nbsp;**Request Translation.&nbsp;**Note that if you are translating an Email, the connector will pick up any related Dynamic Content items automatically.

![](/uploads/versions/smartling---translate-content--connector-project--1---x----1255-661x---.png)

**4)**&nbsp;Select your target languages and click&nbsp;**Request Translation**.

![](/uploads/versions/smartling---translate-content--connector-project--2---x----573-294x---.png)

Your selected items will be authorized into the default workflow for each language.

## Monitor translation progress

Navigate to&nbsp;**Eloqua &gt; Translation Progress.**

The page displays a list of all Eloqua content authorized for translation. A separate entry is created for each language. When translation of an item is 100% complete it will be automatically exported back to Eloqua. You can also manually export an incomplete translation at any time by checking the item and clicking&nbsp;**Export to Eloqua**.

![](/uploads/versions/smartling---translation-progress--connector-project--and-capture-context-from-webpages---chrome-context-capture-extension-md---smartlinghelp2------documents-webstormprojects-smartlinghelp2----x----1258-521x---.png)

In Eloqua, translated items will have the same filename as the original, but with the language code added to the end.

![](/uploads/versions/eloqua-10---x----1163-751x---.png)

## Change Eloqua Users

To change the credentials used to access your Eloqua account, go to&nbsp;**Project Settings &gt; Eloqua Settings** and select&nbsp;**Disconnect from Eloqua**. You can then log in again with a new set of credentials.

![](/uploads/versions/smartling---eloqua-settings--smartling---eloqua----x----1602-1126x---.png)