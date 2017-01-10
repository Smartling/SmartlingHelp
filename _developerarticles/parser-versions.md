---
layout: article
title: Parser Versions
categories:
  - files
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

  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

How [strings are created](/knowledge-base/articles/unique-strings-and-variants/) from files you upload to Smartling is determined by the file format, any configuration you do, and the version of the Smartling parser that is applied. The most recent update to Smartling's file parser was the [release of Version 3 on October 13 2015](/knowledge-base/articles/file-parser-version-3-13-october-2015/) and we are continuing to add new features to version 3 ahead of the next major release. Some new integration features are only available for files using this version.

When you upload a 'new' file it will always use the latest parser version. When you update (overwrite) a file that is already in your project, the parser version that was used originally for the file continues to be used for all future updates. This avoids updates to your file resulting in strings being created differently, which could impact the translation status of the file.

## Upgrade Parser Version to Use New Features

You may want to upgrade the parser version used by a file that you normally update. If for example, you want to take advantage of a new integration feature that is not available in an older parser version.

## Impact of Parser Version Upgrades

Upgrading the parser version used by a file can result in the source strings for that file changing. This can impact the overall translation status of the file. Some previously translated strings may become inactive and new strings may be created in the project. If new strings are created, existing translations may be leverageable, including automatic leverage with SmartMatch, but the new string may still need to go through some or all of a workflow.

Known major impacts of a parser upgrade include:

*   XLIFF - v3 adds support for variants - this will cause all new strings to be created when upgrading from v2 to v3.

## Process for Parser Version Upgrade

In order to “upgrade” the parser version used by a file that has already been uploaded you must first delete the file, then re-upload it. You can use the same URI as before in this case, but the upload will not be considered an update or overwrite, it will be considered a new file. The file will be parsed with the latest parser version on this upload. Immediately after you delete the file its strings will become unavailable until the file has been re-uploaded and re-parsed.

If you are using custom file [namespaces](/knowledge-base/articles/string-sharing-namespaces/), it is critical that you use the same namespace when you re-upload the file. Changing the namespace will result in ALL the file’s strings being considered new, unique strings.

### Estimating the Impact of a Parser Version Upgrade

If you would like to analyze what the impact of updating the parser version will be you can use this process:

**1)** Create a test/sandbox project that has at least one language used in the original project. This project should NOT share translation memories and should not have SmartMatch enabled.

**2)** Upload the file in the test/sandbox project, after adding any new integration directives you want to use. Do not authorize the file or its strings.

Now you can compare all of the source strings between the projects. The easiest way to do this is to use the global search function:

**3)** In Global Search select the two projects, the two files and the one language that is shared. In the result you can ignore translations; and focus on just source strings. If every source string is duplicated in the two projects you have no impact from the latest parser. If the source strings differ you will have impact if you upgrade the parser version in your working project.

In the future Smartling will be exposing the parser version used by a file in APIs and user interfaces
