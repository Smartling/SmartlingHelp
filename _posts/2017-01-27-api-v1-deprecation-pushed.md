---
title: API v1 Deprecation Pushed
layout: blogpost
blog-author: Andrew Saxe
categories:
  - product-update
---


In March 2016, Smartling officially released Version 2 of our API. &nbsp;From the Smartling side, v2 provides a new framework that works better with our Service Oriented Architecture, allows us to have different methods of rate limiting, and is easier for us to scale out based on active usage.&nbsp; For customers, v2 provides new security mechanisms as well as new endpoints - we're only releasing new endpoints in v2.

The new v1 deprecation date is: October 2017

**Why is the deprecation date pushed?**

When we released v2 we had set a deprecation date of v1 for one year later - March 2017. &nbsp;As March 2017 approaches, we realize we aren't quite ready to deprecate v2. &nbsp;A few reasons for this:

* Not all endpoints have been migrated to v2: &nbsp;We still have some endpoints in v1 that do not exist in v2. &nbsp;Most importantly, the HTML Context endpoint does not exist in v2. &nbsp;We anticipate a Q1 2017 release of this endpoint in v2, but that isn't enough time for customers to fully migrate to the new endpoint.
* Connectors: &nbsp;We still have some work to get all customers using connectors built on v2. &nbsp;For example, it can take some organizations many months to install an updated connector - it must go through regression testing and can't be deployed during sensitive time periods (e.g. October - December for holiday shopping).
* It's a big deal: &nbsp;We know that getting resources in place to do a migration to a new API takes time, costs man hours of money, and must be planned in the Roadmap. &nbsp;We've heard from some customers that they aren't quite ready and haven't been able to get their migration complete.

**What does this mean?**&nbsp;

If you've already migrated to v2, then you're ahead of the game - you can begin using new endpoints immediately. &nbsp;If you haven't been able to update your integration to v2, you have more time.

We know that planning for API changes takes time. &nbsp;And for some customers pushing the deprecation date means that they would have likely pushed their development out as well. &nbsp;We understand that changes like this can have impact that is not always visible to the Smartling team. &nbsp; As such, given that not all endpoints are fully migrated to v2 and some customers need more time, we're pushing the deprecation date back to October 2017.

&nbsp;