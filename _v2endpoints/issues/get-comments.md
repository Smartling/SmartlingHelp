---
title: Get Comments
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues/{{issueUid}}/comments
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "items": [{
                    "createdByUserUid": "661801f19693",
                    "createdDate": "2015-12-22T12:40:27Z",
                    "commentText": "Hey, are you sure this is what you want?",
                    "issueCommentUid": "96dda721c268",
                    "commentTextModifiedDate": null
                }],
                "totalCount": 1
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns all comments on an issue. Note that the `createdByUserUid` value is not currently usable for identifying the users who created comments. In future, a People API will be exposed for looking up user details.