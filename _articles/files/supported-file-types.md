---
layout: article
title: Supported File Types
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url: /hc/en-us/articles/201209266
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
  articles:
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
  articles:
  others:
    - link:
      text:
migration-checklist:
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Most application resource file types can be uploaded to Smartling without being altered. Custom XML files require directives to be added before uploading. Smartling supports the following resource files:

| File Type | Prefix |
| Android xml | .xml |
| Comma Separated Values\* | .csv |
| Gettext | .pot (or .po but original source should be .pot) |
| HTML | .html |
| iOS Strings | .strings |
| Java property files | .properties |
| JSON\* | .json |
| MadCap Flare ZIP Package | .zip |
| Plain text | .txt |
| Qt Linguist | .ts |
| RESX & RESW | .resx, .resw |
| XLIFF | .xlf, .xliff, .xml |
| XML\* | .xml |
| YAML | .yaml, yml |

\*May require integration directives.

## Custom XML

To translate custom XML files with Smartling, you must specify the paths to be translated by adding directives to the file, using comments.<!-- smartling.translate_paths = [comma separated list of paths] -->

For example:

~~~
<!--?xml version="1.0" encoding="utf-8"?-->
<!--smartling.translate_paths = data/button.name, data/button -->


<data>
 <button name="Back">Go back to the previous page</button>
 <button name="Home">Go to the home page</button>
</data>
~~~

Uploading this file to Smartling will result in four strings.

1. Back
2. Go back to the previous page
3. Home
4. Go to the home page


See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/#xml) documentation for more information on Custom XML directives.

## JSON Files

Note: Accounts created after June 5th 2015 have new default rules for JSON handling. [See here]() for details.

By default, all values in a JSON file are translated. If you wish to translate all values, you do not need to add directives to the file. Only JSON values are captured as strings. Keys are not captured as strings, but can optionally be captured as metadata for a string. For example:

~~~
{
 "string1" : "Forward",
 "string2" : "Back",
 "string3" : "Return to home page"
}
~~~

Uploading this file to Smartling will result in three strings

1. Forward
2. Back
3. Return to home page


See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/#csv) documentation for more information on JSON integration.

## Comma Separated Values Files

By default, all values in a CSV file will be captured as strings. To capture only selected content, you must instruct Smartling which columns of the file are to be captured. This is done by adding a comment to the header of the file in the form:

`# smartling.paths=[col#1,col#2,etc]`

For example:

~~~
# smartling.paths=2
String1,Forward
String2,Back
String3,Home
~~~

See our [Files Integration](){: .cc-active} documentation for more information on CSV integration.

## Optional Integration

Directives can be added to some file types to activate Smartling features, including:

* [Placeholders](){: .cc-active}
* [Variants](){: .cc-active}
* [Plurals](){: .cc-active}
* [Translator Instructions](){: .cc-active}


See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/) documentation to find out what integration options are supported for the file types you use.

## Business Documents

Smartling also supports the following business document files. These files are supported as-is. Optional integration directives are also supported for some file types. See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/) documentation for more information.

| File Type | Extension |
| Plain Text | .txt |
| Open Office XML | .docx, .pptx, .xlsx |
| Adobe InDesign | .idml |
| Comma Separated Values | .csv |

## File Size Limits

The size of files that can be uploaded to Smartling are limited to:

* 50MB for .pptx
* 25MB for .idml
* 20MB for madcap zip packages
* 20MB for .doc, .docx
* 10MB for all others