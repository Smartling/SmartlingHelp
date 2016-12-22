---
directive_id: 'string_format_paths'
title: 'string_format_paths'
values_markdown: |
  The value of this directive is expressed as `[format]:[paths]`.
description_markdown: |
  Specifies the format of strings for the specified paths and can enable HTML inside another file format.
  
  Currently supported formats are:
  
  *   `HTML` - string value will be parsed as HTML
  *   `@default` - (note the leading at-sign) string value will be treated as simple text.
  
  Separate multiple formats by commas
  
  You may specify a single path for a format or a comma-separated list of paths enclosed in square brackets. The list may be empty.
  
examples:
  - type: yaml
    code_single_line: 'smartling.string_format_paths = html: *'
    description_markdown: Smartling parses values of all nodes as HTML.
  - type: json
    code_single_line: '"string_format_paths" : "html: *"'
    description_markdown: Smartling parses values of all nodes as HTML.
  - type: csv
    code_single_line: 'smartling.string_format_paths=html:*'
    description_markdown: Smartling parses values of all columns as HTML.
  - type: yaml
    code_single_line: 'smartling.string_format_paths = html: */text'
    description_markdown: Smartling enables HTML in `text` nodes (and their subnodes), regardless of their parents.
  - type: json
    code_single_line: '"string_format_paths" : "html: */text"'
    description_markdown: Smartling enables HTML in `text` nodes (and their subnodes), regardless of their parents.
  - type: yaml
    code_single_line: 'smartling.string_format_paths = html: [*/text, */string]'
    description_markdown: Smartling enables HTML in `text` and `string` nodes (and their subnodes), regardless of their parents.
  - type: json
    code_single_line: '"string_format_paths" : "html: [*/text, *string]"'
    description_markdown: Smartling enables HTML in `text` and `string` nodes (and their subnodes), regardless of their parents.
  - type: yaml
    code_single_line: 'smartling.string_format_paths = html: /product/description'
    description_markdown: Smartling enables HTML in `/product/description` and subnodes.
  - type: json
    code_single_line: '"string_format_paths" : "html: /product/description"'
    description_markdown: Smartling enables HTML in `/product/description` and subnodes.
  - type: yaml
    code_single_line: 'smartling.string_format_paths = html: */text, @default: /system/log/text'
    description_markdown: Smartling enables HTML in `text` nodes (and subnodes), but disables HTML in `/system/log/text` (and subnodes), as the exact match overrides the pattern match.
  - type: json
    code_single_line: '"string_format_paths" : "html: */text, @default: /system/log/text"'
    description_markdown: Smartling enables HTML in `text` nodes (and subnodes), but disables HTML in `/system/log/text` (and subnodes), as the exact match overrides the pattern match.
  - type: yaml
    code_single_line: 'smartling.string_format_paths ='
    description_markdown: Disables the effect of the previous `string_format_paths` instruction.
  - type: xml
    code_single_line: 'smartling.string_format_paths ='
    description_markdown: Disables the effect of the previous `string_format_paths` instruction.
  - type: xml
    code_single_line: 'smartling.string_format_paths = html: /product/description'
    description_markdown: Smartling enables HTML in `/product/description` only.
  - type: xml
    code_single_line: 'smartling.string_format_paths = html: /product/description/'
    description_markdown: Smartling enables HTML in `/product/description` and all its child nodes.
  - type: xml
    code_single_line: 'smartling.string_format_paths = html: /product/description/, html: /product/title'
    description_markdown: Smartling enables HTML in `/product/description` and all its child nodes, and the `product/title` node.
---