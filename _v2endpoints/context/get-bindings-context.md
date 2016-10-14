---
title: Get Bindings for a Context File
endpoint_id: GetBindingsContext
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts/{{contextUid}}/bindings'
method: GET
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "totalCount": 1,
          "items": [
            {
              "bindingUid": "d6414f8c-4gdf-4415-9a69-f8e7902ca9ec",
              "contextUid": "25137b65-e075-4341-8362-14b1a3e558f5",
              "stringHashcode": "bd603147d945h3ec74d6874422ebe4e0",
              "coordinates": {
                "top": 50,
                "left": 50,
                "bottom": 400,
                "right": 400
              }
            }
          ]
        }
      }
    }
    ~~~
  parameters:
    - title: bindingUid
      type: string
      description_markdown: Unique identifier for the context binding.
    - title: contextUid
      type: string
      description_markdown: Unique identifier for the context.
    - title: stringHashcode
      type: string
      description_markdown: Unique identifier for the translatable.
    - title: Coordinates
      type: object
      description_markdown:
        Object describing the position of the string within the context image. Read these like CSS positioning values.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Return all bindings that reference a given piece of context.