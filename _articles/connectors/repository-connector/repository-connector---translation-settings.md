---
layout: article
title: Repository Connector - Translation Settings
---


By this point you should have [already created](/knowledge-base/articles/repository-connector-installation-and-setup/) your `repo-connector.conf` file, governing how the Repository Connector connects to Smartling and your code repository. Now you need to tell the connector where your resource files are, which locales you want to translate and how you want translated files to be returned to your repository.

## Create translation configuration file

Create a JSON file and commit it to the path defined in the `repo-connector.conf` file. Default filename is `smartling-config.json`. This file defines resource file that should be uploaded and how to save translated files that are downloaded from Smartling. The file must be valid JSON.

The Repository Connector Package contains an annotated example file called `smartling-config-example.json`. You can use this file to build your config but make sure you rename the file to remove the `-example` from the filename.

### Parameters

*   `locales` - Locales has two functions. If automatically authorizing content that is uploaded to Smartling (default behavior), it determines which locales content will be authorized for. It also serves as a mapping of locale codes from the Smartling API codes to the codes that are used in the repository. Smartling locale code must be unique per configuration file. The file must list at least one locale. Note that if you add extra languages to your project, you will need to update this file for the new languages to be handled by the Repository Connector.

    *   `smartling` - Smartling locale code. Codes for locales in your project can be copied from **Project Settings > API** in the Smartling Dashboard.

    *   `application` - locale code that will be used when downloading translated files back to the repository. This can be any format

*   `resourceSets` - defines an array of resource sets. Each set identifies a group of repository files that will be uploaded to Smartling with the same settings.

    *   `type` - The Smartling API “fileType”. Possible values: "javaProperties", "ios", "android", "gettext", and so on. See Smartling’s [Supported File Types](/developers/files/) documentation for the full list.

    *   `pathRegex` - Java 7 Regular expression defining which repository files to upload to Smartling. All files matching the expression will be uploaded.

    Remember that `/` is an escape character both for JSON and RegEx, so you need to double-escape special characters for your Regular Expressions to work.

    *   `authorizeContent` (optional) - defines whether uploaded content will automatically be authorized for translation. Possible values: ‘true’ (default), ‘false’.

    *   `translationPathExpression` (optional) - Java 7 regular expression used to create a file path and name for translated files. If this value is not defined, translated files in the Smartling dashboard will not be downloaded to the repository. Predefined variables for the expression are:

        *   `${locale}` - project locale code value (as defined at `locales.application`)

        *   `originalFile` - object with string properties, which returns parts of the original path. See below for property descriptions and example values for an original file path `localization/messages/user.properties`

            *   `${originalFile.fullName}` - full path and name of original file. E.g. `localization/messages/user.properties`

            *   `${originalFile.path}` - original file path only. E.g. `localization/messages/`

            *   `${originalFile.name}` - original file name with extension. E.g. `user.properties`

            *   `${originalFile.baseName}` - original file name without extension. E.g. `user`

            *   `${originalFile.extension}` - original file extension. E.g. `properties`

        *   Groups defined in your pathRegex expression can also be used as variables. 
        
        Remember that `/` is an escape character both for JSON and RegEx, so you need to double-escape special characters for your Regular Expressions to work.
             
    *   `translationCommitMessage` (optional) - Java 7 regular expression defining a translation commit message. If not defined, a default value "Translation $originalFile.fullName to $locale" will be used. Predefined variables are the same as those for translationPathExpression, plus translatedFile, which contains the translated file path and name, with the same attributes as the originalFile.

    *   `smartlingDirectives` - array of strings which have the format `<directive name>=<value>`. File directives can be used to alter the way Smartling handles your files. See our [Supported File Types](/developers/files/) documentation for information on which directives are available for each file type.
