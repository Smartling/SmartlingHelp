---
title: Context
category: context
layout: v2section
endpoints:
  - title: Upload Context File
  - title: Download Context File
  - title: Create Bindings
  - title: Get Bindings for a Context File
  - title: Get Bindings for a String
  - title: Get Bindings for a Project
  - title: Delete Binding
---


The Context API allows you to upload context images to Smartling and bind them to strings. For example, take a look at this screen from our Smartling Hotels app:

![small](/uploads/versions/browse-hotels---smartlinghotels---x----396-624x---.png)

We want our translators to realize that the string 'Check Availability' is inside a button so they know to keep their translation short. We can use the Context API to attach this picture to the string 'Check Availability', so that it is displayed to the Translation Resource as they translate the string.

We can use the Image Context API to associate the string with the picture.

## Manually group strings with a context image.

**1)** Upload the context image with the [Upload Context File](/developers/apii/v2/context/upload-context/) request and save it's unique ID from the response.

**2)** Get the string hashcode for our 'Check Availability' string. We can do this using the String API.

**3)** Use the [Create Bindings](/developers/apii/v2/context/create-bindings/) request to create an association in Smartling between the string and the context image. We refer to this association as a 'binding'. Each binding also has a unique ID.

## Upload context image and match to strings in your project automatically

Smartling can use optical character recognition (OCR) to automatically match strings in your project to text in a context image. 

**1)** Upload your resource files via the File API.

**2)** Upload as many context images as you wish for your project with the [Upload Context File](/developers/apii/v2/context/upload-context/) request.

**3)** Use the Match Strings to Context Image request to automatically match strings and images in your project. Note that this method is not 100% accurate, especially if your strings have placeholders. You may still need to manually match some strings.

We can also use the Image Context API to get a list of all current bindings for a Smartling Project, string, or context image, and to delete any binding to remove the association between a string and image.