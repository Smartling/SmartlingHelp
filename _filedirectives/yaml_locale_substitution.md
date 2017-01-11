---
directive_id: 'yaml_locale_substitution'
title: 'yaml_locale_substitution'
values_markdown: |
  `TRUE` (default) or `FALSE`
description_markdown: |
  By default, if the first key in your YAML file matches a language code (e.g. `en`), Smartling treats it as an i18n localization file and replaces it with the corresponding language code in translated files. See [Ruby Localization](/developers/files/ruby-localization/) for more information on this behavior. If you don't want this to happen, set this directive to false.
  
examples:
    - type: yaml
      code_single_line: 'smartling.yaml_locale_substitution = false'
      description_markdown: Prevents Smartling from substituting the first key in translated YAML files.
        
---