---
directive_id: 'add_utf8_bom'
title: 'add_utf8_bom'
values_markdown: |
  `true` / `TRUE` (default) or `false` / `FALSE`
description_markdown: |
  Determines whether to force the addition of a UTF-8 Byte Order Mark (BOM) to the output file when downloading translations.
  
  If set to `FALSE` (default), output files will only include a BOM if the original file did.
  
  If set to `TRUE`, a UTF-8 BOM will be added to the output file, even if none existed in the original file.</p><p><strong>Note:</strong> This applies to UTF-8 only. For UTF-16, BOM is always used.
  
examples:
    - type: csv
      code_single_line: 'smartling.add_utf8_bom=TRUE'
        
---