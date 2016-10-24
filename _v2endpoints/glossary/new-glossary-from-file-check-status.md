---
title: Create new Glossary from Excel file - check status
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/import-jobs/{{glossaryImportJobUid}}
method: GET
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
             "glossaryImportJobUid":"78d93dde-5e3d-4beb-8171-415f82ca2c7b",
             "glossary": {
               "glossaryUid": "5c8d2aa8-e254-4ab3-8eb3-3b96b24f8609",
               "name": "Import keysight test",
               "accountUid": "8a196313",
               "createdByUserUid": "58870b8ee965",
               "sourceLocaleId": "en",
               "description": "test desc",
               "createdDate": "2016-05-18T12:04:38Z"
             },
             "fileName":"ExampleImportGlossary2.xlsx",
             "accountUid":"b76d6285",
             "glossaryImportJobStatus":"PENDING",
             "termsNumber":10,
             "termsProcessed":0,
             "localesNumber":20,
             "createdDate":"2016-03-21T15:00:48Z",
             "modifiedDate":"2016-03-21T15:00:48Z",
             "createdByUserUid":"58870b8ee965"
          }
       }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns the status of a Glossary import. Possible `glossaryImportJobStatus` values are `PENDING`, `IN_PROGRESS`, `SUCCESSFUL` or `FAILED`.