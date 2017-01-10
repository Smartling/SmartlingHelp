---
layout: article
title: GDN - Create Pattern Match Rules
---


Smartling uses patterns to avoid retranslating repeating content with variables. [Patterns can be created in the Dashboard](/knowledge-base/articles/create-and-manage-patterns-gdn/), or can be created by integrating your website's HTML code using the Smartling notranslate class.

One way to create patterns is by using a Do Not Translate rule or by adding tags to your source code. If this is not possible, you can also create configuration rules.

## Pattern Match Via Configuration

Using translation classes and exclusion classes, you have better control over exactly what is and is not translated (and the translation method).

In cases where it is not possible to modify the specific HTML via the `notranslate` class in an inline element to create patterns, you can write a regular expression describing the pattern, that includes a placeholder for the personalized, unique, or sensitive information. To demonstrate, consider the following text:

`Thank you, your order number is 56763`

This string could be described using the regular expression:

`Thank you, your order number is ([1-9]+)`

With this pattern in place, the content will be translated as:

`Thank you, your order number is {0}`

because it matches the regular expression above. Smartling can add these regular expression patterns to your site configuration.