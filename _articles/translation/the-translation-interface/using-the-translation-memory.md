---
layout: article
title: Translation Memory in the Translation Interface
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
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


The Translation Memory is a record of previous translations, either in the current project or from elsewhere in your organization. Smart use of your Translation Memory can speed up your work and keep your translations consistent over time.

Translators and Editors will most often access Translation Memory from within Smartling’s Translation Interface (TI). The TI provides two distinct tools for accessing translation memory: Segment Matching and Concordance Search.

![](/uploads/versions/tmmi1---x----1172-390x---.png)

## Segment Matching

Segment Matching automatically searches the Translation Memory for strings or segments that closely match the one currently being translated.

To access Segment Matching, click on the percentage in the upper right corner of the Target Field. Smartling displays Translation Memory matches from published translations but also submitted translations, i.e. Translations that have been submitted to the next step of the translation workflow. Published translations show a green checkmark and the date of the most recent edit.Each segment displays a percentage score. The higher the percentage, the closer the match.

If Translation Memory is sourced from a different project, the name of the source project will appear under the suggest translation.

Click a segment to populate the translation in the target field. Don’t forget you may still need to edit the translation.

## **Pre-populated Translation Memory Matches**

The Translation Interface can pre-populate translations for strings that have a 100% match in the translation memory. To enable pre-population, click **Settings** &gt; **Pre-populate 100% TM matches**

If you have enabled this option, any segment with a 100% match in the Translation Memory will have the translation field pre-populated. You may still need to edit the translation to match formatting and whitespace. Pre-populated translations will display a warning banner.

**Note:** Clicking the Previous/Next and Save buttons will save the pre-populated translation.

![](/uploads/versions/tmti2---x----1168-406x---.png)

## **Concordance Search**

You can search the translation memory for any word or phrase using the Concordance Search. This may be useful if there is not a complete match for a whole segment and you need guidance on how a particular term has been translated previously.

To access the Concordance Search, click the **Magnifying Glass** icon in the Translation Interface. Optionally, you may first highlight any part of the source language in the Translation Interface before clicking the Magnifying Glass to search for the highlighted text.

![](/uploads/versions/tmti3---x----1180-403x---.png)

The Concordance Search popup will display all strings in the Translation Memory that match your search term for the current language. You can highlight and copy translation text to paste into your target field. Published translations show a checkmark.

![](/uploads/versions/tmti4---x----1112-424x---.png)

**Note:** Smartling does not currently support search in the target language, only the source

## Completed Translations in the List View

You can view and search all Published translations for the current project in the List View by selecting **Completed** from the dropdown.

**Note:** While this view may be refered to as the Translation Memory, it does not necessarily represent the full Translation Memory available, since it does not include strings which have unpublished translations, or the contents of shared Translation Memory from other projects.

![](/uploads/versions/tmti5---x----1230-860x---.png)