---
layout: article
title: Plurals
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
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
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Many languages have multiple ways to express a [plural form](http://www.unicode.org/cldr/charts/27/supplemental/language_plural_rules.html).

For example, English (Canada) has two plural forms:

1.  For 1 item

2.  For 0, 2, 3, 4, 5, 6... items

Whereas, Belarusian has three plural forms:

1.  For 1, 21, 31, 41, 51, 61... items

2.  For 2, 3, 4, 22, 23, 24... items

3.  For 0, 5, 6, 7, 8, 9... items

Smartling allows you to specify that a string is plural sensitive and that it requires translation to a number of plural forms (depending on the target languages).

Smartling currently supports plural forms in YAML, Gettext, QT TS Linguist, Android XML and iOS files.

## Add translations for plural forms

1) [Upload]() the file.

2) The source strings appear at Translations > In progress.  

![](/hc/en-us/article_attachments/200541348/plurals_list_view.jpg)

3) The “1” icon indicates that the string is plural sensitive. Click to view all the plural forms in the original language.

4) For the plural sensitive string you want to modify, click **Edit**.

5) The Translation Interface provides the correct number of plural forms depending on the target language.![](https://lh4.googleusercontent.com/Uwl241PUQa7txSgFmYeQgZTK7pOjlew2Nt8sCGsw0IwIPSx7lb4zzARIVW8Az5GiX9a3K_QCbAvB7pPcClWg2t2yjts40UhQ7LZMPVY5cCMnMVQSZmhUo0mXZQ)

6) Add a translation for each form and click **Save**.

7) You can copy down the content in the translation box, by clicking **Copy** this translation down to the rest of the plural forms.

8) To save the translation, you must provide a translation for each plural form in the target language (Smartling does not allow partial translations).![](https://lh3.googleusercontent.com/KOJfCXqHFEWjqnkrANGVInJLfoC1GGl_oA2GXm6qOXml9HNhpX-GH9i10UKUzhBZ09ozH78Be6WsiTzo1c0Ml3ahTqtZ6MQl-A1AUCpNLUtB-mvbNGyA3tW05Q)The Prior Versions tab of the Translation Interface displays history for the selected form.

You can now download the file that includes the translated forms.

## Workflow

All forms of the translation move through workflow together. For example, if an editor rejects the translation because there is a problem with one plural form, they reject all plural forms for the translation. A translator only needs to modify the form that requires re-translation, but all plural forms move through the workflow together.

Similarly, [issues]() raised for the translation of plural sensitive strings apply to all the forms. If the issue only applies to a specific form, the text of the issue should specify the plural form.

When you download the translated file, the number of plural forms in the file depends on the target language and file format.

## Plurals for Gettext Files

Plural sensitive forms for Gettext files are indicated by the source .pot file having a string marked 'msgid_plural', for example:

~~~
msgid “added %d item to cart”
msgid_plural “added %d items to cart”
msgstr[0] “”
msgstr[1] “”
~~~

Once translated, the downloaded .po file will have the plural forms needed for the target language and the appropriate language-specific headers. Smartling returns the PluralForm header in the top of the file (if it existed in the original file) that contains the correct plurals rules for that locale.

> Gettext files have limited support for some locales. For more information on Gettext plural forms, see: [Additional functions for plural forms](http://www.gnu.org/savannah-checkouts/gnu/gettext/manual/html_node/Plural-forms.html)

## Plurals for YAML Files

Plural sensitive forms for YAML files are indicated at the sub-key level. For example, the one and other keys in the following English source file indicate that the string is plural sensitive:

~~~
image_upload_timestamp:
    one: "uploaded %{num_secs} second ago"
    other: "uploaded %{num_secs} seconds ago"

You can turn off detection of plurals using the following directive: # smartling.plurals_detection = off

## Plurals for QT TS Files

Plural sensitive forms for QT Linguist files are indicated by the source string having "numerus = "yes" " and the variations using the "numerusform" element with the "plurality" attribute. For example:

~~~
<message numerus="yes">  
    <source>%1 subtitle(s) extracted</source>  
    <translation>  
    <numerusform plurality="singular">%1 subtitle extracted</numerusform>  
    <numerusform plurality="plural">%1 subtitles extracted</numerusform>  
    </translation>  
</message>
~~~

## Plurals for Android Files

Plural sensitive forms for Android files are indicated by the source file having a string marked plurals, for example:

<plurals name="plural_strings2">
    <item quantity="one">You have %s item in your cart.</item>
    <item quantity="other">You have %s items in your cart.</item>
</plurals>

Smartling conforms to the Android standard for plurals: [http://developer.android.com/guide/topics/resources/string-resource...](http://developer.android.com/guide/topics/resources/string-resource.html#Plurals)

## Plurals for iOS Files

While Apple has now released the [Stringsdict format]() to handle plurals, Smartling has previously extended iOS strings format by developing an [open source library](https://github.com/Smartling/ios-i18n) to accommodate plurals.

Plural sensitive forms for iOS files are indicated by source files with strings in the following form:

~~~
KEY##{rule}
~~~

Where:

*   `KEY` is the original key string

*   `rule` is one of the plural forms: zero, one, two, few, many, other, and conforms to the [CLDR](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html) specification on plural forms. Smartling loads a translation following rules as defined under CLDR.

For example, here are sample resource files for the key `%d songs found:`

~~~
en.lproj/Localizable.strings

/* Number of songs from search results */

"%d songs found##{one}" = "One song found";
"%d songs found##{other}" = "%d songs found";

ru.lproj/Localizable.strings

/* Number of songs from search results */

"%d songs found##{one}" = "Найдена одна песня";
"%d songs found##{few}" = "Найдено %d песни";
"%d songs found##{many}" = "Найдено %d песен";
"%d songs found##{other}" = "Найдено %d песен";
~~~


