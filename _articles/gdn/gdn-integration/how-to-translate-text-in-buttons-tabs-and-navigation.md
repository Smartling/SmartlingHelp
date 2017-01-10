---
layout: article
title: 'Translate Text in Buttons, Tabs, and, Navigation'
---


Elements of your original website may contain images with text embedded within the image, such as buttons, tabs or navigation sections. It may be appropriate to create images containing translated text for each of your alternative language websites. For example, your website might have a button with the text “Search" embedded within the button graphic, and for your French site, you may wish to create a version of the button image with the text “Recherch&eacute;".

## Translate text in buttons, tabs, and, navigation using CSS

CSS is often used to render buttons, tabs and navigation items with the appropriate images. For example, a `<button>` element might include a class such as:

~~~
&lt;button type="submit" id="search"&gt;&lt;/button&gt;
~~~

with a CSS entry including:

~~~
#search { background: url(/search_button.gif); }
~~~

In a case like this, you can simply use the language-specific CSS to use a different image; for example:

~~~
.smartling-fr #search { background: url(/fr_search_button.gif); }
~~~

## Handling the Form and Input Elements

Smartling will not translate `<form>` or `<input>` values by default because the application may expect certain values, but you can override this behavior for elements such as buttons or default values in search input fields. Elements that use the `<form>` or `<input>` class must also include the class "translate" for Smartling to identify this for translation; for example:

~~~
<input type="submit" value="Submit" name="btnSubmit" id="btnSubmit" />
~~~

to be translated, will require:&nbsp;

~~~
<input type="submit" class="translate" value="Submit" name="btnSubmit" id="btnSubmit" />
~~~

You may want to separate the value from the display by converting buttons or other elements that use the `<input>` tag to the `<button>` class. Smartling will automatically capture `button` text for translation without any additional tagging:&nbsp;

~~~
<button type="submit" value="submit">OK</button>
~~~

## Sliding Doors

For buttons, tabs and navigation elements that have a single line of text embedded within an image, you may want to modify your button to support live text rendered on top of an image button background. By using the “sliding doors" technique popularized by the blog “A List Apart," you can create buttons that feature great-looking image backgrounds with live text inside the button. As an added benefit, the background image can “stretch" to accommodate translated content that may be wider or narrower than the original content.

For more information on the “sliding doors" technique, visit: [http://www.alistapart.com/articles/slidingdoors/](http://www.alistapart.com/articles/slidingdoors/)