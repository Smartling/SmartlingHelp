---
title: Strings
category: strings
layout: v2section
endpoints:
  - title: Create Strings
  - title: Check Create Strings Status
  - title: Get Source Strings
  - title: Get String Translations
---


The Strings API allows you to direcly upload strings to a Smartling project and fetch original strings or translations.

## Haschcodes and Uniqueness

For each string in a Smartling project has a unique identifier, made by hashing together the string text, variant metadata and, in some cases, namespace. When adding strings via the String API, each string will be unique. If you try to create a string with identical variant metadata and string text to a string that already exists in the project, the string will be overwritten.