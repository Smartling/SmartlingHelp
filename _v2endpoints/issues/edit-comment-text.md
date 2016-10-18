---
title: Edit Comment Text
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v1/projects/{projectId}/issues/{issueUid}/comments/{issueCommentUid}
method: POST
request:
  json_markdown: |
    ~~~json
    {
      "commentText": "Edited comment text."
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "issueCommentUid": "a75fea779bbb",
          "commentText": "Edited comment text.",
          "createdByUserUid": "661801f19693",
          "createdDate": "2015-12-22T12:34:49Z",
          "commentTextModifiedDate": "2015-12-23T12:34:49Z"
        }
      }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Replaces the text of an issue with new text. Note that only the author of the issue can perform this action. The `commentTextModifiedDate` property of an issue object shows when it was last updated.