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
             "termText": "Cold Call",
             "partOfSpeechCode": "VERB",
             "definition": "An unsolicited sales call.",
             "notes": "Do not translate literally, use appropriate local term.",
             "caseSensitive": false,
             "exactMatch": false,
             "variations": "propspecting",
             "synonyms": "outbound call",
             "antonyms": "inbound marketing",
             "seo": false,
             "doNotTranslate": false,
             "translation": {
                "localeId": "fr-FR",
                "translatedTerm": "démarchage téléphonique",
                "notes": "Avoid using 'prospection téléphonique'",
                "translatorUserUid": "58870b8e965",
                "submittedForTranslation": true,
                "lockTranslation": false
             }
          },
          {
             "termText": "Banner",
             "partOfSpeechCode": "NOUN",
             "definition": "Large web ad.",
             "caseSensitive": false,
             "exactMatch": false,
             "seo": false,
             "doNotTranslate": false
          }
       ]
    }
    ~~~
response:
  json_markdown: |
    ~~~json
    {
       "response": {
          "code": "SUCCESS",
          "data": {
             "totalCount": 2,
             "items": [
                {
                     "termText": "Cold Call",
                     "partOfSpeechCode": "VERB",
                     "definition": "An unsolicited sales call.",
                     "notes": "Do not translate literally, use appropriate local term.",
                     "caseSensitive": false,
                     "exactMatch": false,
                     "variations": "propspecting",
                     "synonyms": "outbound call",
                     "antonyms": "inbound marketing",
                     "seo": false,
                     "doNotTranslate": false,
                     "translation": {
                        "localeId": "fr-FR",
                        "translatedTerm": "démarchage téléphonique",
                        "notes": "Avoid using 'prospection téléphonique'",
                        "translatorUserUid": "58870b8e965",
                        "submittedForTranslation": true,
                        "lockTranslation": false
                     }
                },
                {
                     "termText": "Banner",
                     "partOfSpeechCode": "NOUN",
                     "definition": "Large web ad.",
                     "caseSensitive": false,
                     "exactMatch": false,
                     "seo": false,
                     "doNotTranslate": false
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