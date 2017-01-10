---
layout: article
title: Authenticating users with Facebook
---


You can authenticate users on your localized domains by using Facebook.

**1)**  Add the localized domains (ex, es.smartlinghotels.com) to the **App Domains** section of your Facebook App Settings dialog.
**2)**  Ensure that the `redirect_uri` in the call to Facebook points to the localized domain.

For more information, see the [Facebook developers documentation](http://developers.facebook.com/docs/reference/dialogs/oauth/).