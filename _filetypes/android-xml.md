---
title: Android XML
layout: supportedfiletype
extension: .xml
smartling_identifier: android
download_sample: android.xml
resources:
  - title: Android String Resources
    link: 'http://developer.android.com/guide/topics/resources/string-resource.html'
  - title: Android Localization
    link: 'http://developer.android.com/guide/topics/resources/localization.html'
standard_placeholder:
  include: true
  type:
directive_prefix: '&lt!--'
directive_suffix: '--&gt'
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directive_instructions_markdown: 'The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive. Directives apply to all strings that follow them. Directives can be changed throughout the file.'
directives:
  - placeholder_format_custom
  - placeholder_format
  - instruction_comments_enabled
  - instruction_attributes
  - pseudo_inflation
  - character_limit
---


Smartling supports the Android XML resource file format. When you upload an Android XML file, make sure to specify that it is an android file, so it is not parsed as a [custom XML](/developers/files/custom-xml/) file.

## Keys / Variants

Every string is created with key/variant metadata, which is the value of the `string.name`{: .highlighter-rouge} attribute. If the value of two strings is the same, but the `string.name`{: .highlighter-rouge} attribute is different, Smartling creates two strings.

## String Instructions

String instructions can be set using the `instruction_comments_enabled`{: .highlighter-rouge} and `instruction_attributes`{: .highlighter-rouge} directives

## Excluding strings from translation

To exclude a string from translation use the `translatable="FALSE"`{: .highlighter-rouge} attribute and value in the string tag:

<div class="language-xml highlighter-rouge"><pre class="highlight"><code><span class="nt">&lt;string</span> <span class="na">name=</span><span class="s">"string_11"</span> <span class="na">translatable=</span><span class="s">"FALSE"</span><span class="nt">&gt;</span>
    This android string has been marked not to be translated using the translatable attribute.
<span class="nt">&lt;/string&gt;</span>
</code></pre>
</div>

When downloading translated Android XML files via the [File API](/developers/api/v2/files/download-translated-file-single-locale/), setting the parameter `includeOriginalStrings=false`{: .highlighter-rouge} will strip untranslated elements from the file.’

## Standard Placeholder format

By default, Smartling recognizes java-style placeholders in Android XML files.

See [Placeholders in resource files](/developers/files/placeholders-in-resource-files/) for more on placeholders.