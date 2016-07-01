---
layout: article
title: Import Glossary
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
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
  reviewed: false
---


Smartling allows you to create a new glossary from an imported Excel file (.xlsx). This is helpful if you want to edit a lot of terms at once, or if you have a legacy glossary that is formatted in a similar way to a Smartling glossary.

## Preparing your Excel file for Import

Smartling only processes the first sheet of multi-sheet Excel files, so the first step is to either ensure that your glossary is the first sheet, or create a single-sheet file. For a successful glossary import, the columns of your Excel file must match the attributes of a Smartling glossary term. Most columns will accept any text input, but some accept only specific values. If an incompatible value is uploaded, the attribute will be set to the default value. A good way to get started is to Export a glossary as a CSV file and use this as a guide to naming your columns.

Below is a list of allowed columns for your Excel file. Only the ‘Term’ column is required for a successful import. Columns can be in any order but the column names must match. Column names are case sensitive. For more information about what should go in each column, see [manage the glossary](){: .cc-active}.

**For the Source Term:**

* **Term**
* **Definition**
* **Notes**
* **Part Of Speech** - Allowed values are ‘Noun’, ‘Verb’, ‘Adjective’, ‘Adverb’, ‘Pronoun’, ‘Preposition’, ‘Interjection’, ‘Conjunction’. Default is undefined.
* **Do Not Translate** - Allowed values are ‘true’ and ‘false’. Default is ‘false’.
* **Case Sensitive** - Allowed values are ‘true’ and ‘false’. Default is ‘false’.
* **Exact Match** - Allowed values are ‘true’ and ‘false’. Default is ‘false’.
* **Variations**
* **Synonyms**
* **Antonyms**
* **SEO** - Allowed values are ‘true’ and ‘false’. Default is ‘false’.


**For Each Target Language**

* **[Locale Name] [Locale Code]** - Contains the translation for each term in the target language. For example, for French (France), This column should be titled ‘French (France) fr-FR’.
* **Notes [Locale Name] [Locale Code]** - Contains translation notes for each term in the target language. For example, for French (France), This column should be titled ‘Notes French (France) fr-FR’.
* **Locked [Locale Name] [Locale Code]** - Determines whether translation resources are prevented from editing the translation. Allowed values are ‘true’ and ‘false’. Default is ‘false’. For example, for French (France), This column should be titled ‘Locked French (France) fr-FR’.


## Create a New Glossary from your Excel File

**1)** From **Assets** &gt; **Glossaries**, click **Import Glossary**.

![](/uploads/versions/smartling___linguistic_assets-19---x----1254-486x---.png)

**2)** Name your new glossary, select your Source Language, choose an Excel file to upload and click **Import Glossary**.

![medium](/uploads/versions/smartling___glossary---x----575-506x---.png)

**3)** The upload process may take a few minutes. You can switch to your new glossary by clicking the **Gear Wheel** and selecting your new glossary from the dropdown.