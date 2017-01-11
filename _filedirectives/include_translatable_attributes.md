---
directive_id: 'include_translatable_attributes'
title: 'include_translatable_attributes'
values_markdown: |
  Comma-separated list of HTML attributes
description_markdown: |
  Instructs Smartling to capture the text of a list of HTML attributes for translation. For example, this can be used to capture the `title` attribute of a button.
  
examples:
    - type: generic
      code_single_line: smartling.include_translatable_attributes = title, alt
      description_markdown: Will capture text in `title` and `alt` attributes of any element as a translatable string
        
---