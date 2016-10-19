---
title: Create Issues Report (CSV) - Project
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{projectId}/reports/general.csv
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
                "reportUid": "fe6fa97e975b"
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Creates a report containing detailed information on all issues in a project matching specified filter options. You can filter based on the date issues were created, strings, target languages, issue types and states and the user who opened the issue. The only required parameters are `createdDateBefore` and `createdDateAfter`. This method will return a reportUid which can then be used to download the CSV file.