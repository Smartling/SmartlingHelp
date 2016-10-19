---
layout: article
title: Placeholders in Resource Files
categories:
  - supported-file-type
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

Resource files often use placeholders in strings to allow dynamic information to be inserted into a string. For example:
`"Welcome %{username}, you have $%{balance} in your account"`. Smartling will recognize these placeholders and protect them from being translated, while still allowing the translator to position them as needed in the translated string. Placeholders are also known as "formatting strings", "format specifiers" or just "specifiers".

We recognize standard placeholders by default.  Exactly what is captured as a placeholder depends on the file format. In most cases you don not need to customize this behavior if you are using standard placholders. If you are using a custom file format, have custom placeholder syntax or use non-standard placeholders, you can integrate to get the behavior you want. Integration can be performed either in the file or via the API. So-called "file inline" integration gives you extra customization options - for example, you may be able to change placeholder behavior throughout the file - but requires you to customize the file for Smartling. API-based integration allows you to avoid adding Smartling specific code to your file but will affect all the strings in the file.

Smartling offers two directives to identify the types of placeholders that are used in your files:

* The `placeholder_format` directive lets you specify that your placeholders adhere to a common standard. Options are `C`, `IOS`, `PYTHON`, `JAVA`, `YAML` `QT` or `RESX`.
* The `placeholder_format_custom` directive lets you specify custom placeholders using a regular expression. Any group of characters matching the regular expression will be captured as a placeholder.

These two directives work in tandem. For example if you were specifying placeholder behavior inside of a custom XML file you could specify both

~~~
<!-- smartling.placeholder_format = PYTHON -->
~~~

and

~~~
<!-- smartling.placeholder_format_custom = \[\[.+?\]\] -->
~~~

Both the standard Python style placeholders, and a custom placeholder will be recognized when found in a string. In this example the custom placeholder is delineated by having two open and closed square bracket characters with text in between them: [[firstName]].

Please note that when defining the regular expression for a custom placeholder you may need to escape characters that are part of the expression to account for the environment (file or shell). After escaping is accounted for the expression will be evaluated as a Perl compatible regular expression (PCRE).  So, in the above example, because brackets have special meaning for PCRE they must be escaped with a backslash (`\`)for the regular expression engine.  However, in another context the backslash itself may need to be escaped.  The most common example is seen in JSON where the backslash character in the value of name/value pair already has special meaning for JSON, and so must be escaped to be valid a character in JSON. Also note when defining a custom placeholder inline of a JSON file we require the expressions to be listed in an array. So the above directives modified to be inside of a JSON file would be:

~~~json
"smartling": {
  "placeholder_format" : "PYTHON",
  "placeholder_format_custom" : ["\\[\\[.*?\\]\\]"]
}
~~~

If your file has non-standard placeholders and you do not integrate to define them Smartling will capture the string with the placeholder as 'plain text'; they will typically be counted as "words" for translation, translators will have to manually enter the placeholder using the correct syntax, and the Smartling Translation Interface will not be able to warn the translators for missing placeholders or incorrect syntax.
