---
layout: article
title: In-app review of your Android app
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: true
  CMS-Connectors: false
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


![medium](/uploads/versions/screenshot-20160427-184502---x----1080-1920x---.png)

With Smartling's In-App Review feature, you can review and edit your UI strings directly from inside your App, either on a simulator or a real device.

> Before you get started, you need to have the Smartling In-App Review Framework installed for your project. Ask your project manager if In-App Review is enabled for your app.

## Set up your Review Environment

**1)** Open up the Smartling Actions Panel with a 2-second press with three fingers (alt+ click & hold in an iOS simulator).

**2)** Log in with your Smartling credentials.

![medium](/uploads/versions/screenshot-20160318-160244---x----1080-1920x---.png)

**3)** Select the language you want to review.

![medium](/uploads/versions/screenshot-20160425-182458---x----1080-1920x---.png)

**4)** Select the Workflow step you want to review. This will affect the text you see in the App. Strings in your selected step and published strings will be displayed in your selected language. All other strings will be displayed in your source language.

**5)** The screen will show when translated strings in your App were last updated. To download the latest translations from Smartling click **Get Latest Text**.

**6)** Click Close to begin reviewing.

## Editing in Context

Once you have set up your review environment, you can use your app normally and edit your strings in context. A long press on any string will bring up the editor for that string. A long press elsewhere on the screen will bring up an editor for all strings in the current view and its subviews.

![medium](/uploads/versions/slack---x----314-564x---.png)

From the editor, you can:

* Directly edit the text of a string. Take care when making edits, as there is currently no undo function.
* Click **Accept** to advance the string to the next workflow step.
* Click **Reject** to return the string to the previous workflow step. This action will open the issue dialog. Select an issue type and give a reason for rejecting the string. Reject will only be available if the workflow step [allows reviewers to reject strings](/knowledge-base/articles/create-and-customize-a-workflow/#customize-a-workflow).
  <br>![medium](/uploads/versions/screenshot-20160427-184657---x----1080-1920x---.png)

## Placeholders

Placeholders can not currently be edited in-app.

![medium](/uploads/versions/slack-1---x----351-194x---.png)

## Submit your Review

Any in-context edits only affect your local device until you submit your edits to Smartling. To submit your changes, open the Smartling Actions Panel with a 2-second, three-finger press and select **Save My Changes**.

![medium](/uploads/versions/screenshot-20160425-182458-1---x----1080-1920x---.png)