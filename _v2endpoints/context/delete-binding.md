---
title: Delete Binding
endpoint_id: DeleteBinding
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectUid}}/bindings/{{bindingUid}}'
method: DELETE
request:
  parameters:
    - title: bindingUid
      type: string
      required: true
      description_markdown: |
        Unique identifier for the binding you want to delete
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {}
      }
    }
    ~~~
 
examples:
  - title:
    code_markdown:
    description_markdown:
---

Deletes a context binding. The context referenced by the binding will no longer be displayed for the referenced string in the Translation Interface.