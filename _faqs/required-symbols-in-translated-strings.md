---
layout: faq
title: Required Symbols in Translated Strings
draft: false
related-articles:
  - article:
other-links:
  - text:
url:
---


When translating QT Linguist files in the Smartling Translation Interface, you may encounter the following message

**"Be aware that all '&' symbols should be present in translated string since they can be used as accelerators (key shortcuts)."**

In QT Linguist files, '&' marks an Accelerator key, which drives a keyboard command within an application.

When translating, you need to bring across the & into your translated string.

For Example

**English:**&nbsp;'&Close' - 'C' is the accelerator.
<br>**French:**&nbsp;'$Fermer' - 'F' is the accelerator.

For more information on Qt and Accelerators, see: http://qt-project.org/doc/qt-4.8/accelerators.html