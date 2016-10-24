---
title: Get Glossary Details
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}
method: GET
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
               "glossaryUid":"50d9dab5-6b8b-11e5-ba24-127b00b163a3",
               "name":"Marketing Glossary",
               "description":"Glossary for marketing terms.",
               "sourceLocaleId":"en-US",
               "createdByUserUid":"ah27fhq8",
               "createdDate": "2015-11-21T01:51:17Z"
          }
       }
    }
    ~~~
  parameters:
    - title: data
      type: object
      required: false
      description_markdown: |
        Details of the created glossary, including a unique identifier, glossary name, description, source locale, created date and an ID for the user who created the glossary.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns detailed information for the requested glossary. If no glossary matching the provided UID, an error will be returned.