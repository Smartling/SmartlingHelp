title: Locales Dictionary
categories:
  - locales
layout: v2endpoint
endpoint_url: /locales-api/v2/dictionary/locales
method: GET
request:
  parameters:
    - title: localeIds
      type: array
      required: false
      description_markdown: Returns only details for selected locales.
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "totalCount": 2,
                "items": [{
                    "localeId": "en",
                    "description": "English",
                    "language": {
                        "languageId": "en",
                        "description": "English"
                    },s
                    "country": null
                }, {
                    "localeId": "en-US",
                    "description": "English (United States)",
                    "language": {
                        "languageId": "en",
                        "description": "English"
                    },
                    "country": {
                        "countryId": "US",
                        "description": "United States"
                    }
                }]
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---
