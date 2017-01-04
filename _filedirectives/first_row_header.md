---
directive_id: 'first_row_header'
title: 'first_row_header'
values_markdown: |
  `true` / `TRUE` or `false` / `FALSE` (default)
description_markdown: |
  If `TRUE`, the first non-empty string in a CSV file will be treated as a header and excluded from translation.
  
examples:
    - type: csv
      code_single_line: 'smartling.first_row_header=TRUE'        
---