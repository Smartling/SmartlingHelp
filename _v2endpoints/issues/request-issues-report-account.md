---
title: Request Issues Report - Account
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/accounts/{accountId}/reports/general
method: POST
request:
  json_markdown: |
    ~~~json
    {
        "createdDateBefore": "2015-12-23T18:14:09Z",
        "createdDateAfter": "2015-11-10T15:14:09Z",
        "projectIds": ["b7af9137e", "4c463f4af"],
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
                "reportItems": [{
                    "resolvedCount": 3,
                    "project": {
                        "projectName": "test project",
                        "projectId": "e8fa915fa"
                    },
                    "sourceLocale": {
                        "localeId": "en-US",
                        "description": "English (United States)"
                    },
                    "targetLocale": null,
                    "issueSubType": {
                        "description": "Clarification",
                        "issueSubTypeCode": "CLARIFICATION"
                    },
                    "issueType": {
                        "description": "Source",
                        "issueTypeCode": "SOURCE"
                    },
                    "openCount": 8
                }, {
                    "resolvedCount": 0,
                    "project": {
                        "projectName": "test project",
                        "projectId": "e8fa915fa"
                    },
                    "sourceLocale": {
                        "localeId": "en-US",
                        "description": "English (United States)"
                    },
                    "targetLocale": {
                        "localeId": "ru-RU",
                        "description": "Russian"
                    },
                    "issueSubType": {
                        "description": "Doesn't Fit Space",
                        "issueSubTypeCode": "DOES_NOT_FIT_SPACE"
                    },
                    "issueType": {
                        "description": "Translation",
                        "issueTypeCode": "TRANSLATION"
                    },
                    "openCount": 2
                }]
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns detailed information on all issues in an account matching specified filter options. You can filter based on the date issues were created, strings, target languages, issue types and states and the user who opened the issue. The only required parameters are `createdDateBefore` and `createdDateAfter`.