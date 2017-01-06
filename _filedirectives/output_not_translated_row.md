---
directive_id: 'output_not_translated_row'
title: 'output_not_translated_row'
values_markdown: |
  `true` / `TRUE` (default) or `false` / `FALSE`
description_markdown: |
  Determines if rows with no translations for a given locale are included in output files.
  
  If `output_not_translated_row=TRUE` (default), a row with no translations will still be included in the output file, even if there are no translations for that locale.
  
  If set to `FALSE`, rows with no translations will be excluded from the output file.
  
examples:
    - type: csv
      code_single_line: 'smartling.output_not_translated_row=FALSE'
      description_markdown: If this file has four rows, and only rows 1-3 have translations for French, the downloaded file for fr-FR will exclude row 4.
        
---