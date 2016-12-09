---
title: Integrate with IBM's Watson Language Translator
layout: blogpost
blog-author: Kale Bogdanovs
categories:
  - tips
---

IBM's Watson Language Translator is now available as a Machine Translation workflow step in Smartling. Watson is an advanced machine translation service which can be trained by uploading your existing translation memory in TMX format for higher quality translation. [See here](/knowledge-base/articles/integrate-machine-translation-into-a-workflow/) for general information on setting up a Machine Translations step in your workflow.

Watson Language Translator is a paid service, you will need to provide a valid username and password, as well as the models you want to use. The Watson service uses separate models for each language pair, and cover three different styles of translation: 'news', 'conversational' and 'patent'. You can also create your own custom model by uploading translation memory data. Note that Watson currently supports a limited language set. Default models are:

*   News domain
    *   ar-en
    *   arz-en
    *   de-en
    *   en-ar
    *   en-arz
    *   en-de
    *   en-es
    *   en-fr
    *   en-it
    *   en-pt
    *   es-en
    *   es-fr
    *   fr-en
    *   fr-es
    *   it-en
    *   pt-en
*   Conversational domain
    *   ar-en-conversational
    *   en-ar-conversational
    *   en-es-conversational
    *   en-fr-conversational
    *   en-pt-conversational
    *   es-en-conversational
    *   fr-en-conversational
    *   pt-en-conversational
*   Patent domain
    *   es-en-patent
    *   ko-en-patent
    *   pt-en-patent
    *   zh-en-patent

If you want to use the Watson workflow step for more than one language pair, specify each domain separated by a comma, like: 'en-fr, en-pt-conversational'. If you don't specify a model, Watson will try to determine the best model for your content automatically.

See [IBM's documentation](https://www.ibm.com/watson/developercloud/language-translator.html) for more information on domains and creating custom models.