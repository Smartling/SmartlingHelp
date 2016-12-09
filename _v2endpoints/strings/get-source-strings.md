---
title: Get Source Strings
endpoint_id: GetStringTranslations
categories:
  - strings
layout: v2endpoint
endpoint_url: '/strings-api/v2/projects/{{projectId}}/sources'
method: GET
request:
  parameters:
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
        Pagination settings. By default returns will be limited to 500 per request. This is also the maximum allowed value. You can set smaller return sizes by setting `limit` to a value less than `500`.

response:
  json_markdown: |-
    ~~~json
    {
      "response": {
          "code": "SUCCESS",
          "data": {
              "items": [
                  {
                      "hashcode": "ebb125de896c6b7237c617ca56e73773",
                      "stringText": "My Friends",
                      "parsedStringText": "",
                      "variant": "key.variant",
                      "keys": [
                          {
                              "fileUri": "test.properties",
                              "key": "some.string.key"
                          }
                      ]
                  },
                  {
                      "hashcode": "cdb125de896c6b7237c617ca56e73774",
                      "stringText": "Activity",
                      "parsedStringText": "",
                      "variant": "key.variant",
                      "keys": [
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

Returns source strings from Smartling. You can get strings by specifying a file you want strings for, or you can specify individual strings by hashcode. 

> If you do not specify at least one of these parameters (`hashcodes` or `fileUri`) no results will be returned.

Note that if you use this call to get strings not created with the strings API, you may see differences in the response:

* You may see a value for `parsedStringText` but a `null` value for `stringText`. The `stringText` records the raw input received by the String API so will only appear for strings uploaded via String API.
* If you are getting a GDN string, the original placeholder values you used will not be returned, as these are not saved by Smartling. GDN strings will have placeholders in the format `{0}`, `{1}`, etc.
