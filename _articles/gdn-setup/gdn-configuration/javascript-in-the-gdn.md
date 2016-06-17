---
layout: article
title: Javascript in the GDN
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
    - gdn
  articles:
    - automatic-machine-translation
    - chrome-context-capture-extension/using-the-chrome-capture-extension-with-browser-automation-software
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


It may be that not all translatable content on your site is delivered as plain HTML, especially for more complicated or dynamic sites. You may also have content delivered via JSON requests or in Javascript.

By default, Smartling doesn’t capture JSON and Javascript content, in order not to disrupt the functionality of your site. To translate this content you need to explicitly mark the content that you want translated. You can do this by using inserting Smartling directives as javascript comments.

Note that you may need a few tweaks to optimize your Javascript for localization. The most important of these is to remove any string concatenation.

## Avoid Concatenation

String concatenation is common in javascript, especially when handling variables, but it creates problems for localization and must be avoided in translatable content. Consider the following example:

var item = {…} //

<sl:translate> var checkoutStatus = 'You have ' + item.quantity + ' ' + item.type + ' in your cart.' // </sl:translate>

Smartling captures each javascript literal as a translatable string, so your translators will see three separate strings

String 1: ‘You have ‘ String 2: ‘ ‘ String 3: ‘ in your cart’.

The variables will not be captured.

Apart from it being difficult for the translator to understand and translate these three strings in isolation, it is impossible for the translator to change the position of the variables to allow for non-English sentence structure.

A much more localization-friendly way to handle the same content is by using a simple templating engine like mustache.js or by extending the String class with a supplant method. Here’s an example using mustache:

~~~javascript
//Note: this assumes Mustache.js is loaded

var item = {...};
// <sl:translate>
    var checkoutStatus = 'You have {{item.quantity}} {{item.type}} in your cart.';
// </sl:translate>
var checkoutStatus = Mustache.render(checkoutStatus, item);
~~~

You will need to create a placeholder rule to capture content in double curly braces as a placeholder.

This way, the translator can easily translate the string as a whole, and place the variables wherever they need to go for a given language.

## Javascript Directives

> If you are minifying your assets, comments are likely to be stripped from your code. See Minification for an alternative syntax to use.


