---
title: Find Issues
categories:
  - issues
layout: v2endpoint
endpoint_url: '/issues-api/v2/projects/{projectId}/issues/list'
method: POST
request:
  json_markdown: |
    ~~~json
    {
        "createdDateBefore": "2015-12-23T18:14:09Z",
        "createdDateAfter": "2015-11-10T15:14:09Z",
        "stringFilter": {
            "hashcodes": [
                "afe47cdaffe0c0226506919c291d9c1a",
                "afe37cdaffe0c0226508919c291d9c1a",
                "afe47cdaffe0c02265406919c291d2c1a"
            ],
            "localeIds": [
                "ru-RU"
            ]
        },
        "offset": 0,
        "limit": 30,
        "reportedByUserUid": "661801f19693",
        "issueStateCodes": ["OPENED"],
        "issueTypeCodes": ["TRANSLATION"],
        "issueSubTypeCodes": ["DOES_NOT_FIT_SPACE"]
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "items": [{
                    "string": {
                        "hashcode": "c32c16cddafd63dfa0dc12449372a093",
                        "localeId": "ru-RU"
                    },
                    "resolvedByUserUid": null,
                    "reportedByUserUid": "661801f19693",
                    "createdDate": "2015-12-21T16:38:48Z",
                    "resolvedDate": null,
                    "issueText": "does not fit space",
                    "issueUid": "902372ac8e1e",
                    "projectId": "e8fa915fa",
                    "issueTypeCode": "TRANSLATION",
                    "issueSubTypeCode": "DOES_NOT_FIT_SPACE",
                    "issueStateCode": "OPENED",
                    "issueTextModifiedDate":
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


Returns a list of issues matching specified filter options. You can filter based on the date issues were created, target languages, strings, issue types and states and the user who opened the issue. Unless otherwise specified, request will return a maximum of 30 results. All parameters are optional.