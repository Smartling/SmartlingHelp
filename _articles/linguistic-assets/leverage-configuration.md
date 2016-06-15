---
layout: article
title: Leverage Configuration
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
  others:
    - link:
      text:
further-reading:
  include: false
  sections:
    - section
  articles:
    - article
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

**What is Leverage?**

![](/hc/en-us/article_attachments/207610127/TM_Diagram.png)

In a Smartling Project, 'Leverage' refers to re-using existing translations from a source (either a Translation Memory or another Smartling Project). These existing translations can be reused in two ways:

**1)** SmartMatch - When you upload new source strings, either in a file or through the GDN, Smartling compares these source strings against existing strings in your leverage source. If Smartling finds a matching string (how strictly strings are compared can be adjusted in your SmartMatch settings) which is already translated, the translation is automatically applied to the new string. The string is then either published automatically, or advanced to a revision step, depending on your SmartMatch settings.

**2)** If there is no exact match for the string, but similar strings have been translated in the past, these near matches are available to Translators when working in the Translation Interface. Looking at these near matches helps Translators keep translations consistent and avoid unnecessary retranslation.

**Leverage Configurations**

Your Leverage Configuration determines which Projects and Translation Memories Smartling will look at when attempting to match strings and reuse existing translations, and the order in which each of these sources is considered.

A Leverage Configuration is made up of any number of Source Records. A source record can be:

*   A Smartling Translation Memory
*   A [Source Group](#SourceGroups)
*   An imported TMX file
*   A Smartling Project

If your Source is a Project, Smartling will match new strings against translated strings in that project. If it is a Smartling Translation Memory, TMX file or Group, Smartling will match new strings against strings in the Translation Memory.

A Leverage Configuration is assigned to a project via a Linguistic Package. See [Create and Assign Linguistic Packages](/hc/en-us/articles/218014537) for details.

**Set up a New Leverage Configuration**

**1)** From **Assets > Leverage**, click **Create Configuration**.

**2)** Give a name, Source Language and Description and click **Create Configuration.**

![](/hc/en-us/article_attachments/206750297/Smartling___Linguistic_Assets.png)

**3)** Find your new Configuration in the list and click it's name.

![](/hc/en-us/article_attachments/206750477/Smartling___Linguistic_Assets.png)

**4)** Click **Add Source** and choose a Project or Translation Memory to create a source record.

![](/hc/en-us/article_attachments/206867077/Smartling___Linguistic_Assets.png)

**5)** For each of your sources, configure:

*   **Languages** - Sets the languages for which Smartling will try to match translations. There are three ways to set up languages for a source

    *   **All** - will look for matches for all languages
    *   **Single Language** - will look for matches only for a particular language (you can set up multiple single language records for the same Source).  
    ![](/hc/en-us/article_attachments/208340068/Smartling___Linguistic_Assets.png)
    *   **Cross-Country Leverage** - will look for matches in a particular language in the Source but apply them to strings in a different locale. For example, you can set up a Source to use translations from a primary language and apply them to a secondary language. For example, you can apply your French (France) translations to your French (Canada) strings. To set up Cross-Country leverage for a source, first select your primary language, then click the **Gears** and select your secondary language.  
    ![](/hc/en-us/article_attachments/208360487/Smartling___Linguistic_Assets.png)  
    ![](/hc/en-us/article_attachments/208340588/Smartling___Linguistic_Assets.png)  

    *   **Penalty** - Smartling applies a percentage to each match. This information is displayed to Translators in the Translation Interface. Setting a penalty of 1-5% decreases the percentage of each match. Setting any penalty will prevent SmartMatch from leveraging translations in the Source, since SmartMatch only applies to 100% matches.

Click **Save** at the end of each Row. If you do not save the Record, it will be lost if you navigate away from the page.

**6)** SmartMatch will initially be disabled for each source. To enable, click disabled and configure at least one SmartMatch setting. See [SmartMatch]() for details. SmartMatched strings do not count towards your Processed Words count, regardless of leverage source.

![](/hc/en-us/article_attachments/206862817/Smartling___Linguistic_Assets.png)

##Setting Priority

You can move your Sources up and down in the list to set your priority order. Sources higher on the list will be considered before lower sources when looking for matches for new strings. Priority is especially important for SmartMatch, since as soon as a match is found, it is applied to the string, so if you have a better translation in a lower priority source, it won't be SmartMatched. As a general rule, set your most recent and highest quality sources at the top of your list.

![](/hc/en-us/article_attachments/206862897/Smartling___Linguistic_Assets.png)

##Source Groups

Any number of Sources can be grouped together and added to a leverage configuration as a single unit. To manage source groups:

**(1)** Click the **Source Group** tab and either select an existing source group or click **Create Group** and give a name and description.

![](/hc/en-us/article_attachments/207239698/Smartling___Linguistic_Assets.png)

**(2)** Add as many sources to your group as you wish, or remove sources you no longer want in the group.

![](/hc/en-us/article_attachments/207239668/Smartling___Linguistic_Assets.png)