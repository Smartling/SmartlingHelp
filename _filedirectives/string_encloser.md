---
directive_id: 'string_encloser'
title: 'string_encloser'
values_markdown: |
  String of characters (default is `"`)
description_markdown: |
  Defines the sequence of characters that may enclose values. To use the character sequence inside values you should escape it by repeating twice (default is `""`).
  
examples:
    - type: csv
      code_single_line: 'smartling.string_encloser="'
      description_markdown: String literals are inclosed in `"` characters
---