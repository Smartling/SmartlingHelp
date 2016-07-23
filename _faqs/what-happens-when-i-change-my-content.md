---
layout: faq
title: What happens when I change my content?
draft: false
promoted: false
related:
  sections:
  articles:
    - files/capturing-content-from-files/string-sharing--namespaces
    - files/capturing-content-from-files/unique-strings-and-variants
    - gdn/managing-gdn-projects/avoiding-untranslated-content-with-static-cache
other-links:
  - text:
    url:
---


You've uploaded and translated your content, but now you want to change something. What do you do now?

You probably don't have to do very much. Change management is built into Smartling. What will happen depends on your setup, but it breaks down into two basic steps: capture your changed content and translate new strings. In Smartling, the source content of each string is constant and editing your source content will always create new strings, rather than changing old ones.

## Files Projects

For Files projects, you'll first need to upload your changed resource files. If you update your files often, you should automate this process). If you upload the updated file to the same [namespace](){: .cc-active}, it will share strings with previous versions and new strings will only be created for the content you have changed. If you upload the file to a new namespace, all new strings will be created but as long as you have set up SmartMatch, you still only need to worry about the changes.

New strings will either be automatically authorized into your default workflow for each language or be added to your [Authorization queue](){: .cc-active}. From there, your translation workflow proceeds as normal.

Once your new strings have been translated, you can download your translated file for deployment. Again, [API automation](){: .cc-active} or our [Repository Connector](){: .cc-active} can take care of this part for you.

## GDN Projects

Any changes to the source content on a page will be automatically captured the next time the page is requested. Using a web crawler on your site regularly helps to make sure your changes are picked up quickly. New strings will be created for the changed content.

Depending on your Authorization settings, new strings will either be added to your Authorization queue or will be authorized into the nearest workflow. Once your strings have been published or pre-published, new translations will begin displaying on your translated sites.

Note that on the GDN, source content is served when translations are unavailable, so translation lag time can cause a mix of translated and source content to appear on your page. Consider implementing [Caching](){: .cc-active} to manage this.