---
title: Rename File
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/file/rename
method: POST
request:
  json_markdown: |
    ~~~json
    {
      "fileUri": "test.json",
      "newFileUri": "test2.json"
    }
    ~~~
  
  parameters:
    - title: fileUri
      type: string
      required: true
      description_markdown: |
        The current URI of the file you want to rename.
        
    - title: newFileUri
      type: string
      required: true
      description_markdown: |
        The new URI for the file. We recommend that you use a VCS-style file path + file name format, like: `/myproject/i18n/ui.properties`. This fileUri must not already exist in your Smartling project.
        
response:
  json_markdown: |
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": null
      }
    }
    ~~~
examples:
  - title:
    code_markdown: |
      ~~~curl
      
      ~~~
    description_markdown:
---

Renames an uploaded file by changing the fileUri. After you rename a file, it will only be identified by the new fileUri you provide.