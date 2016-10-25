---
title: Get Glossary terms with translations for a locale - whole Account
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/locales/{{localeId}}/terms
method: GET
request:
  parameters:
    - title: termUids
      type: string
      required: true
      description_markdown: |
        Return only terms matching the listed UIDs. Provide UIDs as a single comma-separated string. A maximum of 100 termUids can be included in a single request.
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
                   "translation":{
                      "localeId":"fr-FR",
                      "translatedTerm":"arabian architecture in french",
                      "notes":"",
                      "translatorUserUid":null,
                      "lockTranslation":false,
                      "submittedForTranslation":false,
                      "createdDate":"2015-10-21T11:08:01Z",
                      "modifiedDate":"2015-10-27T13:09:56Z"
                   },
                   "termUid":"6b3e1e8c-eb40-4c32-a9f7-024e407b0b30",
                   "termText":"arabian architecture",
                   "caseSensitive":true,
                   "exactMatch":false,
                   "partOfSpeechCode":"VERB",
                   "definition":"",
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":true,
                   "doNotTranslate":false,
                   "deprecated":false,
                   "notes":"",
                   "createdDate":"2015-10-19T15:48:34Z",
                   "modifiedDate":"2015-11-09T15:33:19Z"
                },
                {
                   "translation":{
                      "localeId":"fr-FR",
                      "translatedTerm":"summer time french 22",
                      "notes":"",
                      "translatorUserUid":null,
                      "lockTranslation":false,
                      "submittedForTranslation":false,
                      "createdDate":"2015-12-02T14:28:00Z",
                      "modifiedDate":"2015-12-02T14:28:00Z"
                   },
                   "termUid":"aaf416ee-98ff-11e5-b159-0ad0c2f6b537",
                   "termText":"summer time",
                   "caseSensitive":false,
                   "exactMatch":false,
                   "partOfSpeechCode":"ADJECTIVE",
                   "definition":"",
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":false,
                   "doNotTranslate":false,
                   "deprecated":false,
                   "notes":"",
                   "createdDate":"2015-12-02T14:19:15Z",
                   "modifiedDate":"2015-12-02T14:19:15Z"
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