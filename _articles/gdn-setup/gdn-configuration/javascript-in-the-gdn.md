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
Avoid Concatenation

String concatenation is common in javascript, especially when handling variables, but it creates problems for localization and must be avoided in translatable content. Consider the following example:

var item = {...}
// <sl:translate>
var checkoutStatus = 'You have ' + item.quantity + ' ' + item.type + ' in your cart.'
// </sl:translate>

Smartling captures each javascript literal as a translatable string, so your translators will see three separate strings

String 1: ‘You have ‘
String 2: ‘ ‘
String 3: ‘ in your cart’.

The variables will not be captured. 

Apart from it being difficult for the translator to understand and translate these three strings in isolation, it is impossible for the translator to change the position of the variables to allow for non-English sentence structure.

A much more localization-friendly way to handle the same content is by using a simple templating engine like mustache.js or by extending the String class with a supplant method. Here’s an example using mustache:

~~~html

<script type="text/javascript" src="/js/mustache.min.js"></script>
<script>
	var item = {...};
	// <sl:translate>
	var checkoutStatus = 'You have {{item.quantity}} {{item.type}} in your cart.';
	// </sl:translate>
	var checkoutStatus = Mustache.render(checkoutStatus, item);
</script>

~~~

You will need to create a placeholder rule to capture content in double curly braces as a placeholder.

This way, the translator can easily translate the string as a whole, and place the variables wherever they need to go for a given language.


Javascript Directives

<warning box>
If you are minifying your assets, comments are likely to be stripped from your code. See Minification for an alternative syntax to use.
</warning box>

Translate / Notranslate

<sl:translate> and <sl:notranslate> can be used to mark content to translate and not translate. These tags can be nested inside each other, so you can mark a large block for translation, but single out select strings you don’t want translated.

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


Translate HTML

Often HTML can be stored inside a Javascript string literal. To capture this content, you need to let Smartling know to parse the content as HTML. Do this with the <sl:translate_html> tag. Here’s an example adding HTML to the DOM with jQuery.

$("#addUser").click(function{} {
	var username = $("#inputUsername").val();
	var role = $("inputRole").val();
	//<sl:tranlsate_html>
		var template = '<p>New user has been added.<ul><li>Username: {{username}}</li><li>role:{{role}}</li></ul></p>'
	//</sl:translate_html>
	var message = Mustache.render(template, {username: username, role: role})
	('#Messages').append(message);
});

Translate JSON inside a Javascript variable

If you have a JSON object inside your Javascript you can use the JSON directives to identify the translatable content, but you still need to tell Smartling to parse the content as JSON. Do this with the <sl:translate_json> tag.

var user = {...}
user.buildpage = function(messages) {
	...
}
// <sl:translate_json>
	var messages = {
		"sl_translate": "sl_all",
		"greeting": "Hello, valued user!",
		"farewell": "Thanks for stopping by!",
		"error": "There seems to be a small problem."
	}
// </sl:translate_json>
user.buildpage(messages);




Minification
If you need to minify your Javascript for faster delivery, comments won’t work for you, as they are usually stripped out by minifiers. As an alternative, you can use functions. Once you have your functions set up, you can use them exactly like comment directives. To use function names as directives in Javascript for minification, add this to the top of your script.

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

Using this syntax will ensure that the directive names survive minification intact. You can then use your functions exactly the same way we use the comment directives above. The functions don’t actually do anything in Javascript, they only affect the Smartling parser.

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


Content in Common Libraries is Not Captured
To maximise efficiency, Smartling does not parse the contents of common Javascript libraries. If you have added any translatable content to these libraries, you will need to move it outside the LIbrary file.

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
