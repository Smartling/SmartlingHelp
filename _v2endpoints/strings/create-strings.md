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
        Specifies a standard placeholder format. Accepted values are: `none`, `c`, `ios`, `python`, `java`, `yaml`, `qt`, `resx`. For more detail on placeholders see [Placeholders in Resource Files](/developers/supported-file-type/placeholders-in-resource-files/)

    - title: placeholderFormatCustom
      type: string
      required: false
      description_markdown: |
        Specifies a custom placeholder with a Java Regular Expression. For example `\[.+?\]` would capture all values surrounded by square brackets as placeholders. For more detail on placeholders see [Placeholders in Resource Files](/developers/supported-file-type/placeholders-in-resource-files/)

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
        If provided a callback request will be sent to this URL when translation for the string is complete. See our [callbacks](/developers/apii/v2/callbacks/) documentation for more details.    

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
        
        When strings are parsed as HTML, Smartling will automatically ampersand-escape special characters such as angle brackets (`<`) and quotes (`"`). For example, if you upload the string `Dave says "hello."` and set format to HTML, Smartling will return the string with ampersand-escaping: `Dave says &quot;hello&quote;!`.
    
response:
  json_markdown: |-
    ~~~json
    { 
       "wordCount": 6,
       "stringCount": 2,
       "processUid": "134x4r543435ff"
       "items": [ 
          { 
             "variant": "results",
             "stringText": "Search results for [city]:",
             "hashcode": "bd606147d945h3es74d6874422bne5e0",
             "overWritten": "true"
          },
          { 
             "variant": "nav-back",
             "stringText": "Back to results",
             "hashcode": "as24874d687239n245g3ss4422f2ecs7",
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
    - title: processUid
      type: string
      description_markdown: |
        If the request takes longer than 60 seconds to process, a 202 response will be returned, indicating the request has not failed, but is not yet complete. Use the `processUid` value to check the status of the request using the [Check Create String Status](/developers/apii/v2/strings/check-create-strings-status/) request.
    - title: items
      type: object
      description_markdown:
        An array including one object for each string created, giving variant metadata, text of the string and a hashcode, created by hashing the variant metadata and string text to provide a unique identifier for the string. If the string overwrote an existing string in the Smartling dashboard, `overWritten` will be `true`.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Uploads an array of strings to a Smartling project. A maximum of 100 strings can be created per request. A request with more than 100 items will return an error. Each string has a character limit of 10 000.

Note that you cannot authorize a string via API. Once you have created the strings, they will need to be [authorized](//support/articles/authorize-content-from-the-list-view/) by a content owner in the Smartling Dashboard.
 
 Most uploads will return a `200` response indicating success. If processing the request takes longer than 60 seconds, a `202` request will be returned, including a `processUid` value that can be used to check on the progress of the request.