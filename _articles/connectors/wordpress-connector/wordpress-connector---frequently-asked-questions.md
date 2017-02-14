---
layout: article
title: Wordpress Connector - Frequently Asked Questions
---


## Why do my URLs have parameters like `?noredirect=es_ES`, `?noredirect=fr_FR`, `?noredirect=en_US`, etc.?

These URL parameters are a feature of the MultilingualPress plugin, which handles the delivery of your translated Wordpress sites. Read more about the redirect feature [here](http://make.multilingualpress.pro/2014/03/language-negotiation-how-our-redirect-feature-works/). You can disable the feature by navigating to the MultilingualPress settings page and unchecking **HTTP Redirect**.

![](/uploads/versions/dqpnlk9-1---x----846-717x---.png)

## My Language selector shows all languages, not just languages with available translations.

The Language Selector is a feature of the MultilingualPress plugin and will show all languages for your site, regardless of whether translations exist.

## What happens when I update a Tag or Category for an article that is already translated?

Translated posts will be updated also, but how long this takes will depend on your settings and how many changes have been made. When you make any updates to a Post or Page that has translations, it is marked as Outdated. Depending on your settings, the changes may be uploaded to Smartling automatically, or you may need to request an update manually.

![](/uploads/versions/resubmit-changes-1---x----765-225x---.png)

When the translated post is downloaded to Wordpress, it will be rebuilt with updated metadata.

## Can I translate URL slugs?

By default, the 'slug' property of a post is excluded from translation, but you can change this by navigating to your Smartling settings profile and removing&nbsp;**slug** from the&nbsp;**Exclude fields by field name&nbsp;**list.

![](/uploads/versions/exclude_settings---x----907-571x---.png)

## Can I translate permalinks?

Not directly but, since Wordpress uses the **post_name** field to generate permalinks, you can alter permalinks by translating the post_name field. This field is excluded by default, but can be translated by removing the **post_name&nbsp;**entry from your&nbsp;**Exclude fields by field name**&nbsp;setting in your Smartling settings profile.

![](/uploads/versions/smartling_settings---x----905-582x---.png)

## How fast do Uploads / Downloads happen?

Like all large operations in Wordpress, uploads and downloads between Wordpress and Smartling are background tasks governed by a Cron configuration. Cron configuration can be edited from your Smartling Settings profile. By default:

* Posts marked ready to upload are uploaded every 5 minutes.
* Translation progress in Smartling is checked and completed translations downloaded every 3 hours.


The exception is when you upload a single post from the Smartling widget, which occurs immediately.

## What is the Translation Locked checkbox for?

This is an option for translated post that prevents the Connector from downloading new translations for the post, even if changes are available. See [here](/knowledge-base/articles/wordpress-connector-user-guide/#lock-a-translated-post) for more details.

## What happens when I edit a post that's already been translated?\*\*

If you have configured the plugin to [resubmit changed content automatically](/knowledge-base/articles/wordpress-connector-install-and-configure/#configure-smartling-plugin), then your changes will be uploaded to Smartling immediately. Otherwise, the post will be flagged as outdated and you can resubmit it manually when you're ready.

## What does the 'Translation completed' checkbox do?

![](/uploads/versions/translation-completed-1---x----285-380x---.png)

The&nbsp;**Translation completed**&nbsp;checkbox in the **Publish** widget is part of the MultilingualPress plugin and does not have any effect in Smartling.

## What does Enqueue for Upload/Download do?

The&nbsp;**Enqueue for Upload/Download** bulk actions add the selected items to a queue of items that will be uploaded by a Cron task. This is to stop large uploads from slowing down your Wordpress instance. You can change the frequency of this task by editing your [crontab](/knowledge-base/articles/wordpress-connector-install-and-configure/#configure-wp-cron).

## Does submitting a single post from the Smartling widget work faster than using Bulk Submit or the Submissions Board?

Yes. Bulk Submit and the Submissions board use cron tasks, which is necessary to avoid timeout issues in Wordpress. If you need a post in the Dashboard as soon as possible, the Smartling Widget in the post's edit view is the fastest way.

## How do I get my content into Smartling?

The Connector offers three ways to submit your source content to Smartling.

**1)** Bulk submit (

   <tt>/wp-admin/admin.php?page=smartling-bulk-submit</tt>) was designed to be primary means of submitting content. It allows you to submit multiple posts, tags, menus, and other entities for multiple locales in single click.
   <br>Some entities can be submitted only from Bulk submit:
   * Theme Widgets
   * Media Attachments
   * Navigation Menus

**2)** The Smartling widget on the Post Edit screen. This allows you &nbsp;to submit only current post for chosen locales

**3)** The Submissions Board. It's similar to Bulk Submit but here you can find only content / entities that were submitted before. Use this view to resubmit content that you want to retranslate, for example, because the source content has changed.


## Can I submit content from a translated site?

Each Smartling project has only a single source language. If you want to submit content from another language - for example, you may want to submit content written in your Spanish (es-ES) site to push it to other Spanish locals (es-CO, es-MX, es-AR, etc) - you need to first create a new Smartling project with the appropriate source language.

Then create a new [Smartling Settings Profile](/knowledge-base/articles/wordpress-connector-install-and-configure/#configure-smartling-plugin) in Wordpress, using the details of the new project.

If you have previously tried to upload any content in your alternate source language, you will need to upload this content again.


## Why the Connector doesn't parse large pieces of content to strings

An example you have a post with 5 paragraphs. It looks great in WordPress, but when you submit it to Smartling TMS you can find a really long string in translation queue

![5 paragraphs in Visual editor](/uploads/versions/wordpress-split-paragraphs1.png)
![Long string in Smartling](/uploads/versions/wordpress-split-paragraphs2.png)

You may notice such behavior because WordPress default behavior. WordPress stores and renders content:
* WordPress Visual editor doesn't add `<p>` tags for paragraphs
* Even if you will paste html snippet with `<p>` tags then they will be deleted by WordPress during save
* WordPress automatically adds `<p>` tags for new lines during page rendering. It's possible to control but requires additional code

It's very popular topic in WordPress community and google returns hundreds of search results. We would recommend following 2 plugins:

**1)** [Don't Muck My Markup](https://wordpress.org/plugins/dont-muck-my-markup/) - small, simple and clear. You have a full control on what is going on with content. But it requires  manually add `<p>` tags during content editing. There is no additional support from visual editor.

**2)** [TinyMCE Advanced](https://wordpress.org/plugins/tinymce-advanced/) - powerful visual editor. Looks and works great. It not only generates a new content with tags but also implicit converts existing content when you open and save post. A couple screenshots of how the same post will look in Smartling after editing in TinyMCE.

![TinyMCE configuration](/uploads/versions/wordpress-split-paragraphs3.png)
![TinyMCE visual editor](/uploads/versions/wordpress-split-paragraphs4.png)
![Contend is split by paragraphs](/uploads/versions/wordpress-split-paragraphs5.png)
