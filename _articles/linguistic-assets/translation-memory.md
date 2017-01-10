---
layout: article
title: Translation Memory
---


## What is Translation Memory?

![](/uploads/versions/tm_diagram---x----1741-963x---.png)

Each Smartling Project saves it's translations to a specific Translation Memory, assigned to the project as part of a linguistic package. Each time a string is published in a given language, the translation becomes part of the Translation Memory. These translations can then be reused if a similar source string is uploaded again.

While a Smartling project can only save translations to a single translation memory, you can reuse translations from several different Translation Memories as well as other sources. See&nbsp;[Leverage Configuration](/knowledge-base/articles/leverage-configuration/) for details.

## Manage Translation Memory for an Account

![](/uploads/versions/tm2---x----1242-739x---.png)

Translation Memory is managed from **Assets &gt; Translation Memory**. From here you can:

* Create a new Translation Memory (note that it must be assigned to at least one project as part of a Linguistic Package before translation will be saved to it).
* Edit the name / description of an existing Translation Memory
* Import an external TMX file
* Manage/Export a Translation Memory.

## Import

You can import translations in TMX format to Smartling. TMX files must follow the TMX standard. The specifications appear [here](https://www.gala-global.org/tmx-14b). In addition to the TMX standard, the file must contain a `<header>` tag with `srclang` and `datatype` attributes/values:

~~~xml
<header
  srclang="EN-GB"
  datatype="rtf"
>
~~~

The `srclang` must be specified in the `<header>` and all other `srclang` declarations within the document must match this value.

The `datatype` value must be one of the following:

* `unknown`
* `html`
* `plaintext`
* `rtf`
* `sgml`
* `xml`

If your TMX file has a first line like:

~~~xml
<TWBExportFile version="7.0" generator="TW4Win" build="8.2.0.835">
~~~

This is a legacy Trados text TM format that does not conform to the latest TMX standards and Smartling will not import the file. You can convert these TMX files to standard TMX files using free converters like [Apsic XBench](http://www.apsic.com/en/downloads.aspx).

> An uploaded TMX file can be leveraged by a Smartling Project through a [Leverage Configuration](/knowledge-base/articles/leverage-configuration/), but it is not a Smartling Translation Memory. Future translations won't be saved to your uploaded TMX file.

### To upload a TMX file to Smartling

![](/uploads/versions/tm4---x----1255-447x---.png)

**1)** From Assets **Translation Memory**, click **Upload TMX.**

![](/uploads/versions/tm4---x----1255-447x---.png)

**2)** Select or Drag/Drop your TMX file and click OK.

## Export

At any time, you can export a Translation Memory as a .tmx file. On the asset page, simply click&nbsp;**Export TM**, choose a language and select whether you wish to download only published translations or include pending translations as well.

![](/uploads/versions/smartling---linguistic-assets--hotels----x----951-642x---.png)