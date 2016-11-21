---
title: Files
category: files
layout: v2section
endpoints:
  - title: Upload File
  - title: Download Original File
  - title: Download Translated File - Single Locale
  - title: Download Translated File - Multiple Locales as Zip
  - title: Download Translated File - All Locales as Zip
  - title: Download Translated File - All Locales in O


  - title: List Files
  - title: List File Types
  - title: Status - Single Locale
  - title: Status - All Locales
  - title: Rename File
  - title: Delete File
  - title: Last Modified - Single Locale
  - title: Last Modified - All Locales
  - title: Import Translations
  - title: Get Translations
---

Smartling's File API allows you to upload and retrieve files, display a list of recently uploaded files, and check the status of a translation’s progress.

Multiple READ operations can run simultaneously on a single file, but only one WRITE operation can run at a time. Attempting any other operation on a file while a WRITE operation is running will result in an error.

Concurrent API requests are limited to 20 per file and 50 per project. Exceeding this limit will result in a MAX_OPERATIONS_LIMIT_EXCEEDED error.