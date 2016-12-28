---
layout: faq
title: Why are there numbers in my placeholders?
draft: true
related-articles:
  - article: account-level-reports
---


Smartling automatically adds positional information to placeholders, because translators sometimes need to change the order in which placeholders appear in a string.

For example, if you upload this file to Smartling:

~~~
string1=Welcome, %s, you have %s in your account.
~~~

Smartling will display the string as

~~~
Welcome, %1$, you have %2$s in your account.
~~~

This won't affect the functionality of your site or app, but if translators need to put the placeholders in a different order in a translated string, they'll be able to tell them apart.