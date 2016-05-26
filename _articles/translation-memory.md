---
layout: article
title: Translation Memory
draft: true
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
  internal-links: false
  images: false
  FAQs: false
  related: false
---

_The following article applies to Global Delivery Network, _Application Resource File_, Business Document, and CMS Connector project types._

[What is Translation Memory?  
](#Intro)[Manage Translation Memory for an Account](#Manage)  
[Import](#Import)  
[Export](#Export)

**What is Translation Memory?**



Each Smartling Project saves it's translations to a specific Translation Memory, assigned to the project as part of a linguistic package. Each time a string is published in a given language, the translation becomes part of the Translation Memory. These translations can then be reused if a similar source string is uploaded again.

While a Smartling project can only save translations to a single translation memory, you can reuse translations from several different Translation Memories as well as other sources. See [Leverage Configuration](/hc/en-us/articles/218671488-Leverage-Configuration) for details.  

**Manage Translation Memory for an Account**



Translation Memory is managed from **Assests > Translation Memory**. From here you can:

*   Create a new Translation Memory (note that it must be assigned to at least one project as part of a Linguistic Package before translation will be saved to it).
*   Edit the name / description of an existing Translation Memory
*   Import an external TMX file
*   Manage/Export a Translation Memory.

**Import**

You can import translations in TMX format to Smartling. TMX files must follow the TMX standard. The specifications appear [here](https://www.gala-global.org/tmx-14b). In addition to the TMX standard, the file must contain a <header> tag with _srclang_ and _datatype_ attributes/values:

<header  
    srclang="EN-GB"  
    datatype="rtf"  
>

The _srclang_ must be specified in the <header> and all other _srclang_ declarations within the document must match this value.

The _datatype_ value must be one of the following:

*   unknown
*   html
*   plaintext
*   rtf
*   sgml
*   xml

If your TMX file has a first line like:

<TWBExportFile version="7.0" generator="TW4Win" build="8.2.0.835">

This is a legacy Trados text TM format that does not conform to the latest TMX standards and Smartling will not import the file. You can convert these TMX files to standard TMX files using free converters like Apsic XBench ([http://www.apsic.com/en/downloads.aspx](http://www.apsic.com/en/downloads.aspx)).

**To upload a TMX file to Smartling**:

1.  From Assets > **Translation Memory, **clickUpload TMX  
    

2.  Select or Drag/Drop your TMX file and click OK.  

**Note:** An uploaded TMX file can be leveraged by a Smartling Project through a [Leverage Configuration](/hc/en-us/articles/218671488), but it is not a Smartling Translation Memory. Future translations won't be saved to your uploaded TMX file.