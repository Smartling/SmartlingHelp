---
layout: article
title: Repository Connector - Installation and Setup
---


## Install the connector

Download the [Repository Connector package](https://smartling-connector-public.s3.amazonaws.com/repo_connector/repo-connector-1.5.5-bin.zip) and unpack it into the desired folder. The application should be hosted on a server that is continuously available and publicly addressable, with Java version 7 or higher.

As of version 1.5.0, the Repository Connector uses version 2 of the Smartling File API. This version is not backwards compatible with previous versions and requires new API credentials. See [Authentication](/developers/api/v2/authentication/) for help obtaining the User Identifier and User Secret you will need to set up the connector.

## Connect to your repository and Smartling

Configuration information for the Repository Connector is kept in two separate files. The first, `repo-connector.conf`, is part of the Repository Connector package and defines how the Repository Connector communicates with your repositories and with Smartling. A second configuration file is placed in the repository, covering which files are uploaded to Smartling and where translated files end up in your repository. `repo-connector.conf` should be completed first.

By default, the `repo-connector.conf` file is located in `[repository connector directory]/cfg` and defines the necessary parameters for the Repository Connector to access your repositories and listen for callbacks. At a minimum, you must define a URL, access credentials and a related Smartling Project for each of your repositories. Edits to `repo-connector.conf` must be valid JSON. For additional configuration see the Advanced Configuration instructions.

The package contains an annotated version of `repo-connector.conf` to help you set up the connector. The basic required parameters are:

* `repositories` - Defines an array of source repositories. A repository cannot have more than one authentication attribute and a public repository may have neither. Without authentication information, the connector will be able to get files from the repository but not download translated files from Smartling. Repositories have the following attributes:

  * `url` - the URL for the repository. Must be unique in the array
  * `alias` - alias for the repository. The alias is used in creating the [fileURI](/developers/api/v2/files/upload-file/#fileuri) that is registered with Smartling for uploaded files. A unique alias value is recommended but not required. The complete uri will be "alias/branch/file”.
  * `type` - Repository type. Possible values are GIT and SVN
  * `userPassword` (optional) - defines user/password authentication type for a Github repository. Other authentication options are available.

    * `user` - user name
    * `password` - user password

    All possible authentication options are included in [the example file](/public/example-files/repo-connector-complete-example.conf).

  * `smartlingProject` - defines your Smartling project credentials. You can find these in the Smartling Dashboard on the account-level API page.  
  **Note:** This section was changed in version 1.5.0 and is not backwards compatible with previous versions.

    * `projectId` - unique id for your project.
    * `userIdentifier` - The User Identifier for your Smartling v2 API Token.
    * `tokenSecret` - The token secret for your Smartling v2 API Token.

  * `resourcesConfig` - the path to the repository configuration file, if hosted in your code repository. Default is 'smartling-config.json'
  * `serverResourcesConfig` - if you would prefer not to commit the repository configuration file to your code repository, you can host it on the Connector server. In this case, use serverResourcesConfig to define a path to the config file. You can define the absolute path or the relative path from the repo-connector.conf folder.
  * `namespace` - `TRUE` or `FALSE` (default). If `FALSE`, strings are shared between all files. Repeated strings are translated only once in Smartling. If your file names contain version information, this setting will avoid having to retranslate entire files when you upload a new version. If `TRUE`, strings are unique to each file. See the [namespace](/knowledge-base/articles/string-sharing-namespaces/) documentation and [File API](/developers/api/v2/files/upload-file/#smartling-namespace) for more details.  
  **Warning:** This property should not be edited after you start uploading content to Smartling.
  * `branches` - Regular expression for branch names to be checked for resources. If this is undefined, all branch names will be checked. Example:

    ~~~json
    "branches": "(dev|master|dev_cx-chat|dev_active-booking)"
    ~~~

    Remember that `/` is an escape character both for JSON and RegEx, so you need to double-escape special characters for your Regular Expressions to work.

  * `pollingSchedule` - Cron expression defining how often the Repository Connector polls your repository for updates. We strongly recommend using this method to upload new translatable files and download translations. However, if you need upload of new files to occur with minimum latency, you can [set up a webhook](/knowledge-base/articles/repository-connector-faq/#can-i-automate-uploads-when-i-make-a-commit-to-my-repository).

* `Scheduler`

  * `checkTranslation` - Cron expression defining how often the Connector will poll Smartling projects for updated translations. You must provide a valid expression, even if you set up [webhooks](/knowledge-base/articles/repository-connector-faq/#can-i-automate-uploads-when-i-make-a-commit-to-my-repository) and [callbacks](/knowledge-base/articles/repository-connector-faq/#can-i-configure-callbacks-for-completed-translation-instead-of-using-the-cron-checker).

* Options above and other additional configuration are included in [the example file](/public/example-files/repo-connector-complete-example.conf).

## Start the Repository Connector Application

To start the Repository Connector, execute:

~~~
java -jar repo-connector-1.5.5.jar -start
~~~

To stop the Repository Connector, execute:

~~~
java -jar repo-connector-1.5.5.jar -stop
~~~

If you have saved your configuration files in a folder other than the default (`/cfg`) add the parameter `-configuration <folder_name>` to the command.

To run as a daemon, execute:

~~~
java -jar repo-connector-1.5.5.jar -start&
~~~

## Configure your Translation Settings

Now that the Repository Connector is up and running, it's time to [set up how you will translate your project](/knowledge-base/articles/repository-connector-translation-settings/).
