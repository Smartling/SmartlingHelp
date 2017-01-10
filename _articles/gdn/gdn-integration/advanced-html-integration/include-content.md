---
layout: article
title: Include Content
---

For most GDN sites, all translatable content is captured by default. However, it is possible to set up your site defaults to capture no content, and mark only the content you want translated. In this case you can use the class `translate` or set the HTML5 attribute `translate` to `yes`.

~~~html
<div>
	<p>Default behavior applies, this content is not translated.</p>
</div>

<div class="translate">
	<p>This content will be captured for translation</p>
</div>
~~~

> Unlike the `translate` class, no other classes can be nested inside a `notranslate` block.