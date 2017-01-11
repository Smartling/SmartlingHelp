---
layout: article
title: Add new content
wistia:
  video: false
  id:
---


## Create an article

**1)** In CloudCannon, from **Collections &gt; Articles**, click the **+** button. Give a name for the file.

![](/uploads/versions/cloudcannon---x----1283-756x---.png)

<div class="info">CloudCannon will use your title to generate a filename and URL for the code article by downcasing and replacing spaces with dashes. If you name your file 'Add a new article', the URL will be <code>http://help.smartling.com/knowledge-base/articles/add-a-new-article/</code>. Even if you change the 'title' property of the article later, the URL will not change unless you update the filename.</div>

**2)** Edit the file properties, either by clicking the **Gear** button or by directly editing the YAML directly in the Code editor.

**3)** Write your content in the WYSIWYG editor, or in the Code editor using Markdown syntax.

**4)** You can preview your content by going to help.smartling.com/knowledge-base/articles/{filename minus extension}/. For example, the file for this article is add-new-content.md, and it's URL is help.smartling.com/knowledge-base/articles/add-new-content/

**5)** To make the article accessible to users, you need to place it in a section. From **Collections &gt; Sections**, Find the appropriate section, and under Subarticles, copy and paste the articles title into a new field. You can also do this from the Code editor.

## Create a Section

Follow the same process as for an article, but starting from **Collections &gt; Sections**. If you're making a subsection, add it's title to the `subsections` array of its parent section. If you're making a top-level section to display on the front page of the Knowledge Base, add it to the `knowledge-base` array of `/_data/nav.yml`.

## Create a new Blog Post

**1)** From **Collections &gt; Posts** Click **+** to create a new draft and name it.

**2)** Set the `Blog Author` and `Categories` in the settings menu.

**3)** Write your post in the WYSISYG editor, or in markdown syntax in the code editor.

**4)** Click the 'Publish' button to put the post live. The blog post will be added to the top of the Product Blog page and to the Product Blog widget on the home page.

## Create a new one-off HTML page.

If you want to create a custom page not using an article/section/etc template, you can create it as an HTML file.

**1)** In the file editor or your desktop, create folders to match the page you want to create, then create a file titled `index.html`. For example, the Developers page exists in the repository at `/developers/index.html`.

**2)** In the index.html file, make YAML front-matter for your page, setting the layout to `default` and the title to whatever you like:

~~~ layout: default title: Developers ~~~

This tells Jekyll to use the 'default' template. Which brings in the standard header and footer and loads all necessary fonts, javascript and stylesheets.

**3)** Use HTML and [liquid markup](http://cheat.markdunkley.com/) to create your page.

**4)** The page will now be available on the help center, but to make it navigable, you will need to link to it somehow. For example, a link to the developer page is included in the header.