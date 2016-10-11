---
title: 'iOS Stringsdict'
layout: supportedfiletype
extension: '.stringsdict'
smartling_identifier: 'stringsdict'
download_sample: ''
resources: 
  - title: Stringsdict File Format
    link: 'https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/StringsdictFileFormat/StringsdictFileFormat.html'
  - title: Localizing your App
    link: 'https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LocalizingYourApp/LocalizingYourApp.html'
  - title: Smartling Tech Blog on Stringsdict
    link: 'https://tech.smartling.com/localizing-your-ios-os-x-apps-the-right-way-stringsdict-to-the-rescue-1b90082c00ae#.s0zvilagi'
---

Smartling supports iOS .stringsdict format for plural sensitive content localization.

Note that Xcode’s XLIFF localization feature does not include plural strings. If your XLIFF-localized application includes plural strings, you will need to separately upload the .stringsdict file along with your XLIFF file.

This XML file format is used to capture the plural sensitive strings that will be localized.

Currently Smartling does not support gender-sensitive strings.

## Plural Standards

Smartling does not expect English source files with “zero” form source strings. Smartling complies strictly with CLDR which defines English as having two forms; “one” (singular) and “other” (plural). If you upload a source file with Zero form strings, the zero plural form will not be shown in the Smartling dashboard.

## Complex Plurals

Complex plural strings (a.k.a. multiplurals) are supported, but Smartling advises against creating such strings which are difficult to translate correctly from a linguistic perspective. If a multiplural string is in your .stringsdict Smartling will capture two separate strings, but they will not be associated with each other. We advise you to add instructions and visual context hints to help the translators understand how the multiplural string is actually used in your application.

No file API directives are supported.

## Standard Placeholder Format

{% include standard_placeholders.md %} 

By default, Smartling recognizes ios-style placeholders in iOS Stringsdict files.

## Directives

No integration directives are supported for Stringsdict files.