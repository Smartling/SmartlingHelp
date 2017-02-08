---
layout: article
title: Mobile Context
---


Smartling’s mobile SDKs include the ability to interactively or automatically generate and upload screenshots of your mobile app to provide visual context for the strings from your resource files. Using this SDK feature makes the process much easier and precise than trying to add the screenshots “manually”. The SDK is directly integrated with your Smartling project eliminating the need to login to the Smartling dashboard to upload screenshots. And because the SDK is integrated in your app the strings are precisely matched - no need to rely on OCR to find the strings. Finally with the option for full automation using standard QA tools, you can have screenshots generated completely automatically instead of someone using the interactively to navigate to all the apps screens then trigger the screenshot generation.

## Optimize your process

You’ll want to create screenshots as soon as you add strings to your resource file and have uploaded the resource files to Smartling. The string must be in Smartling to be associated with the context. The best practice is to upload the resource file, then give the strings visual context, then authorize the strings for translation. You’ll want to coordinate with your colleagues who are managing the translation process in Smartling if you aren’t sure about the timing, process and workflow. Of course you can add context after authorizing but then there is a chance that the translators will begin work without the visual context.

## Integrate the SDK and turn on the context screenshot feature

Ask your developer to follow the [developer documentation](http://help.smartling.com/developers/#mobile-sdks) for the appropriate SDK to integrate it, turn on the the screenshot feature, and create a build of the app with it turned on.

## Generate screenshots

With the SDK integrated and the feature turned on, you can now start creating screenshots that are uploaded to the configured Smartling project. You can do this interactively with an emulator or by installing the app on device. For the Interactive Mode you’ll need to perform the Smartling specific screenshot gesture (3 finger long press). You’ll see a visual indication that the screenshot was taken similar to taking a regular screenshot on the device. This screenshot is automatically sent to the Smartling project as configured by the SDK. &nbsp;If you integrate for full automation you simply execute your automated QA tests.

## Review the results

Login to the [Smartling dashboard](https://dashboard.smartling.com) and go to the project where the screenshots have been uploaded to review the screenshots. You can always clear or update the context using the Smartling dashboard UI.