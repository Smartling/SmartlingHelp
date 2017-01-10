---
layout: article
title: Repository Connector - Version History
---


## Version 1.5.1 06/10/2016 [current]

### Features

* Updated handling of Github and Beanstalk webhooks.
* Added support for running the Connector behind a [proxy](http://docs.smartling.com/pages/Repository-Connector/FAQ-and-Advanced/#Proxy).


### Bug Fixes

* Made improvements to flow of Check Smartling Progress function in case of failure getting status or downloading translations to the repository.


## Version 1.5.0 04/19/2016

### Improvements

* Automatically resolves merge conflicts if Connector fails to pull updates.
* Purges obsolete branch folders in workspace and files from Smartling Dashboard. If a branch is deleted in the repository, files uploaded to Smartling from that branch are also deleted, along with the local folder created by the connector for that branch.
* Switched to version 2 of Smartling File API. This version is not backwards compatible. New API credentials need to be supplied in repoconnector.conf. See [installation guide](http://docs.smartling.com/pages/Repository-Connector/Install-and-Setup/) for details.


## Version 1.4.8 03/03/2016

### Improvements

* Dockerized the Connector.


### Bug Fixes

* Fixed bug that caused errors handling branch names containing a slash. e.g. 'dev/martin'.


## Version 1.4.5 12/15/2015

### Improvements

* Translated files are downloaded every time a callback is received. Even if completion progress of the file is unchanged.


### Bug Fixes

* Fixed bug that caused publishing of some resources to fail.


## Version 1.4.3 - 11/23/2015

### Improvements

* Added ability to set download trigger and retrieval type.


## Version 1.4.0 - 10/29/2015

### Bug Fixes

* Changed trigger condition for downloading translated files. Now connector take into account not only translated strings but not authorized too
* New version is backward compatible with previous configuration files. Just backup your configuration, install new version and apply configuration


## Version 1.3.1 - 10/29/2015

### Improvements

* Allow user to filter branches that must be processed by regex. Optional property branches is added to repository configurations to repo-connector.conf


### Bug Fixes

* Fixed SSH authorization on Indeed environment


## Version 1.3.0 - 05/26/2015

### Improvements

* Default repo-connector.conf is minimized and contains polling configuration only. If client requires hooks functionality they must add the configuration.
* Required repository type property is added to repository configurations to repo-connector.conf
* Added svn repositories support to repo-connector
* SVN layout customization. User can define trunk and brunches folders name with "layout"."trunkFolder" and "layout"."branchesFolder" properties of the repository configuration in repo-connector.conf


### Bug Fixes

* Warn user to login when resources configuration isn't found


## Version 1.2.2 - 05/12/2015

### Bug Fixes

* Fixed a bug that caused errors handling SSH keys.
* Fixed handling of SSH repository URLs.


## Version 1.0.1 - 12/15/2014

### First Release

* Service works as standalone app
* Native Github service configuration UI
* Configure files resources watch pattern
* Pull resources from repository by Github hook
* Push back translations from Smartling to Github
* Trigger for push back translations can be Smartling callback or cron
* Customize where and how to push translated resources
* Allow to configure Language mapping
* Allow to enable/disable automatic authorize files for all or specific locales
* Single Smartling project can be mappet to 1 or more repositories
* Translate several branches at once (or only master branch)
* Automatically remove resources files from Smartling project when files removed from Github