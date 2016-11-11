---
title: List Files
categories:
  - files
layout: v2endpoint
endpoint_url: /files-api/v2/projects/{{projectId}}/files/list
method: GET
request:
  parameters:
    - title: uriMask
      type: string
      required: false
      description_markdown: |
        Returns only files with a URI containing the given substring. Case is ignored. For example, the value `.json` will match `strings.json` and `STRINGS.JSON` but not `json.strings`.
        
    - title: fileTypes[]
      type: array
      required: false
      description_markdown: |
        File types you want to list. Accepted values are: `android`, `ios`, `gettext`, `html`, `javaProperties`, `yaml`, `xliff`, `xml`, `json`, `docx`, `pptx`, `xlsx`, `idml`, `qt`, `resx`, `plaintext`, `cvs`.

    - title: lastUploadedAfter
      type: string
      required: false
      description_markdown: |
        Return all files uploaded after the specified date. See [Date Format](/developers/api/v2/#date-format) for more details.
        
    - title: lastUploadedBefore
      type: string
      required: false
      description_markdown: |
        Return all files uploaded before the specified date. See [Date Format](/developers/api/v2/#date-format) for more details.
        
    - title: limit & offset
      type: string
      required: false
      description_markdown: |
        For calls that return long lists of results, use `limit` and `offset` to return results in pages. `limit` sets the number of results that will be returned. `offset` determines the first record to be returned.
        
        For example, you can set your first call to return a `limit` of `50` with an `offset` of `0` to get the first 50 results. A second call with a `limit` of `50` and an `offset` of `50` will return results 51-100, and so on. You can use the `totalCount` parameter of the response to determine how many calls you will need to make to retrieve the full set of results.
        
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "totalCount": "1",
                "items": [{
                    "fileUri": "/myproject/i18n/ui.properties",
                    "lastUploaded": "2016-10-21T08:30:22Z",
                    "fileType": "javaProperties",
                    "hasInstructions": "false"
                }]
            }
        }
    }
    ~~~
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -H "Authorization: Bearer {token}" "https://api.smartling.com/files-api/v2/projects/{projectId}/files/list?fileTypes\[json\]&uriMask=strings"
      ~~~
    description_markdown:
---

Lists recently uploaded files. Returns a maximum of 500 files.