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

Smartling's Mobile Delivery Network continuously delivers translations to your mobile apps over the air, eliminating the need to go through the process of submitting updates to app stores just to update your translations. The MDN can work for any Android or iOS app using the standard resource file types: Android XML for Android apps, iOS strings and stringsdict files for iOS. The Mobile Delivery Network depends on using these native app formats. Apple provides developer tools for [automatically generating strings files](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html). To get started with using the MDN, you need to do three things: Create separate projects for your iOS and Android apps, make sure your resource files follow the required naming convention, and install the MDN SDKs in your app source code.

## Create separate projects for your iOS and Android apps

To deliver your translations via the MDN, each app needs it's own Smartling project. This doesn't mean you have to translate everything twice. You can create a [Leverage Configuration](/knowledge-base/articles/leverage-configuration/) to allow you to share translations between the two projects.

## Name your resource files

As you continue to update your app, multiple versions will be installed on mobile devices out in the world, and they will all need to have accurate translations. For this reason, to use the MDN, you need to follow a Smartling naming convention for your resource files to make sure the correct translations are delivered to each version of your app. All you need to do is include your version number directly after the root folder, giving you a URI like: `/1.0.0/strings.xml`.

Version  | Android File URIs  | iOS File URIs
---------| -------------------| -------------|
1.0.0    | `/1.0.0/strings.xml`<br >`/1.0.0/arrays.xml`<br >`/1.0.0/foo.xml` | `/1.0.0/Localizable.strings`<br >`/1.0.0/Localizable.stringsdict`<br >`/1.0.0/Foo.strings`
1.2.0    | `/1.2.0/strings.xml`<br >`/1.2.0/arrays.xml`<br >`/1.2.0/foo.xml` | `/1.2.0/Localizable.strings`<br >`/1.2.0/Localizable.stringsdict`<br >`/1.2.0/Foo.strings`

## Install the MDN SDKs

Have developers install the Mobile Delivery Network SDK in your [iOS](https://github.com/Smartling/ios-mdn-sdk) or [Android](https://github.com/Smartling/android-mdn-sdk) app.

If your app is already launched, you will need to create a new store version to start using the MDN. From that version onward, your app will regularly check Smartling for new translations in the correct version. Any updates made in Smartling will automatically propagate to all copies of your app without needing to create a new version, as long as you continue to follow the correct naming conventions for your resource files.

## Frequently Asked Questions

### How large is the SDK?

The iOS SDK adds less than 750kb to your iOS application and 300kb to your Android application.

### How much data is used by the MDN, and can the user control data use for WiFi and cellular networks?

We strive to minimize network data consumption and have taken many steps to minimize the amount of data transferred between MDN and the user’s device. An update check sends approximately 250 bytes. The data returned if the user already has the latest updates is approximately 300 bytes. The size of an actual update is dependent on the amount of strings contained your project. We deliver strings GZip compressed and encrypted, reducing the payload size. Additionally, a user’s device will only download strings for their current locale.


The MDN SDK has no user facing controls. However, it will obey the settings for your application in system preferences. For example, if the user has disabled cellular data for your application, our SDK will only check for updates while on a WiFi network.

### When are new translations delivered to my users?

The SDKs check for updates from the MDN under any the following circumstances as long as an appropriate network connection is present:
1. Your App is launched from a cold state, OR
2. Your user changes their device’s locale, OR
3. The SDK determines the apps cached translations are stale.

### What is a Monthly Active User? How does Smartling measure it?

A user is a uniquely identified by device and application combination. For a given MDN enabled application, The Monthly Active User metric tracks how many devices check for content updates on the MDN in a given month. Instances of the application that are running in the original (development) language are excluded from this count. 

**Example:**
You have an Application installed on 5,000,000 devices. In a calendar month, 4,000,000 users interact with your application. Of those 4,000,000 interactions, 1,500,000 users are using the translated version of your application. Your Monthly Active User count is 1,500,000.