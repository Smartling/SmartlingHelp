---
layout: article
title: Jobs
redirect-url: /hc/en-us/articles/202670453
---


> We are currently rolling out [Updates to the Jobs feature](/blog/product-update/updates-to-jobs/). See the Product Blog for details. This article will be updated as the rollout continues.

With the **Jobs** feature, Smartling enables Account Owners and Project Managers to group and prioritize content for translation: create a job, select the content for the job, and add a due date as needed.

Translators can view a list of jobs (with due dates) and can filter strings by Jobs in their In Progress view, but cannot create or edit a job.

![](/uploads/versions/smartling___translations_management_and_smartling___translations_management---x----1231-727x---.png)

## Create a new Job

Organizing your translations into jobs is completely optional: you can simply use continuous translation and no jobs, or you can put some translations into jobs and leave others out of jobs depending on your need to organize and/prioritize content.

To create a new job go to **Content &gt; Jobs**, click **Add Job &gt; Job for Existing Strings**&nbsp;and name the job:

![](/uploads/versions/smartling___translation_jobs---x----1234-585x---.png)

You can also create a new job when authorizing one or more strings for translation. From the Authorize dialog box, select **Create Job**. The authorized strings will be added to the new job.

![](/uploads/versions/smartling___translations_management-6---x----573-430x---.png)

## Create a new Files Job

Smartling gives you the option to upload files for translation and create a job for them in one action. This function was created primarily for [Requesters](/knowledge-base/sections/requester-portal/){: .cc-active} - users with a limited permission set - but is also available to Account Owners and Project Managers.

Each file uploaded to a files job will be given the Job name as a [namespace](/knowledge-base/articles/string-sharing-namespaces/){: .cc-active}. This means that strings will be shared between files in the same job. If you have the string ‘Hello’ in three files in your Job, you will only need to translate it once.

> Files jobs cannot be edited once they are created, so you may wish to Upload your files separately and add the strings to a job if you want to be able to add more locales or strings to the job later. If you do make a Files job, check that it is complete and correct before your click **Create**.

To create a new Files job go to **Content &gt; Jobs**, and click **Add Job &gt; Job for New Files**.

From the dialog, give your job a name, due date and description, choose your languages, then click&nbsp;**Upload File** and browse to your file. You can upload multiple files. Check that all files and languages are correct, then click&nbsp;**Create**.

![](/uploads/versions/smartling___translation_jobs-1---x----1346-1266x---.png)

## Due Dates

Adding a due date to a job, although optional, is a great way to help translators prioritize their work, and to clearly communicate when you expect the content translated:

* If a translation is in multiple jobs with due dates, Smartling uses the earliest due date to prioritize the translation.
* Smartling does not guarantee that your content will be translated by a due date, even if you set one for a job.
* Some translation resources may charge higher rates if you ask them to rush translations; work with your translation resources if you have questions about delivery dates and costs.

Jobs are sorted first by due date and then alphabetically.

## Adding strings to a Job

A job is neither a file, URL, or source content (strings) but instead is comprised of a collection of translation requests added from any files (Resource files) or URL (Global Delivery Network).

You can add strings to an existing job from the Authorize dialog. From the&nbsp;**In Progress** list view, you can add selected strings to a job by selecting&nbsp;**Add to Job** from the&nbsp;**Actions** menu:

A string can only be added to one Job per language. If you try to add a string which is already in a Job to a new Job for the same language, you will see an error message.

Only Authorized strings can be added to Jobs. If you try to add a string to a Job for a language that string isn’t authorized in, you will see an error message.

## Edit Jobs

Because priorities constantly change, Jobs gives you the ability to add or remove content at any time, but also change due dates:

### Add or Remove translations from a job

**1)** Go to&nbsp;**Content&gt;Translations** and select In Progress.

**2)** Select the translations you would like to remove or add to a job

**3)** Select **Add to Job** or **Remove from Job** in the Actions drop-down menu

![](/uploads/versions/smartling___translations_management-7---x----1243-613x---.png)

### Edit details and due-dates

**1)** Go to **Content &gt; Jobs**.

