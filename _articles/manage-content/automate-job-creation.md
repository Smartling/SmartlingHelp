---
layout: article
title: Automate Job Creation
wistia:
  video: false
  id:
---


[//]: # Account Owners and Project Managers can set up simple rules to automatically package new content into Jobs for translation in&nbsp;**Project Settings &gt; Job Automation**.

![](/uploads/versions/screenshot-2017-02-23-17-24-13---x----1978-360x---.png)

To create new rule provide the following:

1) **Job name**. This text will be used in the name of the created job.

2) **Schedule** - defines when the process will be executed.

We will also add timestamp to the job name in order to keep jobs unique. For example, job name is set to “Daily batch” and scheduled to run daily at 5:00 PM Pacific Time. It will result in the job with name “Daily Batch (2017.03.21 17:00 PST)”

3) **Languages**. All the content in Awaiting Authorization (including partially authorized) that is not yet in another Job will be added to the newly created Job for the selected languages.

4) **Authorization.&nbsp;**You can have created job authorized into the workflows of your choice after creation. Or you can keep it not authorized and do it later on the Jobs page.&nbsp;

5) **Due date**&nbsp;can be set from the time of the Job creation. By default only weekdays are considered in the due date calculation. “Include weekends” setting will consider Sat and Sun as working days for the translation team.

For example, if job is due in 48 hours and it is created on Fri - it will be due on Tue. With “Include weekends” option Job will be due on Sun.

6) **Emails for notifications.** You can optionally provide list of recipients to be notified about the result of the rule execution: job was created, job was not created or error occurred. Use “,”, Tab key or Enter to input emails.

### FAQ

**Is this feature for me?**

Job auto-creation will be useful in the project where:

* Your content upload to Smartling is already automated via Global Delivery Network, File API or Repository Connector
* Your current integration already automatically authorizes all uploaded content for translation. Though for this content to be added to auto-created job authorization on upload should be disabled.
* You rarely exclude content from translation
* You create Jobs manually by grouping content into daily/weekly batches

You should be careful using Job auto-creation in projects where you already have integration with Jobs API. Make sure scheduled Jobs and Jobs created via API don't try to get the same content added.

**I set up the rules but Jobs are not created, what might be wrong?**

Make sure content is not automatically authorized on the upload. Job will be created only if there is content that is not yet authorized and not yet in the job.

**Are there any limitations on the size of the created Job?**

Yes, maximum of 10,000 of source strings will be added to the new Job on each run.

**Can I schedule job creation to more than one time a day?**

You can create multiple rules to run at the same day. Also you can use the same text for the Job name in each rule configuration.

**Can I schedule few rules to run at the same time?**

Yes, this is a valid configuration. For example, you might want to create multiple jobs with different set of languages. But the rules will run consequently one after another, so you might notice that some Jobs are created few minutes later than the others.

**Why Job was created at not scheduled time?**

Though this will not happen on the regular basis, it is possible that system was unavailable at the time when Job was scheduled to be created. In this case the rule will be run once the system is up and running.