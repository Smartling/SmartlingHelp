---
title: Open or Close Issue
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues/{{issueUid}}/state
method: PUT
request:
  json_markdown: |
    ~~~json
    {
        "issueStateCode": "RESOLVED"
    }
    ~~~
  parameters:
    - title: issueStateCode
      type: string
      required: true
      description_markdown: The state of the issue. Accepted values are `OPENED` or `RESOLVED`.
      values:
        - title:
          description_markdown:
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "data": {
                "issueStateCode": "RESOLVED"
            },
            "code": "SUCCESS"
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Sets the state of an issue to `OPENED` or `RESOLVED`.