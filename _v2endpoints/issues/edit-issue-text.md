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
      "issueText": "Edited issue text."
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "issueText": "Edited issue text.",
          "issueTextModifiedDate": "2015-11-10T16:01:22Z"
        }
      }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Replaces the text of an issue with new text. Note that only the author of the issue can perform this action. The `issueTextModifiedDate` property of an issue object shows when it was last updated.

> Issue text is treated as plain text. Smartling will save the text as provided and will not attempt to render this text with any special formatting in its UIs; it will not be rendered as HTML or markdown.  Consumers of the issue API should be aware and escape the text as needed before attempting to render it. Maximum length is 4000 characters.