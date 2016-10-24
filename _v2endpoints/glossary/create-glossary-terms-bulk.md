---
title: Create Glossary terms - batch
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{accountUid}/glossaries/{glossaryUid}/terms/batch
method: POST
request:
  json_markdown: |
    ~~~json
    {
       "terms":[
          {
             "termText":"term 22",
             "partOfSpeechCode":"UNSPECIFIED",
             "definition":"",
             "notes":"",
             "caseSensitive":false,
             "exactMatch":false,
             "variations":"",
             "synonyms":"",
             "antonyms":"",
             "seo":false,
             "doNotTranslate":false
          },
          {
             "termText":"term 33",
             "partOfSpeechCode":"UNSPECIFIED",
             "definition":"",
             "notes":"",
             "caseSensitive":false,
             "exactMatch":false,
             "variations":"",
             "synonyms":"",
             "antonyms":"",
             "seo":false,
             "doNotTranslate":false,
             "translation":{
                "localeId":"fr-CA",
                "translatedTerm":"term 33 french ca",
                "notes":"some notes from user",
                "translatorUserUid":"58870b8ee965",
                "lockTranslation":false
             }
          }
       ]
    }
    ~~~
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
                   "termText":"term 22",
                   "partOfSpeechCode":"UNSPECIFIED",
                   "definition":"",
                   "notes":"",
                   "caseSensitive":false,
                   "exactMatch":false,
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":false,
                   "doNotTranslate":false
                },
                {
                   "termText":"term 33",
                   "partOfSpeechCode":"UNSPECIFIED",
                   "definition":"",
                   "notes":"",
                   "caseSensitive":false,
                   "exactMatch":false,
                   "variations":"",
                   "synonyms":"",
                   "antonyms":"",
                   "seo":false,
                   "doNotTranslate":false,
                   "translation":{
                      "localeId":"fr-CA",
                      "translatedTerm":"term 33 french ca",
                      "notes":"some notes from user",
                      "translatorUserUid":"58870b8ee965",
                      "submittedForTranslation":false,
                      "lockTranslation":false
                   }
                }
             ]
          }
       }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Creates new glossary terms. The only required parameter for each term is `termText`. See our [Glossary documentation](/support/articles/manage-glossaries/#term-details) for details on each term parameter. All terms must pass validation or the entire request will return an error.