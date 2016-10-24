---
title: Edit Glossary details
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}
method: PUT
request:
  json_markdown: |
    ~~~json
    {
       "name":"Marketing Glossary",
       "description":"Glossary for all marketing terms",
       "sourceLocaleId":"en-US"
    }
    ~~~
    
  parameters:
    - title: name
      type: string
      required: true
      description_markdown: |
        A name for the glossary. This name must be unique. Attempting to use a name already in use in the account will return an error.
    - title: description
      type: string
      required: false
      description_markdown: |
        Description for the glossary
    - title: sourceLocaleId
      type: string
      required: false
      description_markdown: |
        Source locale for the glossary. 
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

---

Edits the name, description or source locale of a glossary. All parameters are optional but you must include at least one for your request to have any effect.
