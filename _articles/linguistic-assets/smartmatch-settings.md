---
layout: article
title: SmartMatch Settings
---


SmartMatch is a process that occurs every time you add new content into Smartling. It compares new strings against existing translations in your&nbsp;[Leverage Configuration](/knowledge-base/articles/translation-memory/){: .cc-active}&nbsp;to automatically apply translations to strings you've translated before.

SmartMatch has six levels of exactness for a match and allows you to select a target workflow step for each level. Strings are SmartMatched, will be added to the workflow steps you have selected. Settings for more exact matches take precedence. You can choose the following workflow step options for SmartMatched content:

* **Published** - SmartMatched strings go directly to Published.
* **First Revision Step (Review)** - SmartMatched strings go to the first revision step where the [Primary Action](/knowledge-base/articles/create-and-customize-a-workflow/#customize-a-workflow){: .cc-active} is set to 'Review'.
* **First Revision Step (Edit)** - SmartMatched strings go to the first revision step where the [Primary Action](/knowledge-base/articles/create-and-customize-a-workflow/#customize-a-workflow){: .cc-active} is set to 'Edit'.
* **First Revision Step (Edit, Review or Holding)** - SmartMatched strings go to the first revision step regardless of the Primary Action.
* **Disabled** - SmartMatch is not applied for this match setting.


This allows you to control how carefully you check SmartMatched strings. For example, you may wish to send complete matches straight to Published, but send matches with different whitespace or HTML tags to a revision step to be checked. You also have the option of sending SmartMatched strings to the first revision step and pre-publish them. This gets the translations live on your site, or present in translated file downloads, straight away, but gives you the opportunity to review before making them final.

SmartMatch settings are managed as part of a [Leverage Configuration](/knowledge-base/articles/leverage-configuration/){: .cc-active}.

You can configure SmartMatch settings at six levels of certainty:

![medium](/uploads/versions/smartling___linguistic_assets-27---x----576-576x---.png)

## Smartmatch Levels

### 100% match with variants matching

The entire string, including text, whitespace, HTML tags and variant metadata matches.

### 100% match without variants matching

The entire content of the string, including text, whitespace & HTML tags matches, but the variant metadata is different.

### 100% match without whitespace matching

The text of the strings matches, but there may be whitespace differences.

### 100% match without markup matching

The text of the string matches, but may have different HTML markup tags.

### 100% match ignoring case

The text of the string matches, but case may be different.

### Match from any combination of the above

The text of the string matches, but variant metadata, whitespace, markup and case may be different.

## The SmartMatch Report

To access your SmartMatch Report go to **Content**&nbsp;&gt;&nbsp;**SmartMatch**. To run SmartMatch manually, select&nbsp;**Re-Match All Strings**.

![](/uploads/versions/smartling___smartmatch_report-1---x----1313-621x---.png)