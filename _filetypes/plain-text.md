---
title: 'Plain Text'
layout: supportedfiletype
extension: '.txt'
smartling_identifier: 'plainText'
directive_prefix: ''
directive_suffix: ''
directive_format: 'smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  Unlike other file types, plain text does not support inline file directives as comments, in order to use a directive you must specify each directive using the file upload API

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
---

The plain text document format is a simple way to quickly translate text. Smartling considers each line of text in the document a single translation string. Each string is considered unique by file - which means if two files have the exact same line of text - they will be captured as two separate strings.

## Standard Placeholder format

{% include standard_placeholders.md %} 

















