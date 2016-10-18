---
title: Edit Issue Text
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v1/projects/{projectId}/issues/{issueUid}/issueText 
method: POST
request:
  json_markdown: |
    ~~~json
    {
      "issueText": "new issue text"
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
      "response": {
        "data": {
          "issueText": "new issue text",
          "issueTextModifiedDate": "2015-11-10T16:01:22Z"
        },
        "code": "SUCCESS"
      }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Replaces the text of an issue with new text. Note that only the author of the issue can perform this action. The `issueTextModifiedDate` property of an issue object shows when it was last updated.