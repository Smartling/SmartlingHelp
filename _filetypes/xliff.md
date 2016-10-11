---
title: 'XLIFF'
layout: supportedfiletype
extension: '.xml, .xlf, .xliff'
smartling_identifier: 'xliff'
download_sample: 'xliff.xml'
resources: 
  - title: Background on XLIFF
    link: 'http://en.wikipedia.org/wiki/XLIFF'
  - title: OASIS specification
    link: 'http://docs.oasis-open.org/xliff/xliff-core/xliff-core.html'
directive_prefix: '&lt!-- '
directive_suffix: ' --&gt'
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - xliff_tags_to_placeholders
---

Smartling supports .xlf, .xliff, and .xml files that use the XML Localization Interchange File Format (XLIFF)

## Excluding Strings

XLIFF does not support using the `sltrans` directive for marking excluded content. However, for files uploaded [from October 2015 onwards](http://localhost:4000/developers/Misc/Parsers), you can use XLIFF’s `translate` attribute. To exclude a string from translation, set `translate=no`. See the [XLIFF Documentation](http://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html#translate) for details on the translate attribute.

## Standard Placeholder format

{% include standard_placeholders.md %} 
