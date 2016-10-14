---
title: Create Strings
endpoint_id: CreateStrings
categories:
  - strings
layout: v2endpoint
endpoint_url: '/strings-api/v2/projects/{{projectId}}'
method: POST
request:
  json_markdown: |
    ~~~json
    {
       "placeholderFormat":"java",
       "placeholderFormatCustom":"\\[.+?\\]",
       "uri":"/ui-strings",
       "strings":[
          {
             "stringText": "Search results for [city]:",
             "variant": "variant1",
             "callbackUrl": "http://smartlinghotels.com/upload/callbacks/",
             "callbackMethod": "POST",
             "format":"html"
          },
          {
             "stringText": "Back to results",
             "variant": "variant2",
             "callbackUrl": "http://smartlinghotels.com/upload/callbacks/",
             "callbackMethod": "POST",
             "instruction": "Limited space keep translation short"
          }
       ]
    }
    ~~~
  parameters:
    - title: placeholderFormat
      type: string
      required: false
      description_markdown: |
        Specifies a standard placeholder format. Accepted values are: `none`, `c`, `ios`, `python`, `java`, `yaml`, `qt`, `resx`.

    - title: placeholderFormatCustom
      type: string
      required: false
      description_markdown: |
        Specifies a custom placeholder with a Java Regular Expression. For example `\[.+?\]` would capture all values surrounded by square brackets as placeholders.
        
    - title: uri
      type: string
      required: false
      description_markdown: |
        Sets the URI for a group of strings. This URI is displayed and searchable in the Smartling Dashboard and can help you find a group of strings later.

    - title: stringText
      type: string
      required: true
      description_markdown: |
        The text of the string you want to create. This is the only required value for a `string` object.

    - title: variant
      type: string
      required: false
      description_markdown: |
        Creates [variant](/support/articles/unique-strings-and-variants/) metadata for a new string.
    
    - title: callbackUrl
      type: string
      required: false
      description_markdown: |
        If provided a callback request will be sent to this URL when translation for the string is complete.    

    - title: callbackMethod
      type: string
      required: false
      description_markdown: |
        Creates [variant](/support/articles/unique-strings-and-variants/) metadata for a new string.
 
    - title: instruction
      type: string
      required: false
      description_markdown: |
        Creates an instruction that is displayed to translators in the Smartling Translation Interface.    

    - title: format
      type: string
      required: false
      description_markdown: |
        Sets whether or not the string should be parsed as HTML. Accepted values are `html`, `plain_text` and `auto`. If set to `auto`, Smartling will attempt to detect the presence of HTML tags in the string. 
    
response:
  json_markdown: |-
    ~~~json
    { 
       "wordCount": 6,
       "stringCount": 2,
       "items": [ 
          { 
             "variant": "variant1",
             "stringText": "Search results for [city]:",
             "hashcode": "bd603147d945h3es74d6874422bbe5e0",
             "overWritten": "true"
          },
          { 
             "variant": "variant2",
             "stringText": "Back to results",
             "hashcode": "as24874d687239n245g3es4422f4ecs7",
             "overWritten": "false"
          }
       ]
    }
    ~~~
  parameters:
    - title: wordCount
      type: number
      description_markdown: Total number of words captured as a result of the request.
    - title: stringCount
      type: object
      description_markdown:
        Total number of strings captured as a result of the request.
    - title: items
      type: object
      description_markdown:
        An array including one object for each string created, giving variant metadata, text of the string, the unique hashcode for the string. If the string overwrote an existing string in the Smartling dashboard, `overWritten` will be `true`.     
examples:
  - title:
    code_markdown:
    description_markdown:
---