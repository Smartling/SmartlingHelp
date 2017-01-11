---
layout: article
title: Editing existing content
---


You can edit any page on the Help Center by pressing `Shift` + `~` and then clicking the edit button that is revealed.

For pages that are built from jekyll collections (Articles, Sections, API Collections, API Endpoints, Supported File Types), the `Edit` button will take you to the relevant collection item. For articles, most of the content is free markdown text. For Developer docs, much of the content is written as key-value pairs in the YAML front-matter of the document. See details for editing different content types below.

## Home

URL: `/` File: `/index.html`

![](/uploads/versions/smartling-help---x----1235-709x---.png)

This is a one-off HTML page on the `default` template. Release Notes and Blog Post sections maintain themselves as content is added. Documentation Updates can be edited in the page's YAML front matter.

## Knowledge Base

URL: `/knowledge-base` File: `/knowledge-base/index.html`

![](/uploads/versions/smartling-knowledge-base-and-slack---x----1191-1002x---.png)

One-off HTML page. The top level sections are populated from a YAML array at /_data/nav.yml

### Knowledge Base Sections

URL: `/knowledge-base/sections/{page-name}` File: `/_sections` collection

![](/uploads/versions/gdn-projects---x----1182-953x---.png)

See [Add new content](/knowledge-base/articles/add-new-content/) for details on creating new sections. To edit an existing section, navigate to the section you want to edit and press `Shift` + `~` to reveal the edit button.

There are two types of nav on the section page - top-level cards are there mostly to avoid a blank page if there's not much intro content, full section nav is on the left. These derive from the front-matter of the section and any subsections. When adding content, all you need to do, is make sure the article or section is added to it's immediate parent, then the navigation will generate itself.

#### Knowledge Base Articles

URL: `/knowledge-base/articles/{page-name}` File: `/_articles` collection

See Add new content for details on creating new articles. To edit an existing article, press `Shift` + `~` to reveal the edit button.

### Knowledge Base FAQs

URL: `/knowledge-base/articles/{page-name}` File: `/_faqs` collection

See Add new content for details on creating new sections. To edit an existing section, press `Shift` + `~` to reveal the edit button.

## Developers

URL: `/developers` File: `/developers/index.html`

![](/uploads/versions/smartling-developer-documentation---x----1240-774x---.png)

One-off html page. Navigation is populated from the `developers` array in `_data/nav.yml`.

### File Integration

URL: `/developers/files/` File: `/developers/files/index.html`

![](/uploads/versions/files---x----1183-948x---.png)

One-off html page. Navigation is populated from developers.files object in /_data/nav.yml.

#### Supported File Type

URL: `developers/files/{file-type}` File: `/_filetypes` collection and `/_filedirectives` collection

Supported file type pages are built from two collections, one for the filetype pages themselves, and one for file directives, which can be referred to by multiple file types.

**Sample front matter:**

~~~yaml
title: 'YAML'
layout: supportedfiletype #don't change! sets the template type
extension: '.yaml'
smartling_identifier: 'yaml'
download_sample: 'yaml.yml' #name of a sample file uploaded to the directory /public/example-files
resources: # array of links to useful resources. Can have more than one entry
  - title: Rails Internationalization
    link: 'http://guides.rubyonrails.org/i18n.html'
directive_prefix: '# ' # What goes before the directive? Usually a hash character or <!-- for XMLish files
directive_suffix: '' # what goes at the end of the directives? For hash comment file types this is blank. XMLish files often close like -->
directive_format: '# smartling.[directive_name] = [value]' # full example of the directive format
directive_instructions_markdown: |

  The directive must be a single comment on one line, and there should not be any inline trailing symbols after the directive.  Directives apply to all strings that follow them. Directives can be changed throughout the file.

directives: #an array of directive IDs. These match items in the /_filedirectives collection
  - placeholder_format
  - placeholder_format_custom
  - plurals_detection
  - download_format
  - string_format_paths
  - pseudo_inflation
  - yaml_locale_substitution
  - pseudo_inflation
  - sltrans
~~~

#### File Directive

Each file directive has it's own document, referred to in the directives array of a Supported File page. Wherever possible, these are standardized, so that the details for a directive like `placeholder_format_custom` can be written just once and referred to by every file type. However, because some file types require paths to be specified with a particular syntax, or apply slightly different business rules, it is necessary to provide filetype-specific examples for some directives.

Each directive has an array of examples. Each example has a type which may be the Smarling identifier of a filetype or may be `generic`. When building the page for a particular filetype, the template looks first for examples specific to that file type. If at least one is found, `generic`-type examples are not used.

**Sample front matter:**

~~~yaml
directive_id: 'placeholder_format' #unlike all other collections a special ID is used to match directives to filetypes, since not all titles are not unique
title: 'placeholder_format' #this is the title that will be rendered on the page
values_markdown: |
  `NONE`; `C`; `IOS`; `PYTHON`; `JAVA`; `YAML`; `QT`; `RESX`
description_markdown: |
  Used to specify a standard placeholder format.
  
examples:
    - type: json #on the page for JSON this will be used as the example
      code_single_line: '"placeholder_format" : "IOS"'
      description_markdown:
        Specifies iOS-style placeholders for the file.  
    - type: generic #all other filetypes use this generic example. The proper formatting at the beginning and end is added for each file type
      code_single_line: 'smartling.placeholder_format = IOS'
      #code_block_markdown: If an example can't be done in one line, you can instead use this value to create a markdown block containing a highlighted multi-line code block. Each example should have either code_single_line or code_block_markdown - but not both
      description_markdown:
        Specifies iOS-style placeholders for the file.  

~~~

#### Developer Articles (Files)

URL: `/developers/{categories}/{page-name}` File: `/_developerarticles` collection

These use the same template as Knowledge Base articles, but there are no 'sections' in the Developer docs. Once you're ready to publish your article, add it under the `developers.files.article` array in `/_data/nav.yml`.

### &nbsp;

### API

URL: `/developers/api/v2/` File: `/developers/api/v2/index.html`

&nbsp;

#### API Collections

URL: `/developers/api/v2/{collection-name}` File: `/v2sections` collection

![](/uploads/versions/glossary---x----1052-724x---.png)

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

URL: `/developers/api/v2/{collection-name}/{endpoint-name}` File: `/_v2endpoints` collection
<br>
<br>![](/uploads/versions/create-glossary-and-filedirectives-yml---smartlinghelp5------documents-webstormprojects-smartlinghelp5----x----1023-984x---.png)

Apart from a small free text description of the endpoint, almost all info about Endpoints is written in the front matter.

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

URL: `/developers/{categories}/{page-name}` File: `/_developerarticles` collection

These use the same template as Knowledge Base articles, but there are no 'sections' in the Developer docs. Once you're ready to publish your article, add it under the `developers.api.article` array in `/_data/nav.yml`.

## Product Blog

URL: `/blog/` File: `/blog/index.html`

One-off HTML page displays all blogposts in chronological order

## Blogpost

URL: `/blog/{categories}/{page-name}` File: `/_posts` collection

See [Add new content](/knowledge-base/articles/add-new-content/) for details on creating new blog posts. To edit an existing post, press `Shift` + `~` to reveal the edit button.