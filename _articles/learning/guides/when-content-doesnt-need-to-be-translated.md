---
layout: article
title: "When content doesn't need to be translated"
draft: false
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
  learning:
    include: true
    type: Guide
    image_path: 
---


Although we are in the business of translation, we’ll be the first to point out that not all of your content needs, or even should be translated. As a matter of fact, there are few different ways to exclude or eliminate content from the translation process, before or after it has been captured.&nbsp;

## Exclude

**Project types availability** - Global Delivery Network, Files, and Connectors

**What you need to know about excluding** - Excluded strings are removed from the translation process entirely, never displayed to your translation resource team. Once your content is ready to be published, the excluded strings is published in its original form.

**When should you exclude content** - Use Exclude if you don’t want a string translated but still need it displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

![](/uploads/versions/exclude-1---x----1176-654x---.png)

## `notranslate` tag

**Project types availability** - Global Delivery Network

**What you need to know about the `<notranslate>` tag**- When using the `<notranslate>` tag, content contained in the tag is eliminated from the translation process and appear unchanged from the original language.

**When should you use the `<notranslate>` tag**- Use&nbsp; if you don’t want a set or class of strings translated but still need them displayed ‘as-is’ in the localized version of your site or file, for example email addresses, proper names, company names, addresses etc.&nbsp;

&nbsp;If you know what HTML element the strings are being ingested from, and the element has a unique class or ID, you can simply apply the no translate rule to that specific class or ID via the GDN rule configuration.&nbsp;

![](/uploads/versions/notranslate-1---x----1671-1038x---.png)

If you are dealing with an element that does not have a unique class or ID, then go ahead and tag the element directly in the source code

![](/uploads/versions/example-notranslate--html---x----1176-288x---.png)

## `NOTRANSLATE` Style

**Project types availability** - Business Documents (excel and Word documents)&nbsp;

**What you need to know about the NOTRANSLATE Style&nbsp;**- When using the NOTRANSLATE style, content contained in that style is eliminated from the translation process and all localized versions of the site.&nbsp;

**When should you use the &lt;notranslate&gt; style&nbsp;**- The NOTRANSLATE Style can be used to exclude content for translation as you are creating or formatting your document. It’s also a great option when you have large sections of a document, or notes that need to be excluded from the translation process.

For both excel and word documents, you create a NOTRANSLATE Style, then apply the style to any paragraph or string in your document. Those strings are then removed from the translation process.&nbsp;

![](/uploads/versions/notranslate-style-1---x----1726-723x---.png)

## Patterns

**Project types availability** - Global Delivery Network&nbsp;

**What you need to know about the Patterns&nbsp;**- Patterns are traditionally used to handle dynamic content within a string, but can also be used to exclude a part of a string from translation.&nbsp;

**When should you use Patterns&nbsp;**- Use patterns to exclude only a part of string instead of the entire string.

To [create a pattern](/knowledge-base/articles/create-and-manage-patterns-gdn/), head over to the list view, select the string you want to exclude content from, and go to the actions menu.&nbsp;

In the pattern window, replace the content you don’t want translated by a placeholder.&nbsp; Then run a pattern match to see if there are any similar strings.&nbsp; Finally click Apply to run the pattern rule on the selected matches: this will ensure that static content is only translated&nbsp; once and that smartling passes through any “paternized value” the GDN may see, without translation.&nbsp;

![](/uploads/versions/patterns1---x----837-1413x---.png)

**Greedy Patterns**

<div>A common mistake is to turn an entire string into a pattern, for example a string that is only made-up of email address.&nbsp;</div>

<div><img alt="" width="1176" height="411" src="/uploads/versions/patterns2---x----1176-411x---.png" /></div>

In the previous example your pattern ensures that dynamic content is preceded or followed by static content in order to trigger the pattern rule. In the current example you have created, what we refer to, as a greedy pattern which will replace any strings with an email address, no matter what other words precedes or follows it.&nbsp;

## Files directives&nbsp;

**Project types availability** - Files Project

**About File Directives** - Use file directives to create patterns in a file&nbsp; project.&nbsp;

When you integrate directives inline into the file, you can change the behavior for different strings within a single file, including, for most file types, the ability to have any number of characters treated as a placeholder.

![](/uploads/versions/custom-xml---smartling-slack---x----1014-717x---.png)&nbsp;

## Delete a string

**Project types availability** - Global Delivery Network&nbsp;

**What you need to know about the Delete&nbsp;**- The delete function is used as a temporarily way of excluding strings from translation. When you delete a string, it is removed from your Authorization or In Progress queue until the page is re-crawled, at which point it will show-up back in the authorization. queue.&nbsp;

**When should you use Delete&nbsp;**-

(1) Strings that should have been excluded by a rule or &lt;notranslate&gt; tag have been ingested; ‘Delete’ lets you temporarily exclude the strings until you’ve set-up the rule or tags properly and the strings are properly excluded.&nbsp;

(2) You have made changes to one of your pages and you are left with legacy content, in the dashboard, from the previous version of the page that were and will never be translated; Delete the strings to keep your queue organized.&nbsp;

To delete strings, go to the Authorization or In Progress view. Once deleted, strings are removed from either queues. Remember, if you haven’t applied a &lt;notranslate&gt; rule they can be re-ingested.

![](/uploads/versions/delete1---x----1536-861x---.png)

#### Option #7 - Unauthorize

**Project types availability** - Global Delivery Network, Files, and Connectors

**What you need to know about Unauthorize**- Unauthorizing content is more of a way to send back content in the authorization queue that was mistakenly authorized for translation. Please note that you can only unauthorize content that has not yet been translated.

To [unauthorize strings](/authorize-content-from-the-list-view/), go to the In progress view. Once unauthorized strings are removed from the In Progress view and placed back in your authorization queue.&nbsp;

![](/uploads/versions/unauthorize---x----1509-951x---.png)