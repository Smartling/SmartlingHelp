---
layout: article
title: Modify the Smartling Language Selector Menu
---


> The Smartling Language Selector can only be used for a subdomains-style GDN setup.

You can optimize the Smartling language selector to control how it displays and acts in a page by using one of the following procedures to modify the text that appears, how the site handles redirects, or to replace language text in the selector with an image.

## Modifying the Language Selector Text

You can modify text that displays in the language selector. For example, depending on your site’s configuration, the language selector may display English as “English (United States)”, but you can modify this to “English” or another term by copying and pasting the following code into your pages or site template:

<div class="highlighter-rouge"><pre class="highlight"><code>var smtPreRender = function(data) {
  for (i in data) {
    if (data[i].code == "en-us") {
      data[i].name = "English";
    }
  }
};
</code></pre></div>

## Modifying Language Code Redirects

The language selector redirects users based on the language preferences set in their browser, but you may want to redirect locale codes to a specific language site. For example, you may want to redirect all variations of a Spanish locale (such as, Mexico (es-MX), Puerto Rico (es-PR), or Columbia (es-CO)) to Spanish for Spain (es-ES). You can redirect all users with ‘es’ to the ‘es-es’ site by copying and pasting the following code into your pages or site template:

<div class="highlighter-rouge"><pre class="highlight"><code>var smtRedirectMapper = function(locale, sites) {
 if (locale in sites) {
  return sites[locale];
 }

 if (/^es/.test(locale)) {
  return sites['es-es'] || null;
 }

 return null;
};
</code></pre></div>

## Replacing Language Selector Text with an Image

You can remove the language text in the selector and replace it with an image by copying and pasting the following code into your pages or site template:

<div class="highlighter-rouge"><pre class="highlight"><code>var smtPostRender = function(menuDom) {
// assuming jQuery, but could be done with other libraries or native JS.
    //remove button text with jQuery
    $(menuDom).find(".smt-trigger-link .smt-lang").text("")

    //or replace text with img tag
    $(menuDom).find(".smt-trigger-link .smt-lang").html("&lt;img src='####' /&gt;")
}
</code></pre></div>