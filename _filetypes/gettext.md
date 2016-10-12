---
title: 'Gettext PO/POT'
layout: supportedfiletype
extension: '.po / .pot'
smartling_identifier: 'gettext'
download_sample: 'gettext.pot'
resources: 
  - title: GNU Gettext Documentation
    link: 'http://www.gnu.org/software/gettext/'
directive_prefix: '# '
directive_suffix: ''
directive_format: '# smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
---

## Keys/Variants

Smartling can capture the msgctxt parameter as variant metadata for a string. For example:

~~~
msgctxt "Home Page Menu Navigation"
msgid "Home"
msgstr ""
msgctxt "Home Address Label"
msgid "Home"
msgstr ""
~~~

Will result in two strings for translation, both with the value "Home". The translators can choose to to make the translation the same or not. The value of msgctxt displays to translators in the Translation Interface and the Smartling Dashboard. See the Help Center for more on translation variants.


## String Instructions

Smartling includes comments in gettext files as instructions for translators. Comments follow the gettext standard. Only Extracted comments (beginning with `#.` ) are displayed to translators as instructions:
~~~
#. This is an instruction that is included in the file above a string.
#. This is also an instruction that will be presented to translators.
#: arch/linux/directory_reader.py:101
msgid "Original source string."
msgstr ""
Other Information
~~~

## HTML

Smartling automatically formats Gettext strings with HTML. No integration is required. HTML parsing can be turned on in order to create smaller source strings. Adding the `smartling.string_format directive` with the value `html` turns on HTML parsing. If this directive is present in the file Smartling explicitly parses all subsequent strings as HTML. With HTML parsing on, strings will be created based on HTML block elements. Strings that have no HTML are captured as normal. This directive is optional.

## Plurals

If you include a plural-forms header in a original uploaded file, Smartling will return the locale specific plural-forms header in the translated file.

For example if an English source file contains the following header:

~~~
"Plural-Forms: nplurals=2; plural=n == 1 ? 0 : 1;\n"
~~~

A Russian translation file will contain:

~~~
"Plural-Forms: nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;\n"
~~~

> Smartling supports the CLDR standards for plurals. For some languages, Gettext plural support differs from the CLDR standards. For example, CLDR allows four plural forms for Polish: one; few; many and other, while Gettext only supports one; few; and many. Smartling will allow translations for all four CLDR plural forms, but when downloading translated Gettext files, only those supported by Gettext will be included.

## Return untranslated strings as empty
When using file/get to download Gettext files from Smartling, the parameter includeOriginalStrings=false ensures that if no translations are available, Smartling returns an empty string. If the parameter is set to true, Smartling returns the original string.

## Standard Placeholder format

{% include standard_placeholders.md %} 

## Native Gettext placeholder formats

In addition to Smartling's Placeholder Format directives, Smartling supports Gettext's native method of declaring placeholder format using flags (comment lines beginning with #,). Flags affect only the entry they are part of. The following native Gettext placeholder types are supported:

* `#, c-format`
* `#, java-format`
* `#, ios-format`
* `#, python-format`
* `#, sh-format`