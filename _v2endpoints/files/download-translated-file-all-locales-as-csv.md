---
title: Download Translated File - All Locales as CSV
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{projectId}/locales/all/file
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
          
    - title: includeOriginalStrings
      type: boolean
      required: false
      description_markdown: |
        Defines a fallback strategy for a file. If `true` (default), the original string will be returned for any string without a translation. If set to `false`, untranslated strings will not be included in the download. Depending on the filetype, an empty string may be returned or the untranslated element or key/value pair may be stripped from the file. See the documentation for the filetype you are using for more info. This parameter is only supported for Android XML, iOS Strings, YAML, Gettext, Java Properties, XLIFF, JSON and Custom XML files.

response:
  json_markdown: |
    ~~~
    200 OK
    HEADER:
    Content-Disposition: attachment; filename="translations.csv"
    file contents
    ~~~
---

Downloads all translations for the requested file in a single CSV file.

> In most cases, this option requires customized file directives to be added to the original file. See [CSV File Download Options](/developers/files/csv-download-options/) for more details.

It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested files will not be part of the response.

When you upload a UTF-16 character encoded file, then /file/get requests for that file will have a character encoding of UTF-16. All other uploaded files will return with a character encoding of UTF-8.

You can always use the content-type header in the response of a file/get request to determine the character encoding.