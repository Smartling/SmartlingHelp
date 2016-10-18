---
title: Project Details
endpoint_id:
categories:
  - accounts-projects
layout: v2endpoint
endpoint_url: /projects-api/v2/projects/{{projectId}}
method: GET
request:
  parameters:
    - title: includeDisabledLocales
      type: string
      required: false
      description_markdown: Include details of disabled locales. Defaults to `false`.
response:
  json_markdown: |
    ~~~json
    {
        "response": {
            "code": "SUCCESS",
            "data": {
                "projectId": "2249fadc3",
                "projectName": "Project 111",
                "accountUid": "48ade9f989",
                "sourceLocaleId": "en-US",
                "sourceLocaleDescription": "English (United States)",
                "archived" : false,
                "projectTypeDisplayValue": "Application Resource Files",
                "targetLocales": [
                    {
                       "localeId": "de-DE",
                       "description": "German (Germany)",
                       "enabled": true,
                    },
                    {
                       "localeId": "es-ES",
                       "description": "Spanish",
                       "enabled": false,
                    }
                ]
            }
        }
    }
    ~~~
---

Returns detailed information on a project, including project name, type, source language, details of all target languages, and whether or not the project is archived. Details of disabled locales will not be included unless you set `includeDisabledLocales=true`. 