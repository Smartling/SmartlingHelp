---
title: Get String Translations
endpoint_id: GetStringTranslations
categories:
  - strings
layout: v2endpoint
endpoint_url: '/strings-api/v2/projects/{{projectUid}}/translations'
method: GET
request:
  parameters:
    - title: targetLocaleId
      type: string
      required: true
      description_markdown: |
        Smartling ID for the language you want to get translations for.
    - title: fileUri
      type: string
      required: false
      description_markdown: |
        URI of a file you want to get translations for.
    - title: hashcodes
      type: string
      required: false
      description_markdown: |
        Hashcodes for each string you want to get translations for.
    - title: limit & offset
      type: string
      required: false
      description_markdown: |
        Pagination settings. See [limit & offset](/developers/API/v2/General-Information/Limit-and-Offset/) for more.

response:
  json_markdown: |-
    ~~~json
    {
      "response": {
          "code": "SUCCESS",
          "messages": [],
          "data": {
              "items": [
                  {
                      "hashcode": "ebb125de896c6b7237c617ca56e73773",
                      "keys": [
                          {
                              "url": "test.properties",
                              "key": "some.string.key"
                          }
                      ],
                      "targetLocaleId": "es-ES",
                      "workflowStepUid": "akj2354",
                      "translations": [
                          {
                              "translation": "Mis Amigos",
                              "pluralForm": "None"
                          }
                      ]
                  },
                  {
                      "hashcode": "cdb125de896c6b7237c617ca56e73774",
                      "keys": [
                      ]
                      "targetLocaleId": "es-ES",
                      "workflowUid": "abc123",
                      "translations": [
                          {
                              "translation": "Actividad",
                              "pluralForm": "None"
                          }
                      ]
                  }
              ]
          }
      }
    }
    ~~~
examples:
  - title: Curl
    code_markdown: |

    description_markdown:
---

Returns translated strings from Smartling. You can get strings by specifying a file you want translations for, or you can specify individual strings by hashcode.