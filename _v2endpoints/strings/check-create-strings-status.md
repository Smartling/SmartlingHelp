---
title: Check Create Strings Status
categories:
  - strings
layout: v2endpoint
endpoint_url: '/strings-api/v2/projects/{{projectId}}/processes/{{processUid}}'
method: GET
response:
  json_markdown: |-
    ~~~json
    {
        "response" : {
            "code" : "SUCCESS",
            "data" : {
                "processUid" : "7908ae61-3489-48e1-9e28-10652634d34e",
                "processState" : "OPEN | CLOSED | FAILED",
                "createdDate" : "2016-08-21T0B1:51:17Z",
                "modifiedDate" : "2016-09-21T0B1:51:17Z",
                "processStatistics" : {
                    "requested" : 100,
                    "processed" : 95,
                    "errored" : 5,
                    "skipped" : 0
                }
            }
        }
    }
    ~~~
examples:
  - title: Curl
    code_markdown: |

    description_markdown:
---

If a Create Strings request takes longer than 60 seconds to process, a `202` response will be returned, indicating that the process of creating strings is continuing but not yet complete. This response will include a `proccessUid` value which can be used to check the progress of the request. This request returns a `processState` value of `open`, indicating that the request is still continuing, `closed`, indicating the request has successfully completed, and `failed`, meaning the request could not be completed.

Processes have a limited lifespan after they are complete. This request will fail if you specify an expired `processUid`.