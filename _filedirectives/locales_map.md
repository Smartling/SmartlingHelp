---
directive_id: 'locales_map'
title: 'locales_map'
values_markdown: |
  Alternative labels for Smartling locales in JSON format.
description_markdown: |
  Defines how languages are labeled in downloaded CSV files. Default label is the Smartling locale code, such as "fr-FR", but you may wish to choose a different label, such as "French" in order to make the file easier to read or to match the labels used in your application.
  
examples:
    - type: csv
      code_single_line: 'smartling.locales_map={"es-ES":"Spanish","de-DE":"German"}'
      description_markdown: |
        Downloaded translations will be labeled as `Spanish` for es-ES and `German` for de-DE.
        
---