---
title: Delete Context File
endpoint_id: DeleteContextFile
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts/{{contextUid}}'
method: DELETE
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

Deletes a context file from Smartling.