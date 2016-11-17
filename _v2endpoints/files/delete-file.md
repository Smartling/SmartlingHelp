---
title: Delete File
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/file/delete
method: POST
request:
  json_markdown: |
    ~~~json
    {
      "fileUri": "test.json",
    }
    ~~~
  
  parameters:
    - title: fileUri
      type: string
      required: true
      description_markdown: |
        The URI of the file you want to delete.
        
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

Removes the file from Smartling. The file will no longer be available for download. Any completed translations will remain in the Translation Memory.

Smartling deletes files asynchronously and it typically takes a few minutes to complete. While deleting a file, you can not upload a file with the same fileUri.