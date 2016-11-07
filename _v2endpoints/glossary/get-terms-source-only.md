---
title: Get Glossary terms - source only
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}/terms
method: GET
request:
  parameters:
    - title: termText
      type: string
      required: false
      description_markdown: |
        Return terms matching a string. Match is wildcard-style and case-insensitive. For example, `termText=cold` will match `Cold Call`, but `termText=Cold Calls` will not.
    - title: limit
      type: number
      required: false
      description_markdown: |
        Maximum number of results returned. Default for this call is `15`, maximum is `5000`.
    - title: offset
      type: number
      required: false
      description_markdown: |
        Offset returned results for pagination.
    - title: sort
      type: string
      required: false
      description_markdown: |
        Identifies a field and direction to sort results by. Formatted as the field and direction separated by a comma, e.g. `sort=termText,asc`. ccepted values are `termText` (default), `createdDate` and `modifiedDate`. Directions are specified as `asc` or `desc`.
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

Returns terms from a Glossary. Only the source term is included in this response.