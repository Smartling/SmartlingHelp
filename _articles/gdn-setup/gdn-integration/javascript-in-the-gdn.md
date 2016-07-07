---
layout: article
title: JavaScript in the GDN
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


It may be that not all translatable content on your site is delivered as plain HTML, especially for more complicated or dynamic sites. You may also have content delivered via JSON requests or in JavaScript.

By default, Smartling doesn’t capture JSON and JavaScript content, in order not to disrupt the functionality of your site. To translate this content you need to explicitly mark the content that you want translated. You can do this by using inserting Smartling directives as javascript comments. Wherever possible, consider externalizing your strings in separate files to make them easier to identify and translate.

Note that you may need a few tweaks to optimize your JavaScript for localization. The most important of these is to remove any string concatenation.

## Avoid Concatenation

String concatenation is common in JavaScript, especially when handling variables, but it creates problems for localization and must be avoided in translatable content. Consider the following example:

~~~javascript
var item = {...}
// <sl:translate>
var checkoutStatus = 'You added a ' + item.color + ' ' + item.type + ' to your cart.'
// </sl:translate>
~~~

Smartling captures each JavaScript string literal as a translatable string, so your translators will see three separate strings:

* ‘You added a ‘
* ‘ ‘
* ‘ to your cart’.


The variables will not be captured.

Apart from it being difficult for the translator to understand and translate these three strings in isolation, it is impossible for the translator to change the position of the variables to allow for non-English sentence structure.

A much more localization-friendly way to handle the same content is by using a simple templating engine like [mustache.js](https://github.com/janl/mustache.js) or by extending the String class with a [supplant method](https://gist.github.com/pbroschwitz/3891293). Here’s an example using mustache:

~~~javascript
<script type="text/javascript" src="/js/mustache.min.js"></script>
<script>
	var item = {...};
	// <sl:translate>
	var checkoutStatus = 'You added a {{item.quantity}} {{item.type}} to your cart.';
	// </sl:translate>
	var checkoutStatus = Mustache.render(checkoutStatus, item);
</script>
~~~

You will need to create a placeholder rule to capture content in double curly braces as a placeholder. Contact your Success representative to discuss your needs.

This way, the translator can easily translate the string as a whole, and place the variables wherever they need to go for a given language.

## JavaScript Directives

> If you are minifying your assets, comments are likely to be stripped from your code. See Minification for an alternative syntax to use.

### Translate / Notranslate

`&lt;sl:translate&gt;` and `&lt;sl:notranslate&gt;` can be used to mark content to translate and not translate.

`&lt;sl:notranslate&gt;` tags can be nested inside `&lt;sl:translate&gt;` tags so you can mark a large block for translation, but single out select strings you don’t want translated. However, `&lt;sl:translate&gt;` tags cannot be nested inside `&lt;sl:notranslate&gt;` tags.

~~~javascript
// Translate some Strings

// <sl:translate>
	var string 1 = 'Translate this string';
	var string 2 = 'And this string';
	var string 3 - 'And this string, too.'
// </sl:translate>

// Nest a notranslate block inside of a larger translate block

// <sl:translate>
	var string 1 = 'Translate this string';
	//<sl:notranslate>
		var string 2 = 'But not this string';
	//</sl:notranslate>
	var string 3 - 'Translate this string, too.'
// </sl:translate>
~~~

### Translate HTML

Often HTML can be stored inside a Javascript string literal. To capture this content, you need to let Smartling know to parse the content as HTML so that block level tags can be captured as individual strings instead of capturing one large string for all content within the literal. Do this with the `<sl:translate_html>` tag. Here&rsquo;s an example adding HTML to the DOM with jQuery.

~~~javascript
$("#addUser").click(function{} {
	var username = $("#inputUsername").val();
	var role = $("inputRole").val();
	//<sl:tranlsate_html>
		var template = '<p>New user has been added.<ul><li>Username: {{username}}</li><li>role:{{role}}</li></ul></p>'
	//</sl:translate_html>
	var message = Mustache.render(template, {username: username, role: role})
	('#Messages').append(message);
});
~~~

&nbsp;

Smartling captures the following strings from this example:

&nbsp;

* ‘New user has been added.’
* ‘Username: {{0}}’
* ‘Role: {{0}}’


&nbsp;

### Translate JSON inside a JavaScript string literal

&nbsp;

If you have a JSON object inside your JavaScript you can use the JSON directives to identify the translatable content, but you still need to tell Smartling to parse the content as JSON. Do this with the

<sl:translate_json> tag.</sl:translate_json>

~~~javascript
var user = {...}
user.buildpage = function(messages) {
	...
}
// <sl:translate_json>
	var messages = '{
		"sl_translate": "sl_all",
		"greeting": "Hello, valued user!",
		"farewell": "Thanks for stopping by!",
		"error": "There seems to be a small problem."
	}'
// </sl:translate_json>
user.buildpage(messages);
~~~

&nbsp;

## Minification

&nbsp;

If you need to minify your JavaScript for faster delivery, comments won’t work for you, as they are usually stripped out by minifiers. As an alternative, you can use functions. Once you have your functions set up, you can use them exactly like comment directives. To use function names as directives in JavaScript for minification, add this to the top of your script.

&nbsp;

~~~javascript
// Declare an empty function
function sl_translate() {}

// Add as many of the following directives as you need, each calling the empty function
sl_tr_start = sl_translate;
sl_tr_end = sl_translate;
sl_notr_start = sl_translate;
sl_notr_end = sl_translate;
sl_tr_html_start = sl_translate;
sl_tr_html_end = sl_translate;
sl_tr_json_start = sl_translate;
sl_tr_json_end = sl_translate;
~~~

&nbsp;

Using this syntax will ensure that the directive names survive minification intact. You can then use your functions exactly the same way we use the comment directives above. The functions don’t actually do anything in JavaScript, they only affect the Smartling parser.

&nbsp;

~~~javascript
// Translate some Strings

sl_tr_start();
	var string 1 = 'Translate this string';
	var string 2 = 'And this string';
	var string 3 - 'And this string, too.'
sl_tr_end();

// Nest a notranslate block inside of a larger translate block

sl_tr_start();
	var string 1 = 'Translate this string';
	sl_notr_start();
		var string 2 = 'But not this string';
	sl_notr_end();
	var string 3 - 'Translate this string, too.'
sl_tr_end();
~~~

&nbsp;

## Content in Common Libraries is Not Captured

&nbsp;

To maximize efficiency, Smartling does not parse the contents of common JavaScript libraries. If you have added any translatable content to these libraries, you will need to move it outside the Library file.

&nbsp;

~~~
jquery
jquery.min.js
jquery.ui.js
prototype.js
yui
ext
ally
ample
artisan
blackbird
cappuccino
datejs
dhtmlx
dojo
puremvc
mootools
echo
flot
fuel
glow
closure-library
himle
jelly
joose
jwee
jsdraw2d
knockout
midori
mochikit
plotkit
pottisjs
processing.js
qooxdoo
rico
script.aculo.us
smartclient
soundmanager
spark
sproutcore
spry
sylvester
swfobject
taffydb
typeface.js
underscore.js
zwt
zreshk
~~~

&nbsp;