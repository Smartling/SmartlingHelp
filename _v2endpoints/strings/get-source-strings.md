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
        Pagination settings. See [limit & offset](/developers/API/v2/General-Information/Limit-and-Offset/) for more. By default returns will be limited to 500 per request. This is also the maximum allowed value. You can set smaller return sizes by setting `limit` to a value less than `500`.

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