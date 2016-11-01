---
layout: article
title: Cost Estimates and Rates
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
edition:
redirect-url:
wistia:
  video: false
  id:
read-first:
  include: false
  sections:
    - section
  articles:
    - article
  faqs:
    - faq
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
  faqs:
    - faq
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

![](/hc/en-us/article_attachments/215812048/Smartling___Fuzzy_Match_Estimate_Report__Cost_Estimates_test_project_.png)

<div class="intro">
This feature is currently in beta and we are rolling it out to customers gradually. If you would like Cost Estimates enabled for your account, contact your Smartling success manager.  
</div>

To help you plan and budget your translation work, Smartling will now automatically include a Cost Estimate when Account Owners and Project Managers run Fuzzy Match Estimate reports for a job, or for unauthorized content. To calculate Cost Estimates, Smartling let's you enter the rates you pay your Agencies and Translation Resources.  If you are purchasing translation services from Smartling the rates will be configured automatically.

The most effective way to use Cost Estimates is to put the content you want to estimate into a job. The best time to run cost estimates is before translation begins. Once a string has a translation it will not be included in estimates.

It is important to remember that your final cost can differ from your estimates. They are based on known rates for translation resources with permission to work on your content at the time the estimate is run. There are many variables that can effect the final cost being different than your estimate; they include:

*   Paying your resources on different rates or changing the rates
*   Using different resources 
*   The translation memory changing and affecting the fuzzy match leverage that is available at the actual time of translation
*   Authorizing and translating for different workflows 


## Creating Rate Cards

To create cost estimates, you will need to record the rates you pay your translators by creating rate cards for every Translation Resource or Agency.  Each rate card covers one language pair.

You can create and manage Rate Cards from the Team page by clicking on any Translation Resource, Translation Resource Manager or Agency and navigating to the **Rates** tab.  Rates set for agencies will apply to all work done by the agency.

![](/hc/en-us/article_attachments/215812028/Smartling___Team__Estimates_and_Rates_Test_Account_.png)

There are four components to a rate card:

![](/hc/en-us/article_attachments/215812068/Smartling___Team__Estimates_and_Rates_Test_Account_.png)

*   **Language Pair:** The source and target language for the rate card, for example English (US) to Spanish (Spain).
*   **Currency:** The currency in which you pay the translator. Currently we support US dollars, British Pounds, Euro and Japanese Yen.
*   **Content Type:** Smartling supports different rates for translating different types of content. Content Type is set up for each workflow. Currently supported content types are ‘General’, ‘Legal’ and ‘Marketing’.
*   **Rates:** Each rate card can contain rates for translation, editing and review Workflow steps. You can set rates ‘per word’ or ‘per hour’, or note that the translator is ‘non-payable’ for the Workflow step. If you set up a ‘per hour’ rate, you will be asked to provide the average words per hour for the translator. You do not need to set up rates for all three Workflow steps.

## Viewing Cost Estimates

Cost Estimates are displayed as a supplement to Smartling’s existing Fuzzy Match Estimates. You can see Cost Estimates when you run a Fuzzy Match Estimate for any job by selecting **Fuzzy Match Estimates** from the job card, or when you run an estimate for all unauthorized content from **Content > Fuzzy Estimates**.

> Cost Estimates will only be included if the estimate is run by an Account Owner or Project Manager. Translation Resources and Agencies will continue to see the regular Fuzzy Match Estimate report.

If there are no translation resources with rate cards set up for a language, step or content type, we show a warning.

![](/hc/en-us/article_attachments/215812128/Smartling___Jobs__Cost_Estimates_test_project_.png)

![](/hc/en-us/article_attachments/215983147/Smartling___Fuzzy_Match_Estimate_Report__Cost_Estimates_test_project_.png)

The **Estimated Cost** column of the Fuzzy Match estimates report may reflect a range of possible costs, since different translation resources with different rates may have permission to work on a string. Estimates are based on the ‘Weighted Words’ count, which adjusts for Fuzzy Match tiers and excludes words that will be SmartMatched.  _Currently strings that are expected to Smartmatch will not be included in the estimate cost_.  If you send your SmartMatched words to an editing step instead of directly to Published your costs will likely be higher than estimated.

**Example:** You run an estimate for a job with 1000 weighted words. The Workflow for the job contains only a single translation step. Two translators have permission to work on the job. One has a rate of $0.10/word, the other has a rate of $0.15/word. The Estimated Cost for the job will be $100.00 - $150.00.

> Estimates can include only one currency at a time. If you pay your translators in more than one currency, you should estimate the work for each currency separately. For example, if you pay your Spanish translators in US Dollars and your Japanese translators in Yen, you should create one job for your Spanish translations and another for Japanese, so you can get a full estimate for both languages.