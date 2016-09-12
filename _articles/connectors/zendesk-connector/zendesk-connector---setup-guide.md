---
layout: article
title: Zendesk Connector - Setup Guide
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: true
wistia:
  video: false
  id:
related-articles:
  - article:
further-reading:
  - link:
    text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Once your Smartling Administrator has enabled the Zendesk Connector you need to do some basic setup in the Dashboard before you can begin translating.

## Check your language set up in Zendesk

**1)** In your Zendesk Admin dashboard, go to Account and switch to the Localization tab. Make sure all your target translation languages are selected.

![](/uploads/versions/download-11---x----1284-885x---.png)

<div class="info">Zendesk’s list of supported languages may not match up completely with Smartling’s supported language codes. You can match Zendesk’s languages to languages in your Smartling project later in the setup process.</div>

**2)** From your Help Center widget, click General Settings, scroll down to the Languages section and check each language to enable it in your Help Center.

![](/uploads/versions/download-12---x----1021-392x---.png)

<div class="info">
The Help Center languages need to be enabled for your translations to be publicly accessible, but you can begin translating content with these settings disabled. You may want to leave them disabled while you do your translating and enable them when your translated articles are ready.
</div>

## Get a Zendesk API key

In the Zendesk Admin Dashboard, go to **Channels &gt; API**. Under Token Access, click add new token and give your token a name.

![](/uploads/versions/download-13---x----1337-875x---.png)

## Set up the Connector in Smartling

**1)** Create a Connectors project and ask your Smartling Customer Service Manager to enable Zendesk integration for the project.

**2)** From the Smartling dashboard, navigate to **Project Settings &gt; Zendesk** and provide the following information:

* **Subdomain** - for example, if your Zendesk homepage is 'smartling.zendesk.com', your subdomain is 'smartling'.
* **User Email** - email of a Zendesk user with edit permissions in your Help Center.
* **API token** - Your Zendesk API token


![](/uploads/versions/download-14---x----1244-709x---.png)

**3)** Once your API details have been verified, Smartling will populate the Language Configuration section of the page with the languages enabled in your Zendesk configuration. For each language, select a matching language from your Smartling project and click Save.

You can now begin translating your Zendesk content.