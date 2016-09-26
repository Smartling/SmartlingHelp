---
title: Match Context to Strings
endpoint_id: MatchContext
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectUid}}/contexts/{{contextUid}}/match'
method: POST
request:
  json_markdown: |-
    ~~~json
    {
       "stringHashcodes": [
         "4d70f525c0e49fe8a3843e5b76ae33d9",
         "..."
       ]
    }
    ~~~
  parameters:
    - title: stringHashcodes
      type: string
      required: false
      description_markdown: |
        Array of string hashcodes to include in OCR matching. If the request body is left blank, all strings in the project will be included in the match.
        
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "newBindings": [
            {
              "bindingUid": "fc2azc89-f0fc-43c4-9c3a-8e6u0521b092",
              "contextUid": "456efpe5-0bf5-4482-365f-a0nce127abb0",
              "stringHashcode": "4d70a525c0e49fe8a3b43e5b76ae33d9",
              "coordinates": {
                "top": 114,
                "left": 589,
                "height": 33,
                "width": 346
              }
            },
            {
              "bindingUid": "4c0a343c-d361-4315-9580-60cdfed3dc37",
              "contextUid": "456ef9e5-0zf5-4382-b65f-a00ce127abb0",
              "stringHashcode": "e5a03bi0d4cd78e1c29bde61e6898fa1",
              "coordinates": {
                "top": 55,
                "left": 16,
                "height": 20,
                "width": 90
              }
            }
          ]
        }
      }
    }
    ~~~
  parameters:
    - title: newBindings
      type: array
      description_markdown: Array of new bindings created by OCD matching. For details on each binding object see the [Get Bindings](/developers/apii/v2/context/get-bindings-context/#response) response.

examples:
  - title:
    code_markdown:
    description_markdown:
---

Automatically matches a Context Image against strings in the project using Optical Character Recognition (OCR) and creates bindings for any found matches. Optionally, you can restrict OCR matching to only a set of strings that you specify to ensure that no unwanted bindings are created.

> This is a convenience method provided to save time and complexity in your integration. While our OCR functionality is advanced, it cannot match 100% of strings. If you need complete context coverage, either use the manual [Create Bindings](developers/apii/v2/context/create-bindings/) request or check your context images in the Smartling Dashboard after running this request to fill in any blanks. Be mindful of the limitations of OCR if you are using an unusual or script-like font, or if you have a lot of placeholder strings in your project (these will not be picked up by OCR and will need to be matched manually).