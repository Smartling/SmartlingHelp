---
title: 'RESX'
layout: supportedfiletype
extension: '.resx or .resw'
smartling_identifier: 'resx'
resources: 
  - title: Microsoft Resx Resources
    link: 'http://msdn.microsoft.com/en-us/library/ekyft91f%28v=vs.90%29.aspx'
directive_prefix: '&lt!-- '
directive_suffix: ' --&gt'
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - sltrans
---

## String Instructions

Smartling automatically captures RESX comments and makes them translator instructions.

~~~
<data name="resx_string6" xml:space="preserve">
   <value>resx string6 has a comment.</value>
   <comment>comment for manual resx string6 will appear as a Smartling translator instruction</comment>
</data>
~~~