---
layout: article
title: Jobs
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url: /hc/en-us/articles/202670453
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
  reviewed: true
---

We're rolling out a major update to how our Jobs feature works, to help you better organize your translation work and keep relevant content together as it moves through the translation process.

When we release the new version of Jobs to your account, you will notice some changes:

* We no longer distinguish between 'strings' jobs and 'files' jobs. You can still create jobs from new files by dragging a file onto the Jobs page.

* Unauthorized strings can now be added to a job.

* Each job is authorized when it is ready to begin translation. Authorizing a job authorizes all strings in the job. Once any job is authorized, no further content or languages can be added, but translation of individual files or languages within a job can be cancelled. Cancelling removes files from a job, strings are returned to your Authorization queue.

* Once a job is authorized, it's content stays together throughout the translation workflow for each language. For example, if you have an editing step, strings will not advance to the editing step until all strings have been translated for a given language.

* A string can now only be a part of one job at a time. When you add strings to a job you will need to choose what you want to do if any of the selected strings are already in a job. Checking **Move to selected job** will force a move. Leaving it unchecked will not move any strings that are already part of a job.


## Lifecycle of a job

**1)** Create a new job from the **Jobs** page. Add if you're translating files, add files by dragging them onto the Job dialog. Give the job a due date and description, and select the languages you want to translate. Click **Create**.

**2)** For a GDN project, or if you want to add additional strings to the job, select the strings in the list view and choose **Add to job** from the **Actions** menu.

**3)** When you have finished adding content, go to the **Jobs** page and click **Authorize**.


Select a workflow for each language in the job.

**4)** The content in the Job will be sent to the first workflow step for each language. At any time you can click **View Details** on the job card to see a breakdown of progress in the job by Language, Files or Workflows.


From the job card, you can also run a Fuzzy Estimate on the job, download the job files or cancel the job.