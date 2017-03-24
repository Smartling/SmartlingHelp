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

> Please review the Formatting and Escaping section and carefully review your source files and test the round-trip with Smartling using Pseudo Translation download to determine the correct integration before you begin translating with strings from Java Properties files.

When capturing strings from a Java Properties file Smartling assumes that the strings are being used from the ResourceBundle classes and methods as well as Java MessageFormat.  This has two specific implications for how we capture and deliver strings, and handle automatic integration of variables as placeholders.

The default behavior is the same as if you integrated with the following commands

placeholder_format=JAVA
string_format=MESSAGE_FORMAT


placeholder_format=JAVA implies that the strings are being formatted using java.util.Formatter https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html   A string using that will have standard c-style placholders and becuase those placeholders use the percent char '%' to mark them, when you want a percent character in your string you must escape it as '%%'.  

string_format=MESSAGE_FORMAT implies that the strings are being formatted using java.text.MessageFormat https://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html  A string using that will have MessageFormatter patterns in curly braces and because the single quote character is used to escape the special characters { and } a single quote that you want to appear as a character must be escaped as ''.


The most frequent integration issues encountered in Smartling when using java properties files is caused by not integrating your file to get the behavior needed for strings in regards to placeholder formatting and special character escaping.

For example if your original file has:

string=Your subscription is %d% off.  

The string captured by Smartling will have two placeholders and not be correctly translatable.   Strictly speaking "% o" is a valid format specifier.  There are two ways to avoid this integration issue.  

If your strings are getting formatted by Java, the % should be escaped in your resource file:

string1=Your subscription is %d%% off.  

Conversely if you have a string that doesn't pass through a formatter 

string=Your subscription is 50% off.

to avoid this being captured with a placeholder (and the translation having its % character escaped) turn off the formatting ,and then turn it back on if you need subsequent strings formatted:

#smartling.placeholder_format=NONE
string=Your subscription is 50% off.
#smartling.placeholder_format=JAVA


Similar issues are seen for MESSAGE_FORMAT behavior.

string1=You can't delete {0}.

In this string the ' shoudl be escaped if it's passing through MessageFormat

string1=You can''t delete {0}

Similarly if you have a string with the literal characters { } or the ' character that is NOT passing through MessageFormat

string1=You can't delete it. {We won't let you!}

you can insure proper capture and delivery of the translation by turning off MessageFormat and then turning it back on when needed after the string.

# smartling.string_format=NONE
string1=You can't delete it. {We won't let you!}
# smartling.string_format=MESSAGE_FORMAT

When integrating the directives "inline" in your file note that once your set a directive it will apply to all subsequent strings.  So if you know your file is entirely made of strings that require MESSAGE_FORMAT but not JAVA formatting you can place the following at the top of your file:

# smartling.string_format=MESSAGE_FORMAT
# smartling.placeholder_format=NONE


Remember that this behavior will be true for capturing strings and delivering translations.  It is especially common for translators to use the single quote character as part of their translation even when the original language string did not have any quote characters.  

We recommend uploading your complete set of Java Properties files and then downloading the pseudo translation, and then use that to bring up your application with the pseudo localization to check for any issues or errors.


Unless changed with the [string_format](#string_format) directive, all files are parsed using Java Message Format. This format uses placeholders in the syntax: `{*}` and the single quote (apostrophe) is an escape character, so to use the single quote character, it must be escaped as `''`. If a translation has a single quote character, it will be escaped in the downloaded file as `''`. Translators may use a single quote even when the original string has none. If MessageFormat is turned off then strings will not need single quotes escaping to capture them, and single quotes in translations will not be escaped. You can turn MessageFormat off and on in a single file, using inline directives.

Java placeholders use c-style placeholder syntax: `%d`, `%s`, `%4.2f`, etc. Because the % character is an escape character, displaying a single percent character literal requires that it be escaped as `%%` . Otherwise the `%` character may create an invalid placeholder in your string. When java placeholders are enabled (default), Smartling will escape the % character in a translated string if the string has a JAVA formatted placeholder. Otherwise the % character in the translation are delivered unescaped.

If this default behavior is not desirable for your content you can turn off either of the formatting treatments for the entire file or just for the strings where you don't want the behavior. You can turn the behavior off and on throughout the file as needed, using the [string_format](#string_format) and [placeholder_format](#placeholder_format) directives.

## Using Placeholder Directives

By default, Smartling recognizes java-style placeholders in Java Properties files.

{% include standard_placeholders.md %} 

## Return untranslated strings as empty

When using file/get to download properties files from Smartling, the parameter includeOriginalStrings=false ensures that if no translations are available, Smartling returns an empty string. If the parameter is set to true, Smartling returns the original string.