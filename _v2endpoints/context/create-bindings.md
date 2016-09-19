---
title: Create Bindings
endpoint_id: CreateBindings
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectUid}}/bindings'
method: POST
request:
  json_markdown: |
    ~~~json
    [
        {
          "contextUid": "de2r339a-df7b-4gca-9b67-432144f5e540",
          "stringHashcode": "2edfdt08510b9483472e7edbf8805356"
        },
        ...
    ]
    ~~~
  parameters:
    - title: contextUid
      type: string
      required: true
      description_markdown: |
        Unique identifier for the context to bind. Available from the [Upload Context]() response.
        
    - title: stringHashcode
      type: string
      required: true
      description_markdown: |
        Unique identifier for the string to bind.
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "created": {
            "totalCount": 1,
            "items": [
              {
                "bindingUid": "ca73fbdf-9426-447a-aafd-13e1065132b4",
                "contextUid": "de2b359a-de7b-4fca-9b67-4323446ak540",
                "stringHashcode": "2edfdd03310bd483472e7edbf8s05356",
                "coordinates": {
                  "top": 50,
                  "left": 80,
                  "bottom": 200,
                  "right": 500
                }
              }
            ]
          },
          "errors": {
            "totalCount": 0,
            "items": []
          }
        }
      }
    }
    ~~~
  parameters:
    - title: bindingUid
      type: string
      description_markdown: Unique identifier for the context binding.
    - title: coordinates
      type: object
      description_markdown:
        Object describing the position of the string within the context image. Read these like CSS positioning values.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Link context images with the strings they contain. The binding tells Smartling which context images to show translators for which strings.