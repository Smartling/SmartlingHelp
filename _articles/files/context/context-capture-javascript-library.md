---
layout: article
title: Context Capture JavaScript Library
---


When you upload resource files to Smartling there isn't any visual context for the strings that are extracted. &nbsp;If your strings are for a web site or application you can quickly and easily add HTML context by integrating the javascript Context Capture Library. Read more about the value of &nbsp;[visual context](http://help.smartling.com/knowledge-base/sections/context/)if you are not already familiar with it.

## What the javascript Context Capture Library does and how it works
{: .present-before-paste}

Smartling’s Context Capture Library is a javascript library, which can be embedded in a web page to automatically send HTML snapshots of the current page state to a Smartling Project. &nbsp;

The library is triggered when a page is rendered in a browser and as the page UI is updated from user interactions (the DOM changes). &nbsp;So you will need to integrate and use it in an environment that is generating page requests and interactions. &nbsp;You can use it on your development, staging or production environment. The library has been calibrated to minimize any impact on page performance.

## How to configure and use the Context Capture javascript library

The library uses the standard Smartling API. You will need a unique orgId to upload context for your project. This is available from any Smartling Project at Project Settings &gt; API.

![](/uploads/versions/smartling---api--besttest-web-app----x----1252-572x---.png)

### Embedding the Library

#### Javascript Embedding

For a Single-Page Application or any other Javascript-based page, use the following snippet to load the Context Capture Library:

<div class="language-javascript highlighter-rouge"><pre class="highlight"><code><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">w</span><span class="p">,</span> <span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
      <span class="k">try</span> <span class="p">{</span>
        <span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">'head'</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">'script'</span><span class="p">);</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">'text/javascript'</span><span class="p">;</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">async</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">crossorigin</span> <span class="o">=</span> <span class="s1">'anonymous'</span><span class="p">;</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="s1">'//d2c7xlmseob604.cloudfront.net/tracker.min.js'</span><span class="p">;</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
          <span class="nx">w</span><span class="p">.</span><span class="nx">SmartlingContextTracker</span><span class="p">.</span><span class="nx">init</span><span class="p">({</span> <span class="na">orgId</span><span class="p">:</span> <span class="nx">o</span> <span class="p">});</span>
        <span class="p">};</span>
        <span class="nx">h</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">h</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span>
      <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">{</span>
      <span class="p">}</span>
    <span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">'[your orgId]'</span><span class="p">)</span>
</code></pre></div>

#### HTML Embedding

For an HTML-based page, just reference the script, and initialize the SmartlingContextTracker object:

<div class="language-html highlighter-rouge"><pre class="highlight"><code><span class="nt">&lt;script </span><span class="na">type=</span><span class="s">"text/javascript"</span> <span class="na">src=</span><span class="s">"//d2c7xlmseob604.cloudfront.net/tracker.min.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script&gt;</span>
    <span class="nx">SmartlingContextTracker</span><span class="p">.</span><span class="nx">init</span><span class="p">({</span>
      <span class="na">orgId</span><span class="p">:</span> <span class="s1">'[your orgId]'</span>
    <span class="p">});</span>
<span class="nt">&lt;/script&gt;</span>
</code></pre></div>

#### Capturing Context

Once the library is embedded on your site, context will be uploaded to your Smartling project. The package has been carefully designed to minimize impact on page load times. For more technical information see the attached&nbsp;[readme](/public/JSContextCaptureREADME.pdf).