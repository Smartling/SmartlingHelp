---
title: List Glossaries for an Account
categories: 
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries
method: GET
request:
  parameters:
    - title: name
      type: string
      required: false
      description_markdown: |
        Return only glossaries with a name containing a given string. Match is case insensitive.
    - title: glossaryUids
      type: string
      required: false
      description_markdown: |
        Return only glossaries matching a given set of UIDs. Provide all UIDs in a single comma-separated string.
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
           "totalCount": 2,
             "items":[
                {
                   "glossaryUid":"50d9dab5-6b8b-11e5-ba24-127b00b163a3",
                   "name":"Another document tester-Glossary",
                   "createdByUserUid":"ah27fhq8",
                   "createdDate":"2015-11-21T01:51:17Z",
                   "sourceLocaleId":"en-US",
                   "description":"some desc"
                },
                {
                   "glossaryUid":"50e5c8d3-6b8b-11e5-ba24-127b00b163a3",
                   "name":"BizDocs test Max's project-Glossary",
                   "createdByUserUid":"ah27fhq8",
                   "createdDate":"2015-11-21T01:51:17Z",
                   "sourceLocaleId":"en-US",
                   "description":"some desc"
                }
             ]
          }
       }
    }
    ~~~
  parameters:
    - title: totalCount
      type: number
      description_markdown: |
        Total number of glossaries listed in the response.
    - title: items
      type: array
      description_markdown: |
        An object for each glossary, listing a unique identifier, glossary name, description, source locale, created date and an ID for the user who created the glossary.
        > The `createdByUserUid` cannot currently be used to identify a user until a future release of People API.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns a list of all glossaries in an account. Optional filters for glossary name and UID can be added.