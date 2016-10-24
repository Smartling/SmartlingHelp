---
title: Download Glossary
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}/download
method: GET
request:
  parameters:
    - title: format
      type: string
      required: true
      description_markdown: |
        Sets the file format for the download. Accepted values are `csv` or `tbx`.
    - title: localeIds
      type: string
      required: false
      description_markdown: |
        Comma-separated list of locales to return translations for.
response:
  json_markdown:
    ~~~
    200 OK
    {{file contents}}
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Downloads a glossary as a CSV or TBX file.