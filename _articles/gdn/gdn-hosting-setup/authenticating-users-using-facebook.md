---
layout: article
title: Authenticating users with Facebook
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
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


You can authenticate users on your localized domains by using Facebook.

**1)**  Add the localized domains (ex, es.smartlinghotels.com) to the **App Domains** section of your Facebook App Settings dialog.
**2)**  Ensure that the `redirect_uri` in the call to Facebook points to the localized domain.

For more information, see the [Facebook developers documentation](http://developers.facebook.com/docs/reference/dialogs/oauth/).