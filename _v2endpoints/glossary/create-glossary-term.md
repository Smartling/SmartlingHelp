---
title: Create Glossary term
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}/terms
method: POST
request:
  json_markdown: |
    ~~~json
    {
       "termText":"cold call",
       "partOfSpeechCode":"VERB",
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
          "translatedTerm":"cold call french ca",
          "notes":"some notes from user",
          "translatorUserUid":"58870b8e965",
          "lockTranslation":false
       }
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
             "termText":"cold call",
             "partOfSpeechCode":"VERB",
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
                "translatedTerm":"cold call french ca",
                "notes":"some notes from user",
                "translatorUserUid":"58870b8e965",
                "submittedForTranslation":true,
                "lockTranslation":false
             }
          }
       }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Creates a new glossary term. The only required parameter is `termText`. See our [Glossary documentation](/support/articles/manage-glossaries/#term-details) for details on each term parameter. You can only add one translation object in this request. To add additional translations, use [Edit Glossary term](/developers/api/v2/glossary/edit-glossary-term/).