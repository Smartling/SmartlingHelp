---
layout: article
title: Help Center Basics
---


## Prerequisites

* Install [Jekyll](https://jekyllrb.com/docs/installation/)
* Cloudcannon Login - Get from [Smartling Wiki](https://wiki.smartling.net/display/product/Help+Center+Resources)
* [Github Access](https://github.com/Smartling/SmartlingHelp)
* Know some [markdown syntax](https://kramdown.gettalong.org/syntax.html#text-markup)
* [Skitch](https://evernote.com/skitch/) is useful for screenshots

## Markdown basics

Content for most pages is written in markdown. If you don't want to write Markdown, you can edit in CloudCannon's WYSIWYG editor. See the [Kramdown docs](https://kramdown.gettalong.org/syntax.html#text-markup) for a full rundown of syntax but some basics are:

* Create headings by starting a line with two or more hashes. `##` creates an h2 heading, `###` an h3 heading and so on.

* If you want a line-break without a paragraph, end the line with two spaces.

* Write unordered lists with `*`.

* You can do unordered lists by writing `1.`, `2.`, etc, but don't. HTML ordered lists aren't good for instructions, as new paragraphs or images can reset the numbering. Style for the HC is to write numbers as a bold number followed by a bracket, eg **1)**, **2)**, etc

* Bold text by surrounding with double stars. `**Bold Text**` becomes **Bold Text**.

* Surround with underscores for emphasis. `_Italic Text_` becomes *Italic Text*.

* Link syntax: `Here is a [link](/url) in markdown`.

* Surround with backticks for inline code. For example `/url` becomes `/url`.

* Code blocks are created with a triple tilde (`~~~`) at the beginning and end of a block. Make sure there is a blank line before and after the code block. For highlighting, you can add the code type after the opening tildes. For example: `~~~javascript` or `~~~html`.

* Make a red warning box by starting a line with `>`. Note that this box can contain only one paragraph.

## Front Matter

Jekyll uses YAML Front matter in a page or collection document to describe properties of the document, such as it's title. For example, a basic article might have Front Matter that looks like:

~~~yaml
title: Help Center Resources
layout: article
~~~

Data in the front matter is then available as variables. For example, the header template references the title of the page like this:

~~~html
{% raw %}
<title>{{page.title}}</title>
{% endraw %}
~~~

You can edit the front matter for any page directly in Jekyll's code editor. Be mindful of formatting. The most common cause of a failed Jekyll build is incorrect formatting in the Front Matter of a document. If there is an error, you'll get an error message stating the document and line/column coordinates for the error, so they're not hard to fix.

## Liquid templating language

If you get into editing the templates in the `/_includes` and `/_layouts` folders, you will need to know a little bit of Liquid templating. The syntax is pretty simple, see the [Jekyll Docs](https://jekyllrb.com/docs/home/) for info. This [cheat sheet](http://cheat.markdunkley.com/) is a useful reference too.

## Table of Contents for articles

Help center articles have an automatically generated table of contents in the left column. This is made using heading elements, so when you compose new content, it's important to create headings and not just use bold text.

* The article title is an h1 tag. Do not create any other h1 elements.
* Headings within the article should be h2, h3, and h4.
* The table of contents is indented to create a tree, so don't create an h3 heading, unless it fits under a higher level h2 heading.
  <br>![](/uploads/versions/download-files---x----310-280x---.png)

## Set up the 'Edit' bookmarklet

> For the edit bookmarklet to work you need to be logged into CloudCannon. See the [Smartling Wiki](https://wiki.smartling.net/display/product/Help+Center+Resources) for credentials.

The edit bookmarklet reveals the hidden 'Edit' button in the toolbar so you can jump to any page on the HC in CloudCannon.

**1)** In Chrome go to **Bookmarks &gt; Bookmarks Manager**

**2)** Rightclick **Bookmarks Bar** and select **Add Page**.

**3)** Give the bookmark a name like 'Edit HC' and under the URL paste the following:

~~~
javascript:(function(){$('#editLink').show();})();
~~~

**4)** As long as you are logged into CloudCannon, you can now use this bookmark to bring up the hidden **Edit** button on any page

## Edit the Help Center on your local machine

The simplest way to get the Help Center repository on you local machine is to use the Clone or download button in Github to install and launch Github Desktop.

![](/uploads/versions/smartling-smartlinghelp---x----1026-736x---.png)

### Edit the site locally.

**1)** In the terminal, if you haven't already, install Jekyll:

~~~
gem install jekyll
~~~

**2)** CD into the directory where you cloned the repository and run:

~~~
jekyll serve --w
~~~

This will host the site at `localhost:4000` and automatically rebuild any time you save a change to a file in the repository.

**3)** When you are happy with your changes, commit back to the main repository, using Github Desktop or the command line.

## Repository Contents

![](/uploads/versions/smartlingterms-js---smartlinghelp2------documents-webstormprojects-smartlinghelp2----x----973-1344x---.png)