---
title: Download Report (CSV)
categories:
  - issues
layout: v2endpoint
endpoint_url: /issues-api/v2/accounts/{{accountId}}/reports/{{reportUid}}
method: GET
response:
  json_markdown: |
    ~~~csv
    file “IssuesReport_2015-07-22_2015-12-22.csv”:
    
    "Project","Source Locale","Target Locale","Issue Type","Issue Sub Type","Open","Closed"
    "rischenko_test_ss_new2","English (United States)","","Source","Clarification","8","3"
    "rischenko_test_ss_new2","English (United States)","Russian","Translation","Doesn't Fit Space","2","0"
    ~~~
examples:
  - title:
    code_markdown:
    description_markdown:
---

Downloads a previously generated Issues Report in CSV format.