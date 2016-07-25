---
layout: article
title: Zendesk Connector Setup Guide
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: true
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


Smartling’s Zendesk Connector lets you use Smartling’s Global Fluency Platform to translate your content. The Zendesk Connector allows you to translate Articles, Sections, Categories from your knowledge base, and [Dynamic Content](https://support.zendesk.com/hc/en-us/articles/203663356) for your support tickets. Once the Connector is set up, you can download your original content from Zendesk for translation in Smartling. Translated content is automatically exported to the correct language in your Help Center, or translations at any stage can be exported manually.

For knowledge base items, the Zendesk Connector also creates context for translators.

<div><strong>Note:</strong> To take advantage of the Connector, you must be able to utilize Zendesk&rsquo;s localization features - currently restricted to &lsquo;Plus&rsquo; and &lsquo;Enterprise&rsquo; accounts.</div>

<div>&nbsp;</div>

**Check your language set up in Zendesk**

**(1)** In your Zendesk Admin dashboard, go to **Account** and switch to the **Localization** tab. Make sure all your target translation languages are selected.

![](/uploads/versions/zendesk-connector-2---x----1284-885x---.png)

**Note:** Zendesk’s list of supported languages may not match up completely with Smartling’s supported language codes. You can match Zendesk’s languages to languages in your Smartling project later in the setup process.

**(2)** From your Help Center widget, click **General Settings**, scroll down to the **Languages** section and check each language to enable it in your Help Center.

![](/uploads/versions/zendesk-connector-3---x----1021-392x---.png)

**Note:** The Help Center languages need to be enabled for your translations to be publicly accessible, but you can begin translating content with these settings disabled.

**Get a Zendesk API key**

In the Zendesk Admin Dashboard, go to **Channels &gt; API.** Under **Token Access** click **add new token** and give your token a name.

![](/uploads/versions/zendesk-connector-4---x----1337-875x---.png)

**Set up the Connector in Smartling:**

**(1)** Create a Connectors project and ask your Smartling Customer Service Manager to enable Zendesk integration for the project.

**(2)** From the Smartling dashboard, navigate to **Project Settings &gt; Zendesk** and provide the following information:

* **Subdomain** - for example, if your Zendesk homepage is 'smartling.zendesk.com', your subdomain is 'smartling'.
* **User Email**- email of a Zendesk user with edit permissions in your Help Center.
* **API token** - Your Zendesk API token


![](/uploads/versions/zendesk-connector-5---x----1244-709x---.png)

**(3)&nbsp;**Once your API details have been verified, Smartling will populate the Language Configuration section of the page with the languages enabled in your Zendesk configuration. For each language, select a matching language from your Smartling project and click **Save**.

![](/uploads/versions/zendesk-connector-6---x----1302-595x---.png)

You can now begin translating your Zendesk content.