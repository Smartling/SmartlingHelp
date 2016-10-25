---
title: Edit Glossary term
categories:
  - glossary
layout: v2endpoint
endpoint_url:  /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}/terms/{{termUid}}
method: PUT
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

Edits the details of a glossary term. With the exception of the `translation` object, you must provide all desired fields every time you edit the term. If you do not provide a field or leave it blank, any existing value for that field will be deleted. To add translations for multiple locales, make a request for each locale. Keep all fields except for the `translation` object identical in each request.