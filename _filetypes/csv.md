---
title: 'CSV'
layout: supportedfiletype
extension: '.csv'
smartling_identifier: 'csv'
resources: 
  - title: Comma-Separated Values (CSV) files RFC
    link: 'http://www.ietf.org/rfc/rfc4180.txt'
directive_prefix: '# '
directive_suffix: ''
directive_format: '# smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  Directives are specified using comments. Each directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive. The directives must be defined at the top of the file, ahead of the csv content.

directives:
  - placeholder_format
  - placeholder_format_custom
  - pseudo_inflation
  - string_format_paths
  - field_separator
  - string_encloser
  - paths
  - string_format_paths
  - source_key_paths
  - translation_language_path
  - first_row_header
  - locales_map
  - add_utf8_bom
  - output_original_row
  - strip_instructions_on_download
  - first_row_header
  - string_instructions_paths
---

## String Instructions

Set using [string_instructions_paths](#string_instructions_paths) directive.

## Specifying Paths

Some directives require you to specify a path or set of paths to keys or strings in the file. A path in CSV files is simply a column number, such as `1`.

> When declaring a path for a key or string instruction the key or instruction will be applied to the next translatable string to the right, so you will need to organize your files so that keys and instructions are to the left of translatable strings in each row.

## Other Information

You may define values with and without quotations. For example:

~~~
value1, "Value 2"
~~~

If you want to use the symbol " inside quoted value you escape it with double quotes like:

~~~
"She said ""hello"" to me."
~~~

which corresponds to the string: `She said "hello" to me`

Smartling offers several options for [downloading CSV files](/developers/files/csv-download-options/).

## Standard Placeholder format

{% include standard_placeholders.md %} 