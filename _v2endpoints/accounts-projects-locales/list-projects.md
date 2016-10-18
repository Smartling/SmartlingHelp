---
title: List Projects
endpoint_id:
categories:
  - accounts-projects
layout: v2endpoint
endpoint_url: /accounts-api/v2/accounts/{{accountUid}}/projects
method: GET
request:
  parameters:
    - title: projectNameFilter
      type: string
      required: false
      description_markdown: Returns only projects matching the filter (case insensitive).
    - title: includeArchived
      type: string
      required: false
      description_markdown: Sets whether to include archived projects in the list. Defaults to `false`.
    - title: limit
      type: string
      required: false
      description_markdown:
        Maximum number of projects to return. See Limit and Offset for details. Maximum of 500 results per request.
    - title: offset
      type: string
      required: false
      description_markdown:
        Sets an offset for the list of projects to return. See Limit and Offset for details.
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": [
                {
                    "totalCount": 1,
                    "items": [
                        {
                            "projectId": "258fad94",
                            "projectName": "ProjectName",
                            "accountUid": "48ade9f989",
                            "sourceLocaleId": "en-US",
                            "sourceLocaleDescription": "English (United States)",
                            "archived": false,
                            "projectTypeDisplayValue": "Application Resource Files",
                        }
                    ]
                }
            ]
        }
    }
    ~~~
examples:
  - title:
    code_markdown: |
      ~~~curl
      curl -H "Authorization: Bearer {token}" "https://api.smartling.com/files-api/v2/projects/{projectId}/file?fileUri={your-file-URI}"
      ~~~
    description_markdown:
---

Returns a list of projects in an account, matching optional filter settings. Archived projects will not be returned unless you set `includeArchived=true`.