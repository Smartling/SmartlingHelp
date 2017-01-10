---
layout: article
title: Create and Manage Patterns in the GDN
---


Smartling’s Patterns feature avoids re-translating strings needlessly when part of the string’s content is dynamic. Consider the instances below where the content in green varies:

~~~
Hello Julia
37 Comments
Page 3 out of 10
~~~

Smartling defines patterns as strings that include placeholders. Patterns are composed of static and variable content, whereas static content needs to be translated only once and variable content is replaced by a placeholder, which will then be filled-in by the application at run-time.

Most use cases for patterns involve numbers. For example, a string like "You have 8 items in your cart". The GDN automatically creates patterns to handle most strings with numbers. However, you may still need to manually create patterns for other use cases, such as handling user information.

When using the Global Delivery Network there are two ways of creating patterns: using a `notranslate` class in your HTML file or in the dashboard, using the Smartling pattern creation feature. In both cases Smartling replaces the variable in your pattern with a placeholder, then matches the pattern with the rest of the content or any new content captured, excluding repetitive content from translation.

If a pattern has more than one placeholder, each will be given a number. For example:

~~~
Page {0} of {1}.
~~~

This allows translators to change the order placeholders appear in the string without altering their meaning.

Please note that you should not use patterns for date and time.

## Create patterns

**1)** Under Translations Go to **Awaiting Authorization** or **In Progress**.
**2)** Select one or more strings to create a pattern from
**3)** Go to the **Actions** drop down and select **Create Patterns**.


![](/uploads/versions/patterns1---x----1327-879x---.png)

**4)** If you have selected multiple strings, Smartling will analyze the differences between them and try to create placeholders for you automatically. Otherwise, you can select any part of the string and click **Placeholder from Selection.**


![](/uploads/versions/patterns2---x----577-562x---.png)

**5)** Confirm the rules for the placeholder match.


![](/uploads/versions/patterns3---x----275-84x---.png)

* Smartling will display a list of strings in your authorization queue that would match your pattern. If there is a string in the list you don't want to include in the pattern, click **Keep String**. Otherwise, click **Apply Pattern**.
* All strings matching the pattern will be removed from your Authorization queue. Now that you have your pattern, you only need to translate it once.


> Content replaced by placeholders will not be translated, so deploy patterns with care. For example, these strings might seem suitable for pattern matching:  
"Yellow Gold Wedding Band"  
"Rose Gold Wedding Band"  
But if you apply a pattern, "Gold Wedding Band" will appear untranslated on your site.


## Troubleshoot Pattern Creation

If you think your selected strings should form a pattern, but it's not automatically recognized, look for small variations in the original content that might require you to have two separate patterns. For example:

~~~
<div>Hello, <span style="{0}">John</span><br/></div>
<div>Hello, <span id="{0}">Mark</span><br/></div>
<div>Hello, <span style="{0}">John</span><br/></div>
<div>Hello, <span id="{0}" style="{0}">Mark</span><br/></div>
~~~

While the two below can be handled by a single pattern:

~~~
<div>Hello, <span style="{0}">John</span><br/></div>
<div>Hello, <span style="{0}">Mark</span><br/></div>
~~~



## Manage the Pattern Library

![](/uploads/versions/patterns4---x----1241-561x---.png)

From **Content &gt; Patterns** you can find a list of all of your patterns and the placeholders you have created for each one of them. From this view, you can:

* **Customize any of your placeholders**: click on the placeholder and replace the parameter with text that can help the translator better understand the value the placeholder will be replaced with on the live site.
* **Delete patterns**: click on **Delete** to the right of your pattern. (For patterns created from the Dashboard only)
* **Deactivate patterns**: click **Deactivate**. The pattern will be stored but not applied to new strings.


> Patterns that are not used for more than six months are automatically deactivated. To reactivate an inactive pattern, set the filter to show inactive patterns, find the pattern you want to activate and click **Activate.**

## Create Patterns using markup language

Instead of creating patterns manually in the dashboard you can tag the HTML of your site so that patterns are created with placeholders as they are captured. This is the recommend way to handle pattern strings for your site or web application.

In your HTML source, use the `notranslate` class within inline tags such as `<span>` or `<strong>`. When the HTML is processed, Smartling replaces the content marked notranslate with a placeholder.

~~~
<div> Hello, <span class="notranslate">Jack</span>!<div>
In Smartling, the string will be captured as: _Hello,{0}!_
~~~

Other examples of pattern creation using the `notranslate` class:

* **Single placeholders**


~~~
<span class="notranslate">37</span>comments<div>
displayed as: {0} comments in Smartling
~~~

* **Multiple placeholders**


~~~
<span class="notranslate">1</span> of <span class="notranslate">10</span>comments<div>
displayed as Page `{0}` of `{1}` comments in Smartling
~~~

> Remember that the `notranslate` class cannot be used to create patterns with block tags. I.e. `<h1>`, `<p>`, `<table>`. When you add a `notranslate` class to block tags, Smartling ignores the entire block element from the translation workflow.

