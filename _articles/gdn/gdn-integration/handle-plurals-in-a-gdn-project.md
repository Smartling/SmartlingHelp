---
layout: article
title: Handle Plurals in a GDN Project
draft: false
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

Many languages have multiple ways to express a plural form.

For example, English has two plural forms:

1.  For 1 item
2.  For 0, 2, 3, 4, 5, 6... items

Whereas, Belarusian has three plural forms:

1.  For 1, 21, 31, 41, 51, 61... items
2.  For 2, 3, 4, 22, 23, 24... items
3.  For 0, 5, 6, 7, 8, 9... items

The Smartling Global Delivery Network allows you to specify that a string is plural sensitive and that it requires translation to a number of plural forms (depending on the target languages).To identify content as plural sensitive, tag the source HTML content that should appear as plural, ingest content in one of your target languages, and it appears on in the Smartling List View as plural sensitive. To have this feature enabled for your site, contact Smartling support.

**To add translations for plural forms (GDN):**

1.  Tag the source HTML using the span class or id `SL_plural`. For example:  

~~~
Uploaded <span class="sl_plural">3</span> seconds ago.</pre>
~~~

2.  In one of your target languages, ingest the content you tagged by browsing the site. The source strings appear at **Translations** > **Awaiting Authorization**. The “1” icon indicates that the string is plural sensitive. Click to view all the plural forms in the original language.
3.  Authorize the string for translation.
4.  For the plural sensitive string you want to modify, click **Edit**.The Translation Interface provides the correct number of plural forms depending on the target language.
5.  Add a translation for each form and click **Save**.  
    You can copy down the content in the translation box, by clicking **Copy this translation down to the rest of the plural forms**. To save the translation, you must provide a translation for each plural form in the target language (Smartling does not allow partial translations). The Prior Versions tab of the Translation Interface displays history for the selected form.

**Workflow**

All forms of the translation move through workflow together. For example, if an editor rejects the translation because there is a problem with one plural form, they reject all plural forms for the translation. A translator only needs to modify the form that requires re-translation, but all plural forms move through the workflow together.

Similarly, issues raised for the translation of plural sensitive strings apply to all the forms. If the issue only applies to a specific form, the text of the issue should specify the plural form.

**Notes (GDN)**

*   Smartling treats a string as plural if it contains at least one number wrapped in an HTML tag using the plural class or id `sl_plural`, and converts this number to a placeholder `{0}`
*   Smartling does not recognize text in the span class as plural sensitive. For example, the following string is not recognized as plural:

~~~
Uploaded <span class="sl_plural">three</span> seconds ago.
~~~

*   Fractions or white spaces. For example the following string will be treated as "33" (thirty-three)

~~~
Uploaded <span class="sl_plural">3.3</span> seconds ago.
~~~

 
*   Different numbers in the span class are treated as separate strings. For example the following strings will be treated as two separate (plural sensitive) strings: `Uploaded {0} second ago` and `Uploaded {0} seconds ago`.
~~~
Uploaded <span class="sl_plural">1</span> second ago.
~~~

~~~
Uploaded <span class="sl_plural">3</span> seconds ago.
~~~


*   If a string contains several numbers tagged as plural sensitive, Smartling allows only one plural span class per string.
