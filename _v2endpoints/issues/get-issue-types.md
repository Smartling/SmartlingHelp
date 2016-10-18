---
title: Get Issue Types
endpoint_id:
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/dictionary/issue-types
method: GET
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "totalCount": 2,
                "items": [{
                    "description": "Source",
                    "issueTypeCode": "SOURCE",
                    "subTypes": [{
                        "issueSubTypeCode": "CLARIFICATION",
                        "description": "Clarification"
                    }, {
                        "issueSubTypeCode": "MISSPELLING",
                        "description": "Misspelling"
                    }]
                }, {
                    "description": "Translation",
                    "issueTypeCode": "TRANSLATION",
                    "subTypes": [{
                        "issueSubTypeCode": "POOR_TRANSLATION",
                        "description": "Poor Translation"
                    }, {
                        "issueSubTypeCode": "DOES_NOT_FIT_SPACE",
                        "description": "Doesn't Fit Space"
                    }, {
                        "issueSubTypeCode": "PLACEHOLDER_ISSUE",
                        "description": "Placeholder Issue"
                    }, {
                        "issueSubTypeCode": "GENERAL_ISSUE",
                        "description": "General Issue"
                    }, {
                        "issueSubTypeCode": "REVIEW_TRANSLATION",
                        "description": "Review Translation"
                    }]
                }]
            }
        }
    }
    ~~~
  parameters:
    - title: issueTypeCode & issueSubType Code
      type: string
      required: false
      description_markdown: |
        Identifies the issue type. `issueTypeCode` is either `SOURCE` or `TRANSLATION`. Each have their own set of `issueSubType` values:
          * `SOURCE`  
            * `CLARIFICATION`  
            * `MISSPELLING`  
          * `TRANSLATION`  
            * `POOR_TRANSLATION`  
            * `DOES_NOT_FIT_SPACE`  
            * `PLACEHOLDER_ISSUE`  
examples:
  - title:
    code_markdown:
    description_markdown:
---

Smartling may occasionally add or change the list of allowed issue types. This request returns all current issue types.
