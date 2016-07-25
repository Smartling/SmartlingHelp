---
layout: article
title: Process JSON for Translation in the GDN
draft: true
Applies to:
  GDN: true
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

**The following article applies to using JSON with the Global Delivery Network. To learn about using JSON documents in a resource file project visit [docs.smartling.com](https://docs.smartling.com/display/docs/Supported+File+Types#SupportedFileTypes-json).**

The Smartling Global Delivery Network does not recognize JSON content for translation by default as it may affect your site's functionality.

Smartling never translates JSON keys, but Smartling will automatically recognize HTML and escaped/encoded HTML within JSON values. Smartling JSON handling is completely key-based, so even if an object whose key is defined for tranlsation has child nodes, if those child objects have different keys that are not declared for translation, Smartling won't process this content.

To process JSON for translation, have a developer tag the original source code JSON content with Smartling tags, as described below.

For example:

~~~
{  
    "sl_translate": "markup_a,markup_b,markup_c",  
    "success": true,  
    "markup_a": "<div>Smartling translates this content</div>",  
    "someCount" : 14,  
    "markup_a": "<div>Smartling translates this content</div>",  
    "markup_b": "<div>Smartling translates this content</div>",  
    "markup_c": "<div>Smartling translates this content</div>",  
    "markup": "<div>Not this content</div>",  
}
~~~

where the value of `sl_translate` is a comma delimited list of the key names whose values should be translated (in the example, the value of "markup" will be translated).

Smartling also supports values of `sl_all` or `sl_none` in JSON. For example, Smartling will translate the values for all of the following key names:


~~~
{  
    "sl_translate": "sl_all"  
    "markup_a": "<div>Smartling will translate this content</div>"  
    "markup_b": "<div>Smartling will also translate this content</div>",  
    "markup_c": "<div>And this content</div>  
}
~~~

**Note**: The `sl_translate` tag must be the very first item in the JSON string. Smartling requires the tag at the beginning of the string to determine if it should process the response. You can also nest elements within the string.

## How to Process JSON content within a page or script element

When your json content is located not on its own with a json response, but rather embedded within an HTML page, the json content needs to be wrapped with the following directives: `/* <sl:translate_json> */` and `/* </sl:translate_json> */`

For example:

~~~
<pre><script type="text/javascript">  
myvariable = /* <sl:translate_json> */{"sl_translate":"sl_all", "keyc":"string-ABC", "keya":"string-ABC", "keyb":"string-ABC"}/* </sl:translate_json> */  
</script></pre>
~~~

## How to Process JSON Variants on Attributes

Add a directive to your JSON responses that uses `sl_variant` and multiple keys in the following format:

~~~
"sl_variant":"keya:variantA, keyb:variantB"
~~~

For example, the complete string appears as:

~~~
{"sl_translate":"sl_all", "sl_variant":"keya:variantA, keyb:variantB", "keyc":"string-ABC", "keya":"string-ABC", "keyb":"string-ABC"}
~~~

**How to Process JSON in a JavaScript String Literal**

For information on processing JSON in a JavaScript string literal, see:

[http://support.smartling.com/hc/en-us/articles/201295973#literal](/hc/en-us/articles/201295973#literal)