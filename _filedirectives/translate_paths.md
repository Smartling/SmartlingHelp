---
directive_id: 'translate_paths'
title: 'translate_paths'
description_markdown: |
  The `translate_paths` directive tells Smartling which parts of your JSON file are translatable strings, keys and instructions.
  
  The object takes three parameters:
  
  *   `path` - the name path leading to a translatable string (required)
  *   `instruction` - the name path leading to a translator instruction
  *   `key` - EITHER the name path leading to a value you want to capture as a Smartling key OR the part of a name path leading to a translatable string you want to use as a Smartling key
  
  For path and instruction, see [Specifying Paths.](#specifying-paths)
  
  If your key is a JSON value, see [Specifying Paths](#specifying-paths). If you want to capture part of the name path to the translatable string, give the path to the translatable string, surrounding the part of the name path you want to capture as the key with curly braces {}. For example.
  
  ~~~
  "smartling": {    "translate_paths": {        "path": "/*/text",        "key": "/{*}/text",        "instruction": "/*/notes"    }}
  ~~~
  
  > An upload will fail if Smartling cannot find at least one translatable string in your file but, otherwise, errors in your key and instruction paths will not cause an upload to fail. If your key and instruction paths do not match any content in your JSON file, no keys or instructions will be captured, but the upload will still proceed. Check your content in the Dashboard after uploading to be sure you have captured the correct information.
  
  For more information, see [Advanced JSON Configuration.](/developers/files/advanced-json-configuration/)

---