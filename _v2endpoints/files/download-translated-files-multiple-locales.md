---
title: Download Translated File - Single Locale
endpoint_id:
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/locales/{{localeId}}/file
method: GET
request:
  parameters:
    - title: fileUri
      type: string
      required: true
      description_markdown:
        Unique identifier for the file to be downloaded.
    - title: retrievalType
      type: string
      required: false
      description_markdown: |
        Sets the type of translations that will be retrieved. Accepted values are:
          
          * `pending` - Returns any saved translations (including non-published translations).
          
          * `published` - Returns only published/pre-published translations.
          
          * `pseudo` - Returns a modified version of the original text with additional characters inserted to expand the text. For example, the uploaded string `This is a sample string`, will be returned as `T~hís ~ís á s~ámpl~é str~íñg`. Pseudo translations enable you to test how a longer string integrates into your application.
          
          * `contextMatchingInstrumented` - Returns a modified version of the original file with strings wrapped in a non-visible Unicode symbols that can later be recognized and matched by the [Chrome Context Capture Extension](/knowledge-base/articles/capture-context-from-webpages-chrome-context-capture-extension/#improve-context-matching-with-instrumented-files.).


response:
  json_markdown: |
    ~~~
    200 OK
    HEADER:
    Content-Disposition: attachment; filename="fname.ext"
    file contents
    ~~~
  parameters:
    - title:
      type:
      required: false
      description_markdown:
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -H "Authorization: Bearer {token}" "https://api.smartling.com/files-api/v2/projects/{projectId}/file?fileUri={your-file-URI}"
      ~~~
    description_markdown:
---

Downloads the original version of the requested file from Smartling.

It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested file will not be part of the response.

When you upload a UTF-16 character encoded file, then download requests for that file will have a character encoding of UTF-16. All other downloaded files will have a character encoding of UTF-8. The `content-type` header in the response will contain encoding information.