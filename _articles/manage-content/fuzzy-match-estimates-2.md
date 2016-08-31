---
layout: article
title: Fuzzy Match Estimates
draft: false
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
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


When Smartling uses existing Translation Memory (TM) to match source content with existing translations in the TM, it will often find word matches that are less than 100% identical. These are called 'fuzzy matches' and are represented by the percentage to which they match (typical fuzzy match percentages are 50-99%). Translators can see these fuzzy matches in the Translation interface and choose to edit them instead of translating from scratch.

Smartling rounds match percentages down to ensure that translators understand that only completely identical matches appear as 100%. For example, a match of 99.8% will appear as 99% in the Translation Interface. 100% matches are typically prior translations of the same string or translations of alternate versions of the same source string when variants exist.

The Smartling Fuzzy Match tool allows Smartling Administrators to create profiles for fuzzy matches by defining percentage matches to the existing Translation Memory (TM), and then apply these profiles to specific locales. Contact your Customer Service Manager if you want to discuss creating a custom Fuzzy Match profile for your account.

Account Owners and Agency Account Owners can generate a fuzzy match estimate for a specific locale to help estimate how much it will cost to translate new content. [Translation Resources can also create estimates](/hc/en-us/articles/209449587) for the content in their translation queue.

Fuzzy match estimates display the number of words for the profile at the time you run the report and report on content which is approved but not yet Translated.

**Note:**Fuzzy match estimates are based on comparisons with all content in your TM. This includes translations that have been saved but not yet published.

**To view and manage Fuzzy Match Estimates:**

![](/uploads/versions/fuzzy_match_estimate_report1---x----1228-737x---.png)

**1)**Navigate to **Content &gt; Fuzzy Estimates**.

**2)** Run a new report by clicking&lt; **Create New Estimates**. Reports may take a few minutes to run and will be added to the reports table when complete. Fuzzy Match Estimates are kept in the dashboard for 60 days. You can run a report [just for the content in a specific Job](/hc/en-us/articles/202670453#Fuzzy) from the **Jobs** page. You can also run a report for any selection of strings from the List View. See below for details.

**3)** View any past reports by clicking **Show/Hide**, or click **Download** to download an estimate as a CSV file.

**4)** Add a label to any estimate by clicking **Add Label** (appears on mouseover) in the **Label** column. Fuzzy Estimates created for a specific Job have the Job name as their label.

**To create a Fuzzy Estimate from the List View:**

**1)**Navigate to **Content&gt;Translation** and select either **In Progress** or **Awaiting Authorization.**

**2)** [Search or filter the List View](/hc/en-us/articles/203416736) to find your content, select the strings you want included in the report and, from the **Actions** menu, select either **Fuzzy Estimate**, or **Fuzzy Estimate All** Running **Fuzzy Estimate All** will create an estimate for all strings matching your current filter settings.

![](/uploads/versions/fuzzyestimates2---x----1226-547x---.png)



**3)**Select your locales and click **Create New Estimate**. The will be displayed in the dialogue when complete. Note that the estimate does not record the full list of strings you selected, so if you want to refer to the estimate again, it's a good idea to create a label, to remind you of the content.

![](/uploads/versions/fuzzyestimates3---x----877-277x---.png)

**Note:**If you run a Fuzzy Estimate on partially authorized content, the report will include only locales that have not yet been authorized.