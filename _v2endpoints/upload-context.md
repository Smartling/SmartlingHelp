---
title: Upload Context
endpoint_id: UploadContext
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectUid}}/contexts'
method: POST
request:
  json_markdown:
  parameters:
    - title: content
      type: array
      required: true
      description_markdown: The context image file. Must be uploaded as a multi-part form request.
      values:
        - title:
          description_markdown:
response:
  json_markdown:
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


