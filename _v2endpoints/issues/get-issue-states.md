---
title: Get Issue States
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/dictionary/issue-states
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "totalCount": 2,
                "items": [{
                    "description": "Opened",
                    "issueStateCode": "OPENED"
                }, {
                    "description": "Resolved",
                    "issueStateCode": "RESOLVED"
                }]
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Currently the only allowed issue states are `OPENED` and `RESOLVED` but Smartling may introduce additional states in future. This request returns all current allowed states.