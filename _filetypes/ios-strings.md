---
title: 'iOS Strings'
layout: supportedfiletype
extension: '.strings'
smartling_identifier: 'ios'
download_sample: 'ios.strings'
resources: 
  - title: String Resources
    link: 'https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html'
directive_prefix: '// '
directive_suffix: ''
directive_format: '// smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.
  
  > The alternate standard comment format of `/* ... */` will not work for directives.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - instruction_attributes
---

## Keys/Variants

Every string is created with key/variant metadata based on the keys in the file. If the keys are different for two strings with the same value, Smartling will create two strings using the key as context metadata.

## String Instructions

Smartling will automatically ingest and display file comments as instructions for translators. The comments must immediately precede the string. For example, for the following comment:

~~~
/* Back button label */
"Back" = "Back";
~~~

the text "Back button label" will be captured as a file instruction

If the comment contains the following text:
~~~
/* No comment provided by engineer. */
~~~

or if a line separates the comment and string, such as:

~~~
/* Back button label */
"Back" = "Back";
~~~

Smartling will not create an instruction.

## Standard Placeholder format

{% include standard_placeholders.md %} 

By default, Smartling recognizes ios-style placeholders in iOS String files.