**2)** Click the&nbsp;**Actions** menu for a job and select&nbsp;**Edit Details**.

![](/uploads/versions/smartling___translation_jobs-2---x----898-579x---.png)

### Archive Jobs

When a job is archived, you will not see it in the list of jobs. &nbsp;A translation can continue even if you archive a job that it was added to. &nbsp;Archived jobs are not listed in the Translation lists.

**1)** Go to **Content &gt; Jobs**.

**2)**&nbsp;Click the&nbsp;**Actions** menu for a job and select **Archive**.

![](/uploads/versions/smartling___translation_jobs-3---x----585-684x---.png)

To view archived jobs check&nbsp;**Show Archived Jobs** in the search options.

![](/uploads/versions/smartling___translation_jobs-4---x----285-336x---.png)

## View Fuzzy Match Estimates for a Job

You can generate&nbsp;[Fuzzy Match Estimates](/knowledge-base/articles/fuzzy-match-estimates/){: .cc-active} for the content of a job.

**1)** Go to **Content &gt; Jobs**

**2)**&nbsp;Click the&nbsp;**Actions** menu for a job and select&nbsp;**Fuzzy Match Report**. Reports can be viewed in a lightbox within the&nbsp;**Jobs**&nbsp;window or from&nbsp;**Content &gt; Fuzzy Estimates**. Estimates are kept in the dashboard for sixty days.

![](/uploads/versions/smartling___translation_jobs-5---x----589-605x---.png)

## View Progress for a Job

**1)** From the Job’s dropdown menu, select &nbsp;**View Details**.

**2)** Click&nbsp;**Workflow Progress** to display the number of strings at each workflow step for each language.

![](/uploads/versions/smartling___jobs---x----579-665x---.png)

## Automate Job Creation

Account Owners and Project Managers can set up simple rules to automatically package new content into Jobs for translation in&nbsp;**Project Settings &gt; Job Automation**.

This is convenient when your engineering team has already automated content upload into Smartling, and you want to submit it for translation is the predictable and organized way.

![](/uploads/versions/screenshot-2017-02-23-17-24-13---x----1978-360x---.png)

To create new rule provide the following:

1) **Job name**. This text will be used in the name of the created job.

2)**Schedule** - defines when the process will be executed.

We will also add timestamp to the job name in order to keep jobs unique. For example, job name is set to “Daily batch” and scheduled to run daily at 5:00 PM Pacific Time. It will result in the job with name “Daily Batch (2017.03.21 17:00 PST)”

3) **Languages**. All the content in Awaiting Authorization (including partially authorized) that is not yet in another Job will be added to the newly created Job for the selected languages.

4) **Authorization.&nbsp;**You can have created job authorized into default workflows after creation. Or you can keep it not authorized and do it later on the Jobs page.&nbsp;

5) **Due date**&nbsp;can be set from the time of the Job creation. By default only weekdays are considered in the due date calculation. “Include weekends” setting will consider Sat and Sun as working days for the translation team.

For example, if job is due in 48 hours and it is created on Fri - it will be due on Tue. With “Include weekends” option Job will be due on Sun.

6) **Emails for notifications.** You can optionally provide list of recipients to be notified about the result of the rule execution: job was created, job was not created or error occurred. Use “,”, Tab key or Enter to input emails.

### FAQ

**I set up the rules but Jobs are not created, what might be wrong?**&nbsp;

- Make sure content is not automatically authorized on the upload. Job will be created only if there is content that is not yet authorized and not yet in the job.

**Are there any limitations on the size of the created Job?**

- Yes, maximum of 10,000 of source strings will be added to the Job on each run.

**Can I schedule few rules to run at the same time?**

- Yes, this is a valid configuration. For example, you might want to create multiple jobs with different set of languages at the same time. Though the rules will run consequently one after another, so you might notice that some Jobs are created few minutes later than the others.

**Why Job was created at the not scheduled time?**

- Though this will not be a request case, it is possible that system was unavailable at the time when Job was scheduled to be created. In this case the rule will be run once the system is up and running.