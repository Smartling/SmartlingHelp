---
layout: article
title: Authenticating Users Using Facebook
draft: true
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
  internal-links: false
  images: false
  FAQs: false
  related: false
---


You can authenticate users on your localized domains by using Facebook.

1.  Add the localized domains (ex, es.mysite.com) to the **App Domains** section of your Facebook App Settings dialog.
2.  Ensure that the "redirect_uri" in the call to Facebook points to the localized domain.

For more information, see the related Facebook developers page: [http://developers.facebook.com/docs/reference/dialogs/oauth/](http://developers.facebook.com/docs/reference/dialogs/oauth/)