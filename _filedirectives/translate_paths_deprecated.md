---
directive_id: 'translate_paths_deprecated'
title: 'translate_paths (to be deprecated)'
values_markdown: |
  A comma-separated list of paths to be captured as strings for translation. <strong>Note:</strong> for new files, use the new translate paths object.
description_markdown: |
  When included in this list, all plain text within the specified path will be considered a translatable string.
  
examples:
    - type: json
      code_single_line: '"translate_paths": ["*/translation"]'
      description_markdown: Smartling will tranlate content in any path ending in `translation`, such as `string/translation` `nav/translation`, etc.
        
---