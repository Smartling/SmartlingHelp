---
directive_id: 'placeholder_format'
title: 'placeholder_format'
values_markdown: |
  `NONE`; `C`; `IOS`; `PYTHON`; `JAVA`; `YAML`; `QT`; `RESX`
description_markdown: |
  Used to specify a standard placeholder format.
  
  This directive works in addition to the placeholder_format_custom directive. For example, if you specify both `smartling.placeholder_format = IOS` and `smartling.placeholder_format_custom = \[.+?\]`, both iOS style placeholders (`%d`) and your custom placeholders (`[username]`) will be recognized. 
  
  For some file types, Smartling will automatically recognize a standard placeholder type without needing to set this directive.
  
examples:
    - type: generic
      code_single_line: smartling.placeholder_format = IOS
      code_block_markdown:
      description_markdown:
        Specifies iOS-style placeholders for the file.  
---