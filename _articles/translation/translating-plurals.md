---
layout: article
title: Translating Plurals
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


Many languages have multiple ways to express a [plural form](https://en.wikipedia.org/wiki/Plural).

For example, English (Canada) has two plural forms:

1. For 1 item
2. For 0, 2, 3, 4, 5, 6… items

Whereas, Belarusian has three plural forms:

1. For 1, 21, 31, 41, 51, 61… items
2. For 2, 3, 4, 22, 23, 24… items
3. For 0, 5, 6, 7, 8, 9… items

Smartling allows content owners to specify that a string is plural sensitive and that it requires translation to a number of plural forms (depending on the target languages).

Smartling currently supports plural forms in YAML, Gettext, QT TS Linguist, Android XML and iOS files.

## Add translations for plural forms

**1)** Plural source strings appear at **Translations &gt; In Progress**. A cascading pages icon marks plural strings. Mouseover to see all plural forms.

![](/uploads/versions/smartling---translations-management--smartlinghotels-node----x----1236-588x---.png)

**2)** For the plural sensitive string you want to modify, click **Add Translation** or **Edit**.

**3)** The Translation Interface provides the correct number of plural forms depending on the target language. The Prior Versions tab of the Translation Interface displays history for the currently selected form.

![](/uploads/versions/smartling---translations-management--smartlinghotels-node----x----1586-802x---.png)

**4)** Add a translation for each plural form and click **Save**.

You can copy down the content in the translation box to the other plural forms with a shortcut:

![](/uploads/versions/smartling---translations-management--smartlinghotels-node----x----1562-772x---.png)

> To save the translation, you must provide a translation for each plural form in the target language (Smartling does not allow partial translations).

The string can now be published as normal.

## Workflow

All forms of the translation move through workflow together. For example, if an editor rejects the translation because there is a problem with one plural form, they reject all plural forms for the translation. A translator only needs to modify the form that requires re-translation, but all plural forms move through the workflow together.

Similarly, [issues](/articles/issues/){: .cc-active} raised for the translation of plural sensitive strings apply to all the forms. If the issue only applies to a specific form, the text of the issue should specify the plural form.

When you download translated files, the number of plural forms in the file depends on the target language and file format.