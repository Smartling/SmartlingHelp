---
title: Repository Connector
layout: section
master_category: false
subsections:
  - title: none
    published: true
subarticles:
  - title:
    published: true
wistia:
  video: false
  id:
---


When working with localized content in an agile, continuous deployment environment, it is critical to optimize for translation speed. The Repository Connector is designed to shorten the time it takes to translate new content by automatically pushing changes to resource files in a Github or Beanstalk repository to the Smartling dashboard and pushing new translations back to the repository.

The Repository Connector acts a broker between the source repository and the Smartling project. Changes to resource files in the repository are automatically pushed to the Smartling project. &nbsp;The Connector will register a callback for each file so that it can be notified when the file is completely translated, then it will immediately download the translated file and can optionally push the translated files back to the repository.

See our developer documentation for [full details of the repository connector]().