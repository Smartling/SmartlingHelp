---
layout: article
title: Pattern Match Variable Content
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
---
Smartling uses patterns to avoid retranslating repeating content with variables. [Patterns can be created in the Dashboard](/hc/en-us/articles/202660343), or can be created by integrating your website's HTML code using the Smartling notranslate class.

**Pattern Match Inline Content***

Using the “notranslate” tag within an inline tag such as a `<span>` or `<strong>`, you can use a placeholder that matches the overall pattern to force the content to be extracted for translation; for example, the following content  

~~~
<div>
Hello, <span class=”notranslate”>Jack</span>!
</div>
~~~

will be extracted for translation as `Hello, {0}!`. When translated into French, the Smartling service will automatically replace the `{0}` placeholder with the custom content, so the final output might look like: `Bonjour, Jack!`

The second example can be forced into a pattern match such as:

~~~
<div>
<span class=”notranslate”>37</span> comments
</div>
~~~

which will extract the content for translation as: `{0} comments` 

The third example can be forced into a pattern match as follows:

~~~
<div>
Page <span class=”notranslate”>1</span> of <span class=”notranslate”>10</span>
</div>
~~~

which will extract the content for translation as `Page {0} of {1}`

**Note**: Smartling creates patterns when you use the class `notranslate` within an inline tag only. When you use `notranslate` for a block tag, Smartling ignores the entire block element.

During the translation process, neither professional nor volunteer translators will see the original, variable text; they will see a non-editable placeholder. When the content appears on a translated site, the phrase will appear in the appropriate language, with the placeholder replaced by the actual variable string.

**How to Pattern Match Via Configuration**

Using translation classes and exclusion classes, you have better control over exactly what is and is not translated (and the translation method).

In cases where it is not possible to modify the specific HTML via the `notranslate` class in an inline element to create patterns, you can write a regular expression describing the pattern, that includes a placeholder for the personalized, unique, or sensitive information. To demonstrate, consider the following text:

     `Thank you, your order number is 56763`

This string could be described using the regular expression:

     `Thank you, your order number is ([1-9]+)`

With this pattern in place, the content will be translated as:

     `Thank you, your order number is {0}`

because it matches the regular expression above. Smartling can add these regular expression patterns to your site configuration.
