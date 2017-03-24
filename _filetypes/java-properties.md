---
title: Java Properties
layout: supportedfiletype
extension: .properties
smartling_identifier: javaProperties
download_sample: java.properties
resources:
  - title: Java Localization Documentation
    link: 'http://docs.oracle.com/javase/tutorial/i18n/index.html'
directive_prefix: '#'
directive_suffix:
directive_format: '# smartling.[directive_name] = [value]'
directive_instructions_markdown: 'The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive. Directives apply to all strings that follow them. Directives can be changed throughout the file.'
directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - string_format
  - download_format
  - sltrans
---


## Keys/Variants

Every string is created with key/variant metadata based on the keys in the file. If the keys are different for two strings with the same value, Smartling will create two strings using the key as context metadata. &nbsp;It is invalid to have the same key in a single resource file, though Smartling will not report any errors for such a file.

## Formatting and Escaping

> Please review the Formatting and Escaping section and carefully review your source files and test the round-trip with Smartling using Pseudo Translation download to determine the correct integration before you begin translating with strings from Java Properties files.

When capturing strings from a Java Properties file Smartling assumes that the strings are being used for Format and MessageFormat. This has two specific implications for how we capture and deliver strings, and handle automatic integration of variables as placeholders.

The default behavior is the same as if you integrated with the following commands

`placeholder_format=JAVA`{: .highlighter-rouge}

`string_format=MESSAGE_FORMAT`{: .highlighter-rouge}

&nbsp;

`placeholder_format=JAVA`{: .highlighter-rouge} implies that the strings are being formatted using [java.util.Formatter](https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html). A string using that class will have standard c-style/printf format specifiers for variables and bebecause those variables use the percent char ‘%’ to mark them, when you want an actual percent character to display in your string you must escape it as ‘%%’ (both in the original and in translated strings).

`string_format=MESSAGE_FORMAT`{: .highlighter-rouge} implies that the strings are being formatted using [java.text.MessageFormat](https://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html). A string using that class will have FormatElements in curly braces and because the single quote character is used to escape the special characters { and } a single quote that you want to appear as a character must be escaped as ‘’ (both in the original and in translated strings)

The most frequent integration issues encountered in Smartling when using java properties files is caused by not integrating your file to get the behavior needed for the strings in regards to placeholder formatting and special character escaping.

For example if your original file has:

~~~
string=Your subscription is %d% off.
~~~

The string captured by Smartling will have incorrect placeholder integration and not be correctly translatable. Strictly speaking “% o” is a valid format specifier. There are two ways to avoid this integration issue.

If your strings are formatted by Formatter, the % should be escaped in your resource file:

~~~
string1=Your subscription is %d%% off.
~~~

Conversely if you have a string like this:

~~~
string=Your subscription is 50% off.
~~~

That is NOT being formatted by Formatter Smartling will identify a placeholder, where one may not be needed. To avoid this being captured with a placeholder turn off the formatting and then turn it back on if you need subsequent strings formatted:

~~~
smartling.placeholder_format=NONE
string=Your subscription is 50% off.
#smartling.placeholder_format=JAVA
~~~

So the string will be captured without a placeholder, and assuming the % char is still present in the translation it will not be escaped as %% when delivered to you.

Similar issues are seen for the MessageFormat behavior. If your source file has this string which will be passed through MessageFormat:

~~~
string1=You can't delete {0}.{: .highlighter-rouge}
~~~

The ‘ should be escaped if it’s passing through MessageFormat:

~~~
string1=You can''t delete {0}{: .highlighter-rouge}
~~~

Similarly if you have a string with the literal characters { } or the ‘ character that is NOT passing through MessageFormat:

~~~
string1=You can't delete it. {We won't let you!}{: .highlighter-rouge}
~~~

You can insure proper capture and delivery of the translation by turning off MessageFormat and then turning it back on when needed after the string:

~~~
smartling.string_format=NONE
string1=You can’t delete it. {We won’t let you!}
# smartling.string_format=MESSAGE_FORMAT
~~~

When integrating the directives “inline” in your file note that once your set a directive it will apply to all subsequent strings. If you know your file is entirely made of strings that require MESSAGE_FORMAT but not JAVA formatting you can place the following at the top of your file:

~~~
# smartling.string_format=MESSAGE_FORMAT
{: .highlighter-rouge}# smartling.placeholder_format=NONE{: .highlighter-rouge}
~~~

Remember that this behavior will be true for capturing strings and delivering translations. It is especially common for translators to use the single quote character as part of their translation even when the original language string did not have any quote characters.

We recommend uploading your complete set of Java Properties files and then downloading the pseudo translation, and then use that to bring up your application with the pseudo localization to check for any issues or errors.

See [Placeholders in resource files](/developers/files/placeholders-in-resource-files/) for more on placeholders.

&nbsp;

## String Instructions

For files using Parser version 3, Smartling will automatically capture and display file comments as instructions for translators. The comments must immediately precede the string. For example, for the following comment:

<div class="highlighter-rouge"><pre class="highlight"><code># Back button label
"Back" = "Back";
</code></pre></div>

the text “Back button label” will be captured as a file instruction.

&nbsp;

## Return untranslated strings as empty

When using file/get to download properties files from Smartling, the parameter includeOriginalStrings=false ensures that if no translations are available, Smartling returns an empty string. If the parameter is set to true, Smartling returns the original string.