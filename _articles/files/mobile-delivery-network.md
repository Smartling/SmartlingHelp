---
layout: article
title: Mobile Delivery Network
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

Smartling's Mobile Delivery Network continuously delivers translations to your mobile apps over the air, eliminating the need to go through the process of submitting updates to app stores just to update your translations. The MDN can work for any Android or iOS app using the standard resource file types: Android XML for Android apps, iOS strings, stringsdict or xliff files for iOS.


## Install the MDN SDKs

Have developers install the Mobile Delivery Network SDK in your [iOS](https://github.com/Smartling/ios-mdn-sdk) or [Android](https://github.com/Smartling/android-mdn-sdk) app.

## Create separate projects for your iOS and Android apps

To deliver your translations via the MDN, each app needs it's own Smartling project. This doesn't mean you have to translate everything twice. You can create a [Leverage Configuration](/knowledge-base/articles/leverage-configuration/) to allow you to share translations between the two projects.

## Name your Resource Files

As you continue to update your app, multiple versions will be installed on mobile devices out in the world, and they will all need to have accurate translations. For this reason, to use the MDN, you need to adopt a naming convention for your resource files to make sure the correct translations are delivered to each version of your app.

