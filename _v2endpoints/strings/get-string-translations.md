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
    - title: retrievalType
      type: string
      required: false
      description_markdown: |
        Sets the types of translations you want returned. `published` will only return translations that have completed their workflows and been published. `pending` will return any saved translations.
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
              "totalCount": 2,
              "items": [
                  {
                      "hashcode": "ebb125de896c6b7237c617ca56e73773",
                      "stringText": "My Friends",
                      "parsedStringText": "",
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
                      "stringText": "Your Friends",
                      "parsedStringText": "",
                      "stringVariant": "key.variant",
                      "keys": [
                      ]
                      "targetLocaleId": "es-ES",
                      "workflowStepUid": "abc123",
                      "translations": [
                          {
                              "translation": "Tus Amigos",
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
  parameters:
    - title: totalCount
      type: object
      description_markdown:
        Total number of translated strings in the response.
    - title: items
      type: object
      description_markdown:
        An array including one object for each string created, giving variant metadata, text of the string, and an array of translations. In many cases the translation array will only contain one item with a plural form of `null`. For plural strings, a translation array object will be returned for each plural form. Plural forms follow [CLDR rules](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html).
examples:
  - title: Curl
    code_markdown: |

    description_markdown:
---

Returns translated strings from Smartling. You can get strings by specifying a file you want translations for, or you can specify individual strings by hashcode.

> If you do not specify at least one of these parameters (`hashcodes` or `fileUri`) no results will be returned.

Only authorized and active strings will be returned. Excluded, unauthorized & inactive strings will not be returned. If a string is authorized but does not have a published translation, the `translations` array for that string will be empty.

Note that if you use this call to get strings not created with the strings API, you may see differences in the response:

* You may see a value for `parsedStringText` but a `null` value for `stringText`. The `stringText` records the raw input received by the String API so will only appear for strings uploaded via String API.
* If you are getting a GDN string, the original placeholder values you used will not be returned, as these are not saved by Smartling. GDN strings will have placeholders in the format `{0}`, `{1}`, etc.