---
layout: article
title: Unique Strings and Variants
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


When Smartling captures content from a file or website, it parses the content into **strings**. Within a Smartling GDN project, strings can be shared, so that content appearing more than once will usually not be duplicated in the Smartling Dashboard. For example, a ‘Home’ button might appear many times on a website, but Smartling captures it as one unique string, to be translated once. For a Files project, strings are generally considered to be unique to each file and strings will not be shared between files. String sharing between files can be controlled using [namespaces](/knowledge-base/articles/string-sharing-namespaces/).

Sometimes, however, two strings in the same file, with the same text in the source language may require different translations. For example, the string ‘Home’ on a webpage might refer to the homepage of the domain, or to a residence.

To handle these instances, Smartling uses Variants. A Variant is one of two or more unique strings within a project that share the same text in the source language, which Smartling creates as unique based on variant metadata or formatting.

## Use Cases for Variants

In some cases an identical string located in different contexts may need different manipulations or translations. Here are few scenarios where Variants can be useful to distinguish strings with identical text in the source language:

### Identical strings where meaning varies based on context:

A travel site where the word ***return*** has two distinct meanings:

* Return to a previous page; or
* The return leg of a journey.


### Identical strings with a character limitation based on their location/context:

The string 'Go back to the home page':

* On the main site, does not require a character limit.
* For a button, requires a character limit to fit space limitations.


## How Smartling Creates Variants

Smartling creates Variants when two strings have the same text, but different context or metadata. Context is captured differently depending on the project type.

### Global Delivery Network (GDN) Projects

The Global Delivery Network analyzes every HTML request and captures strings based on HTML block tags. If content within the block tags (such as an in-line tag) changes, Smartling creates a new unique string, even if the text itself is identical to another unique string. For example:

**String 1:** `p>Please contact us to find out more.</p>`
<br>**String 2:** `<p>Please <a href="contact.html">contact us</a> to find out more.</p>`

These are parsed by the GDN as two unique strings, even though the text is identical, because there are different inline tags within the blocks.

To manually create variants, you can use a **variant** HTML attribute within a block tag to enclose the string you want to make a variant and assign it a numeric or text value. The HTML5 compliant version of this attribute is **data-sl-variant**. &nbsp;For example:

**String 1**: `<div>Same text, captured twice with variant metadata.</div>`
<br>**String 2:** `<div variant="Variant1">Same text, captured twice with variant metadata.</div>`
<br>**String 2 (HTML5):** `<div data-sl-variant="Variant1">Same text, captured twice with variant metadata.</div>`

Smartling parses these as two unique strings, even though the content within the block tags is identical. String 1 has no variant metadata, String 2 has the variant metadata `Variant1`.

### Application Resource File Projects

How Smartling creates variants from Application Resource Files depends on the file type and the parsing instructions included in the file. Most application resource files use key/value pairs, where the ‘value’ is the string and the ‘key’ is a label. For some file types, Smartling may capture keys as metadata for a string and create Variants if two different keys have the same value. See below for detailed information on each file type:

#### Key-value based files: Java Properties, iOS/Mac OS .strings

Every string is created with variant metadata, which is the key. If the ‘keys’ are different for two strings with the same ‘value’ then Smartling will create two strings using the key as context metadata.

~~~properties
string1= Home
string2= Home
~~~

#### YAML

Every string is created with variant metadata. The variant metadata is the full path of keys leading to the translatable string.

~~~yaml
Strings:
  string1: Home
  string2: Home
~~~

#### Android Resources

Every string is created with variant metadata which is the value of the string.name attribute. &nbsp;So if the value of a string is the same for two strings but the string.name attribute is different Smartling creates two strings.

~~~xml
<string name="string1">Home</string>
<string name="string2">Home</string>
~~~

#### RESX/RESW

Every string is created with variant metadata which is the value of the data.name attribute. If the value of a string is the same for two strings but the data.name attribute is different, Smartling creates two strings.

~~~xml
<data name="string1">
&nbsp;<value>Home</value>
</data>

<data name="string2">
&nbsp;<value>Home</value>
</data>
~~~

#### Gettext POT

The `msgid` value is captured as the key but is not used to create variants.

The string is captured with variant metadata if `msgctxt` is present for the string. The value of the `msgctxt` key will be used as variant metadata.

~~~
#:0001
msgctxt "string1"
msgid "Home"
msgstr ""

#0002
msgctxt "string2"
msgid "Home"
msgstr ""
~~~

#### JSON

Strings are created with variant metadata only if you have configured the JSON file to use keys and have turned on the variants behavior. Then the Smartling key for a string is used as the variant metadata for that string. For [accounts created after June 11th 2015](){: .cc-active}, JSON strings are created with variant metadata by default, with the full path of keys leading to a string being captured as the variant.

> For some files uploaded before June 2015, an older parser version applies and variants must be enabled through [file directives](http://docs.smartling.com/pages/supported-file-types/JSON/).

~~~json
{
"string1": "Home",
"string2": "Home"
}
~~~

#### XML

Strings are created with variant metadata only if you have configured the XML file to use keys and have turned on the variants behavior. Then the Smartling key for a string is used as the variant metadata for that string.

~~~xml
<?xml version="1.0" encoding="utf-8"?>
<!-- smartling.translate_paths = data/item/string -->
<!-- smartling.source_key_paths = data/item/{string.name} -->
<!-- smartling.variants_enabled = true -->
<data>
&nbsp; <item>
&nbsp; &nbsp; <string name="name1">Home</string> &nbsp; </item>
&nbsp; <item>
&nbsp; &nbsp; <string name="name2">Home</string>
&nbsp; </item>
</data>
~~~

### Business Documents Projects

All strings are unique by document. &nbsp;Within a single document in cases where strings have a small number of words (by default, less than three), Smartling will automatically generate variants allowing you to provide different translations for an identical string depending on the context within the document.

## Adding Variant Metadata After Translation has Begun

Please note, if you capture content without variant metadata, begin translation and, later, add variant metadata (for example: by adding variant tags to your HTML or re-uploading a file with variants enabled), all strings with variant metadata will be considered new and unique. Configuring SmartMatch can help you avoid having to retranslate these strings, but they will be counted as new strings and add to your accounts Words Under Management.

## Working with Variants in the Dashboard

Since Smartling’s List View displays the plain text of a string, it can be difficult to distinguish one Variant from another. Here are a few tips for working with Variants.

**(1)** In the List View, click the gear wheel to turn on **Show Key**(Files only) and **Show Variant**. This will display any available Variant metadata next to each string and can assist you in distinguishing strings with identical text. **Note:** for Business Documents, no variant data is available in the List View.

![](/uploads/versions/smartling---translations-management-and-grabtab---x----2468-926x---.png)

**(2)** If you have used GDN or File integration to mark Variants, you can search for your Variant names in the **Key**(Files only) or **Variant** search box.
<br>![small](/uploads/versions/smartling---translations-management-28---x----474-819x---.png)

**(3)** If there is no variant metadata, the context and code views in the Translation Interface may reveal the differences in the inline tags that caused two unique strings to be created.

## Using Smartmatch to avoid re-translating identical text

You can [set up Smartmatch](/knowledge-base/articles/smartmatch-settings/) to match variants of strings in your Translation Memory. Enabling **100% match with variants** will only match strings with identical text when their variant metadata is the same. Enabling **100% match without variants** will ignore variant metadata and match any strings with identical text.