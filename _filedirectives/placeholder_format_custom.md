---
directive_id: 'placeholder_format_custom'
title: 'placeholder_format_custom'
values_markdown: |
  **1)**  Custom [Perl compatible regular expression](http://www.pcre.org/).  
  **2)**  `NULL` - disables any current custom placeholders
description_markdown: |
  Specifies a custom placeholder format. Any text in your file matching the regular expression you provide will be captured as a placeholder..
  
examples:
    - type: generic
      code_single_line: 'smartling.placeholder_format_custom = \[.+?\]'
      code_block_markdown:
      description_markdown:
        Any characters surrounded by square brackets will be treated as a placeholder. 
    - type: json
      code_single_line: '"placeholder_format_custom" : ["\\[.+?\\]"]'
      description_markdown:
        Any characters surrounded by square brackets will be treated as a placeholder. 
---