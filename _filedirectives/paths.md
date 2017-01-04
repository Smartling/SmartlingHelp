---
directive_id: 'paths'
title: 'paths'
values_markdown: |
  Values of all columns to be captured as strings.
description_markdown: |
  Defines the column numbers with values to be captured as translatable strings. For multilingual translations import it defines a column and locale.
  
  **Format:**
  
  For uploading original file:  
  Comma-separated list of column numbers.
  `# smartling.paths=1,2`
  
  For multi-language imports:  
  Comma-separated list of column/locale pairs
  `# smartling.paths=1/[LocaleID],2/[LocaleID]`
  
examples:
    - type: csv
      code_single_line: 'smartling.paths=2,3'
      description_markdown: Specifies that columns 2 and 3 of the uploaded CSV file should be ingested as translatable strings.
    - type: csv
      code_single_line: 'smartling.paths=2/es-ES,3/fr-FR'
      description_markdown: When importing translations, specifies that column 2 contains Spanish-SPAIN translations and column 3 contains French-FRANCE translations.
        
---