---
directive_id: 'no_translate_style'
title: 'no_translate_style'
values_markdown: |
  Name of a style not to be translated.
description_markdown: |
  Identifies a 'style' in an Open Excel (`.xlsx`) or Word (`.docx`) document that should not be translated. By default, text with the `SLNOTRANSLATE` and `NOTRANSLATE` styles are not translatable but these defaults will be replaced if `no_translate_style` is defined. Note that Office Open XML files do not allow inline directives, so this directive can only be used via the [File Upload](/developers/api/v2/files/upload-file/) API request. This directive does not work for `.pptx` files.
  
examples:
    - type: generic
      code_single_line: 'smartling.no_translate_style=PLACENAMES'
      description_markdown: Text with the 'PLACENAMES' style will not be translated.
        
---