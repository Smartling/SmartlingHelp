---
title: Get Summary Report
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/reports/summary
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "sourceIssueCount": {
                    "count": 1
                },
                "translationIssueCounts": [{
                    "targetLocaleId": "es-ES",
                    "count": 1
                }, {
                    "targetLocaleId": "ru-RU",
                    "count": 1
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

Returns a count of all issues for the source language and each target language.