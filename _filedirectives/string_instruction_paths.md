---
directive_id: 'string_instructions_paths'
title: 'string_instructions_paths'
values_markdown: |
  Comma-separated lise of columns.
description_markdown: |
  Specifies which columns contain string instructions. This directive must be used together with `smartling.paths` to specify translatable strings.
  
  Each string instruction is applied to the next translatable string, so you must place your instruction column to the left of the translatable string. You may have more than one instruction column per translatable string.
  
examples:
  - type: csv
    code_block_markdown: |
      ~~~csv
      # smartling.paths=4
      # smartling.source_key_paths=1
      # smartling.string_instructions_paths=2,3
      # smartling.first_row_header=true
      ~~~
    description_markdown: Smartling will capture the content in the files as follows. Column 1 will be captured as key metadata, Columns 2 and 3 will be string instructions. Column 4 contains the translatable strings
        
---