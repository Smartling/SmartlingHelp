---
title: Download Context File
endpoint_id: DownloadContextFile
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts/{{contextUid}}/content'
method: GET
response:
  json_markdown: |-
    ~~~
    200 OK
    {{file contents}}
    ~~~          
examples:
  - title:
    code_markdown:
    description_markdown:
---


Downloads a Smartling context image file.