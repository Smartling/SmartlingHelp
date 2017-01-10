---
title: Repository Connector
layout: section
master_category: false
subsections:
  - title: none
    published: true
subarticles:
  - title: Repository Connector - Version History
  - title: Repository Connector - Installation and Setup
  - title: Repository Connector - Translation Settings
  - title: Repository Connector - Frequently Asked Questions
wistia:
  video: false
  id:
---


When working with localized content in an agile, continuous deployment environment, it is critical to optimize for translation speed. The Repository Connector is designed to shorten the time it takes to translate new content by automatically pushing changes to resource files in a Github or Beanstalk repository to the Smartling dashboard and pushing new translations back to the repository.

The Repository Connector acts a broker between the source repository and the Smartling project. Changes to resource files in the repository are automatically pushed to the Smartling project. &nbsp;The Connector will register a callback for each file so that it can be notified when the file is completely translated, then it will immediately download the translated file and can optionally push the translated files back to the repository.

## When to use the Repository Connector

While the Repository Connector gives you many options for configuration, it is primarily intended as a 'one-size-fits-most' convenience method for handling simple integrations without needing to create a custom integration, using Smartling API. If the codebase in your project is kept in a single code repository, and you have simple conventions for storing and accessing your translated resource files, the repository connector is likely to be the simplest solution.

If your project is complex, exists across multiple repositories or requires different handling for different locales, it may be easier to use the [Smartling API](/developers/api/v2/) to create a custom integration from scratch. Our [SDKs](/developers/api/v2/sdks/) give you powerful tools to quickly develop the ideal integration process for your app. This is especially true if you need to run checks or tests on translations. For example, the repository connector will automatically pick up any changes to your source files and deliver translations when they are ready, but it cannot tell you if all the translations your project needs are ready in a particular locale. In these circumstances, consider a custom integration designed for the unique needs of your app.