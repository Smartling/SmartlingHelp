---
layout: article
title: AEM Classic Connector - Upgrade To Version 3.5.0
wistia:
  video: false
  id:
---


Version 3.5.0 of the AEM Classic Connector switches to using version 2 of Smartling's API. After upgrading 
you will need to provide new credentials in each of your Smartling configurations for the Connector to continue working.

**1)** [Create new access tokens](http://docs.smartling.com/pages/API/v2/Authentication/). You can choose to create a token 
with access to your whole Smartling account or a token with access only to one project. If you choose this second option, 
and integrate with more than one Smartling project, you will need to create multiple tokens. Save your User Id and Token Secret for each token.

**2)** Open your [Smartling Project Configurations](https://support.smartling.com/hc/en-us/articles/201428916#SmartlingProject).
For each configuration, under General Settings add your new token credentials.

![](/uploads/aem-classic-connector--config-api-v2.png)

**3)** Click **Test Connection** to verify that you can successfully connect to your Smartling Project.