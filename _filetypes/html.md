---
title: 'HTML'
layout: supportedfiletype
extension: '.html'
smartling_identifier: 'html'
download_sample: ''
resources: 
  - title: HTML5 Standards
    link: 'http://www.w3.org/TR/html5/'
directive_prefix: '&lt!-- '
directive_suffix: ' --&gt'
directive_format: '&lt!-- smartling.[directive_name] = [value] --&gt'
directives:
  - placeholder_format
  - placeholder_format_custom
  - force_inline_for_tags
  - pseudo_inflation
---

By default Smartling will create a single String for each block element in the HTML document. Additionally the value of `alt` and `title` attributes are captured as a single string. Smartling does not capture the values of any other attributes.

> HTML-like template files, such as those used by Angular, Ember, Backbone, EJS, Handlebars, etc, are not officially supported by Smartling and should not be uploaded as HTML files. See [Localizing Templated Applications](/developers/files/localizing-templated-applications/) for more information.

## Standard Placeholder format

{% include standard_placeholders.md %}