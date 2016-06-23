---
layout: article
title: Managing Business Documents
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

In addition to apps and websites, Smartling also helps you translate your business documents, including Microsoft Word (.docx & .doc), Excel (.xlsx), Powerpoint (.pptx) and [Adobe InDesign]() (.idml). You get the option to create a dedicated  Business Documents project for your files, or  upload business documents to any Files project. If your business documents share content with your website or app it may make sense to use the same project for easier leverage of your Translation Memory.

## Strings and Segments

To translate your business documents, Smartling parses the content into ‘strings’: individual blocks of text that translators can easily work with. Parsing differs depending on the document type.  


*   **MS Word** - Each paragraph is captured as a string. A new paragraph or line break creates a new string.
*   **Excel** - Each cell of the spreadsheet is captured as a string in the Smartling dashboard.
*   **PowerPoint** - Each text box on a PowerPoint slide is captured as a string. **Remember:** Text that is part of an image cannot be captured for translation.
*   **IDML -** Each paragraph within a text frame  is captured as a string. A new paragraph or line break creates a new string.

Each string may be further divided into segments, only visible in the Translation Interface. A segment is usually a sentence, with a sentence-ending punctuation mark such as a period (.), exclamation point (!) or question mark (?) creating a new segment.

## Uploading and Downloading Files

Uploading Business Documents for translation and downloading translated files follows the [same process as resource files](/hc/en-us/articles/201468376), but Business Documents have the extra option of ‘Updating’ a file.

## Updating Files

When you need to make changes to a Business Document in translation, it’s important to remember that if you upload a similar file with a new filename,for example, File1-1.docx, then File1-2.docx, Smartling will treat it as a completely new file.

Although your project might be set up so to automatically publish 100% SmartMatched translations, please keep in mind that the entire contents of the file will count towards your Processed Words, which may affect billing and cause unnecessary duplication of strings in your project.

Instead, consider using the **Update File** feature. Updating a file will capture only the parts you have changed as new strings.

To update a file, click it’s card on the Files screen, select Update File and browse to the correct file. Updating the file will change the content of the file, but not the file name.

![](/hc/en-us/article_attachments/203760628/Smartling___Manage_Files.png)

**Optional:** After you have updated a file, you may want to rename it to match the most recent version. To rename a file, mouseover the name and click the **Pencil** icon.

![](/hc/en-us/article_attachments/203657107/Business_Documents_Overview_-_Google_Docs.png)

**Note:** You can acheieve the same effect by uploading the changed file again as long as you haven’t changed the file name. You will be prompted to confirm that you want to overwrite the existing file. This action will capture only the parts of the document you have changed as new strings.  

![](/hc/en-us/article_attachments/203760588/Smartling___Manage_Files.png)

## Adding Instructions

When you upload business documents, Smartling parses all the main text of the document as translatable content, so any notes for translators or explanation of the document not intended to be included in the translated file should be removed. However, you can add instructions to a file within Smartling to give translators any extra information they need. There are two ways to do this:

*   [Upload instructions from the Files screen](). Click the file card, select your source language and click **Add File Instruction**. Instructions can be any file type you want and will be available in the Translation Interface for any strings from that file.  
    ![](/hc/en-us/article_attachments/203760458/Smartling___Manage_Files.png)  
    
*   Find any individual string in the list view and click the instruction icon to add instructions for that string.  
    ![](/hc/en-us/article_attachments/203760478/Smartling___Translations_Management.png)  
    

## Excluding Content from Translation

In Microsoft Word and Excel files, you can mark content that you don’t want translated by using Styles. Do this by creating a style called ‘NOTRANSLATE’ and applying it to any text you want excluded.

**Note:** This functionality is not available in Microsoft Powerpoint.

### Microsoft Word

Create a style with the name ‘NOTRANSLATE’ and select the style type **Paragraph.** Other options should be set to match your regular text.

![](/hc/en-us/article_attachments/203760488/Image.jpg)

To apply the style, highlight the text you want to exclude and select NOTRANSLATE from the style ribbon.

![](/hc/en-us/article_attachments/203760518/Image.jpg)  



### Microsoft Excel

Click the down arrow under **Format** and select **New Cell Style**.  


![](/hc/en-us/article_attachments/203760528/HUD_Window_and_Workbook1.png)

Clear the **Style Property** checkboxes and set the Style Name to ‘NOTRANSLATE’.

![](/hc/en-us/article_attachments/203657077/New_Cell_Style_and_Workbook1_and_Document1_and_Microsoft_Word.png)

If you want to visually mark excluded text in your document, click **Format**, go to the **Fill** tab and select a color.

![](/hc/en-us/article_attachments/203760568/Format_Cells_and_New_Cell_Style.png)

To apply the style, highlight the text you want to exclude and select NOTRANSLATE from the style ribbon.

![](/hc/en-us/article_attachments/203657087/screenshot_11_2_15__1_49_pm.png)  
