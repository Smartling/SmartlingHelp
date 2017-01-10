---
layout: article
title: Specifying localized content in the HTTP head of the page
---


Content swaps also work on `<title>` and `<meta>` elements in the head of the page:

~~~
<!-- SL:swap-start:id:/page/html.html-keywords -->
<meta name="keywords" content="Paris, reservation, hotel">
<!-- SL:swap-end -->
~~~

If you tag meta keywords for swapping, Smartling will treat the swapped content as a comma-separated list.