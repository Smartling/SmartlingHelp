---
title: Get String Translations
endpoint_id: GetStringTranslations
categories:
  - strings
layout: v2endpoint
endpoint_url: '/strings-api/v2/projects/{{projectId}}/translations'
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
        Pagination settings. See [limit & offset](/developers/API/v2/General-Information/Limit-and-Offset/) for more. By default returns will be limited to 500 per request. This is also the maximum allowed value. You can set smaller return sizes by setting `limit` to a value less than `500`.

response:
  json_markdown: |-
    ~~~json
    {
      "response": {
          "code": "SUCCESS",
          "messages": [],
          "data": {
              "totalCount": 1,
              "items": [
                  {
                      "hashcode": "ebb125de896c6b7237c617ca56e73773",
                      "stringText": "My Friends",
                      "stringVariant": "key.variant",
                      "keys": [
                          {
                              "fileUri": "test.properties",
                              "key": "some.string.key"
                          }
                      ]
                      "targetLocaleId": "es-ES",
                      "workflowStepUid": "akj2354",
                      "translations": [
                          {
                              "translation": "Mis Amigos",
                              "pluralForm": null,
                              "modifiedDate":"2015-11-21T01:51:17Z"
                          }
                      ]
                  },
                  {
                      "hashcode": "cdb125de896c6b7237c617ca56e73774",
                      "stringText": "My Friends",
                      "stringVariant": "key.variant",
                      "keys": [
                      ]
                      "targetLocaleId": "es-ES",
                      "workflowStepUid": "abc123",
                      "translations": [
                          {
                              "translation": "Actividad",
                              "pluralForm": null,
                              "modifiedDate":"2015-11-21T01:51:17Z"
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

Only authorized and active strings will be returned. Excluded, unauthorized & inactive strings will not be returned. If a string is authorized but does not have a published translation, the `translations` array for that string will be empty.