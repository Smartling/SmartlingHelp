---
title: Upload Context File
endpoint_id: UploadContext
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts'
method: POST
request:
  json_markdown: |
    The Upload Context File request body takes the form of a multi-part post request. For example, in cURL, this might look like `content=@image-context.jpg;type=image/jpg`
    `curl -X POST -H "Authorization: Bearer $AUTH_TOKEN" -H "Content-Type: multipart/form-data" -F "content=@image.png;type=image/png" "https://api.smartling.com/context-api/v2/projects/$PROJECT_ID/contexts”`
  parameters:
    - title: content
      type: array
      required: true
      description_markdown: |
        The context image file and content type. Supported content types are `image/png` and `image/jpg` / `jpeg`.
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "contextUid": "de2b359a-de7b-4aca-9b67-4321446ae540",
          "contextType": "IMAGE",
          "name": "IMG_04383.jpg"
        }
      }
    }
    ~~~
  parameters:
    - title: contextUid
      type: string
      description_markdown: Unique identifier for the context file
    - title: contextType
      type: string
      description_markdown: |
        Type of context file created. Currently, this will always be `IMAGE` but support for more context types may be added in the future.
examples:
  - title:
    code_markdown:
    description_markdown:
---


