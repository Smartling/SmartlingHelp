---
layout: article
title: Create and Manage Patterns in the GDN
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
Page [0] of [1].
~~~

This allows translators to change the order placeholders appear in the string without altering their meaning.

Please note that you should not use patterns for date and time.

**To create patterns:**

* Under Translations Go to **Awaiting Authorization** or **In Progress**.
* Select one or more strings to create a pattern from
* Go to the **Actions** drop down and select **Create Patterns**.


![](/uploads/versions/patterns1---x----1327-879x---.png)

* If you have selected multiple strings, Smartling will analyze the differences between them and try to create placeholders for you automatically. Otherwise, you can select any part of the string and click **Placeholder from Selection.**


![](/uploads/versions/patterns2---x----577-562x---.png)

* Confirm the rules for the placeholder match.


![](/uploads/versions/patterns3---x----275-84x---.png)

* Smartling will display a list of strings in your authorization queue that would match your pattern. If there is a string in the list you don't want to include in the pattern, click **Keep String**. Otherwise, click **Apply Pattern**.
* All strings matching the pattern will be removed from your Authorization queue. Now that you have your pattern, you only need to translate it once.


**Note:** Content replaced by placeholders will not be translated, so deploy patterns with care. For example, these strings might seem suitable for pattern matching:

"Yellow Gold Wedding Band"
<br>"Rose Gold Wedding Band"

But if you apply a pattern, "Yellow" and "Rose" will appear untranslated on your site.

**Troubleshoot Pattern Creation**

If you think your selected strings should form a pattern, but it's not automatically recognized, look for small variations in the original content that might require you to have two separate patterns. For example:

~~~
&lt;div&gt;Hello, &lt;span style="{0}"&gt;John&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
&lt;div&gt;Hello, &lt;span id="{0}"&gt;Mark&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
&lt;div&gt;Hello, &lt;span style="{0}"&gt;John&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
&lt;div&gt;Hello, &lt;span id="{0}" style="{0}"&gt;Mark&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
~~~

While the two below can be handled by a single pattern:

~~~
&lt;div&gt;Hello, &lt;span style="{0}"&gt;John&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
&lt;div&gt;Hello, &lt;span style="{0}"&gt;Mark&lt;/span&gt;&lt;br/&gt;&lt;/div&gt;
~~~



**Manage the Pattern Library**

![](/uploads/versions/patterns4---x----1241-561x---.png)

From **Content &gt; Patterns** you can find a list of all of your patterns and the placeholders you have created for each one of them. From this view, you can:

* **Customize any of your placeholders**: click on the placeholder and replace the parameter with text that can help the translator better understand the value the placeholder will be replaced with on the live site.
* **Delete patterns**: click on **Delete** to the right of your pattern. (For patterns created from the Dashboard only)
* **Deactivate patterns**: click **Deactivate**. The pattern will be stored but not applied to new strings.


**Note:** patterns that are not used for more than six months are automatically deactivated. To reactivate an inactive pattern, set the filter to show inactive patterns, find the pattern you want to activate and click **Activate.**

**Create Patterns using markup language**

Instead of creating patterns manually in the dashboard you can tag the HTML of your site so that patterns are created with placeholders as they are captured. This is the recommend way to handle pattern strings for your site or web application.

In your HTML source, use the `notranslate` class within inline tags such as `&lt;span&gt;` or `&lt;strong&gt;`. When the HTML is processed, Smartling replaces the content marked notranslate with a placeholder.

~~~
&lt;div&gt; Hello, &lt;span class="notranslate"&gt;Jack&lt;/span&gt;!&lt;div&gt;
In Smartling, the string will be captured as: _Hello,{0}!_
~~~

Other examples of pattern creation using the `notranslate` class:

* **Example 1: Single placeholders**


~~~
&lt;span class="notranslate"&gt;37&lt;/span&gt;comments&lt;div&gt;
displayed as: {0} comments in Smartling
~~~

* **Example 2: Multiple placeholders**


~~~
&lt;span class="notranslate"&gt;1&lt;/span&gt; of &lt;span class="notranslate"&gt;10&lt;/span&gt;comments&lt;div&gt;
displayed as Page `{0}` of `{1}` comments in Smartling
~~~

Please note that the `notranslate` class cannot be used to create patterns with block tags. I.e. `&lt;h1&gt;`, `&lt;p&gt;`, `&lt;table&gt;`. When you add a `notranslate` class to block tags, Smartling ignores the entire block element from the translation workflow.

* [Contextual View](/hc/en-us/articles/201574473-Contextual-view)