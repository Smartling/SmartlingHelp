---
layout: article
title: Managing Business Documents
redirect-url: /hc/en-us/articles/201182377
---


In addition to apps and websites, Smartling also helps you translate your business documents, including Microsoft Word (.docx & .doc), Excel (.xlsx), Powerpoint (.pptx) and [Adobe InDesign](/knowledge-base/articles/translating-adobe-indesign-files/){: .cc-active} (.idml). You can create a dedicated Business Documents project for your files, or upload business documents to any Files project.

## Strings and Segments

To translate your business documents, Smartling parses the content into ‘strings’: individual blocks of text that translators can easily work with. Parsing differs depending on the document type.

* **MS Word** - Each paragraph is captured as a string. A new paragraph or line break creates a new string.
* **Excel** - Each cell of the spreadsheet is captured as a string in the Smartling dashboard.
* **PowerPoint** - Each text box on a PowerPoint slide is captured as a string.
> Remember: text that is part of an image cannot be captured for translation.
* **IDML -** Each paragraph within a text frame &nbsp;is captured as a string. A new paragraph or line break creates a new string.


Each string may be further divided into segments, only visible in the Translation Interface. A segment is usually a sentence, with a sentence-ending punctuation mark such as a period (`.`), exclamation point (`!`) or question mark (`?`) creating a new segment.

## Uploading and Downloading Files

[Uploading](/knowledge-base/articles/upload-and-manage-files/#upload-files) Business Documents for translation and [downloading](/knowledge-base/articles/download-files/) translated files follows the same process as resource files, but Business Documents have the extra option of ‘Updating’ a file.

## Updating Files

When you need to make changes to a Business Document in translation, it’s important to remember that if you upload a similar file with a new filename,for example, File1-1.docx, then File1-2.docx, Smartling will treat it as a completely new file, which may affect billing and cause unnecessary duplication of strings in your project.

Instead, consider using the **Update File** feature. Updating a file will capture only the parts you have changed as new strings.

To update a file, click it’s card on the Files screen, select Update File and browse to the correct file. Updating the file will change the content of the file, but not the file name.

![](/uploads/versions/smartling___manage_files-1---x----868-729x---.png)

<div class="info">After you have updated a file, you may want to rename it to match the most recent version. To rename a file, mouseover the name and click the <strong>Pencil</strong> icon.</div>

![](/uploads/versions/business_documents_overview_-_google_docs---x----346-398x---.png)

You can achieve the same effect as updating by uploading the changed file again as long as you haven’t changed the file name. You will be prompted to confirm that you want to overwrite the existing file. This action will capture only the parts of the document you have changed as new strings.

![](/uploads/versions/smartling___manage_files-2---x----1552-536x---.png)

## Adding Instructions

When you upload business documents, Smartling parses all the main text of the document as translatable content, so any notes for translators or explanation of the document not intended to be included in the translated file should be removed. However, you can add instructions to a file within Smartling to give translators any extra information they need. There are two ways to do this:

* [Upload instructions from the Files screen](/knowledge-base/articles/add-translator-instructions-to-a-file/){: .cc-active}. Click the file card, select your source language and click **Add File Instruction**. Instructions can be any file type you want and will be available in the Translation Interface for any strings from that file.
  <br>![](/uploads/versions/smartling___manage_files-3---x----1348-1092x---.png)
* Find any individual string in the list view and click the instruction icon to add instructions for that string.
  <br>![](/uploads/versions/smartling___translations_management-3---x----1338-520x---.png)


## Excluding Content from Translation

In Microsoft Word and Excel files, you can mark content that you don’t want translated by using Styles. Do this by creating a style called ‘NOTRANSLATE’ and applying it to any text you want excluded.

> This functionality is not available in Microsoft Powerpoint.

### Microsoft Word

Create a style with the name ‘NOTRANSLATE’ and select the style type **Paragraph**. Other options should be set to match your regular text.

![](/uploads/versions/image---x----403-508x---.jpg)

To apply the style, highlight the text you want to exclude and select NOTRANSLATE from the style ribbon.

![](/uploads/versions/image-1---x----858-513x---.jpg)

### Microsoft Excel

Click the down arrow under **Format** and select **New Cell Style**.

![](/uploads/versions/hud_window_and_workbook1---x----1423-516x---.png)

Clear the **Style Property** checkboxes and set the Style Name to ‘NOTRANSLATE’.

![](/uploads/versions/new_cell_style_and_workbook1_and_document1_and_microsoft_word---x----412-305x---.png)

If you want to visually mark excluded text in your document, click **Format**, go to the **Fill** tab and select a color.

![](/uploads/versions/format_cells_and_new_cell_style---x----988-611x---.png)

To apply the style, highlight the text you want to exclude and select NOTRANSLATE from the style ribbon.

![](/uploads/versions/screenshot_11_2_15__1_49_pm---x----973-521x---.png)