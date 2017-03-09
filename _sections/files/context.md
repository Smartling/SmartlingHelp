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

Providing quality contextual information makes the work of translation faster and more accurate. Context helps translators make linguistic decisions based on where a term appears in your site or app. It also allows them to account for layout and space restrictions in their translations.

![](/uploads/versions/smartling___translations_management---x----1178-869x---.png)

Smartling can show context for a string in two basic ways: 

 HTML context is created from and for web / HTML based content. HTML context can be captured automatically by the GDN and some Connectors, or with the Smartling Chrome Context Capture Extension or JavaScript Context Library. It can also be provided by uploading an HTML file via File API.  HTML context is dyamic - as translations are added for each string, the translator sees a rendering of how their translation should look. This helps them to anticipate length or formatting issues. Though HTML context is dynamic and provides an excellent approximation of how the translation will appear when in your site or app, it's not "perfect" and our Dynamic preview may not match how the translation is actually rendered on your site.

Image context is a static JPG or PNG image used to display context for non-web content such as mobile or desktop apps.  With Image context it's even possible to highlight the source string in the image making it easier for translators to see how the original content was displayed and what UI issues they might want to anticipate.  Unlike HTML context the translation does not have a dynamic preview.  

## Context for GDN projects

Context is gathered automatically when you capture content from your website for a GDN project. For many websites, you may get complete, high quality context without taking any further action. However, automatic context gathering through the GDN is limited with some types of web content, such as javascript loaded and rendered content. In these instances, you can use the [Smartling Context Capture Chrome Extension](/knowledge-base/sections/chrome-context-capture-extension/){: .cc-active} to fill in any gaps in your context.

## Context for Files projects

Any content that can be displayed in a browser can be captured using the Smartling Context Capture Chrome Extension or the JavaScript Context Library. For other content, such as mobile apps, you can [upload screenshots](/knowledge-base/articles/adding-image-context-for-mobile-and-desktop-application-files/){: .cc-active} to provide context.

## Context for Business Documents projects

Smartling automatically converts the documents to HTML to provide context. Note that this is intended as a guide for translators and may not exactly match the final document when it is published in its original format.

## Context for Connector projects

Adobe, Sitecore, Zendesk, and Drupal8 connectors can provide context automatically. Otherwise, the Chrome Context Capture Extension can be used.

## Context for other cases
Image Context is ideal for non web projects such as mobile, desktop and embedded devices.  Our iOS and Android SDKs include a Mobile Context automation feature which can help you generate the screenshots and associate the strings in them easily and automatically.

Image Context can also be used to update or enhance content for any project when ever specific strings need context and other methods are not convenient.
