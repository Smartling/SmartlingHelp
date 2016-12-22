---
directive_id: 'instruction_comments_enabled'
title: 'instruction_comments_enabled'
values_markdown: |
  `true` OR `false`
description_markdown: |
  If this directive is set to `true`, any comment in the file is ingested as an instruction for the next string.
  
examples:
    - type: xml
      code_single_line: 
      code_block_markdown: |
        ~~~xml
        <?xml version="1.0" encoding="UTF-8"?>  
        <!-- smartling.instruction_comments_enabled = true -->  
        <resources>  
        <!-- Button text, keep translation short -->  
         <string name="checkAvails">Check Availability</string>
        ~~~
        
      description_markdown: 'Smartling will capture the string Check Availability with the instruction `Button text, keep translation short`.'
---