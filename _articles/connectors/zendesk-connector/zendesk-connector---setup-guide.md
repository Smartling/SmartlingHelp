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

## Hide localized Help Center

If the process of translating your Help Center takes a little time, you may not wish to launch your translated Help Center until all your content is ready. In order to push translated content back to Zendesk, each language must be enabled in your Zendesk settings. However, you can employ a simple workaround to hide this content from users until you are ready by hiding languages in the language selector.

**1)** From your Zendesk dashboard, navigate to **General > Customize design**. 

**2)** In the sidebar, click **Edit theme**.

**3)** Click the **JS** tab, scroll to the bottom of the editor, and add the following code:

~~~javascript
// Hide particular language in language selector
var hideLanguageLinkByLocale = function(elements, localeId){
    if(elements.length) {
        elements.each(function(){
            var link = $(this);
            var href = link.prop("href");
                if(new RegExp("/hc/change_language/" + localeId).test(href)){
                    link.hide();
                }
        });
    }
}
~~~

This defines a Javascript function to hide any language from your language selector. For each language you want to hide, add a further line:

~~~
hideLanguageLinkByLocale($(".dropdown.language-selector a"), "{zendesk locale code}");

//examples
hideLanguageLinkByLocale($(".dropdown.language-selector a"), "es");
hideLanguageLinkByLocale($(".dropdown.language-selector a"), "fr-fr");
~~~

You can work out your zendesk locale codes by checking the URLs for your translated sites. For example, looking at the URL 'https://smartlinghotels.zendesk.com/hc/**en-us**/articles/218339888', 'en-us' is the locale code.

This script will not prevent your translated articles from being published - and you can still access your articles directly, by browsing to a source article and manually changing the locale code in your browser's address bar - but the languages will not be available in your language selector so users will not be able to browse to the translated articles.

When you are ready to launch your translated sites, simply delete the `hideLanguageLinkByLocale` line for each language you are ready to launch.
