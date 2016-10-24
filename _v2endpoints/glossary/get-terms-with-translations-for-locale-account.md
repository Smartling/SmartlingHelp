---
title: Get Glossary terms with translations for a locale - whole Account
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{accountUid}/glossaries/{glossaryUid}/locales/{localeId}/terms
method: GET
request:
  parameters:
    - title: termUids
      type: string
      required: false
      description_markdown: |
        Return only terms matching the listed UIDs. Provide UIDs as a single comma-separated string.
    - title: termText
      type: string
      required: false
      description_markdown: |
        Return only terms matching a string. Match is case-insensitive.
    - title: limit
      type: number
      required: false
      description_markdown: |
        Maximum number of results returned.
    - title: offset
      type: number
      required: false
      description_markdown: |
        Offset returned results for pagination.
    - title: sort
      type: string
      required: false
      description_markdown: |
        Identifies a field and direction to sort results by. Formatted as the field and direction separated by a comma, e.g. `sort=termText,asc`. See the response object for accepted field values.
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
             "totalCount":2,
             "items":[
                {
                   "termUid":"e390a4d6-aef2-11e5-b159-0ad0c2f6b537",
                   "termText":"cold calls",
                   "caseSensitive":false,
                   "exactMatch":false,
                   "partOfSpeechCode":"UNSPECIFIED",
                   "definition":"",
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":false,
                   "doNotTranslate":false,
                   "deprecated":false,
                   "notes":"",
                   "createdDate":"2015-12-30T12:43:12Z",
                   "modifiedDate":"2015-12-30T12:43:12Z"
                },
                {
                   "termUid":"e390a4d6-aef2-11e5-b159-0ad0c2f6b538",
                   "termText":"cold call",
                   "caseSensitive":true,
                   "exactMatch":false,
                   "partOfSpeechCode":"VERB",
                   "definition":"My definition",
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":false,
                   "doNotTranslate":false,
                   "deprecated":false,
                   "notes":"My notes",
                   "createdDate":"2015-12-30T12:43:12Z",
                   "modifiedDate":"2015-12-30T12:43:12Z"
                }
             ]
          }
       }
    }
    ~~~
  parameters:
    - title: totalCount
      type: number
      description_markdown: Total number of glossary terms returned.
    - title: items
      type: array
      description_markdown: An object for each glossary term. See our [Glossary documentation](/support/articles/manage-glossaries/#term-details) for details on the fields.
examples:
  - title:
    code_markdown:
    description_markdown:
---

Returns glossary terms from an account by UID. For this request, terms need not belong to the same glossary, but you must specify each term requested by it's UID and all terms must belong to a Glossary in the account. If any of the provided UIDs are not found, the request will return an error.