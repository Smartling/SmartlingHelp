---
layout: article
title: File Parser Version 3 - 13 October 2015
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: true
  CMS-Connectors: false
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


Version 3 of the Smartling File Parser was released Tuesday 13 October 2015. All files uploaded after this time will be parsed by the new version. Updates to previous files, with the same File URI will continue to be processed by previous versions of the Parser to maintain compatibility. See below for a list of significant changes in Version 3.

**Improvements**

JSON

* New default parsing mode - All values are captured with key and variant metadata. Default mode now works without adding any directives to files. This behavior has been in place for new accounts since June 11 2015 and will now be used by all new files. See Help Center for details.
* Deprecated directives removed - translate mode, translate keys and variant key paths.


XLIFF

* &lt;note&gt; tags are now captured as translator instructions for the associated trans-unit.
* Trans-unit ID field is now captured as Variant metadata
* Native tags (&lt;ept&gt;, &lt;bpt&gt;, &lt;it&gt;, &lt;ph&gt;, &lt;sub&gt;, &lt;mrk&gt;, &lt;x&gt;, &lt;g&gt;) are no longer captured by custom placeholder directive
* Empty tags now converted to self-closing tags in translated files
* All-placeholder strings are now captured across all resource file types.


**Office Parser Fixes**

DOCX

* Content in some textbox types not captured.
* Some formatting marks stripped in translated files.
* Extra tabs and spacing added to some translated files.
* Some translated files failed to open.
* Some strings missing from context display in Translation Interface.
* Context highlighting in Translation Interface disabled on some strings


PPTX

* Some fonts did not parse correctly.
* Tables with merged cells broke formatting in translated files.


XLSX

* Chart colors changed in translated files.
* Images in sheets caused parsing errors.
* Other Bug Fixes


**Other Bug Fixes**

* XML & XLIFF - Downloaded files had improperly escaped entities.
* Plaintext - Byte Order Mark added to string at beginning of file.
* Java Properties - Escaped leading and trailing spaces were not preserved in some translated files.