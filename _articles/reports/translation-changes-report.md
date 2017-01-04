---
layout: article
title: Translation Changes Report
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
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
---

The goal of this report is to show how much content is changing in each step of a workflow

Using the same methodology used to calculated TM matches (Levenshtein Distance), a string leaving a workflow step is compared to the string entering the same workflow step and a % difference calculated. Accordingly, a string can be expected to have at least 100% change in the translation workflow step (unless already translated in and moved from another workflow). Further, % changes are cumulative for every time a string is moved back into a workflow step (via rejection, for example). This % difference at a string level  is then aggregated across strings for reporting, as needed, weighted by the number of words in each string.



