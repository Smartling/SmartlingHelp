---
layout: article
title: Context Capture JavaScript Library
---


Smartling’s Context Capture Library is a javascript library, which can be embedded in a web page to automatically send HTML snapshots of the current page state to a Smartling Project.

The library sends contextual information to Smartling when a page is browsed, so make sure you embed the library in an environment that is used. The library has been calibrated to minimize any impact on page performance.

You will need a unique orgId to upload context for your project. This is available from any Smartling Project at Project Settings &gt; API.

![](/uploads/versions/smartling---api--besttest-web-app----x----1252-572x---.png)

## Embedding the Library

### Javascript Embedding

For a Single-Page Application or any other Javascript-based page, use the following snippet to load the Context Capture Library:

~~~javascript
(function (w, o) {
      try {
        var h = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = 1;
        s.crossorigin = 'anonymous';
        s.src = '//d2c7xlmseob604.cloudfront.net/tracker.min.js';
        s.onload = function () {
          w.SmartlingContextTracker.init({ orgId: o });
        };
        h.insertBefore(s, h.firstChild);
      } catch (ex) {
      }
    })(window, '[your orgId]')
~~~

### HTML Embedding

For an HTML-based page, just reference the script, and initialize the SmartlingContextTracker object:

~~~html
<script type="text/javascript" src="//d2c7xlmseob604.cloudfront.net/tracker.min.js"></script>
<script>
    SmartlingContextTracker.init({
      orgId: '[your orgId]'
    });
</script>
~~~

## Capturing Context

Once the library is embedded on your site, context will be uploaded to your Smartling project. The package has been carefully designed to minimize impact on page load times. For more technical information see the attached&nbsp;[readme](/public/JSContextCaptureREADME.pdf).