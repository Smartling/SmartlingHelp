---
directive_id: 'translate_paths_xml'
title: 'translate_paths'
values_markdown: |
  A comma-separated list of paths to be captured as strings for translation.
description_markdown: |
  When included in this list, all plain text within the specified tag will be considered a translatable string. Optionally, you can append a "." and a relevant attribute name to the path to translate tag attributes with the file. You can end the path with a trailing slash, "/" and it will treat all child nodes as translatable (content must still be text within a tag).
  
examples:
    - type: xml
      code_single_line: 'smartling.translate_paths = data/localize/string, data/localize.title, data/localize/root/'
      description_markdown:
        Smartling will translate content in the `data/localize/string` & `data/localize/root` nodes. The `title` attribute of the `data/localize` node will also be translated.
---