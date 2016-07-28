---
layout: article
title: "When content doesn't need to be translated"
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition:
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


Although we are in the business of translation, we’ll be the first to point out that not all of your content needs, or even should be translated. As a matter of fact, there are few different ways to exclude or eliminate content from the translation process, before or after it has been captured.&nbsp;

#### Option #1 - Exclude

**Project types availability** - Global Delivery Network, Files, and Connectors

**What you need to know about excluding** - Excluded strings are removed from the translation process entirely, never displayed to your translation resource team. Once your content is ready to be published, the excluded strings is published in its original form.

**When should you exclude content** - Use Exclude if you don’t want a string translated but still need it displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

![](/uploads/versions/exclude-1---x----1176-654x---.png)

#### Option #2 - &lt;notranslate&gt; tag

**Project types availability** - Global Delivery Network

**What you need to know about the &lt;notranslate&gt; tag**- When using the &lt;notranslate&gt; tag, content contained in the tag is eliminated from the translation process and appear unchanged from the original language.

**When should you use the &lt;notranslate&gt; tag**- Use&nbsp; if you don’t want a set or class of strings translated but still need them displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

&nbsp;If you know what HTML element the strings are being ingested from, and the element has a unique class or ID, you can simply apply the no translate rule to that specific class or ID via the GDN rule configuration.&nbsp;

![](/uploads/versions/notranslate-1---x----1671-1038x---.png)

If you are dealing with an element that does not have a unique class or ID, then go ahead and tag the element directly in the source code.

![](/uploads/versions/example-notranslate--html---x----1176-288x---.png)

#### &nbsp;OPTION #3 - NOTRANSLATE Style

**Project types availability** - Business Documents (excel and Word documents)&nbsp;

**What you need to know about the NOTRANSLATE Style&nbsp;**- When using the &lt;notranslate&gt; style, content contained in that style is eliminated from the translation process and all localized versions of the site.&nbsp;



**When should you use the &lt;notranslate&gt; style&nbsp;**- The NOTRANSLATE Style can be used to exclude content for translation as you are creating or formatting your document. It’s also a great option when you have large sections of a document, or notes that need to be excluded from the translation process.

For both excel and word documents, you create a NOTRANSLATE Style, then apply the style to any paragraph or string in your document. Those strings are then removed from the translation process.&nbsp;

![](/uploads/versions/notranslate-style-1---x----1726-723x---.png)

#### OPTION #4 - Patterns

**Project types availability** - Global Delivery Network&nbsp;

**What you need to know about the Patterns&nbsp;**- Patterns are traditionally used to handle dynamic content within a string, but can also be used to exclude a part of a string from translation.&nbsp;



**When should you use Patterns&nbsp;**- Use patterns to exclude only a part of string instead of the entire string.

To create a pattern, head over to the list view, select the string you want to exclude content from, and go to the actions menu.&nbsp;

In the pattern window, replace the content you don’t want translated by a placeholder.&nbsp; Then run a pattern match to see if there are any similar strings.&nbsp; Finally click Apply to run the pattern rule on the selected matches: this will ensure that static content is only translated&nbsp; once and that smartling passes through any “paternized value” the GDN may see, without translation.&nbsp;

![](/uploads/versions/patterns1---x----837-1413x---.png)

**Greedy Patterns**

<div>A common mistake is to turn an entire string into a pattern, for example a string that is only made-up of email address.&nbsp;</div>

<div><img alt="" src="/uploads/versions/patterns2---x----1176-411x---.png" width="1176" height="411" /></div>

&nbsp;

<div alt="" src="/uploads/versions/patterns2---x----1176-411x---.png" width="1176" height="411">&nbsp;</div>

<div>In the previous example your pattern ensures that dynamic content is preceded or followed by static content in order to trigger the pattern rule. In the current example you have created, what we refer to, as a greedy pattern which will replace any strings with an email address, no matter what other words precedes or follows it.&nbsp;</div>