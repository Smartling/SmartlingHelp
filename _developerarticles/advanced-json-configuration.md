---
layout: article
title: Advanced JSON configuration
categories:
  - files
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  others:
    - link:
      text:
migration-checklist:
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---


## Multiple Translate Blocks

If you have more than one translatable block in your JSON file and you need to apply different rules, you can define your “translate_paths” as an array, like this:

~~~json
{
    "smartling": {
        "translate_paths": [{
            "key": "/Buttons/button",
            "path": "/Buttons/text"
        }, {
            "key": "/Errors/{Id}",
            "path": "/Errors/message"
        }]
    }
}
~~~


> When specifying multiple translate blocks, especially if using wildcards, try to avoid situations where a path in your file matches more than one block. If this does happen, an exact path match will take precedence over a match with wildcards



## Compound Keys

You can define a compound key - joining two different paths - using a comma-separated list of paths surrounded by square brackets, like this:

~~~json
{
    "smartling": {
        "translate_paths": {
            "key": ["/Buttons/button","/Buttons/type"],
            "path": "/Buttons/text"
        }
    },
    "Buttons": [{
        "button": "button1",
        "type" : "active",
        "text": "Home"
    },
    {
        "button": "button2",
        "type" : "active",
        "text": "Back"   
    }]
}
~~~

This will capture both paths as the key, separated by `:#:`. For example: `button1:#:active`

> All parts of the compound key must match content in the file or no key will be returned.

## Complete Example

See below for a complete example of a JSON configuration involving multiple translate blocks, compound keys, and both JSON names and JSON values captured as keys.

~~~json
{
    "smartling": {
        "translate_paths": [{
            "path": "*/title",
            "key": "{*}/title",
            "instruction": "*/note"
        }, {
            "path": "*/summary",
            "key": ["{*}/summary", "*/title"]
        }]
    },
    "key1": {
        "note": "Released 1994",
        "title": "Forrest Gump",
        "summary": "A movie about a guy called Forrest Gump."
    },
    "key2": {
        "note": "Released 2004",
        "title": "Ray",
        "summary": "A movie about a guy called Ray."
    },
    "key3": {
        "note": "Released 1991",
        "title": "JFK",
        "summary": "A movie about a guy called Jim Garrison."
    }
}
~~~

Uploading this file to smartling will give:

| Key | String | Instruction |
| --- | ------ | ----------- |
| Key1 | Forrest Gump | Released 1994 |
| Key1:#:Forrest Gump | A movie about a guy called Forrest Gump. | (none) |
| Key2 | Ray | Released 2004 |
| Key2:#:Ray | A movie about a guy called Ray. | (none) |
| Key3 | JFK | Released 2004 |
| Key3:#:JFK | A movie about a guy called Jim Garrison. | (none) |

