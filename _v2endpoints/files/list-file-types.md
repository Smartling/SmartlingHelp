---
title: List File Types
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/file-types
method: GET        
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "items": [
                    "android",
                    "ios",
                    "gettext",
                    "javaProperties"
                ]
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -H "Authorization: Bearer {{token}}" "https://api.smartling.com/files-api/v2/projects/{{projectId}}/file-types"
      ~~~
    description_markdown:
---

Returns a list of all file types currently represented in the project.