---
directive_id: 'instruction_attributes'
title: 'instruction_attributes'
values_markdown: |
  Name of an attribute of a string or plurals nodes in your file.
description_markdown: |
  Sets attributes of content nodes to be captured as file instructions for strings.
  
examples:
    - type: xml
      code_block_markdown: |
        ~~~xml
        <?xml version="1.0" encoding="UTF-8"?>  
        <!-- smartling.instruction_attributes = comment, note -->  
        <resources>  
            <string name="checkAvails" comment="Button text, keep translation short">Check Availabilityy</string>  
            <string name="crosbyAddress" note="Do not translate street names">79 Crosby Street</string>
        ~~~
      description_markdown: |
        Text from the `comment` and `note` attributes are captured as instructions for their respective strings.
        
---