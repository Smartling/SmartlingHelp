---
title: Create Bindings
endpoint_id: CreateBindings
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/bindings'
method: POST
request:
  json_markdown: |-
    ~~~json
    {
        "bindings":    [
                {
                  "contextUid": "de2r339a-df7b-4gca-9b67-432144f5e540",
                  "stringHashcode": "2edfdt08510b9483472e7edbf8805356",
                  "coordinates": {
                    "top": 114,
                    "left": 589,
                    "height": 33,
                    "width": 346
                  }
                }
            ]
    }
    ~~~
  parameters:
    - title: contextUid
      type: string
      required: true
      description_markdown: >
        Unique identifier for the context to bind. Available from the [Upload
        Context](/developers/api/v2/context/upload-context/) response.
    - title: stringHashcode
      type: string
      required: true
      description_markdown: |
        Unique identifier for the string to bind.
    - title: coordinates
      type:
      required: false
      description_markdown: >
        Describes the location and size of a box enclosing the string in
        a context image. 'top' and 'left' are the distance in pixels of the top
        left corner of the string from the top and left of the image. 'width' and
        'height' are the dimensions of the string in pixels. This information is
        used to highlight the position of the string when displaying the context
        image in the Translation Interface. If coordinates are not provided,
        Smartling will attempt to locate the string on the image using Optical
        Character Recognition. If OCR fails, coordinates will default to `0, 0,
        0, 0`, meaning the image will be displayed when the string is translated,
        without any highlighting to show the position of the string.
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
                  "top": 114,
                  "left": 589,
                  "height": 33,
                  "width": 346
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
      type:
      description_markdown: Object describing the position of the string within the context image. Read these like CSS positioning values.
examples:
  - title:
    code_markdown:
    description_markdown:
---


Link context images with the strings they contain. The binding tells Smartling which context images to show translators for which strings.

A maximum of 100 bindings can be created per request. A request with more than 150 items will return a `400` response indicating validation error.