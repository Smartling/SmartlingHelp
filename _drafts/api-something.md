---
title: 'API:  Four New Endpoints Released'
layout: blogpost
blog-author: Andrew Saxe
categories:
  - product-update
---


At Smartling we have an "APIs for Everything" strategy, meaning, as we develop new functionality we make sure that we're building APIs with the intention of making those APIs public.

Late December 2016, we released four new endpoints:

Strings

Glossary

Issues

Image Context

Strings API

This set of endpoints allows for content to be created as individual strings rather than as part of a file and then retrieve translations for each string and translated locale. &nbsp;This is particularly useful when customers have content in a database - such as a product catalog - and there isn't a logical grouping or representation of the content in a particular format.

Glossary API

The Glossary endpoints allows for Glossaries to be managed and manipulated from outside of Smartling. &nbsp;This endpoint is useful when, for example, syncing glossaries between Smartling and a third-party term base.

Issues API

The Issues endpoints allows for complete control of Issues in Smartling: creating, closing, commenting, and searching. &nbsp;Many of Smartling's customers have organizational tools to manage bugs and issues and integrating to the Issues API is one way to bring Issues from Smartling into the tools.

**Image Context API**

Image Context endpoints controls how images as context are handled in Smartling. &nbsp;First, the endpoint accepts an image as Context. &nbsp;Second, it allows for several methods of associating the image to strings in Smartling: &nbsp;1. &nbsp;Individual strings can be passed to the endpoint to directly associate the strings with a particular image, and 2. &nbsp;Using the Match Context to Strings endpoint, Smartling will OCR the image and automatically associate found strings to the image.

&nbsp;