---
title: Context
layout: section
master_category: false
subsections:
  - title: Chrome Context Capture Extension
subarticles:
  - title: Context Capture JavaScript Library
  - title: Adobe InDesign Context
  - title: Image Context for Mobile and Desktop Apps
---


![](/uploads/versions/smartling___translations_management---x----1178-869x---.png)

Providing quality contextual information makes the work of translation faster and more accurate. Context helps translators make linguistic decisions based on where a term appears in your site or app. It also allows them to account for layout and space restrictions in their translations.

Smartling can show context for a string in two basic ways. Dynamic HTML context is a snapshot of a web page. Dynamic context can be captured automatically by the GDN and some Connector types, or with the Smartling Chrome Context Capture Extension or JavaScript Context Library. It can also be provided by uploading an HTML file via File API.  - which Translation Resources see in the Context window of the Translation Interface. As translations are added for each string, they replace the original text in the Context window, allowing Translation Resources to see what their content will look like on the published website. This helps them to anticipate length or formatting issues.

Image context is a static JPG or PNG image used to display context for non-web content such as mobile or desktop apps. Translators can use the image to see where their translated text will be displayed in the app, but the context image will not change as translation progresses.

## Context for GDN projects

Context is gathered automatically when you capture content from your website. For many websites, you may get adequate context without taking any further action. However, automatic context gathering through the GDN is limited with some types of web content, such as javascript. In these instances, you can use the [Smartling Context Capture Chrome Extension](/knowledge-base/sections/chrome-context-capture-extension/){: .cc-active} to fill in any gaps in your context.

## Context for Files projects

Any content that can be displayed in a browser can be captured using the Smartling Context Capture Chrome Extension or the JavaScript Context Library. For other content, such as mobile apps, you can [upload screenshots](/knowledge-base/articles/adding-image-context-for-mobile-and-desktop-application-files/){: .cc-active} to provide context.

## Context for Business Documents projects

Smartling automatically converts the documents to HTML to provide context. Note that this is intended as a guide for translators and may not exactly match the final document when it is published in its original format.

## Context for Connector projects

Adobe, Sitecore, Zendesk, and Drupal8 connectors can provide context automatically. Otherwise, the Chrome Context Capture Extension can be used.