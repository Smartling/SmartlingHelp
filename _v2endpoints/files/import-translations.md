---
title: Import Translations
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{projectId}/locales/{localeId}/file/import
method: POST
request:
  parameters:
    - title: fileUri
      type: string
      required: true
      description_markdown: |
        The Smartling URI for file that contains the original language strings - this file must already have been uploaded to Smartling.
    - title: file
      type: file
      required: true
      description_markdown: |
        The file contents to upload. This should be submitted via a multipart/form-data POST request. The file you upload must contain the translations you wish to import.
    - title: fileType
      type: string
      required: true
      description_markdown: |
        The type of file being uploaded. Permitted values are: `android`, `ios`, `gettext`, `javaProperties`, `yaml`, `xml`, `json`, `csv`
    - title: translationState
      type: string
      required: true
      description_markdown: |
        Sets which workflow state the translations are imported to. Setting `PUBLISHED` will cause the imported translations to be published immediately. Setting `POST_TRANSLATION` will cause translations to be imported into the first workflow step after the 'Translation' step. If you have no workflow steps between 'Translation' and 'Published', imported translations will be published.
    - title: overwrite
      type: boolean
      required: false
      description_markdown: |
        Sets whether the translations in the uploaded file should replace any translations that already exist for strings in the target file. Accepted values are `TRUE` or `FALSE` (default).
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "wordCount": "[number]",
                "stringCount": "[number]",
                "translationImportErrors": [{
                    "importKey": "[string]",
                    "stringHashcode": "[string]",
                    "contentFileId": "[number]",
                    "messages": [
                        "[string]", "[string]"
                    ]
                }]
            }
        }
    }
    ~~~
  parameters:
    - title: wordCount
      description_markdown: |
        Number of words imported.
    - title: stringCount
      description_markdown: |
        Number of strings imported.
    - title: translationImportErrors.importKey
      description_markdown: |
        Key for an imported string affected by an error.
    - title: translationImportErrors.stringHashcode
      description_markdown: |
        The hashcode of a string affected by an error.
    - title: translationImportErrors.contentFileID
      description_markdown: |
        The ID of the file affected by an error.
    - title: translationImportErrors.messages
      description_markdown: |
        Information about an import error.
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -X GET -H "Authorization: Bearer {{token}}" 'https://api.smartling.com/files-api/v2/projects/{{projectId}}/file/status?fileUri=file.properties'
      ~~~
    description_markdown:
---

Imports translations for a target file, already uploaded to Smartling. The import relies on key metadata to match translations to the original source strings. See the [Knowledge Base](/knowledge-base/articles/importing-translations/) for more information on import. Since you must upload a file as part of this request, the request body must be multipart/form-data.