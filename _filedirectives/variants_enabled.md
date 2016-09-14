---
directive: 'translate_paths '
values:         'A comma-separated list of paths to be captured as strings for translation.'
description:    'When included in this list, all plain text within the specified tag will be considered a translatable string. Optionally, you can append a "." and a relevant attribute name to the path to translate tag attributes with the file. You can end the path with a trailing slash, "/" and it will treat all child nodes as translatable (content must still be text within a tag).'
examples:
    - type: customxml 
      code:'smartling.translate_paths = data/localize/string, data/localize.title, data/localize/root/'
      Code: 'testcode'
      Description: 'Smartling will translate content in the data/localize/string & data/localize/root nodes. The <code>title</code> attribute of the data/localize node will also be translated.'
---