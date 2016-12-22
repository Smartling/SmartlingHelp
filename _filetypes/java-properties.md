---
title: 'Java Properties'
layout: supportedfiletype
extension: '.properties'
smartling_identifier: 'javaProperties'
download_sample: 'java.properties'
resources: 
  - title: Java Localization Documentation
    link: 'http://docs.oracle.com/javase/tutorial/i18n/index.html'
directive_prefix: '# '
directive_suffix: ''
directive_format: '# smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - string_format
  - download_format
  - instruction_comments_enabled
  - sltrans
---

## Keys/Variants

Every string is created with key/variant metadata based on the keys in the file. If the keys are different for two strings with the same value, Smartling will create two strings using the key as context metadata.

## String Instructions

For files using Parser version 3, Smartling will automatically capture and display file comments as instructions for translators. The comments must immediately precede the string. For example, for the following comment:

~~~
# Back button label
"Back" = "Back";
~~~

the text "Back button label" will be captured as a file instruction.

## Formatting and Escaping

Unless changed with the [string_format](#string_format) directive, all files are parsed using Java Message Format. This format uses placeholders in the syntax: `{*}` and the single quote (apostrophe) is an escape character, so to use the single quote character, it must be escaped as `''`. If a translation has a single quote character, it will be escaped in the downloaded file as `''`. Translators may use a single quote even when the original string has none. If MessageFormat is turned off then strings will not need single quotes escaping to capture them, and single quotes in translations will not be escaped. You can turn MessageFormat off and on in a single file, using inline directives.

Java placeholders use c-style placeholder syntax: `%d`, `%s`, `%4.2f`, etc. Because the % character is an escape character, displaying a single percent character literal requires that it be escaped as `%%` . Otherwise the `%` character may create an invalid placeholder in your string. When java placeholders are enabled (default), Smartling will escape the % character in a translated string if the string has a JAVA formatted placeholder. Otherwise the % character in the translation are delivered unescaped.

If this default behavior is not desirable for your content you can turn off either of the formatting treatments for the entire file or just for the strings where you don't want the behavior. You can turn the behavior off and on throughout the file as needed, using the [string_format](#string_format) and [placeholder_format](#placeholder_format) directives.

## Using Placeholder Directives

By default, Smartling recognizes java-style placeholders in Java Properties files.

{% include standard_placeholders.md %} 

## Return untranslated strings as empty

When using file/get to download properties files from Smartling, the parameter includeOriginalStrings=false ensures that if no translations are available, Smartling returns an empty string. If the parameter is set to true, Smartling returns the original string.