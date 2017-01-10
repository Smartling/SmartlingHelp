---
layout: article
title: Translate the Glossary
---


Smartling’s Glossary Translation feature allows you to use Smartling to translate your Glossary terms along with the rest of your content. &nbsp;Translating your glossary is simple but for best results, some preparation is required.

## Create a dedicated Glossary translation project

We recommend translating the glossary in a separate project as your translation vendor may require different invoicing arrangements for Glossary translation. If you purchase translation services through Smartling, contact your Success Manager to make arrangements for translating your glossary.

![](/uploads/versions/smartling---create-a-project-2---x----1228-544x---.png)

## Identify terms that need translation

Find the Glossary you want to translate under&nbsp;**Assets &gt; Glossaries**. Translation of terms is not available from the project-level Glossary view.

If you’ve been using your Glossary for a while, you may not need to translate every term. Translating a Glossary term through Smartling will overwrite any existing translation for that language, so don’t select terms that you’ve already translated unless you want to change the translation.&nbsp;

To find untranslated terms for a language, set your Glossary to that language, and select the&nbsp;**Require Translation filter**. This filter won’t show any terms that you have marked Do Not Translate.

## Authorize terms for translation

Select the terms you want to translate and click&nbsp;**Authorize for Translation**.

![](/uploads/versions/smartling---linguistic-assets--hotels----x----1265-710x---.png)

In the Authorize dialog, select your dedicated Glossary translation project, and the target languages and workflow.

![](/uploads/versions/smartling---linguistic-assets--hotels----x----568-402x---.png)

> Rememeber that this will cause any existing translations for these terms to be overwritten. If your Glossary is not evenly translated across languages, and you want to keep your current translations, work through your Glossary one language at a time, filtering for untranslated terms and authorizing them only for the current language.

Each glossary term will be created as a string and added to your chosen workflow. The `Definition`, `Part of Speech`, `Notes`, `Variations`, `Synonyms` and `Antonyms` attributes of the term are captured as translation instructions. Glossary terms are translated like any other strings. To find Glossary strings in translation, filter your list view for the URI: `/Glossary`.

When a Glossary string is Published, the translation will be written to the Translation field of the original Glossary term.