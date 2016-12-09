---
title: 'YAML'
layout: supportedfiletype
extension: '.yaml'
smartling_identifier: 'yaml'
download_sample: 'yaml.yml'
resources: 
  - title: Rails Internationalization
    link: 'http://guides.rubyonrails.org/i18n.html'
directive_prefix: '# '
directive_suffix: ''
directive_format: '# smartling.[directive_name] = [value]'
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives:
  - placeholder_format
  - placeholder_format_custom
  - plurals_detection
  - download_format
  - string_format_paths
  - pseudo_inflation
  - yaml_locale_substitution
  - pseudo_inflation
  - sltrans
---

YAML files are often used in Ruby on Rails Localization. If you're localizing your Ruby on Rails app using YAML files, see [Ruby on Rails Localization](/developers/files/ruby-localization/) for important information.

## Keys/Variants

Every string is created with variant metadata. The variant metadata is the full path of keys leading to the translatable string.

## String Instructions

Smartling will automatically ingest and display file comments as instructions for translators. The comments must immediately precede the string. For example, for the following comment:

~~~yaml
# Back button label
button: 'Back'
~~~

the text "Back button label" will be captured as a file instruction for the string 'Back'.

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

## Plurals

Smartling supports plural translations when the original language strings use the [Ruby on Rails i18n API's pluralization syntax](http://guides.rubyonrails.org/i18n.html#pluralization). To avoid mistakenly capturing strings as plurals because they happen to use the key name `one`, `other`, etc., use the [plurals_detection](#plurals_detection) directive to turn detection off.

## Standard Placeholder format

{% include standard_placeholders.md %} 
