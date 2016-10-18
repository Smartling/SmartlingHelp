---
title: Get Issue Details
endpoint_id:
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues/{{issueUid}}
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "data": {
                "string": {
                    "hashcode": "c32c16cddafd63dfa0dc12449372a093",
                    "localeId": "ru-RU"
                },
                "resolvedByUserUid": null,
                "reportedByUserUid": "661801f19693",
                "active": true,
                "createdDate": "2015-11-10T16:01:22Z",
                "resolvedDate": null,
                "issueText": "This translation is incorrect. Please fix.",
                "issueUid": "dceaa996d417",
                "projectId": "e8fa915fa",
                "issueTypeCode": "TRANSLATION",
                "issueSubTypeCode": "POOR_TRANSLATION",
                "issueStateCode": "OPENED",
                "issueTextModifiedDate": null
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

Returns detailed information on a single issue. Note that the `resolvedByUserUid` and `reportedByUserUid` values are not currently usable for identifying the users who created or resolved issues. In future, a People API will be exposed for looking up user details.