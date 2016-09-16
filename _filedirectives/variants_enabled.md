---
directive_id: 'variants_enabled'
title: 'variants_enabled'
values_markdown: |
  `true|TRUE|on|ON` OR `false|FALSE|off|OFF`
description_markdown: |
  When enabled, Smartling will make strings unique using variant metadata. Must be used in conjunction with the `source_key_paths` directive, which provides the information needed to generate variant metadata.
  
  > If you have previously uploaded a file with variants turned off, and reupload the file with variants on, Smartling will capture all content as new strings. You can configure [Smartmatch](/support/articles/smartmatch-settings/) to automatically match the existing translations.
  
examples:
    - type: xml
      code_single_line: smartling.variants_enabled = TRUE
      code_block_markdown:
      description_markdown:
        Strings will be captured with variant metadata.  
    - type: json
      block: false
      code_single_line: '"variants_enabled" : "TRUE"'
      code_block_markdown:
      description_markdown: |
        Strings will be captured with variant metadata.
-e--