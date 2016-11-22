---
title: Create new Glossary from Excel file
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/import-jobs
method: POST
request:
  json_markdown: |
    Unlike most Smartling API POST requests, which take a JSON body, this request has a multi-part form body.
  parameters:
    - title: name
      type: string
      required: true
      description_markdown: |
        A name for the glossary. This name must be unique. Attempting to use a name already in use in the account will return an error.
    - title: sourceLocaleId
      type: string
      required: true
      description_markdown: |
        Source locale for the glossary. 
    - title: description
      type: string
      required: false
      description_markdown: |
        Description for the glossary
    - title: importFile
      type: file
      required: true
      description_markdown: |
        XLSX file containing the Glossary you want to import. See [Glossary Spreadsheet Format](/knowledge-base/articles/glossary-spreadsheet-format/) for details.
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"ACCEPTED",
          "data":{ 
              "glossaryImportJobUid":"78d93dde-5e3d-4beb-8171-415f82ca2c7b",
              "glossary": {
                  "glossaryUid": "5c8d2aa8-e254-4ab3-8eb3-3b96b24f8609",
                  "name": "Legacy Terms",
                  "accountUid": "8a196313",
                  "createdByUserUid": "58870b8ee965",
                  "sourceLocaleId": "en",
                  "description": "Legacy terms imported into Smartling.",
                  "createdDate": "2016-05-18T12:04:38Z"
               },
               "fileName": "LegacyTerms.xlsx",
               "accountUid": "b76d6285",
               "glossaryImportJobStatus": "PENDING",
               "termsNumber": 10,
               "termsProcessed": 0,
               "localesNumber": 20,
               "createdDate": "2016-03-21T15:00:48Z",
               "modifiedDate": "2016-03-21T15:00:48Z",
               "createdByUserUid": "58870b8ee965"
          }
       }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Creates a new Glossary in your account from an uploaded Excel spreadsheet. The format of the spreadsheet is important. See [Import Glossary](/knowledge-base/articles/import-glossary/) and [Glossary Spreadsheet Format](/knowledge-base/articles/glossary-spreadsheet-format/).

This process is asynchronous and may take a few minutes to complete. Therefore the response will have a `202 ACCEPTED` status, instead of the usual `200 SUCCESS`. The response includes a `glossaryImportJobUid` which can be used to check the status of the import. 