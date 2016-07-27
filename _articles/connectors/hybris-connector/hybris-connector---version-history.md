---
layout: article
title: Hybris Connector - Version History
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
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

## Version 1.2.2 - 01/29/2016 [current]

### Bug Fixes:

*   Updated logging when connector fails to build Context for content types other than page/product. This is expected behavior and doesn't need to be logged as an error.
*   Fixed issues with Hybris Management Console when it is set up to store configuration in a database.

Version 1.2.0 - 03/03/2016 

### Features:

*   Added support for translation of the assets other than products and pages. Now pretty much any localizable asset view in HMC has the Translate button. [![translate_-_hybris_management_console__hmc__and_explorer__administrator_hybrismod1_dev_smartling_net_master__title_-_hybris_management_console](https://cloud.githubusercontent.com/assets/1621630/13522099/f6cf0ec6-e1f5-11e5-9fe8-cd2be30ae42f.png)](https://cloud.githubusercontent.com/assets/1621630/13522099/f6cf0ec6-e1f5-11e5-9fe8-cd2be30ae42f.png)

### Bug Fixes:

*   Improved the Connector's compatibility with Product Cockpit customizations provided by other Hybris extensions.

## Version 1.1.0 - 01/29/2016

### Features:

*   Improved multi-settings support. Product and CMS Cockpit user can see which configuration profile is used when products / pages are sent for translation.
*   Performance improvement for Product Cockpit initialization if the case of large catalogs.

### Bug Fixes:

*   Fix for Catalog Version editor in HMC.
*   Fixed context support for Hybris 5.7

## Version 1.0.3 - 10/26/2015 

### Features:

*   Updated string sharing behavior. Content for translation is treated uniquely across individual products and CMS pages. This allows for unique translation of content depending on product or page.
*   Multisettings. Hybris administrator can configure to use different projects in TMS for different catalogs.

### Bug Fixes:

*   Translation from CMS Cockpit works.
*   Hybris system update no longer resets Smartling configuration to default values 

## Version 1.0.1 - 04/24/2015 

### Bug Fixes:

*   Fixed bug that caused issues displaying images in context views.

## Version 1.0.0 - 01/09/2015

### Features:

*   Upload for translation:
    *   Page or multiple pages from CMS Cockpit
    *   Product or multiple products from Product Cockpit
*   Manual download translated content:
    *   From page update tab in CMS Cockpit
    *   From Product Edit Area in Product Cockpit
    *   From Submissions board, both CMS Cockpit and Product Cockpit (Bulk download)
*   Automatic checking translation status
*   Automatically download translated content when it's completed
*   Translate in contex
*   Configuring Smartling Connector via HMC