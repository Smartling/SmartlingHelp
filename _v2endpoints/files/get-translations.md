---
title: 'Get Translations'
categories:
  - files
layout: v2endpoint
endpoint_url: '/files-api/v2/projects/{{projectId}}/locales/{{localeId}/file/get-translations'
method: POST 
request:
    parameters:
        - title: file
          required: true
          description_markdown: |
            The file contents to upload. This should be submitted via a multipart/form-data POST request.
      
        - title: fileUri
          required: true
          description_markdown: |
            Identifies an existing file in Smartling. Smartling will create namespace, directives and instructions for the temporary file based on this file.
            
            For example: `/myproject/i18n/ui.properties.`
            
        - title: retrievalType
          required: false
          description_markdown: |
            Determines the desired format for the download. Applies to translated files only.          

        - title: includeOriginalStrings
          required: false
          description_markdown: |
            `TRUE` or `FALSE`. Specifies whether Smartling will return the original string or an empty string where no translation is available. This parameter is supported for gettext, java properties, custom XML, and JSON files only.

response:
  json_markdown: |
    ~~~
    200 OK
    HEADER:
    Content-Disposition: attachment; filename="fname.ext"
    translated file contents
    ~~~
---

Temporarily uploads a file, then returns a translated version for requested locales.

This call can be used instead of a standard upload/download if you keep different versions of a file in multiple branches or are triggering rebuilds, and don’t want your files in Smartling to be overwritten by out-of-date versions of a file.

To use the call, you upload a file and identify the Smartling URI where the main version of that file is saved. Smartling will match strings shared between the uploaded file and the main file and return any available translations.