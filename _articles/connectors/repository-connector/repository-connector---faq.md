---
layout: article
title: Repository Connector - Frequently Asked Questions
draft: false
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: true
edition: Express
redirect-url: 
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
  articles:
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
  articles:
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

## What happens if I add locales to my project?

If you add locales to your project you will need to update your translation configuration file (`smartling-config.json`) and add the new locales to the array. When the configuration file is uploaded, the Repository Connector will automatically update files in the Smartling dashboard based on your new settings.

## Can I map one locale in Smartling to multiple locales in my repository?

No. All locale mappings are 1:1. If you have two similar locales, like `es` and `es-ES` best pracice is to create both locales in Smartling and use [Cross-Country Leverage](/knowledge-base/articles/leverage-configuration/#set-up-a-new-leverage-configuration) to share translations.

## My source files aren't being imported into Smartling.

The most common cause of this problem is an incorrect value in your `smartling-config.json` for`resourceSets.pathRegex`. You can validate your regular expression using an online tool such as [RegexPlanet](http://www.regexplanet.com/advanced/java/index.html). Type your regular expression - make sure to remove the double-escaping required by JSON, so use only a single `\` instead of `\\`. Then provide some inputs of paths you want to match or not match and click 'test'.  
![](regexplanet.png)

> Once you have your Regular Expression working as you want inside RegexPlanet, make sure you restore the double escaping (`\\`) needed to put your Regular Expression in a JSON file.

## My translated files aren't appearing in my repository..

There are a few reasons translated files might not be appearing in your repository:

*   If your scheduler is set to update less frequently, it's possible that you might just need to wait for the Repository Connector to check for new translations. You can update the scheduler in your `repo-connector.conf`.
*   By default the Repository Connector will only download a file when all translations are published. You can choose a less restrictive setting. For example, you can download the file once there are saved translations for all strings in a file. See [here](/knowledge-base/articles/repository-connector-faq/#what-are-my-options-for-downloading-translated-files?) for more details.
*   For a public repository, you may not have specified credentials. This would allow you to get source files from the repository but not push translations back. Make sure you have provided commit credentials for your repository in your `repo-connector.conf`
*   Finally, you must provide a value for `translationPathExpression` for each resource set in your `smartling-config.json`, or translated files cannot be returned to your repository. See the previous answer for help tuning your Regular Expression.

## Why are my translated files being re-uploaded to the Dashboard as original files?

The Repository Connector cannot automatically distinguish between an original file and a translated file in the repository. The Connector uploads files based on the value of `resourceSets.pathRegex` in your translation configuration file. If your regular expression makes use of wildcards or your translated files are downloaded to the same folder as your original files, it may be that both original and translated files will match the regular expression.

To avoid this problem, consider altering the structure and location of the original and translated resource files in your repository, or update your regular expression to make sure it only uploads resource files in the your project's original language to Smartling.

## Can I alter the configuration files while the Repository Connector is running?

You can alter the translation configuration file while the connector is running. If it is hosted in your code repository, any new commit to this file will trigger an automatic update to the Smartling dashboard. However, changes to the `repo-connector.conf` file require a restart.

## What are my options for downloading translated files?

Smartling gives you a few advanced options for configuring how you get your translated files back from Smartling. To set these up, you need to add a `downloadTranslations` node to the repo-connector.conf file. The `downloadTranslations` node can contain the following parameters:

*   `trigger` - `COMPLETED` or `ONCHANGE` - determines when to download translated files from Smartling. `COMPLETED` downloads files only when all translations are complete. `ONCHANGE` downloads translated files whenever they are updated. Default is `COMPLETED.`

*   `retrievalType` - Sets type of translation for downloaded files. Allowed values are `PUBLISHED` (default), `PENDING`, and `PSEUDO`. See [Download Files](/developers/api/v2/files/download-translated-file-single-locale/) for more information on retrieval type.

*   `includeOriginalStrings` - If `TRUE`, Smartling returns the original string if there is no translations available. If `FALSE`, Smartling returns a blank string if there is no translations. Defaults to `TRUE`. This parameter is supported only for Gettext, java properties, custom XML, Android XML and JSON files. See [Download Files](/developers/api/v2/files/download-translated-file-single-locale/) for more information.

## Can I upload/download resource files from all branches except my master branch?

Sure. If you'd rather control your master branch via pull requests, you can set up the Repository Connector not to check the master brance. In the `repo-connector.conf` file, write your `branches` regular expression like this, to exclude your master branch:

    "branches": "^(?!master).*",

## I'm getting 'repository not found' or 'cannot connect to git' errors.

Repository Not Found errors are either caused by a network issue or by incorrect repository name/credentials. One way to check your credentials is to use the same name and credentials you use for the Repository Connector to try to clone your repository from the command line.

For example, with a username/password credential set:

    git clone https://<user>:<password>@github.com/Company/test-repo.git

or with a personal access token:

    git clone https://user:<personal access token>@github.com/Company/test-repo.git

If this action succeeds make sure that you have only one set of credentials in your `repo-connector.conf`. The example file comes with multiple possible credential configurations, commented out with `#` symbols. One of these may have been uncommented by mistake. Try deleting all credential sets except the one you are using.

If your credentials are correct it is likely that the server you host your Repository Connector on is not allowing outbound connections. You may have [firewall](#Firewall) issues.

## Can the Repository Connector work behind a firewall?

In short, yes, but some extra work is required. First, your firewall needs to allow outbound connections both to Smartling and to your Repository. You will need to set up two rules in your Firewall configuration.

For Smartling API:

*   Protocol: TCP
*   Local ports: all ports
*   Remote ports: 443
*   Remote hosts: api.smartling.com

For your Git repository

*   Protocol: TCP
*   Local ports: all ports
*   Remote ports: 443
*   Remote hosts: {host of your git repository}

These outbound rules will allow the connector to work with Cron scheduling but will not allow the neccessary inbound connections for accepting [callbacks](/knowledge-base/articles/repository-connector-faq/#can-i-configure-callbacks-for-completed-translation-instead-of-using-the-cron-checker?) from Smartling or [Webhooks from your repository](/knowledge-base/articles/repository-connector-faq/#can-i-automate-uploads-when-i-make-a-commit-to-my-repository?). For these you will need to create inbound rules for Smartling callbacks:

*   Protocol: TCP
*   Local ports: all ports
*   Remote ports: 443
*   Remote hosts: 184.73.255.141

Or for your Repository

*   Protocol: TCP
*   Local ports: all ports
*   Remote ports: 443
*   Remote hosts: {ip address used by your repository provider for webhooks}

## How much memory do I need to allocate?

On average, memory consumption for an instance of the Repository Connector is around 40M. We recommend having at least 64M available. You can define maximum memory allocation for the connector by starting with the `-Xmx` flag on startup. For example, to set the max memory to 64M: `java -Xmx64M -jar repo-connector-1.4.2.jar -start`


## How do I control the size of my logs?

The Repository Connector uses logback. You can configure the length of history and the file size of your logs by editing the `logback.xml` file in the `cfg` directory. See the [Logback documentation](http://logback.qos.ch/manual/appenders.html) for full options.

## What size AWS ec2 instance is appropriate for deploying?

Space requirements for the Repository Connector are not high. For most use cases, a micro instance will be sufficient.

## I deleted a file in Smartling that was uploaded by the Repository Connector. Now the connector is showing errors: `The file {fileUril} could not be found`. What do I do?

As of version 1.5.3, deleting a file in Smartling that the Repository Connector is tracking will no longer cause failure. However, it's still a good idea to keep your `smartling-config.json` up to date. If you want to delete a file in Smartling that is tracked by the Connector, follow these steps:

**1)** Stop the Connector with

~~~
java -jar repo-connector-{version}.jar -stop
~~~

**2)** Edit your smartling-config.json file. Adjust the regular expression in the appropriate `resourceSets` entry so it doesn't match the file you need to delete.

**3)**  Reset the connector by deleting the following folders from its directory:
    *   `cfg/activemq-data`
    *   `cfg/db-data`
    *   `cfg/repository-data`

**4)**  Delete the file in the Smartling Dashboard.
**5)**  Restart the Connector.


## Can I configure callbacks for completed translation instead of using the cron checker?

For most use cases, we recommend using the standard cron checker to look for completed applications. However, it is possible to configure callbacks, as long as you can open a port for an http listener.

To configure callbacks, you need to add an "http" section to the repo-connector.conf file. It should look like this:

~~~
"http": {  
    "host": "localhost",  
    "port": "5555",  
    "protocol": "http",  
    "callbackUrl": "http://callback.mydomain.com"  
}
~~~

**Parameters:**

*   `host` - the host name, set by default to localhost. Public server may require value to be set to ‘0.0.0.0’
*   `port` - the local port for the http listener. Any free port can be assigned.
*   `protocol` - can be set to `http` or `https` depending on the requirements of your server.
*   `callbackURL` - URL for your instance of the Repository Connector. This is the URL that Smartling will send a callback to on completion of translation for a file.

Even if you set up callbacks, you must still provide a valide cron expression in the `scheduler` section of your `repo-connector.conf`.

## Can I automate uploads when I make a commit to my repository?

The simplest way to deal with uploading new translations to Smartling and downloading translated files is to use the built-in scheduler to regularly check Smartling and the repository for changes. However, if it is vital to have new commits to your repository uploaded to Smartling with no latency, you can configure a webhook in your Github or Beanstalk repository.

Before you can get your webhooks working, you need to configure your http listener settings in your `repo-connector.conf` file. See [the previous question on callbacks](/knowledge-base/articles/repository-connector-faq/#can-i-configure-callbacks-for-completed-translation-instead-of-using-the-cron-checker?) for instructions on configuring your http listener.

Webhooks require your Connector to be publicly addressable. If you have set up the Connector behind a firewall you may have difficulty getting your webhooks to work.

To configure a Github webhook, go to **Settings > Webhooks** for your repository and add a webhook. Required details are:

*   `Payload URL`: Your publicly addressable URL for the connector. Takes the form `https://{host}:{port}/github?resourcesConfig={path to config file}`. Default resoucesConfig value is smartling-config.json. Your port value should match the one set in the `http` object in your `repo-conenctor.conf` file.
*   `Content type`: Set to 'application/json'.
*   `Secret`: Your Smartling API token secret.
*   `Which events would you like to trigger this webhook?`: Set 'just the push event'.

![](github_webhook.png)

For a Beanstalk repository, under **Settings > Integration** create a new webhook and set:

*   `Name`: Choose a name for the webhook.
*   `URL`: Your publicly addressable URL for the connector. takes the form 

	`http{/s}://{host}:{port}/beanstalkapp?userIdentifier={userIdentifier}&resourcesConfig={path to config file}`. 

	Default resoucesConfig value is `smartling-config.json`. userIdentifier is your Smartlign API v2 user identifier. Your port value should match the one set in the `http` object in your `repo-conenctor.conf` file.

You do not need to make any changes to your `repo-connector.conf` file. If your webhook is set up correctly, any new push to the repository will trigger the connector to look for any changes to translatable files (or new files) to upload to Smartling.

Even if you set up callbacks, you must still provide a valid cron expression in the `scheduler` section of your `repo-connector.conf`.

## Can the Connector work from behind a proxy?

Yes. From version 1.5.1 onward, the Connector can work with a proxy. The following arguments need to be passed to the Connector on start:

*   http.proxyHost
*   http.proxyPort
*   http.proxyPassword
*   http.proxyUsername

Your startup command should look something like this:

~~~
java -Dhttp.proxyHost=localhost -Dhttp.proxyPort=3128 -Dhttp.proxyUsername=testuser -Dhttp.proxyPassword=password -jar repo-connector-1.5.1.jar -start
~~~

If you are having trouble connecting, try using curl to test your proxy connection with Smartling independently of the Repository Connector.

## Can I set up different rules and configuration for different sets of content in my source repository, for example, can I translate some source content into only French and other content into only German?

Configuration for the Repository Connector is contained in the `repo-connector.conf` and in the repository configuration file, usually `smartling-config.json`.

The connector can only refer to one `repo-connector.conf` file which, in turn, references one repository configuration file. However, you can run more than one instance of the Repository Connector pointed at the same repository.

For each set of source content you want to handle, create a separate repository configuration file in your repository. See [Translation Settings](/knowledge-base/articles/repository-connector-translation-settings/) for help with these files. Give each a unique name: `smartling-config-french.json`, `smartling-config-german.json` etc. Set up the `resourceSets` in each file to identify specific source content and set the other parameters as desired. For example, you might set `"locales": [{"smartling" : "fr-FR","application" : "fr"}]` in one file and `"locales": [{"smartling" : "de-DE","application" : "de"}]` in another.

You can then create multiple `repo-connector.conf` files in the Repository Connector folder. By default, this file is kept in the `/cfg/` directory. You will need to create a seperate directory for each file: `/cfg/french/`, `/cfg/german/`, etc. Keep the same login information in each config file, but change the `resourcesConfig` value to point to the correct repository configuration file.

**Note:** If you prefer, you can store your repository configuration files on the Repository Connector server itself. In this case, set the `serverResourcesConfig`parameter instead. See [Installation and Setup](/knowledge-base/articles/repository-connector-installation-and-setup/#connect-to-your-repository-and-smartlingfor more.

Finally, start the connector multiple times, providing a specific config path each time using the `-configuration` parameter:
	
~~~
java -jar repo-connector-1.5.4.jar -configuration ./cfg/french/ -start
~~~

~~~
java -jar repo-connector-1.5.4.jar -configuration ./cfg/german/ -start
~~~

You now have multiple instances of the Repository Connector with different configurations, connected to the same repository.

## Can I see a complete configuration example with all optional parameters?

Sure! Download this [complete repo-connector.conf example file](/public/example-files/repo-connector-complete-example.conf), see comments for how each optional parameter is used. Recommended for advanced users only. If you use this file as a template to fill in your own information, remember to rename the file to `repo-connector.conf`.