---
layout: article
title: Editing existing content
---

You can edit any page on the Help Center by pressing `Shift` + `~` and then clicking the edit button that is revealed.


For pages that are built from jekyll collections (Articles, Sections, API Collections, API Endpoints, Supported File Types), the `Edit` button will take you to the relevant collection item. For articles, most of the content is free markdown text. For Developer docs, much of the content is written as key-value pairs in the YAML front-matter of the document. See details for editing different content types below.


## Home

URL: `/`
File: `/index.html`

This is a one-off HTML page on the `default` template. Release Notes and Blog Post sections maintain themselves as content is added. Documentation Updates can be edited in the page's YAML front matter.


## Knowledge Base (`/knowledge-base`)

URL: `/knowledge-base`
File: `/knowledge-base/index.html`

One-off HTML page. The top level sections are populated from a YAML array at /_data/nav.yml


### Knowledge Base Sections

URL: `/knowledge-base/sections/{page-name}`
File: `/_sections` collection

See [Add new content](/knowledge-base/articles/add-new-content/) for details on creating new sections. To edit an existing section, navigate to the section you want to edit and press `Shift` + `~` to reveal the edit button.


#### Knowledge Base Articles

URL: `/knowledge-base/articles/{page-name}`
File: `/_articles` collection

See Add new content for details on creating new articles. To edit an existing article, press `Shift` + `~` to reveal the edit button.

### Knowledge Base FAQs

URL: `/knowledge-base/articles/{page-name}`
File: `/_faqs` collection

See Add new content for details on creating new sections. To edit an existing section, press `Shift` + `~` to reveal the edit button.

## Developers

URL: `/developers`
File: `/developers/index.html`

One-off html page. Navigation is populated from the `developers` array in `_data/nav.yml`.

### File Integration

URL: `/developers/files/`
File: `/developers/files/index.html`


#### Supported File Type

URL: `developers/files/{file-type}`
File: `/_filetypes` collection and `/_filedirectives` collection


#### Developer Articles (Files)

URL: `/developers/{categories}/{page-name}`
File: `/_developerarticles` collection


### API

URL: `/developers/api/v2/`
File: `/developers/api/v2/index.html`


#### API Collections

URL: `/developers/api/v2/{collection-name}`
File: `/v2sections` collection

Introductory text for the collection is written as Markdown text. In the YAML front matter, an array of endpoint titles populates the left-hand navigation.

**Sample front matter:**

~~~yaml
title: Image Context # Collection title
category: context #this is used in the URLs. Endpoints in this collection must have a matching category value
layout: v2section # don't change - sets the template
endpoints: # create an entry for each endpoint. Titles must match exactly
  - title: Upload Context File
  - title: Download Context File
  - title: Create Bindings
  - title: Get Bindings for a Context File
  - title: Get Bindings for a String
  - title: List Contexts for a Project
  - title: Match Context to Strings
  - title: Delete Binding
  - title: Delete Context File
~~~

#### Endpoints

URL: `/developers/api/v2/{collection-name}/{endpoint-name}`
File: `/_v2endpoints` collection

Apart from a small free text description of the endpoint, almost all info about Endpoints i

**Sample front matter:**

~~~yaml
title: Create Glossary
categories: #This must be an array with only one entry, matching the collection the endpoint belongs to
  - glossary
layout: v2endpoint #don't change - selects template
endpoint_url: /glossary-api/v2/accounts/{{accountUid}}/glossaries
method: POST
request: #Request object -
  # json markdown for post requests only. Make a multi-line scalar by using the pipe character and indenting the block two spaces
  json_markdown: | 
    ~~~json
    {
       "name": "Marketing Glossary",
       "description": "Glossary for all marketing terms",
       "sourceLocaleId": "en-US"
    }
    ~~~
    
  parameters: #array of parameters for the request - delete if there are no params
    - title: name
      type: string
      required: true
      description_markdown: |
        A name for the glossary. This name must be unique. Attempting to use a name already in use in the account will return an error. Limit of 170 characters.
    - title: sourceLocaleId
      type: string
      required: true
      description_markdown: |
        Source locale for the glossary. 
    - title: description
      type: string
      required: false
      description_markdown: |
        Description for the glossary. Limit of 250 characters.

response: #Details of response
  json_markdown: |
    ~~~json
    {
       "response":{
          "code":"SUCCESS",
          "data":{
               "glossaryUid": "50d9dab5-6b8b-11e5-ba24-127b00b163a3",
               "name": "Marketing Glossary",
               "description": "Glossary for marketing terms.",
               "sourceLocaleId": "en-US",
               "createdByUserUid": "ah27fhq8",
               "createdDate": "2015-11-21T01:51:17Z"
          }
       }
    }
    ~~~
  parameters:
    - title: data
      type: object
      required: false
      description_markdown: |
        Details of the created glossary, including a unique identifier, glossary name, description, source locale, created date and an ID for the user who created the glossary.

~~~



#### Developer Articles (API)

URL: `/developers/{categories}/{page-name}`
File: `/_developerarticles` collection


## Product Blog

URL: `/blog/`
File: `/blog/index.html`

One-off HTML page displays all blogposts in chronological order


## Blogpost

URL: `/blog/{categories}/{page-name}`
File: `/_posts` collection
