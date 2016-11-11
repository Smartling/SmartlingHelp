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
                "fileUri": "[/myproject/i18n/admin_ui.properties]",
                "totalStringCount": "[number]",
                "totalWordCount": "[number]",
                "fileType": "[fileType]",
                "lastUploaded": "[YYYY-MM-DDThh:mm:ssZ]",
                "totalCount": "1",
                "parserVersion": "3",
                "hasInstructions": "true",
                "items": [{
                    "localeId": "de-DE",
                    "authorizedStringCount": "[number]",
                    "completedStringCount": "[number]",
                    "authorizedWordCount": "[number]",
                    "excludedWordCount": "[number]"
                }]
            }
        }
    }
    ~~~
  parameters:
    - title: parserVersion
      description_markdown: |
        Indicates the Smartling Parser Version used to parse the file. Current parser is [version 3](/developers/files/parser-versions/).
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -X GET -H "Authorization: Bearer {{token}}" 'https://api.smartling.com/files-api/v2/projects/{{projectId}}/file/status?fileUri=file.properties'
      ~~~
    description_markdown:
---