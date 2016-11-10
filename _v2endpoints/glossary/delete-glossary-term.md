---
title: Delete Glossary term
categories:
  - glossary
layout: v2endpoint
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}/terms/{{termUid}}
method: DELETE
response:
  json_markdown: |
    ~~~json
    {
       "response": {
          "code": "SUCCESS",
          "data": null
       }
    }
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Delete a Glossary term. This will remove the term and all translations.