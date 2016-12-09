---
layout: article
title: Response Format
categories:
  - api
  - v2
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

## Success

Success responses are encoded into a generalized JSON structure with two basic properties: a response code, and a custom data object.

~~~json
{
    "response": {
        "code": "SUCCESS",
        "data": {
            "localeId": "de-DE",
            "lastModified": "[YYYY-MM-DDThh:mm:ssZ]"
        }
    }
}
~~~

## Errors

Error responses include an array of errors, each with a key and message explaining the details of the error. Some errors may give additional details.

~~~json
{
    "response": {
         "code": "VALIDATION_ERROR",
         "errors": [{
              "key": "parse.error",
              "message": "There was a problem loading your file. No source strings found; Check your configuration http://goo.gl/OW6Q1o",
              "details": {
                   "errorId": "cse8rqnf"
              }
         }]
  }
}
~~~

## Response Codes



| Value | Description | HTTP Code |
| -----     | --------------- | ------------- |
| SUCCESS | If the service request was processed normally | 200 |
| ACCEPTED | It an asynchronous task, such as a file upload, has begun, but is not completed at the time the response is sent. | 202 |
| VALIDATION_ERROR | If something specific was wrong with the request parameters provided. One or more will describe the particular invalid parameter. | 400 |
| AUTHENTICATION_ERROR | If the provided credentials were not valid. | 401 |
| AUTHORIZATION_ERROR | Legacy error code from API | 401 |
| RESOURCE_LOCKED | The requested file is currently being processed by another operation. The file will be unlocked after the operation completes. See [Upload](/developers/api/v2/files/upload-file/) for more details. | 423 |
| MAX_OPERATIONS_LIMIT_EXCEEDED | Too many simultaneous API requests per project or file. | 429 |
| GENERAL_ERROR | If an unexpected error occurred during the service request processing. | 500 |
| MAINTENANCE_MODE_ERROR | If Smartling has entered maintenance mode, all API services will return this error. After exiting maintenance mode all services should return to normal. | 503 |

