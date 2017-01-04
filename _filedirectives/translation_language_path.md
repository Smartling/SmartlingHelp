---
directive_id: 'translation_language_path'
title: 'translation_language_path'
values_markdown: |
  Column Number - for example: `4`
description_markdown: |
  Used for "download multiple languages by row" option. Defines a column to record the language for each row. Output will display a language code for each column, eg. `de`, `en`, `es`, etc.
  
  This column should exist in the original file as an empty column.
  
  > If using this directive, you should also use `smartling.paths` to exclude the language path column from translation.
  
examples:
    - type: csv
      code_single_line: 'smartling.translation_language_path = 4'
      description_markdown: When the translated file is downloaded, column 4 will record the language for each row.
        
---