---
layout: article
title: Plurals
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---



Smartling supports [plural sensitive translation of strings](/articles/translating-plurals/). In order for strings to have pluralized translations, your development platform must also be able to support plural strings in your resource files.  Your application development platform will determine exactly how you can create plural strings in your Smartling project. Typically, this is achieved through special APIs/Functions/Methods that allow the developer to identify strings that need to be pluralized and provide a quantity variable. The appropriate form of the string is selected at runtime according to the quantity variable and the language.  Smartling currently supports plural strings in YAML, Gettext, QT TS Linguist, Android XML and iOS files, as well as in Global Delivery Network projects.

Smartling’s support for plurals is based on the Unicode [CLDR](http://www.unicode.org/cldr/charts/27/supplemental/language_plural_rules.html) standard.  We support two CLDR forms for English; One and Other (which correspond to the 'singular' and 'plural' forms in English gramamr).  If a string is captured as a plural string, we will ask translators to provide the correct number and type of forms - based on CLDR - for each language.  We will then deliver the translations in the correct number of forms in the translated file or via the localized GDN site.  The number of forms for a specific target language can be more or less than the forms for the source language.

## Best practices for working with plurals

* Carefully review your platform’s or selected library's native support and avoid “rolling your own” solution for plurals.
* Keep plural strings simple; use only a single quantity variable in a string.
* Include the quantity variable in all of the original forms of the string to avoid confusing translators.


In your application code, deploying a plural string will look something like this:

~~~
String rooms = format(‘rooms_available', $rooms_available_count);
print($rooms);
~~~

In this example, $rooms_available_count is the quantity variable, used to look up the correct form of the `rooms_available` string. In a YAML file, your `rooms_available` might look something like this:

~~~yaml
rooms_available:
        one: “%{rooms_available_count} room available.”
        other: “%{rooms_available_count} rooms available.”
~~~

Avoid constructions like these:

~~~yaml
rooms_available:
        zero: “Zilch.”
        # Zero is not a standard form for English in CLDR.
        one: “Last room available.”
        # Each standard form should refer to the quantity variable.
        other: “%{rooms_available_count} rooms available.”
~~~

Plural strings should conform to the CLDR standards for plural forms, should always refer to the quantity variable and should only differ as much as is necessary for correct grammar in the target language. If you want to handle a specific quantity in a special way, for example: "Sorry, there are no rooms available!" or "Hurry, there is only one room left!", use conditional statements to fetch a different string.

## Plurals for Gettext Files

Plural sensitive forms for Gettext files are indicated by the source .pot file having a string marked ‘msgid_plural’, for example:

<div class="highlighter-rouge"><pre class="highlight"><code>msgid &ldquo;added %d item to cart&rdquo;
msgid_plural &ldquo;added %d items to cart&rdquo;
msgstr[0] &ldquo;&rdquo;
msgstr[1] &ldquo;&rdquo;
</code></pre></div>

Once translated, the downloaded .po file will have the plural forms needed for the target language and the appropriate language-specific headers. Smartling returns the PluralForm header in the top of the file (if it existed in the original file) that contains the correct plurals rules for that locale.

> Gettext files have limited support for some locales. For more information on Gettext plural forms, see: [Additional functions for plural forms](http://www.gnu.org/savannah-checkouts/gnu/gettext/manual/html_node/Plural-forms.html)

## Plurals for YAML Files

Plural sensitive forms for YAML files are indicated at the sub-key level. For example, the one and other keys in the following English source file indicate that the string is plural sensitive:

<div class="highlighter-rouge"><pre class="highlight"><code>image_upload_timestamp:
    one: "uploaded %{num_secs} second ago"
    other: "uploaded %{num_secs} seconds ago"
</code></pre></div>

You can turn off detection of plurals using the following directive: # smartling.plurals_detection = off

## Plurals for QT TS Files

Plural sensitive forms for QT Linguist files are indicated by the source string having “numerus = “yes” “ and the variations using the “numerusform” element with the “plurality” attribute. For example:

<div class="highlighter-rouge"><pre class="highlight"><code>&lt;message numerus="yes"&gt;
 &lt;source&gt;%1 subtitle(s) extracted&lt;/source&gt;
 &lt;translation&gt;
   &lt;numerusform plurality="singular"&gt;%1 subtitle extracted&lt;/numerusform&gt;
   &lt;numerusform plurality="plural"&gt;%1 subtitles extracted&lt;/numerusform&gt;
 &lt;/translation&gt;
&lt;/message&gt;
</code></pre></div>

## Plurals for Android Files

Plural sensitive forms for Android files are indicated by the source file having a string marked plurals, for example:

<div class="highlighter-rouge"><pre class="highlight"><code>&lt;plurals name="plural_strings2"&gt;
    &lt;item quantity="one"&gt;You have %s item in your cart.&lt;/item&gt;
    &lt;item quantity="other"&gt;You have %s items in your cart.&lt;/item&gt;
&lt;/plurals&gt;
</code></pre></div>

Smartling conforms to the Android standard for plurals: [http://developer.android.com/guide/topics/resources/string-resource…](http://developer.android.com/guide/topics/resources/string-resource.html#Plurals)

## Plurals for iOS Files

While Apple has now released the [Stringsdict format](/developers/supported-file-types/iOS-stringsdict/){: .cc-active} to handle plurals, Smartling has previously extended iOS strings format by developing an [open source library](https://github.com/Smartling/ios-i18n) to accommodate plurals.

Plural sensitive forms for iOS files are indicated by source files with strings in the following form:

<div class="highlighter-rouge"><pre class="highlight"><code>KEY##{rule}
</code></pre></div>

Where: \* `KEY`{: .highlighter-rouge} is the original key string \* `rule`{: .highlighter-rouge} is one of the plural forms: zero, one, two, few, many, other, and conforms to the [CLDR](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html) specification on plural forms. Smartling loads a translation following rules as defined under CLDR.

For example, here are sample resource files for the key `%d songs found:`{: .highlighter-rouge}

<div class="highlighter-rouge"><pre class="highlight"><code>en.lproj/Localizable.strings

/* Number of songs from search results */

"%d songs found##{one}" = "One song found";
"%d songs found##{other}" = "%d songs found";

ru.lproj/Localizable.strings

/* Number of songs from search results */

"%d songs found##{one}" = "Найдена одна песня";
"%d songs found##{few}" = "Найдено %d песни";
"%d songs found##{many}" = "Найдено %d песен";
"%d songs found##{other}" = "Найдено %d песен";
</code></pre></div>

## Plurals in the GDN

Plural strings in the GDN are identified by wrapping the quantity variable in `<span class="sl_plural">` tags. See our [GDN integration documentation](/support/articles/handle-plurals-in-a-gdn-project/) for more details.