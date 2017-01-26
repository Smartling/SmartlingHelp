---
title: Automate upload of screenshots for context
layout: blogpost
blog-author: Katya Kameneva
categories:
  - tips
---


We all understand the importance of visual context being available to linguists, and Smartling users do a good job of providing screenshots for their mobile and desktop applications.

But can this activity be automated? On one hand, there is a set of APIs available to submit context to Smartling platform. But integrating with APIs requires an involvement of the engineering team, and we know sometimes it’s hard to get their attention and time.

Let’s see how the simple process of uploading images to Smartling can be automated using standard tools of your MacOS.

We will create &nbsp;a folder that will serve as a portal between your computer and Smartling project. Image files dropped into the folder will be sent to Smartling as context images.

1. Create a folder that will accept screenshots for the specific project in Smartling.![](/uploads/versions/1q-xx2-gzeovo3db-oerbjw---x----1600-995x---.png)

2. Download this&nbsp;[file](/_posts/Send_Screenshots_to_Smartling.zip), unzip and open with Automator application.&nbsp;![](/uploads/versions/automator-context---x----2492-1656x---.png)

3. You need to obtain userIdentifier, userSecret and projectId from Smartling. Login to Smartling web interface. Navigate to API &gt; v 2.0 and create new access token for the selected project.![](/uploads/versions/1epkc3iaoqfemqcazlb3eeg---x----1600-222x---.png)Copy and paste userIdentifier, userSecret and project id from this page in the script. Select the folder you created

4. &nbsp;

5. &nbsp;

6. &nbsp;