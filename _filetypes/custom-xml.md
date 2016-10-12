---
title: 'Custom XML'
layout: supportedfiletype
extension: '.xml'
smartling_identifier: 'xml'
download_sample: 'customxml.xml'
resources: 
  - title: XML Standards
    link: http://www.w3.org/standards/xml/
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directive_instructions_markdown: |
  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.
directive_prefix: '&lt!-- '
directive_suffix: ' --&gt'
directives:
  - variants_enabled
  - 'translate_paths '
  - 'string_format_paths '
  - placeholder_format_custom
  - placeholder_format
  - sltrans
  - source_key_paths
  - pseudo_inflation
---

Smartling supports generic XML files by processing text within specified tags and attributes. You must specify the tags and attributes you want translated using the `translate_paths` directive.

## Keys / Variants

Key and Variant metadata must be enabled and configured using the `source_key_paths` and `variants_enabled` directives.

## Specifying Paths

Some directives require you to specify a path or set of paths to keys or strings in the file. A path is a slash-separated string which uses an Xpath-like syntax (although not all features of Xpath are supported). The node separator is always `/` (slash).

Wildcards are not allowed in path definitions.

To specify an attribute, use dot notation: `node.attribute`.

To specify paths based on an attribute value, use the syntax `/node[@attribute="value"]`.

For the `translate_paths` directive, ending the path with a trailing `/` (slash) will also translate all child nodes.

For example, in the following file:

~~~xml
<data>
   <string name="home-button">Smartling Hotels</string>
 <string name="back-button">Back</string>
   <localize name="navigation">
      <string>Browse Hotels</string>
     <string>About Us</string>
    <string>Site Map</string>
 </localize>
  <localize name="description">
     <string>An excellent budget hotel in New York City</string>
   </localize>
  <images>
     <img src="/img/0156849.png" title="Bedroom - Basic Suite"/>
      <img src="/img/0156849.png" title="Bathroom - Basic Suite"/>
  </images>
</data>
~~~

*   `data/localize/string` - will match "Browse Hotels", "About Us", "Site Map" and "An excellent budget hotel in New York City".
*   `data/images/img.title` - will match "Bedroom - Basic Suite" and "Bathroom - Basic Suite".
*   `data/localize[@name="description"]/string` - will match "An excellent budget hotel in New York City."

## HTML-like files

Some XML files closely resemble HTML files and are more effectively translated by parsing them as HTML files. Smartling allows you to specify HTML as the file type when uploading an XML file in the dashboard to cope with this type of XML files. If uploading via API, give `html` as the Smartling identifier for the file.

## Managing Untranslated Strings

If using File API to download Custom XML files from Smartling, the parameter `includeOriginalStrings=false` can be set to return an empty string if no translation is available. By default (`includeOriginalStrings=true`) Smartling returns the original string.

## Standard Placeholder format

{% include standard_placeholders.md %} 