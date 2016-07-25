---
layout: article
title: Process JavaScript for Translation
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
Smartling does not recognize JavaScript content for translation by default as it may affect your site's functionality.  

Smartling never translates content in tag attributes such as `onmouseover`, `onhover`, or `onclick`. To translate JavaScript content in tag attributes, simply move the blocks to Javascript variables within the page.  

To process JavaScript for translation, have a developer tag the original source code Javascript content with Smartling tags, as described below.

**Include JavaScript Blocks for Translation**

To include java script blocks for translation, use the tag pair `<sl:translate>` and `</sl:translate>` For example:  

~~~
/*<sl:translate>*/  
var string1='String1 will be translated by Smartling.';  
/*</sl:translate>*/  

// <sl:translate>  
var string1='String1 will be translated by Smartling';  
// </sl:translate>  

/*<sl:translate>*/  
var string1='String1 will be translated by Smartling.';  
// </sl:translate>  

// <sl:translate>  
var string1='String1 will be translated by Smartling.';  
/* </sl:translate> */  

var string1=/*<sl:translate>*/'String1 will be translated by Smartling.'/*</sl:translate>*/;  

/*<sl:translate>*/  
var string1='String1 will be translated by Smartling.';  
var string2='String2 will be translated by Smartling.';  
/*</sl:translate>*/   
var string3='String3 will NOT be translated by Smartling.';  
~~~

Smartling will translate the string values between tag pair `<sl:translate>` and `</sl:translate>`.  

**Concatenated JavaScript Strings**

Avoid concatenating JavaScript strings in all cases as Smartling recognizes individual string literals as strings and will create multiple strings in the Smartling system. For example, avoid the following:

~~~
var string1 = 'I like my lines to wrap '+  
' a certain way so I break them up';
~~~

Or:

~~~
var string2 = 'My string has a variable: '+ variableOne + 'that goes right here';
~~~

Keep the entire string together and use a formatter in Javascript to pass the variable information. For example, you can include code such as the following in your JavaScript files:

~~~
>if (!String.prototype.supplant) {  
     String.prototype.supplant = function (o) {  
           return this.replace(/#{([^{}]*)}#/g,  
                 function (a, b) {   
                        var r = o[b];   
                        return typeof r === 'string' || typeof r === 'number' ? r : a;   
                  }   
           );   
      };   
}
~~~

And add the Smartling comments to indicate that the string should be translated:

~~~
/*<sl:translate>*/  
var string1='Transaction complete. The system will issue a refund of #refundAmount#.'  
/*</sl:translate>*/
~~~

Then replace the placeholder #refundAmount# with an actual value.

~~~
string1 = string1.supplant( { name: $transaction.get("refundAmount") } );
~~~

If your javascript strings have inline variables, to improve translation quality and avoid translations introducing coding errors, you must turn them in placeholders. You can do this in the Smarling dashboard after they have been ingested by Smartling by using the patterns creation tool. For example if you ingested the above example it would appear in your Smartling dashboard as:

~~~
Transaction complete. The system will issue a refund of `refundAmount`.
~~~

Using the pattern tool you would define `refundAmount` as the placeholder in this string. The string would be removed from your content list and you would then re-ingest the string and it would be recognized with the pattern rule and would appear in your content list as:
Transaction complete. The system will issue a refund of `{refundAmount}`. Where `{refundAmount}` is a placeholder that can be positioned by the translator, but not edited.

If your project has many javascript strings with inline variables contact Smartling Support in order setup a custom configuration to automatically turn the variables into placeholders as they are ingested. No matter how you choose to handle your inline variables, Smartling will recognize the entire string as a single string and provide the translator with a complete linguistic unit to translate.

**How to Process JavaScript Blocks for Translation**

To exclude java script blocks for translation tag pairs as `<sl:notranslate>` and `</sl:notranslate>` for example,

~~~
/*<sl:notranslate>*/  
var string99 = 'String99 will NOT be translated.';  
/*</sl:notranslate>*/  
/*<sl:translate>*/  
var string1 = 'String1 will be translated.';  
/*<sl:notranslate>*/  
var string99 = 'String99 will NOT be translated.';  
/*</sl:notranslate>*/  
var string2 = 'String2 will be translated.';  
/*</sl:translate>*/
~~~

**How to Translate HTML and Escaped HTML within JavaScript**

Smartling supports translating plain and escaped HTML content within JavaScript.To designate HTML content in JavaScript for translation, use the `/*<sl:translate_html>*/` and `/*</sl:translate_html>*/` tags.

**How to Translate Minified Javascript (when comments cannot be used)**

When comments cannot be used in Javascript or if comments are removed because of Minification, Smartling offers an alternative using empty function calls within the code. The functions have the same purpose and should be used the same way as a comment. Function Calls to use in code:

~~~
Start Translation:  sl_tr_start();  
End Translation:  sl_tr_end();
~~~

For html and json blocks inside Javascript:

~~~
Start Translation:  sl_tr_html_start();  
End Translation:  sl_tr_html_end();

Start Translation: sl_tr_json_start();  
End Translation: sl_tr_json_end();

Start No Translate: sl_notr_start();  
End No Translate: sl_notr_end();
~~~

To enable translation of string literals found in a certain section of a javascript file, declare an empty function and as many directive variables as you need.

~~~
// Declare an empty function  
function sl_translate() {}  

// Add as many of the following directives as you need, each calling the empty function  
sl_tr_start = sl_translate;  
sl_tr_end = sl_translate;  
sl_tr_html_start = sl_translate;  
sl_tr_html_end = sl_translate;  
sl_tr_json_start = sl_translate;  
sl_tr_json_end = sl_translate;  
sl_notr_start = sl_translate;  
sl_notr_end = sl_translate;  

// Begin and end translation in your JavaScript   
function hello(longName)  
{ sl_tr_start(); alert('Hello'); sl_tr_end();
~~~

As a result, Smartling will process for translation any quoted strings between `sl_tr_start()` and `sl_tr_end()`, in this case "Hello".

**Note:** The layer of abstraction used above protects the function names being changed by most minification processes. Don't try it like this:

~~~
function sl_tr_start() {}  
function sl_tr_start() {}
~~~

This may work in testing, but minification is likely to change the function names, so they won't be recognized by the Smartling parser.

**How to Process JSON in a JavaScript String Literal**

Smartling automatically parses JSON in JavaScript in cases where there are special markers around the string, containing JSON. By default, opening and closing markers are `/* <sl:translate_json>*/` `/*</sl:translate_json>`


~~~
var something = "Something"
/* <sl:translate_json> */
SomeClass.method({"sl_translate" : "sl_all" , "markup" : "this is a test" });

/* </sl:translate_json> */

DoSomething(something);
~~~

**Notes**:

*   JavaScript parsing should be turned ON (whether using the script or JS file)
*   Keys to translate can be specified by the `sl_translate` key.
