---
title: 'Upload File'
endpoint_id: UploadFile
categories:
  - files
layout: v2endpoint
endpoint_url: '/files-api/v2/projects/{{projectId}}/file'
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
            Value that uniquely identifies the uploaded file. This ID can be used to request the file back. We recommend you use file path + file name, similar to how version control systems identify the file. 
            
            For example: `/myproject/i18n/ui.properties.`
            
        - title: fileType
          required: true
          description_markdown: |
            Unique identifier for the file type. 
            
            Permitted values are: `android`, `ios`, `gettext`, `html`, `javaProperties`, `yaml`, `xliff`, `xml`, `json`, `docx`, `pptx`, `xlsx`, `idml`, `qt`, `resx`, `plaintext`, `cvs`, or `stringsdict`.'
            
        - title: authorize
          required: false
          description_markdown: |
             Determines whether content in the file is authorized (available for translation) in all locales upon submitting the file via the Smartling Dashboard. An error message will return if there are insufficient translation funds and authorized is set to true. 
            
             If a string has been completely excluded for translation from all languages, or excluded from translation for a specific language, `authorize` will NOT authorize it. 
            
             > To specify a limited list of locales to authorize, use the `localeIdsToAuthorize[]` parameter.
            
          values:
            - title: TRUE
              description_markdown: |
                Content will be available for translation in all locales on upload'
            - title: FALSE
              Default: 'YES'
              description_markdown: |
                Content will be added to the "Awaiting Authorization" queue on upload        
        - title: 'localeIdsToAuthorize[]'
          type: array
          required: false
          description_markdown: |
            This value, if set, authorizes strings for translation into specific locales. Use the project/locale/list call to get the list of locales for the project or see them in the dashboard on the API settings page. 
            
            Use multiple localeIdsToAuthorize parameter pairs to authorize more than one locale. You can add languages by uploading the file again and indicating the language to authorize with `localeIdsToAuthorize` or all languages with `authorized`, or in the dashboard using the "Show Partially Authorized" filter option from the Awaiting Authorization list. 
            
            If string has been completely excluded for translation from all languages, or excluded from translation for a specific language, `localesIdsToAuthorize` will NOT authorize it. 
            
            > Do not set the `authorized` parameter to TRUE if you want to specify individual locales to authorize. Submitting an upload with both of these parameters set will result in a validation error.
            
        - title: smartling.namespace
          required: false
          description_markdown: |
            > For accounts created after July 31st 2015 only. 
            
            Define a custom [namespace](/knowledge-base/articles/string-sharing-namespaces/) for the file. This works for Application Resource Files only. For Business Documents, see [Update File](/knowledge-base/articles/managing-business-documents/#updating-files). 
            > While this parameter shares the format of other file directives, it will not work as an inline directive and must be specified in the API call.'
        - title: smartling.file_charset
          required: false
          description_markdown: |
            Specifies a custom charset for text-format files. The value should be the name of the character set. See a full list of supported character sets [here](http://docs.oracle.com/javase/6/docs/technotes/guides/intl/encoding.doc.html).
            
            If this directive is not used, Smartling will use the `Content-Type` request header to determine if the content is encoded with UTF-16, UTF-16B or UTF-16LE. If there is no `Content-Type` header, Smartling will examine the file for UTF-16 characters. If none are detected, UTF-8 encoding will be used.
            
            > Once this property has been set for a file, it cannot be changed. If you reupload the file, it will use the original charset, even if you change the directive. An error will be returned if this directive is used when uploading binary-format file types, such as Office or IDML files.
            
        - title: 'smartling.{command}'
          required: false
          description_markdown: |
            Provides custom parser configuration for supported file types. See [Supported File Types](/developers/supported-file-types/) for more details.
            
        - title: callbackUrl
          required: false
          description_markdown: |
            A GET request that creates a callback to a URL when a file is 100% published for a locale. The callback gives the fileUri and locale with the format `http[/s]://your.url?locale=xx-XX&fileUri=your.file`. 
            
            If you upload the file again, without a `callbackUrl`, it will remove any previous `callbackUrl` for that file. The [RequestBin](http://requestb.in) service is a convenient way to test callback URLs. RequestBin generates a short-lived disposable URL that displays all posted requests.'

response:
  description_markdown_markdown: | 
    A successful upload usually receives a `200 SUCCESS` response, but if the upload is not complete after a minute, a `202 ACCEPTED` response will be sent. See [Response Format](/developers/API/v2/Response-Format) for more details.
    
  json_markdown: |
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "overWritten": "true",
          "stringCount": "7",
          "wordCount": "90"
        }
      }
    }
    ~~~
  parameters:
    - title: overWritten
      description_markdown: |
        Indicates whether the uploaded file has overwritten an existing file; either `true` or `false`.
    - title: stringCount
      description_markdown: |
        The number of strings in the uploaded file.
    - title: wordCount
      description_markdown: |
        The number of words in the uploaded file.

examples:
  - title: Curl
    code_markdown: |
      ~~~curl
      curl -X POST -H "Authorization: Bearer {token}" -F "file=@file.properties;type=text/plain" -F "fileUri=file.properties"  -F "fileType=javaProperties" 'https://api.smartling.com/files-api/v2/projects/{projectId}/file'
      ~~~
       
    description_markdown:
---

Uploads original source content to Smartling (50MB limit for .ppt, .pptx; 25MB limit for .idml; 20MB limit for .doc, .docx; and 10MB limit for all others).
  
See [our Files documentation](/developers/files/) for a list of accepted file types.

