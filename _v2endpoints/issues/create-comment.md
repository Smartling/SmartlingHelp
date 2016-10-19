---
title: Create Comment
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues/{{issueUid}}/comments
method: POST
request:
  json_markdown: |
    ~~~json
    {
        "commentText": "Hey, are you sure this is what you want?"
    }
    ~~~
  parameters:
    - title: commentText
      type: string
      required: true
      description_markdown: Text of the comment you want to make.
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "issueCommentUid": "a75fea779bbb",
                "commentText": "comment text",
                "createdByUserUid": "661801f19693",
                "createdDate": "2015-12-22T12:34:49Z",
                "commentTextModifiedDate": null
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Create a comment for an issue.

> Comment text is plain text only. HTML tags and markdown are not supported. Maximum of 4000 characters.