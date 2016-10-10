---
title: 'Android XML'
layout: supportedfiletype
extension: '.xml'
smartling_identifier: 'android'
download_sample: 'android.xml'
resources: 
  - title: Android String Resources
    link: 'http://developer.android.com/guide/topics/resources/string-resource.html'
  - title: Android Localization
    link: 'http://developer.android.com/guide/topics/resources/localization.html'
standard_placeholder:
  include: true
  type: Java
directive_prefix: '&lt!-- '
directive_suffix: ' --&gt'
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directive_instructions: "The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file"
directives:
  - placeholder_format_custom
  - placeholder_format
  - instruction_comments_enabled
  - instruction_attributes
  - pseudo_inflation
---

Smartling supports the Android XML resource file format. When you upload an Android XML file, make sure to specify that it is an android file, so it is not parsed as a [custom XML](/developers/supported-file-type/custom-xml/) file.

## Keys / Variants

Every string is created with key/variant metadata, which is the value of the `string.name` attribute. If the value of two strings is the same, but the `string.name` attribute is different, Smartling creates two strings.

## String Instructions

String instructions can be set using the `instruction_comments_enabled` and `instruction_attributes` directives


## Excluding strings from translation

To exclude a string from translation use the `translatable="FALSE"` attribute and value in the string tag:

~~~xml
<string name="string_11" translatable="FALSE">This android string has been marked not to be translated using the translatable attribute.</string>
~~~

When downloading translated Android XML files via the [File API](/developers/API/FileAPI/Download-File/), setting the parameter `includeOriginalStrings=false` will strip untranslated elements from the file.' 

## Standard Placeholder Format

By default, Smartling recognizes java-style placeholder (`%d`) in Android XML files.