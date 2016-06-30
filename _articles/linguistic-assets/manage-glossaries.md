---
layout: article
title: Manage Glossaries
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

A Glossary  is a unique set of words or phrases that are important to your content.  By adding terms to the glossary you highlight them to translators, no matter where they appear inside larger strings.  For each term you can instruct the translators to:

*   Not translate it (e.g. the name of your products or services)
*   Translate it in single consistent way for each language

Each glossary term that requires translation should have a definition or any information in relation to your company or industry, ensuring appropriate and consistent translation throughout your project.

To help you create a comprehensive glossary, Smartling scans all strings in your project for recurring terms and provides suggestions for terms to add to your Glossary (currently for new projects only).

Glossaries are assigned to Smartling Projects as part of a Linguistic Package. See [Create and Manage Linguistic Packages]() for details.

## Create / Import Glossary

**1)** From **Assets > Glossaries**, click **Create New Glossary** or **Import Glossary**.  

![](/hc/en-us/article_attachments/207291207/Smartling___Linguistic_Assets.png)

**2)** Give a name, source language and a short description for your Glossary. If you chose Import, choose an Excel (.xlsx) file to import. For information on formatting this file, see [Import Glossary](/hc/en-us/articles/218650017). Click **Create Glossary** / **Import Glossary**.  

![](/hc/en-us/article_attachments/207241448/Smartling___Linguistic_Assets.png)

**3)** From the Glossaries list view, click the name of your new Glossary to begin adding terms.  

![](/hc/en-us/article_attachments/207291257/Smartling___Linguistic_Assets.png)

## Manage Your Glossaries

From the Glossaries List View, you can use the Actions icons next to each glossary to edit its name, source language, and description, clone, export as an Excel, CSV or TBX file, or delete it. You will not be able to delete a Glossary that is currently assigned to one or more Linguistic Packages.

![](/hc/en-us/article_attachments/207241538/image03.png)

## Individual Glossary Overview  


![](/hc/en-us/article_attachments/207241638/image03.png)

1.  View Linguistic Packages that use this Glossary
2.  Add Term to add a new item to the glossary.
3.  Click Edit Details to edit the Name and Source Language
4.  Click the Grid to customize the Glossary view.
5.  Return to Glossary List
6.  Search for an existing or suggested term.
7.  Select a glossary language
8.  Edit glossary terms.
9.  Authorize selected Glossary Terms for Translation
10.  Export or Clone the glossary.

## Adding a term

All fields except for the term itself are optional, but detailed information will help your translators provide quality translation.

The term window has two parts: Term Details and Translation Details. Term Details are the same for every language in your glossary. For example, if you edit the Definition from the German version of your glossary, your changes will carry over to the French version of your glossary.

The Translation Details section applies only to the current language (and isn't displayed at all if adding a term in your source language).

![](/hc/en-us/article_attachments/207291387/image02.png)

### Term Details

*   Term - The source language term
*   Definition - Give the meaning of the term.
*   Part of Speech - Select from noun/verb/adjective/etc
*   Case Sensitive - If checked, only terms where the case matches will be highlighted in the TI as Glossary terms. For example, if the Glossary term is ‘Word’, then ‘word’ will not be treated as a glossary term.
*   Exact Match - If checked, Smartling will not highlight close matches as Glossary terms. For example, if the Glossary term is ‘Word’, then ‘Words’ will not be treated as a Glossary term.
*   Variations/Synonyms/Antonyms - List related terms as an aid to translators. These are not used for matching. For example, if ‘create’ is a Glossary term, you may wish to declare ‘creates’, ‘creator’, or ‘creating’ as variations; ‘write’ or ‘build’ as synonyms and ‘destroy’ as an antonym.
*   Notes - Add any additional information that may be of use to translators.
*   Do Not Translate - if checked, instructs translators not to translate your term. For example, the name of your company should probably be flagged as Do Not Translate.
*   SEO Term - used to mark a term that is important for Search Engine Optimization.

### Translation Details

*   [Language] Translation- The translated glossary term.
*   [Language] Notes - Any additional information applying to the term. Use this field for notes specific to the current language. General notes should go in the Term Details section.
*   Translation Locked - If this box is checked, Translation Resouces cannot edit the translation of this term.

## Suggested Glossary Terms

Smartling scans the content of your project for recurring words in order to suggest terms that could be added to your Glossary. This function is available only from inside a project, not from the **Assets** page. To access suggested terms, go to **Content > Glossary** and click the **Suggestions** tab.

![](/hc/en-us/article_attachments/207241678/image00.png)

Add or reject suggested terms, using the buttons next to each term or check multiple terms and click **Add to Glossary** or  **Reject**.

**Note:** If you add multiple terms in bulk, the glossary entries will not include any detail beyond the terms themselves. Don't forget to edit each term to add information.

## Find Terms that Require Translation

When viewing any language other that your source language, you can filter your glossary by terms that are already translated or require translation.

![](/hc/en-us/article_attachments/207291427/image01.png)

## Manage Editing Permissions

By default, anyone working on your project can add or edit translations for a glossary term, including Translation Resources. If you want to restrict the ability to add and edit translations to only Account Owners and Project Managers, contact your Smartling Service Manager.
