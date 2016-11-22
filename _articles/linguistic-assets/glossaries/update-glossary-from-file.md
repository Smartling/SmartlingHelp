---
layout: article
title: Update Glossary from File
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
redirect-url: /hc/en-us/articles/221112907
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Smartling allows you to Export any glossary as a spreadsheet. If you wish, you can edit this spreadsheet to modify your glossary, then import it back into Smartling. It may be useful to edit your glossary in this way if you want to collaborate with stakeholders outside of Smartling. You can export your Glossary, use your preferred spreadsheet software to edit and track your changes, and import your changes back into Smartling when you are ready. Preserving the correct formatting is important. See [Glossary Spreadsheet Format](/knowledge-base/articles/glossary-spreadsheet-format/){: .cc-active}.

![](/uploads/versions/smartling___linguistic_assets-23---x----1258-422x---.png)

## Update Terms

**1)** Export your Glossary and open in your preferred spreadsheet editor.

<blockquote class="info"><p>Column names and the contents of the ID column must be kept unedited in order to merge your edits back into Smartling. We recommend freezing/locking these cells in your editor.</p></blockquote>

**2)** Make as many edits to existing terms as you wish. As long as you preserve the ID column, you can even change the term itself.

**3)** Add new rows to add new terms to your glossary. Leave the ID column blank for these terms. Any terms without IDs will be treated as new, even if the term itself already exists in your Glossary.

**4)** From the Asset page for the Glossary, from the **More** dropdown, select **Update from File**.

![](/uploads/versions/smartling___linguistic_assets-24---x----1258-424x---.png)

Select your file and click **Upload**.

![medium](/uploads/versions/smartling___linguistic_assets-25---x----580-244x---.png)

> If your glossary is very large (15k rows and above) or contains a great many locales, it is possible that the update will timeout. As a workaround, try splitting your glossary into smaller files.

**5)** You will see a summary dialog, showing the number of terms to be updated or added. Click **Apply Changes**. If you don’t see the updates you expected check that your column names are correct and your ID column hasn’t been altered.

![medium](/uploads/versions/smartling___linguistic_assets-26---x----573-264x---.png)

## Add New Terms from a New File

If you only want to add new terms to your glossary, it isn’t necessary to start from an exported file. However, you need to pay careful attention to [formatting](/knowledge-base/articles/glossary-spreadsheet-format/) if you’re creating a Glossary spreadsheet from scratch. Any terms without an entry in an ID column are treated as new.