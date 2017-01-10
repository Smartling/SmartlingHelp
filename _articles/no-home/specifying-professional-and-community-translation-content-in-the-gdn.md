---
layout: article
title: Specifying Professional and Community Translation Content in the GDN
---

When you add a language to the Smartling Dashboard, you specify a default translation method (Volunteer or Professional), and Smartling accordingly extracts and makes content available for translation. In some cases it may be appropriate to explicitly set a translation method that differs from the language-specific default translation method.

For example, all languages may be set by default for volunteer translation. But it may be appropriate to translate your Terms and Conditions via paid, professional translation, instead of relying on your community to translate legal text.

You can also specify the translation method within existing classes.

**How to Specify Content for Professional Translation**

If you want to specify that content should be translated by professional translation across all languages, add a class of “pro” to the surrounding HTML element; for example:

~~~
<div class=”pro”>
This content will be translated.
</div>
~~~

Nested elements inside a “pro” div will also be translated; for example:

~~~
<div class=”pro”>
This content will be translated.
<div>
This content will also be translated.
</div>
</div>
~~~


You can also specify professional translation for all content on an individual page by adding the “pro” class to the body tag; for example:

~~~
<body class=”pro”>
~~~


**How to Specify Content for Volunteer Translation**

To specify that content should be translated by crowdsourced volunteers, across all languages, simply add a “crowdsource” class to a surrounding HTML element; for example:  

~~~

<div class=”crowdsource”>
This content is available to be translated by your
community of volunteer translators.
</div>
~~~


Smartling will also translate nested elements inside a “crowdsource” div; for example:  

~~~
<div class=”crowdsource”>
This content is eligible to be translated by your
community of volunteer translators.
<div>
As is this content.
</div>
</div> 
~~~

The Smartling service may automatically add additional tags around content eligible for volunteer translation, which provides access to the volunteer translation tools.

You can also specify that Smartling translate all content on an individual page via the community by adding the “crowdsource” class to the body tag; for example:

~~~
<body class=”crowdsource”>
~~~

**How to Specify Content for Computer-Generated Translation**

If you wish to translate certain content by computer you can use the class “computer”; for example:

~~~
<div class=”computer”>
Content will be translated by computer algorithm.
</div>
~~~

Nested elements inside a “computer” element will also be translated by computer-generated translation. For example:

~~~
<div class=”computer”>
Content will be translated by computer algorithm.
<div>
This content is also translated by a computer.
</div>
</div>
~~~

You can also translate all content on an individual page via computer-generated translation by adding the “computer” class to the body tag, as in:

~~~
<body class=”computer”>
~~~

**How to Specify the Translation Method Within Existing Classes**

When your HTML already has a class name associated with an element you wish to translate; for example:

~~~
<div class=”someclass”>
Some content to translate.
</div>
~~~

You can simply add the appropriate translation class to the same element, next to the original class(es), separated by a space; for example:


~~~
<div class=”someclass pro”>
Some content to translate.
</div>
~~~
