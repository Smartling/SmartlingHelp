---
title: Get Comment Details
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues/{{issueUid}}/comments/{{issueCommentUid}}
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "data": {
                "createdByUserUid": "661801f19693",
                "createdDate": "2015-12-22T11:54:27Z",
                "commentText": "test comment",
                "issueCommentUid": "ac5211a26eca",
                "commentTextModifiedDate": null
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

Returns detailed information on a single issue comment. Note that the `createdByUserUid` value is not currently usable for identifying the users who created comments. In future, a People API will be exposed for looking up user details.