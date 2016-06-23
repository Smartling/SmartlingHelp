---
layout: article
title: Supported File Types
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url:
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

<table>

<tbody>

<tr>

<th>

File Type

</th>

<th>

Prefix

</th>

</tr>

<tr>

<td>

Android xml

</td>

<td>

.xml

</td>

</tr>

<tr>

<td>

Comma Separated Values*

</td>

<td>

.csv

</td>

</tr>

<tr>

<td>

Gettext

</td>

<td>

.pot (or .po but original source should be .pot)

</td>

</tr>

<tr>

<td>

HTML

</td>

<td>

.html

</td>

</tr>

<tr>

<td>

iOS Strings

</td>

<td>

.strings

</td>

</tr>

<tr>

<td>

Java property files

</td>

<td>

.properties

</td>

</tr>

<tr>

<td>

JSON*

</td>

<td>

.json

</td>

</tr>

<tr>

<td>

MadCap Flare ZIP Package

</td>

<td>

.zip

</td>

</tr>

<tr>

<td>

Plain text

</td>

<td>

.txt

</td>

</tr>

<tr>

<td>

Qt Linguist

</td>

<td>

.ts

</td>

</tr>

<tr>

<td>

RESX & RESW

</td>

<td>

.resx, .resw

</td>

</tr>

<tr>

<td>

XLIFF

</td>

<td>

.xlf, .xliff, .xml

</td>

</tr>

<tr>

<td>

XML*

</td>

<td>

.xml

</td>

</tr>

<tr>

<td>

YAML

</td>

<td>

.yaml, yml

</td>

</tr>

</tbody>

</table>

*May require integration directives.

## Custom XML

To translate custom XML files with Smartling, you must specify the paths to be translated by adding directives to the file, using comments.

<!-- smartling.translate_paths = [comma separated list of paths] -->

For example:

<pre><?xml version="1.0" encoding="utf-8"?>  
<!--smartling.translate_paths = data/button.name, data/button -->   
<data>  
 <button name="Back">Go back to the previous page</button>  
 <button name="Home">Go to the home page</button>  
</data></pre>

Uploading this file to Smartling will result in four strings.

1.  Back
2.  Go back to the previous page
3.  Home
4.  Go to the home page

See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/#xml) documentation for more information on Custom XML directives.

## JSON Files

Note: Accounts created after June 5th 2015 have new default rules for JSON handling. [See here](/hc/en-us/articles/205589697) for details.

By default, all values in a JSON file are translated. If you wish to translate all values, you do not need to add directives to the file. Only JSON values are captured as strings. Keys are not captured as strings, but can optionally be captured as metadata for a string. For example:

<pre>{  
 "string1" : "Forward",  
 "string2" : "Back",  
 "string3" : "Return to home page"  
}</pre>

Uploading this file to Smartling will result in three strings

1.  Forward
2.  Back
3.  Return to home page

See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/#csv) documentation for more information on JSON integration.

## Comma Separated Values Files

By default, all values in a CSV file will be captured as strings. To capture only selected content, you must instruct Smartling which columns of the file are to be captured. This is done by adding a comment to the header of the file in the form:

`# smartling.paths=[col#1,col#2,etc]`

For example:

<pre># smartling.paths=2  
String1,Forward  
String2,Back  
String3,Home</pre>

See our [Files Integration]() documentation for more information on CSV integration.

## Optional Integration

Directives can be added to some file types to activate Smartling features, including:

*   [Placeholders]()
*   [Variants]()
*   [Plurals]()
*   [Translator Instructions]()

See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/) documentation to find out what integration options are supported for the file types you use.  

## Business Documents

Smartling also supports the following business document files. These files are supported as-is. Optional integration directives are also supported for some file types. See our [Files Integration](http://docs.smartling.com/pages/supported-file-types/) documentation for more information.

<table>

<tbody>

<tr>

<th>

File Type

</th>

<th>

Extension

</th>

</tr>

<tr>

<td>

Plain Text

</td>

<td>

.txt

</td>

</tr>

<tr>

<td>

Open Office XML

</td>

<td>

.docx, .pptx, .xlsx

</td>

</tr>

<tr>

<td>

Adobe InDesign

</td>

<td>

.idml

</td>

</tr>

<tr>

<td>

Comma Separated Values

</td>

<td>

.csv

</td>

</tr>

</tbody>

</table>


## File Size Limits

The size of files that can be uploaded to Smartling are limited to:

*   50MB for .ppt, .pptx
*   25MB for .idml
*   20MB for madcap zip packages
*   20MB for .doc, .docx
*   10MB for all others