---
directive_id: 'sltrans'
title: 'sltrans'
values_markdown: |
  `translate` OR `notranslate`
description_markdown: |
  Use this directive to enable or disable processing of translation strings in the file. You must turn translation back on after the strings you want to exclude.
  
examples:
    - type: generic
      code_single_line: smartling.sltrans = notranslate
      description_markdown: Strings below this directive will be captured as strings but excluded from translation.
    - type: generic
      code_single_line: smartling.sltrans = translate
      description_markdown: Strings below this directive will be translated.

---