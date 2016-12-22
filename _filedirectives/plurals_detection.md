---
directive_id: 'plurals_detection'
title: 'plurals_detection'
values_markdown: |
  `on` OR `off`
description_markdown: |
  Enables or disables plurals detection.
  
  > If using plural detection for a YAML file as part of a Ruby on Rails project, ensure your project is set up with correct [pluralization rules.](/developers/files/ruby-localization/)
  
examples:
    - type: generic
      code_single_line: 'smartling.plurals_detection = on'
      description_markdown: Smartling will detect plurals in strings below this directive.
---