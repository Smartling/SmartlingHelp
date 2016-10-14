---
title: List Context Files
endpoint_id: DownloadContextFile
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts'
method: GET
response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "totalCount": 2,
          "items": [
            {
              "contextUid": "456sf9e5-0ef5-4s82-b65f-a00ge12sabv0",
              "contextType": "IMAGE",
              "name": "image2016-7-1 16-59-46.png",
              "created": "09/23/2016 20:59:31.420"
            },
            {
              "contextUid": "ac79677f-0e0a-4d01-b4e3-b94e2e6ba09c",
              "contextType": "IMAGE",
              "name": "image-context.jpg",
              "created": "09/26/2016 18:22:54.879"
            }
          ]
        }
      }
    }
    ~~~          
examples:
  - title:
    code_markdown:
    description_markdown:
---


Returns a list of metadata for all context files in a project, including the unique ID, type of context (currently all contexts are of type `IMAGE`), file name and created date.