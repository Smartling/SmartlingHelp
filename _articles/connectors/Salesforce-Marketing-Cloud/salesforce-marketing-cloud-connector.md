---
layout: section
title: Salesforce Marketing Cloud
---


Smartling’s Salesforce Marketing Cloud (SFMC) connector helps you to quickly and easily translate email content in Smartling. You can download original content from SFMC for translation in Smartling. Completed content is automatically exported back to SFMC. Or translations can be exported manually at any stage.

## Translate Content

1) In your Smartling project, navigate to SalesForce Marketing Cloud

2) Smartling supports assets created in Content Builder or Emails, you can toggle between the two using tabs in the top right of the page. Make sure you’re in the correct section.

3) Check the items you want translated, and click Request Translation.

![](/uploads/versions/smartling---translate-content--salesforce-marketing-cloud-connector-test--and-eloqua-connector---x----1435-777x---.png)

4) Select your target languages and click Request Translation.

![](/uploads/versions/smartling---translate-content--salesforce-marketing-cloud-connector-test----x----576-312x---.png)

Your selected items will be authorized into the default workflow for each language.

## Monitor Translation Progress

![](/uploads/versions/smartling---translate-content--salesforce-marketing-cloud-connector-test--and-update-smartling-help---x----1434-775x---.png)

Click on an asset for a detailed view of progress in multiple languages.

![](/uploads/versions/smartling---translate-content--salesforce-marketing-cloud-connector-test--and-eloqua-connector---x----1436-765x---.png)

Completed translations are returned to SFMC in the same folder as the original, with the same filename, but with a language code added to the end.

## Configure your SFMC account with Smartling

It's necessary to connect your SFMC account to Smartling by creating an API integration in SFMC and entering those credentials into the Smartling project.

Follow Salesforce's instructions for creating an API integration, we've summarized the instructions below. https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-api-key.htm

1) Navigate to the [app center](https://appcenter-auth.s1.marketingcloudapps.com/)&nbsp;and login or create an account

2) Select Create New App then API Integration

3) Select unique name and package, this doesn't matter for Smartling

4) Click the Link to Account button and set it up with your SFMC account

5) Now you should be in the Data Access tab. Under Channels enable Read/Send/Write under Data &gt; Data Extensions enable Read/Write

6) After you've created the app click on it so you should see the details page with Client ID and Client Secret etc.

7) In your new Salesforce Marketing Cloud project in Smartling go to Project Settings &gt; SF Marketing Cloud Settings and then enter in the Client ID and Client Secret. Click Save and you're done!