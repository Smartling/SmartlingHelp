---
directive_id: 'force_inline_for_tags'
title: 'force_inline_for_tags'
values_markdown: |
  Comma-separated html tag list
description_markdown: |
  This parameter forces the html parser to treat the listed tags as inline. The difference between block and inline tags is that block tags are used to split html into strings, whereas inline tags are included in strings.
  
examples:
    - type: generic
      code_single_line: 'smartling.force_inline_for_tags = external_link,reference'
      description_markdown: Any `<external_link>` or `<reference>` tags will be parsed as inline tags. Smartling will not create separate strings for content in these tags.
        
---