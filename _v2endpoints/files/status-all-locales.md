---
title: Status - All Locales
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/file/status
method: GET
request:
  parameters:
    - title: fileUri
      type: string
      required: true
      description_markdown: |
        Unique identifier for the file.
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
      curl -X GET -H "Authorization: Bearer {{token}}" 'https://api.smartling.com/files-api/v2/projects/{{projectId}}/file/status?fileUri=file.properties'
      ~~~
    description_markdown:
---

Returns status information on a specific file.