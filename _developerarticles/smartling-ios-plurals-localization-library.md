---
layout: article
title: Smartling iOS Plurals Localization Library
categories:
  - files
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:

  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Smartling has built an open source library to support plurals for iOS applications. The following instructions walk you through the process of integrating the library and plurals with your application.

> Since we developed this library, Apple released the [Stringsdict format](/developers/files/iOS-stringsdict) for handling localization rules. You may want to investigate this format to see if it fits your project's requirements.

## Background

While iOS files do not normally support plurals, Smartling has extended the format by developing an [open source library](https://github.com/Smartling/ios-i18n) to accommodate plurals. For more information about plural file formats in Smartling, see [About Plurals](https://smartling.zendesk.com/hc/en-us/articles/201296893-About-Plurals-Global-Delivery-Network).

## Step by Step Guide

**1)** Download and Integrate theSmartling iOS Library into your Application.

Download the latest library from the Smartling github page and follow the instructions here: [https://github.com/Smartling/ios-i18n#installation](https://github.com/Smartling/ios-i18n#installation "Link: https://github.com/Smartling/ios-i18n#installation")

Please review the documentation on github for details on required project build configuration settings.

**2)** Update Your String Files With Plural Indicators

To detect plurals, you must append a key with `##{pluralTag}` where `pluralTag` is `zero`, `one`, `two`, `few`, `many` and `other`. For example, for an English-based strings file, a sample plural set of strings looks like:  

~~~
/* Number of songs from search results */  
"%d songs found##{one}" = "One song found";  
"%d songs found##{other}" = "%d songs found";  
~~~

The plural tags depend on the source language and you should consult the [CLDR plural rules](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html "Link: http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html") to determine which tags to use for your source locale.

Like other file formats that support plurals, keep the various plural forms for a key together within the file. This ensures proper linkage when Smartling provides translations.

**Note**: You can add your plurals strings to any file you have already built manually or append them to a genstrings-created file. 

**3)** Replace Calls of NSLocalizedString with Calls to SLPluralizedString

All the newly defined plural strings need to be invoked with the `SLPluralizedString` class from the Smartling i18 framework. `SLPluralizedString` takes one additional parameter which is the variable used to determine the pluralTag at runtime, and the library determines which pluralTag should be used based on the locale.

**4)** Have Your Strings Translated 

Much like your source strings file, the files for your target languages need to have the correct pluralTags according to the [CLDR plural rules](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html). Your best bet to get this right is to upload the file to Smartling where your translators (or ours if you don’t have your own), will complete the translations. Don’t worry, Smartling insists that it has all the correct forms plural forms. Once translated, simply copy the files back into your application as you normally would. (The files are named the same, are in language subfolders such as `en.lproj/` or `ru.lproj/`)

Your localized strings file (for example, Russian) looks something like this:  

~~~
/* Number of songs from search results */  
"%d songs found##{one}" = "Найдена одна песня";  
"%d songs found##{few}" = "Найдено %d песни";  
"%d songs found##{many}" = "Найдено %d песен";  
"%d songs found##{other}" = "Найдено %d песен";
~~~

**5)** Migrate from Hard-Coded Logic with Unique Keys

If you already have hard-coded plural logic into your application with unique strings, you may need to adjust the keys that you are using and migrate from `NSLocalizedString` to `SLPluralizedString`. For example, if you have keys, “songs_found_singular” and “songs_found_plural” with logic in your code to switch between the two, you will need to normalize them to “songs_found##{one}” and “songs_found##{other}” and use `SLPluralizedString` with “songs_found” (it will pick the right one for you).

**6)** Tweet Us  

We want to know your thoughts on the library. Tweet us (@Smartling).