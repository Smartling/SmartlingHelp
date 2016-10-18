---
title: Create Issue
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/projects/{{projectId}}/issues
method: POST
request:
  json_markdown: |
    ~~~json
    {
        "issueText": "This translation is incorrect. Please fix.",
        "issueSubTypeCode": "POOR_TRANSLATION",
        "issueTypeCode": "TRANSLATION",
        "string": {
            "hashcode": "c32c16cddafd63dfa0dc12449372a093",
            "localeId": "ru-RU"
        }
    }
    ~~~
  parameters:
    - title: issueText
      type: string
      required: true
      description_markdown: |
        Free text field explaining an issue.
      values:
        - title:
          description_markdown:
    - title: issueTypeCode / issueSubTypeCode
      type: string
      required: true
      description_markdown: |
        Identifies the issue type. `issueTypeCode` is either `SOURCE` or `TRANSLATION`. Each have their own set of `issueSubType` values:
                  * `SOURCE`  
                    * `CLARIFICATION`  
                    * `MISSPELLING`  
                  * `TRANSLATION`  
                    * `POOR_TRANSLATION`  
                    * `DOES_NOT_FIT_SPACE`  
                    * `PLACEHOLDER_ISSUE`  
    - title: string.hashcode
      type: string
      required: true
      description_markdown: |
        Unique identifier for a string in Smartling. Used by the Issues API to attach an issue to a string. You can get the hashcode for a string via [String API](/developers/apii/v2/strings/).
      values:
        - title:
          description_markdown:
    - title: localeId
      type: string
      required: true
      description_markdown: |
        An identifying code for a language in Smartling.
      values:
        - title:
          description_markdown:
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "data": {
                "string": {
                    "hashcode": "c32c16cddafd63dfa0dc12449372a093",
                    "localeId": null
                },
                "resolvedByUserUid": null,
                "reportedByUserUid": "661801f19693",
                "active": true,
                "createdDate": "2015-11-10T16:01:22Z",
                "resolvedDate": null,
                "issueText": "asdfsd",
                "issueUid": "dceaa996d417",
                "projectId": "e8fa915fa",
                "issueTypeCode": "SOURCE",
                "issueSubTypeCode": "CLARIFICATION",
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

Creates a new issue for a string.