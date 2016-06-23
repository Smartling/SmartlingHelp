---
layout: article
title: Jobs
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
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
  internal-links: false
  images: false
  FAQs: false
  related: false
  reviewed: false
---

With the **Jobs** feature, Smartling enables Account Owners and Project Managers to group and prioritize content for translation: create a job, select the content for the job, and add a due date as needed.

Translators can view a list of jobs (with due dates) and can filter strings by Jobs in their In Progress view, but cannot create or edit a job.

![](/hc/en-us/article_attachments/203027718/Smartling___Translations_Management_and_Smartling___Translations_Management.png)

## Create a new Job

Organizing your translations into jobs is completely optional: you can simply use continuous translation and no jobs, or you can put some translations into jobs and leave others out of jobs depending on your need to organize and/prioritize content.

To create a new job go to **Content > Jobs**, click **Add Job > Job for Existing Strings** and name the job:

![](/hc/en-us/article_attachments/203027788/Smartling___Translation_jobs.png)

You can also create a new job when authorizing one or more strings for translation. From the Authorize dialog box, select **Create Job**. The authorized strings will be added to the new job.

![](/hc/en-us/article_attachments/202957827/Smartling___Translations_Management.png)

## Create a new Files Job

Smartling gives you the option to upload files for translation and create a job for them in one action. This function was created primarily for [Requesters]() - users with a limited permission set - but is also available to Account Owners and Project Managers.

Each file uploaded to a files job will be given the Job name as a [namespace](). This means that strings will be shared between files in the same job. If you have the string 'Hello' in three files in your Job, you will only need to translate it once.

> Files jobs cannot be edited once they are created, so you may wish to Upload your files separately and add the strings to a job if you want to be able to add more locales or strings to the job later. If you do make a Files job, check that it is complete and correct before your click **Create**.

To create a new Files job go to **Content > Jobs**, and click **Add Job > Job for New Files**.

From the dialog, give your job a name, due date and description, choose your languages, then click **Upload File** and browse to your file. You can upload multiple files. Check that all files and languages are correct, then click **Create**.

![](/hc/en-us/article_attachments/203605897/Smartling___Translation_jobs.png)

## Due Dates

Adding a due date to a job, although optional, is a great way to help translators prioritize their work, and to clearly communicate when you expect the content translated:

*   If a translation is in multiple jobs with due dates, Smartling uses the earliest due date to prioritize the translation.
*   Smartling does not guarantee that your content will be translated by a due date, even if you set one for a job.
*   Some translation resources may charge higher rates if you ask them to rush translations; work with your translation resources if you have questions about delivery dates and costs.

Jobs are sorted first by due date and then alphabetically.

## Adding strings to a Job

A job is neither a file, URL, or source content (strings) but instead is comprised of a collection of translation requests added from any files (Resource files) or URL (Global Delivery Network).

You can add strings to an existing job from the Authorize dialog. From the **In Progress** list view, you can add selected strings to a job by selecting **Add to Job** from the **Actions** menu: 

A string can only be added to one Job per language. If you try to add a string which is already in a Job to a new Job for the same language, you will see an error message.

Only Authorized strings can be added to Jobs. If you try to add a string to a Job for a language that string isn't authorized in, you will see an error message.

## Edit Jobs

Because priorities constantly change, Jobs gives you the ability to add or remove content at any time, but also change due dates:

### Add or Remove translations from a job

**(1)** Go to **Content>Translations** and select In Progress.

**(2)** Select the translations you would like to remove or add to a job

**(3)** Select **Add to Job** or **Remove from Job** in the Actions drop-down menu

![](/hc/en-us/article_attachments/202957857/Smartling___Translations_Management.png)

### Edit details and due-dates

**(1)** Go to **Content > Jobs**.

**(2)** Click the **Actions** menu for a job and select **Edit Details.**

![](/hc/en-us/article_attachments/202957887/Smartling___Translation_jobs.png)

### Archive Jobs

When a job is archived, you will not see it in the list of jobs.  A translation can continue even if you archive a job that it was added to.  Archived jobs are not listed in the Translation lists.

**(1)** Go to **Content > Jobs**.

**(2)** Click the **Actions** menu for a job and select **Archive**.

![](/hc/en-us/article_attachments/202957917/Smartling___Translation_jobs.png)

To view archived jobs check **Show Archived Jobs** in the search options.

![](/hc/en-us/article_attachments/202957927/Smartling___Translation_jobs.png)

## View Fuzzy Match Estimates for a Job

You can generate [Fuzzy Match Estimates]() for the content of a job.

**(1)** Go to **Content > Jobs**

**(2)** Click the **Actions** menu for a job and select **Fuzzy Match Report**. Reports can be viewed in a lightbox within the **Jobs** window or from **Content > Fuzzy Estimates**. Estimates are kept in the dashboard for sixty days.

![](/hc/en-us/article_attachments/202957967/Smartling___Translation_jobs.png)  

## View Progress for a Job

**(1)** From the Job's dropdown menu, select  **View Details**.

**(2)** Click **Workflow Progress** to display the number of strings at each workflow step for each language.

![](/hc/en-us/article_attachments/205667037/Smartling___Jobs.png)

