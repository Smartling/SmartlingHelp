---
layout: article
title: New Feature Releases and Bug Fixes
wistia:
  video: false
  id:
---


## Apr 13, 2017

* Fixed inability to save strings with only placeholders/ tags/ insertables (no translatable text)
* Improved autoscrolling with exceptionally large segments
* Corrected "jumping" of segments- translators loosing visibility to current segment when it scrolls out of view

## Apr 12, 2017

* Improved handling of "%" in filter search
* Fixed locked strings for translators, even when they are in the same workflow step
* Fixed 100% match pre-population (was inserting string-level matches in stead of segment-level matches)
* Corrected conversion of nbsp

## Apr 11, 2017

* Improved TM search for special characters
* Improved TM search to not include tags in search input
* Fixed regular text getting inserted as tags in insert TM
* Corrected certain translators only being able to translate in CAPS

## Apr 10, 2017

* Fixed typo on Save String confirmation modal
* Fixed error with not being able to save strings with reordered tags

## Apr 7, 2017

* Fixed performance issues for Microsoft Edge
* Fixed Issue count bubble not changing when using the Issue resolved toggle
* Resolved translators getting errors when fetching workflow data for a string outside their workflow step
* Fixed adjacent placeholders/ tags not being tokenized appropriately
* Fixed translators not being able to insert characters D and M
* Added keyboard shortcut hover-over for Restore Segmentation command
* ***New feature: Link to new features/ bug fixes added to new CAT tool under Help***

## Apr 6, 2017

* Autoscroll jitter for Video translation fixed

## Apr 5, 2017

* Quality check settings improved for business documents
* Fixed progress bar to show correct progress for Edit/ Proofread step
* Decoupled Reject action from Confirm action across all workflow steps
* Restricted Confirm action to only be available in post-translation and admin approval steps
* Fixed error thrown when glossary shortcut is used when no glossary exists for linguistic package
* Fixed non-functioning Custom status for string filters

## Apr 4, 2017

* Improved memory management for context
* Formatted TM results to be the same as Glossary search results
* Reviewer can submit content, even if it is locked from editing
* ***New feature: 100% TM match pre-population enabled***
* Fixed incorrect focus on string on page load, if CAT tool loaded from any point other than list view

## Apr 3, 2017

* Fixed context not loading when user clicks on source
* Resolved spellcheck not functioning for multiple languages, including Hungarian
* Fixed merge functionality for document translation
* Fixed only saved strings to be submitted on Submit action (previously also Submitting Draft strings)
* Improved tag insertion/ resolved tag inconsistency error performance
* ***New feature: Enabled new CAT tool for admin approval step***
* Improved quality check warning to show the highest severity associated with a string

## Mar 31, 2017

* Improved shortcut hover-overs: Now show if shortcut is not set and needs to be updated
* Improved double-spaced false positive errors in certain connector projects

## Mar 30, 2017

* Fixed TM source showing “No source specified”
* Renamed double-space quality check to whitespace check, to account for Asian languages
* Fixed broken context when image tag appears in source in word documents
* ***New feature: Launched shortcut for Save and Next String***
* ***New feature: Enabled full emoji support in new CAT tool***
* Corrected in-editor spacing errors to account for target locale

## Mar 29, 2017

* Corrected validation for issue type presence on issue create: fixed “Creating Issue” message
* Improved string loading behavior in the presence of large glossary updates
* Fixed problem inserting “&lt;&lt;” due to conflict with keyboard shortcuts
* ***New feature: Made language resources insert shortcuts customizable***

## Mar 28, 2017

* Fixed incorrect “missing tags” error message, even when tags inserted properly
* Made string order in CAT tool consistent with string order in List View
* Fixed tag insertion order when source HTML is broken
* Improved handling of &lt;/br&gt; as a special character
* Added source content display to glossary in language resources
* ***New feature: introduced messaging for possible slow performance when list contains large strings***

## Mar 27, 2017

* Fixed video replay restart when video does not start at 00::00::00
* Improved background display of progress with bulk save/ submit

## Mar 25, 2017

* Limited number of language resources available via keyboard shortcut to 10
* Corrected keyboard shortcut actions to use i18n

## Mar 24, 2017

* Fixed default keyboard shortcut inconsistencies between classic and new CAT tool
* Added tooltip hints for copy tags to target
* Improved loading of history and issues panels