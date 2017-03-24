---
layout: article
title: Pseudo translations
---


If you are localizing an app using resource files, getting a "pseudo translation" of them can be really helpful to:

* Verify the file will load and run in your application after a round trip through Smartling
* Identify potential custom integration you should perform before authorizing translation
* Test how your application's UI design will hold up when your content has been altered from translation

Translating a string can often make it longer, which can cause UI problems if the translation doesn’t fit the available space.

Also, Smartling applies many automatic and specialized string capture and string delivery actions to optimize the strings for the translation process and ensure the translated strings follow standard technical syntax rules for your file's type.

To better understand both of these impacts, Smartling gives you the option of downloading a file with ‘pseudo translations’ - which are simply the original strings with extra characters added - to increase the length of each string. Pseudo translations allow you to test your UI’s tolerance for longer strings without having to wait for translation to be completed. &nbsp;If a string has a properly integrated placeholder, the placeholder will not be modified in pseudo translation. &nbsp;If you have not integrated your placeholders they will be modified by pseudo.

## Customizing Pseudo Translations

By default, downloading pseudo translations increases the length of the original strings by 30 percent.

If you want a higher rate of inflation than the standard, you can set a custom rate of inflation, between 50 and 100 percent, by using file integration or an API directive. Check Smartling’s [Supported File Types](/developers/files/) information for your files to see if the ‘pseudo_inflation’ directive is supported.