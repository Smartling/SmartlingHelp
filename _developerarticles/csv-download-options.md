---
layout: article
title: CSV Download Options
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
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

CSV Files support three options for downloading translations

## Download a single translated file for a single language

Available in dashboard or via API as with other file types.

## Download translations for multiple languages in a single file by row

*   Accessible via API by specifying a comma-separated list of locales for the `locale` parameter, or by specifying `all`. Row-based output is the default for multiple language download.
*   Outputs translations for multiple languages by creating an extra row for each locale.
*   For this option, it is recommended that you use the `translation_language_path` directive to specify an empty column to label the language of each row and the `output_original_row directive` to specify whether you wish the source language to be included in the download.

**Original File:**

~~~
# smartling.paths=3
# smartling.source_key_paths=1
# smartling.translation_language_path=4
# smartling.first_row_header=true
 
stringID,  non-translatable text, translatable string, language
row1,      untranslated text,     string1(English),
row2,      untranslated text,     string2(English),
~~~

**Translations:**

~~~
stringID,  non-translatable text, translatable string, language
row1,      untranslated text,     string1(English),    en-EN
row1,      untranslated text,     string1(German),     de-DE
row1,      untranslated text,     string1(French),     fr-FR
row2,      untranslated text,     string2(English),    en-EN
row2,      untranslated text,     string2(German),     de-DE
row2,      untranslated text,     string2(French),     fr-FR
~~~


## Download translations for multiple locales in a single file by column

* By default, multi-language downloads are organized by row, but you can also choose to organize languages by column instead by using the **translations_in_columns** directive in the original file.

~~~
# smartling.translations_in_columns=true
~~~

* This will cause downloaded files to create an additional column for each translated language immediately to the right of each translatable column. Translation columns are ordered alphabetically by locale code. The original string is always included in this download type.

**Original File:**

~~~
# smartling.paths=3
# smartling.source_key_paths=1
# smartling.first_row_header=true
# smartling.translations_in_columns=true

stringID,  non-translatable text, translatable string
row1,      untranslated text,     string1(English)
row2,      untranslated text,     string2(English)
~~~

**Translations:**

~~~
stringID,  non-translatable text, translatable string, de-DE,           fr-FR
row1,      untranslated text,     string1(English),    string1(German),  string1(French)
row2,      untranslated text,     string2(English),    string2(German),  String2(French)
~~~

> By default, Smartling labels languages for both row-based and column-based downloads using the locale code (e.g. en-EN, es-US, etc). You can choose alternative labels using the `locales_map` directive.