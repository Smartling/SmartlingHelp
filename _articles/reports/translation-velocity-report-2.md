---
layout: article
title: Translation Velocity Report
---

This report allows a user to see how much time, on average, a word or a string spends in each workflow step from content authorization to publish

The time of a string leaving a workflow step is compared to the string entering the same workflow step and a time-in-step calculated. Accordingly, the per-word velocity of the string in that step is the time spent in step, divided by the number of words in the string. Time spent in a step is cumulative for every instance a string is moved back into a workflow step (via rejection, for example). This velocity at a string level  is then aggregated across strings for reporting, as needed, weighted by the number of words in each string.



