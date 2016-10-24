---
title: List parts of speech
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/dictionary/parts-of-speech
method: GET
response:
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
             "totalCount":9,
             "items":[
                {
                   "partOfSpeechCode":"NOUN",
                   "description":"Noun"
                },
                {
                   "partOfSpeechCode":"VERB",
                   "description":"Verb"
                },
                {
                   "partOfSpeechCode":"ADJECTIVE",
                   "description":"Adjective"
                },
                {
                   "partOfSpeechCode":"ADVERB",
                   "description":"Adverb"
                },
                {
                   "partOfSpeechCode":"PRONOUN",
                   "description":"Pronoun"
                },
                {
                   "partOfSpeechCode":"PREPOSITION",
                   "description":"Preposition"
                },
                {
                   "partOfSpeechCode":"INTERJECTION",
                   "description":"Interjection"
                },
                {
                   "partOfSpeechCode":"CONJUNCTION",
                   "description":"Conjunction"
                },
                {
                   "partOfSpeechCode":"UNSPECIFIED",
                   "description":"Unspecified"
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

Returns a list of all accepted `partOfSpeechCode` values. These are used in the Create Glossary Terms request.