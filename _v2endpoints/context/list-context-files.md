---
title: List Contexts for a Project
categories:
  - context
layout: v2endpoint
endpoint_url: '/context-api/v2/projects/{{projectId}}/contexts'
method: GET
request:
  parameters:
    - title: offset
      type: string
      required: false
      description_markdown: |
        If your original request returns an `offset` value, the set of results is incomplete. Run the request again, with the given `offset` value to see more results. When `offset` is null, there are no more results to return.

response:
  json_markdown: |-
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "items": [
            {
              "contextUid": "456sf9e5-0ef5-4s82-b65f-a00ge12sabv0",
              "contextType": "IMAGE",
              "name": "image2016-7-1 16-59-46.png",
              "created": "2016-12-19T17:28:29Z"
            },
            {
              "contextUid": "ac79677f-0e0a-4d01-b4e3-b94e2e6ba09c",
              "contextType": "IMAGE",
              "name": "image-context.jpg",
              "created": "2016-11-11T13:23:32Z"
            }
          ],
          "offset": null
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