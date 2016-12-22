---
directive_id: 'source_key_paths'
title: 'source_key_paths'
values_markdown: |
  A comma separated list of paths to use create "keys" for strings on translate_paths.
  
  The key will be a space separated string of all the keys leading to the source string. For example: "string", "group1 string".
  
description_markdown: |
  Used to define the schema for capturing a key for each source string. Keys are required:
  
  *   If you want to import pre-existing translations from a file with the same structure
  *   If you want to create variants of strings that would otherwise be duplicates (By default Smartling does not create duplicate strings.)
  
  > Creating or updating variants for previously uploaded strings cause new strings to be created that will not have translations. The SmartMatch feature can be configured to automatically apply the existing translations, or translators can use the 100% match from the Translation to manually apply the translation.
  
  Specify the full path to the value, then indicate which part of the path should be used as the key using {} notation.
  
examples:
    - type: yaml
      code_single_line: 'smartling.source_key_paths = {*}'
      description_markdown: Smartling will capture the full path of keys leading to each translatable string as Key metadata
    - type: xml
      code_single_line: 'smartling.source_key_paths = data/item/{string.name}'
      description_markdown: Smartling will capture the `name` atribute of the `data/item/string` node as the key.
    - type: xml
      code_single_line: 'smartling.source_key_paths = data/item/{string_name}'
      description_markdown: Smartling will capture the content of the `string_name` node as the key.
    - type: csv
      code_single_line: 'smartling.source_key_paths = 1'
      description_markdown: Smartling will capture data from column 1 as keys. Each key will be applied to the next translatable string after it, so keys need to be placed to the left of translatable strings in each row for this directive to work.
---