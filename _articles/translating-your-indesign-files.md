---
layout: article
title: Translating your InDesign Files
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


Creating a document with formatting and layout optimized for multilingual publishing can save you time and money and Smartling can help you.

The steps recommended below are aimed at making content parsing more efficient when you upload your InDesign document to Smartling and shortening post-translation Desktop Publishing efforts to reformat/reconstruct the document.

##### **File Format: .IDML**

As a reminder InDesign’s native file format (.indd) is a file type proprietary of Adobe InDesign software and cannot be opened by any other application, including Smartling. Instead you’ll need to export your document using the InDesign Markup Language (IDML) file format before you can upload it to Smartling. Go to File &gt; Export and Select InDesign Markup (IDML) in the Export dialog window.

(image placehoder)

##### Hard return Vs. soft return

You will run into segmentation issues when you use a paragraph mark (hard return) instead of line break (soft return) to wrap a line.
<br>To turn on Show Hidden Characters go to Type &gt; Show Hidden Characters

(image placeholder) -More on [hidden/invisible characters in InDesign](https://helpx.adobe.com/indesign/using/editing-text.html#view_hidden_nonprinting_characters)

In this example, a hard return has been added at the end of each line. Each hard return will create a new string in Smartling, meaning that translator will be left working on incomplete and unordered part of sentences. A soft return will not alter your layout and will be parsed by Smartling as actual paragraphes.

##### “Threading” Multiple text frames

If you have multiple text frames making up one sentence in your document, then consider “threading” them. They can then be parsed as one string in Smartling as opposed to showing numerous, often unnecessary single strings that will be difficult to translate.

(image placeholder) - More on [threading text frames in InDesign](https://helpx.adobe.com/indesign/using/threading-text.html)

Text from linked graphics Vs. text layers

(image placeholder)

Text belonging to a linked graphic is not included in the IDML Export. As a result, remember to localize the graphics and any text included in graphics separately. In the example above, the text is included in the graphic and thus cannot be captured by Smartling.

(image placeholder)

A better alternative is the extensive use of layers. InDesign makes it easy to add layers so instead of graphics with text, create a text box layered over your graphic. This can then be parsed and translated in Smartling.

##### Style sheets

Consider using Character and Paragraph styles so that formatting is consistent throughout the layout but &nbsp;is also preserved by Smartling when your translated file is downloaded. Manual format overrides are often lost by the application, which can substantially increase post-translation DTP time.

Furthermore, styles can be reused by any new file, saving you time and money each time a new document is created, especially true for projects with a large number of documents with a common layout.

##### Group elements

When a group of inline elements (graphics and/or text boxes) should stay in fixed positions in relation to one another, it's a good practice to group them so that those objects maintain their position when the translated text "moves" due to text expansion.

##### Proper alignment

Using tabs & spaces to “align” lines of texts is another common mistake. It creates segmentation issues in Smartling such as empty translation fields that are hard to manage for the translator and DTP team. To align your text correctly use Lists (bulleted list and/or numbered list), Paragraph Styles (left indent + first line left indent), and Special Characters (indent to here): Cmd (or ⌘) + \

(Image placeholder) - Aligning with tabs and spaces

(Image placeholder) - Using Lists to align your content

##### Indesign tables package&nbsp;

InDesign has a great [tables package](https://helpx.adobe.com/indesign/using/creating-tables.html) and yet very often we create tables from individual text frames delineated by manually drawn boxes and rules. When using the tables package, all cells/containers and rules adjust themselves automatically to accommodate text expansion from translation, whereas frames will need to be individually and manually resized by your DTP.

##### Accommodating language expansion and right-to-left languages

Did you know many languages such as Russian, German or Italian can expand the line count by as much as 35%? The biggest challenge in designing InDesign documents for translation is creating a page layout that will accommodate those post-translation text expansion with enough white spaces around text elements. To help with content expansion, you can download a [pseudo-file](http://support.smartling.com/hc/en-us/articles/201468416-Download-translated-files)from the smartling Dashboard and have your DTP team use it to create templates or work on layout during the translation process.

When it comes to eastern languages such as Arabic or Hebrew where text displays right-to-left, you will need your DTP team to perform right alignment and right-to-left layout modification on your translated document, which, unfortunately, very often will equate to a “document reconstruction.”

**Font recommendations for Chinese, Japanese, and Korean (CJK) languages**

Although every OS has a different set of fonts installed, you or your DTP team should use font sets with various weights (light, regular, bold, extra bold) and serif/sans-serif-compatible CJK &nbsp;font sets. Here's what we think are safe choices for general use:

**Simplified Chinese (or fonts with "SC" at the end)**

* Serif: Songti SC/Kaiti SC/SimSun
* Sans-serif: Heiti SC/SimHei


**Traditional Chinese (or fonts with "TC" at the end)**

* Serif: Songti TC
* Sans-serif: Heiti TC


**Japanese**

* Serif: Kozuka Mincho
* Sans-serif: Kozuka Gothic


**Korean**

* Serif: Apple Myungjo/Nanum Myungjo
* Sans-serif: Apple Gothic/Nanum Gothic


(Image placeholder)

Fonts listed above are available from Adobe InDesign, organized by languages, after Roman languages, in the order: (1) Japanese, (2) Traditional Chinese, (3) Simplified Chinese, (4) Korean