---
title: 'JSON'
layout: supportedfiletype
extension: '.json'
smartling_identifier: 'json'
download_sample: 'json.json'
resources: 
  - title: Official JSON Standards
    link: 'http://json.org/'
directive_format: '{<br/>&nbsp;&nbsp;&nbsp;&nbsp;"smartling" : {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"directive_name" : "value",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"directive_name" : "value",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"..."<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;...<br/>}'
directive_instructions_markdown: |

  JSON directives are set at the top of the file, in the "smartling" node. Directives apply to the whole file and cannot be changed.

directives:
  - placeholder_format
  - placeholder_format_custom
  - translate_paths
  - translate_paths (to be deprecated)
  - source_key_paths (to be deprecated)
  - variants_enabled
  - string_format_paths
---

JSON files are based on name/value pairs. For example, in this basic JSON file “button1” is the name and “Home” is the value.

~~~json
{
    "button1": "Home"
}
~~~

Name/value pairs can be nested so that a path of several names leads to a value.

Smartling parses JSON files for translatable strings, and for key/variant metadata (Smartling keys) and translator instructions relating to those strings. Only JSON values can become strings or translator instructions in Smartling. Depending on how your file is structured, however, you may want to capture either a JSON value, or part of a name path as a key. Smartling allows for either option using the [translate_paths](#translate_paths) directive.

## Default Parsing

If you include no integration directives, Smartling will apply its default template and capture all JSON values as translatable strings and the complete name path leading to each string as key and variant metadata. The following placeholder types will be captured:

* `{x}`
* `{{x}}`
* `${x}`
* `%x%`
* `%%x%%`
* `##x##`
* `__x__`

## Keys/Variants

By default, the full path of keys leading to a string are captured as Key and Variant metadata. Custom key paths can be set and variant behavior turned off with directives

## Specifying Paths

Some directives require you to specify a path or set of paths to keys or strings in the file. A path is a slash-separated string which uses Xpath-like syntax (although it's not Xpath.). The nodes separator is always `/` (slash).

Wildcards are allowed in path definitions.

* If no wildcards, then the path identifies a single node and all its children ("exact subpath").
* If wildcards, then a path identifies a set of nodes and all their children ("path pattern"). Currently, only the * (asterisk) wildcard is implemented, which means "one or more nodes with any names".
* Exact subpaths have precedence over path patterns.

For example, in the following path specifications:

~~~
[*/text, */string, system/log/text, system/log/text/details]
~~~

Smartling processes these paths as follows:

* `/description/text` — matches `*/text`.
* `/description/general/text` - matches `*/text` directly.
* `/description/text/general` — matches its parent, `/description/text` , matches `*/text`.
* `/system/log/text` — matches both `/system/log/text` (exact path) and `*/text` (pattern). Exact path takes precedence.
* `/system/log/text/details` — matches its parent, `/system/log/text` and `system/log/text/details` (exact). Exact path takes precedence.

## Standard Placeholder format

{% include standard_placeholders.md %} 

## Return untranslated strings as empty
When using file/get to download Gettext files from Smartling, the parameter includeOriginalStrings=false ensures that if no translations are available, Smartling returns an empty string. If the parameter is set to true, Smartling returns the original string.

## Pseudo Translations

The `pseudo_inflation` directive is not supported as an inline directive for JSON files, however, you can still control pseudo inflation for JSON files by including it as an argument in the API upload request. For example: `smartling.pseudo_inflation=70` will result in pseudo translation length being increased by 70 percent.