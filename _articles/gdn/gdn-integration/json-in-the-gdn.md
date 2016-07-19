---
layout: article
title: JSON in the GDN
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


Some content on your GDN site may be delivered as JSON, for example, as a result of AJAX requests to a content API.

Smartling does not automatically capture JSON content for translation, since translating the wrong content might affect the functioning of your site. To capture JSON for translation, you need to tell Smartling the keys whose values should be translated.

JSON is made up of name/value pairs. Smartling translates only JSON values.

> This article assumes JSON is the result of a JSON request. To identify JSON appearing within a Javascript string literal see [here](){: .cc-active}.

## Identify Translatable Content

To tell Smartling what to translate, you need to create an `"sl_translate"` entry at the top of your JSON object. `"sl_translate"` accepts three possible values

* `"sl_all"` - All values are translated.
* `"sl_none"` - No values are translated.
* Comma-separated list of JSON names identifying the values that should be translated. Specify the direct name.


For example

~~~
{
    "sl_translate": "string1, string2",
    "status": 200,
    "messages": "The Request was successful",
    "user": {
    	"firstName": "John",
	"role": "Editor",
    	"admin": false
    },
    "string1": "Here's some content for John",
    "string2": "<div>Smartling <strong>automatically</strong> recognises HTML markup a JSON string</div>",
    "string3": "This content will not be translated"
}
~~~

> Smartling automatically recognizes HTML content in JSON strings and parses it as HTML. Unlike in HTML, where tagging an element for translation captures all child nodes, in JSON, Smartling only captures directly identified values, not the values of child nodes. In the above example, adding "user" to the list of names in "sl_translate" would not cause the value of child node "role" to be captured for translation. If you want to translate "role", you need to specify it in "sl_translate".

## Create Variant Metadata for JSON strings

If you want to create [variant metadata](){: .cc-active} in Smartling, you can describe it by adding an "sl_variant" entry to your JSON object. This should contain a comma separated list of JSON names and variant values. For example:

~~~
{
	"sl_translate": "sl_all",
	"sl_variant": "string1:nav, string2:nav, string3:exitmessage",
	"string1": "Home",
	"string2": "Back",
	"string3": "Goodbye"
}
~~~

This would create the following strings in Smartling:

* **Variant:** nav
  <br>**String:** Home
* **Variant:** nav
  <br>**String:** Back
* **Variant:** exitmessage
  <br>**String:** Goodbye