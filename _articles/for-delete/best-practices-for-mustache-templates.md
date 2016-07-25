---
layout: article
title: Best Practices for Mustache Templates
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: true
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


Smartling requires HTML to be properly balanced (well-formed). If HTML is not properly balanced, it may render fine or Smartling may attempt to balance the HTML by, for example, introducing additional closing tags.

**Balanced HTML Example**

~~~
class="Body"><b><i>Text</i></b>
~~~

**Unbalanced HTML Example**

~~~
class="Body"><b><i>Text</b></i>
~~~

Smartling may attempt to close the `<i>` before the`<b>` resulting in an extra `</i>` tag.

~~~
class="Body"><b><i>Text</i>
~~~

Smartling may attempt to close `</b>`

[Mustache](http://mustache.github.io/) is a web template system that may add additional complexity because of the potential use of conditional logic inside the template.

**Incorrect Usage Example**


~~~
class="Body"><%if isSomething %> <span>Some text about true <%else>
 <span>Some text about false<%endif> </span>
~~~

Smartling will produce the following string:

~~~
class="Body">{0} <span>Some text about true {1} <span>Some text about false {2} </span>
~~~

Smartling converts the code snippets inside `<% %>` into Smartling placeholders since they may contain output such as `<% i %> friends` that must be translated as a single sentence.

**Correct Usage Example**

~~~
class="Body"><span><%if isSomething%> Some text about true <%else> Some text about false<%endif> </span>
~~~

Smartling will produce the following well-balanced HTML string:

~~~
class="Body"><span>{0} Some text about true {1} Some text about false {2} </span>
~~~

See also [Smartling Global Delivery Network Content Coding Requirements](https://smartling.zendesk.com/hc/en-us/articles/201053017-Smartling-Global-Delivery-Network-Content-Coding-Requirements)
