---
layout: article
title: Zendesk Connector - Setup Guide
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
wistia:
  video: false
  id:
related-articles:
  - article:
further-reading:
  - link:
    text:
---

Once your Smartling Administrator has enabled the Zendesk Connector you need to do some basic setup in the Dashboard before you can begin translating.

##Check your language set up in Zendesk

**(1)** In your Zendesk Admin dashboard, go to Account and switch to the Localization tab. Make sure all your target translation languages are selected.

**Note:** Zendesk’s list of supported languages may not match up completely with Smartling’s supported language codes. You can match Zendesk’s languages to languages in your Smartling project later in the setup process.

**(2)** From your Help Center widget, click General Settings, scroll down to the Languages section and check each language to enable it in your Help Center.

**Note:** The Help Center languages need to be enabled for your translations to be publicly accessible, but you can begin translating content with these settings disabled. 

##Get a Zendesk API key

In the Zendesk Admin Dashboard, go to Channels > API. Under Token Access, click add new token and give your token a name.

##Set up the Connector in Smartling:

**(1)** Create a Connectors project and ask your Smartling Customer Service Manager to enable Zendesk integration for the project.

**(2)** From the Smartling dashboard, navigate to Project Settings > Zendesk and provide the following information: 

* **Subdomain** - for example, if your Zendesk homepage is 'smartling.zendesk.com', your subdomain is 'smartling'.
* **User Email** - email of a Zendesk user with edit permissions in your Help Center.
* **API token** - Your Zendesk API token


**(3)** Once your API details have been verified, Smartling will populate the Language Configuration section of the page with the languages enabled in your Zendesk configuration. For each language, select a matching language from your Smartling project and click Save.

You can now begin translating your Zendesk content.