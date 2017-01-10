---
layout: article
title: Smartling Bot
---


Smartling uses bots to capture GDN content and create context for strings in Smartling projects. Occasionally, these service can place a considerable load on your site. To improve performance, it is recommended that you whitelist all Smartling User-Agents.

Smartling bot User-Agent headers take the following form:

~~~
Mozilla/5.0 (compatible; SmartlingBot/[XX]; +http://support.smartling.com/hc/en-us/articles/204443157)
~~~

where `/[XX]` is a suffix denoting the particular service performed by the bot.
