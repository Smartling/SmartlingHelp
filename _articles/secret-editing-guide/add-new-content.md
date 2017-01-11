---
layout: article
title: Add new content
wistia:
  video: false
  id:
---

> A note about titles! Titles are important in the Help Center. Titles of articles should be unique, and articles are placed in the navigation using their title. By the time you're ready to publish an article, hopefully you've settled on a title. Remember if you change the title of an article later, you need to update the parent section with the new title, or your article will stop being navigable. You can check the [status](/status) page to see if this is happening. Articles that aren't navigable are listed under 'Unpublished Articles'.

## Create an article

**1)** In CloudCannon, from **Collections &gt; Articles**, click the **+** button. Give a name for the file.

![](/uploads/versions/cloudcannon---x----1283-756x---.png)

<div class="info">CloudCannon will use your title to generate a filename and URL for the code article by downcasing and replacing spaces with dashes. If you name your file 'Add a new article', the URL will be <code>http://help.smartling.com/knowledge-base/articles/add-a-new-article/</code>. Even if you change the 'title' property of the article later, the URL will not change unless you update the filename.</div>

**2)** Edit the file properties, either by clicking the **Gear** button or by directly editing the YAML directly in the Code editor.

**3)** Write your content in the WYSIWYG editor, or in the Code editor using Markdown syntax.

**4)** You can preview your content by going to [help.smartling.com/status](/status.html) and finding it's title under **Unpublished Articles**.

**5)** To make the article accessible to users, you need to place it in a section. From **Collections &gt; Sections**, Find the appropriate section, and under Subarticles, copy and paste the articles title into a new field. You can also do this from the Code editor.

![](/uploads/versions/cloudcannon---x----1126-595x---.png)

![](/uploads/versions/cloudcannon---x----840-331x---.png)

## Create a Section

Follow the same process as for an article, but starting from **Collections &gt; Sections**. If you're making a subsection, add it's title to the `subsections` array of its parent section. If you're making a top-level section to display on the front page of the Knowledge Base, add it to the `knowledge-base` array of `/_data/nav.yml`.

![](/uploads/versions/cloudcannon-and-filedirectives-yml---smartlinghelp5------documents-webstormprojects-smartlinghelp5----x----844-312x---.png)

## Create a new Blog Post

**1)** From **Collections &gt; Posts** Click **+** to create a new draft and name it.

**2)** Set the `Blog Author` and `Categories` in the settings menu.

**3)** Write your post in the WYSISYG editor, or in markdown syntax in the code editor.

**4)** Click the 'Publish' button to put the post live. The blog post will be added to the top of the Product Blog page and to the Product Blog widget on the home page.

![](/uploads/versions/cloudcannon---x----1132-659x---.png)

## Create a new one-off HTML page.

If you want to create a custom page not using an article/section/etc template, you can create it as an HTML file.

**1)** In the file editor or your desktop, create folders to match the page you want to create, then create a file titled `index.html`. For example, the Developers page exists in the repository at `/developers/index.html`.

**2)** In the index.html file, make YAML front-matter for your page, setting the layout to `default` and the title to whatever you like:

~~~ 
layout: default 
title: Developers 
~~~

This tells Jekyll to use the 'default' template. Which brings in the standard header and footer and loads all necessary fonts, javascript and stylesheets.

**3)** Use HTML and [liquid markup](http://cheat.markdunkley.com/) to create your page.

**4)** The page will now be available on the help center, but to make it navigable, you will need to link to it somehow. For example, a link to the developer page is included in the header.