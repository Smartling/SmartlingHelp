---
title: Delete Glossary
categories:
  - glossary
layout: v2endpoint
endpoint_url:  /glossary-api/v2/accounts/{{accountUid}}/glossaries/{{glossaryUid}}

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

Deletes a Glossary. Note that if a Glossary has been assigned to a Linguistic Package, you will not be able to delete it. Linguistic Packages are [managed in the Smartling Dashboard](/support/sections/linguistic-assets/).