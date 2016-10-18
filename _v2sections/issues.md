---
title: Issues
category: issues
layout: v2section
endpoints:
  - title: Get Issue Types
  - title: Get Issue States
  - title: Create Issue
  - title: Edit Issue Text
  - title: Open or Close Issue
  - title: Get Issue Details
  - title: Create Comment
  - title: Edit Comment Text
  - title: Get Comments
  - title: Get Comment Details
  - title: Find Issues
  - title: Count Issues
  - title: Get Summary Report
  - title: Request Issues Report - Account
  - title: Create Issues Report (CSV) - Account
  - title: Download Report (CSV)
---

Issues are a way for Content Owners and Translation Resources to communicate about translation work. Each Issue is attached to one unique source string in a Smartling project. The issue is either a Source string issue or a Translation issue. If an issue is a translation issue then it is also associated with a specific target translation language. An issue is either Open or Closed and can have any number of user comments attached. Source Issues are visible to all resources in a project who can see the associated string. Translation Issues are visible only to resources who work on the language. Automatic email notifications are generated through the lifecycle of issues, depending on individual user’s profile settings.

For more information about how Issues work in the Smartling Dashboard, see our [user documentation](/support/articles/issues/).

Smartling’s Issues API provides methods for creating issues, changing the state of an issue, commenting on an issue and requesting detailed information and reports on issues and comments.

## Parameters

GET requests require no parameters except path variables to identify Projects, Issues and Comments. For POST requests, parameters should be passed in JSON format rather than multi-part form.
