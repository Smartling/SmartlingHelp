---
title: Last Modified - All Locales
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/file/last-modified
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
          "totalCount": 3,
          "items": [
            {
              "localeId": "zh-CN",
              "lastModified": "2016-11-15T22:57:18Z"
            },
            {
              "localeId": "fr-FR",
              "lastModified": "2016-11-15T22:58:10Z"
            },
            {
              "localeId": "de-DE",
              "lastModified": "2016-11-15T22:57:18Z"
            }
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

Returns the date a file was last modified for all locales.