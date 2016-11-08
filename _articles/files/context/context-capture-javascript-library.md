---
layout: article
title: Context Capture JavaScript Library
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
  articles:
  faqs:
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
  articles:
  faqs:
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


Smartling’s Context Capture Library is a javascript library, which can be embedded in a web page to automatically send HTML snapshots of the current page state to a Smartling Project.

The library sends contextual information to Smartling when a page is browsed, so make sure you embed the library in an environment that is used. The library has been calibrated to minimize any impact on page performance.

This project is currently in beta. You will need a unique orgId to upload context for your project. This is available from any Smartling Project at Project Settings &gt; API.

![](/uploads/versions/smartling---api--besttest-web-app----x----1252-572x---.png)

## Embedding the Library

### Javascript Embedding

For a Single-Page Application or any other Javascript-based page, use the following snippet to load the Context Capture Library:

### HTML Embedding

For an HTML-based page, just reference the script, and initialize the SmartlingContextTracker object:

## Capturing Context

Once the library is embedded on your site, context will be uploaded to your Smartling project. The package has been carefully designed to minimize impact on page load times. For more technical information see the attached&nbsp;[readme](/JSContextCaptureREADME.pdf).