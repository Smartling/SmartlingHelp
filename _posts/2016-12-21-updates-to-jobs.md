---
title: Updates to Jobs
layout: blogpost
blog-author: Katya Kameneva
categories:
  - product-update
---


We’re rolling out an update to how our Jobs feature works, to help you better organize your translation work and keep relevant content together as it moves through the translation process.

Job is becoming more defined package of content with the start and end date. After job is completed you can't add more content to it. In the future releases we will also stop allowing adding more content to the job once it is authorized for translation.

## Changes to Jobs functionality

When we release the new version of Jobs to your account, you will notice some changes:

* We no longer distinguish between ‘strings’ jobs and ‘files’ jobs. You can now create jobs from new files by dragging a file onto the Jobs page. This functionality was previously only available as part of the Requester Portal feature.

* If you add a file that is already uploaded to Smartling to a job, the file will be overwritten. Any new content will be added to the job.

* Unauthorized strings can now be added to a job.

* Each job is authorized when it is ready to begin translation. Authorizing a job authorizes all strings in the job. Once any job is authorized, no further content or languages can be added, but translation of individual files or languages within a job can be cancelled. Cancelling removes files from a job, strings are returned to your Authorization queue.

* A string can now only be a part of one job at a time. When you add strings to a job you will need to choose what you want to do if any of the selected strings are already in a job. Checking **Move to selected job** will force a move. Leaving it unchecked will not move any strings that are already part of a job.

## Lifecycle of a job

**1)** Create a new job from the **Jobs** page.

![large](/uploads/versions/smartling---jobs--katya-jobs2----x----577-349x---.png)

If you’re translating files, add files by dragging them onto the Job dialog. Give the job a due date and description, and select the languages you want to translate. Click **Create**.

![large](/uploads/versions/smartling---jobs--katya-jobs2----x----574-601x---.png)

<div class="info">As before, you can also create a new job when authorizing strings from the List View.</div>

**2)** For a GDN project, you add strings to a job as before, select the strings in the list view and choose **Add to job** from the **Actions** menu. You can also add strings to a job this way in a files project.

**3)** When you have finished adding content, go to the **Jobs** page and click **Authorize**.

![large](/uploads/versions/smartling---jobs--katya-jobs2----x----581-358x---.png)

Select a workflow for each language in the job.

![large](/uploads/versions/smartling---jobs--katya-jobs2----x----571-356x---.png)

**4)** The content in the Job will be sent to the first workflow step for each language. At any time you can click **View Details** on the job card to see a breakdown of progress in the job by Language, Files or Workflows.

![large](/uploads/versions/smartling---jobs--katya-jobs2----x----574-438x---.png)

From the job card, you can also run a Fuzzy Estimate on the job, download the job files or cancel the job.

![](/uploads/versions/smartling---jobs--katya-jobs2----x----309-288x---.png)