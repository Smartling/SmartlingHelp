---
layout: article
title: Inactive Strings
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url: /hc/en-us/articles/203587968
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
  include: true
  sections:
  articles:
    - manage-content/the-list-view/search-and-filter-in-the-list-view
  others:
    - link:
      text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


An inactive string is a string which is part of your project and available to be leveraged from Translation Memory, but no longer appears in a translated file or website. How a string becomes inactive depends on your project type.

In an Application Resource Files or Business Documents projects, an in-progress or completed string becomes inactive if the string is removed or deleted in the original file, or if the original file itself is deleted.

In a GDN project, a string will become inactive if the string is not referred to by the GDN for an extended period of time.

## Finding inactive strings

By default, the list view will hide all inactive strings. However, you can show inactive strings by setting the list view filter to **Inactive Only**.

![](/uploads/versions/screenshot_6_21_16__1_36_pm---x----2560-1379x---.png)

## Reactivating strings

Inactive strings cannot be edited or translated, but they do still form a part of your translation memory, so poor translations in an inactive string can cause issues with future translations. If you wish to edit the translation for an inactive string, you need to reactivate it by clicking **Reactivate** or, for multiple strings, selecting **Reactivate String** from the **Actions** menu. This action can be performed by Account Owners and Project Managers only.![](/uploads/versions/screenshot_6_21_16__1_45_pm---x----2560-1374x---.png)

<div class="info">It is possible for inactive strings to automatically become reactivated under certain conditions. For example, if you upload a file, then in a later upload of the file, remove one string, that string will become inactive. If you restore the string to the file in a later upload, the string will become reactivated, instead of a new string being created.</div>