---
title: Download Context File
endpoint_id: DownloadContextFile
categories:
  -
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectUid}}/contexts/{{contextUid}}/content'
method: GET
request:
  json_markdown:
  parameters:
    - title:
      type:
      required: false
      description_markdown:
      values:
        - title:
          description_markdown:
response:
  json_markdown: |-
    ~~~
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "contextUid": "de2b359a-de7b-4aca-9b67-4321446ae540",
          "contextType": "IMAGE",
          "name": "puppy.jpg"
        }
      }
    }
    ~~~
  parameters:
    - title:
      type:
      required: false
      description_markdown:
examples:
  - title:
    code_markdown:
    description_markdown:
---


Returns &nbsp;a context file.