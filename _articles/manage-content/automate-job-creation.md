---
layout: article
title: Automate Job Creation
wistia:
  video: false
  id:
---


Account Owners and Project Managers can set up simple rules to automatically package new content into Jobs for translation in&nbsp;**Project Settings &gt; Job Automation**.

![](/uploads/versions/screenshot-2017-02-23-17-24-13---x----1978-360x---.png)

To create new rule provide the following:

1) **Job name**. This text will be used in the name of the created job.

2)**Schedule** - defines when the process will be executed.

We will also add timestamp to the job name in order to keep jobs unique. For example, job name is set to “Daily batch” and scheduled to run daily at 5:00PM Pacific Time. It will result in the job with name “Daily Batch (2017.03.21 17:00 PST)”

3) **Languages**. All the content in Awaiting Authorization (including partially authorized) that is not yet in another Job will be added to the newly created Job for the selected languages.

4) **Authorization.&nbsp;**You can have created job authorized into default workflows after creation. Or you can keep it not authorized and do it later on the Jobs page.&nbsp;

5) **Due date** be set from the time of the Job creation. By default only weekdays are considered in the due date calculation. “Include weekends” setting will consider Sat and Sun as working days for the translation team.

For example, if job is due in 48 hours and it is created on Fri - it will be due on Tue. With “Include weekends” option Job will be due on Sun.

6) **Emails for notifications.** You can optionally provide list of recipients to be notified about the result of the rule execution: job was created, job was not created or error occurred. Use “,”, Tab key or Enter to input emails.