---
directive_id: 'string_format'
title: 'string_format'
values_markdown: |
  `MESSAGE_FORMAT` (default) or `NONE`
description_markdown: |
  String format is a parser directive for specialized file processing that enables string escaping and pre-processing rules as defined by various third party resource handlers. The default is <a href="http://docs.oracle.com/javase/6/docs/api/java/text/MessageFormat.html">MessageFormat</a>, a standard Java resource handler.
  
examples:
    - type: 
      code_single_line: 'smartling.string_format = NONE'
      description_markdown: Turns off `MESSAGE_FORMAT` string handling below the directive.
        
---