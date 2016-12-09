---
layout: article
title: Ruby on Rails Localization
categories:
  - files
dev: true
Applies to:
  GDN: false
  Application-Resource-Files: false
  CMS-Connectors: false
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
  internal-links: true
  images: false
  FAQs: false
  related: false
  reviewed: false
---

## Locale Codes

YAML resources files for Ruby often begin with a language code. For example:

    en:
      string1: 'Hello'
      string2: 'Goodbye'

When these strings are translated by Smartling, they will be returned with the appropriate language code. For example, the French file will be:

    fr:
      string1: 'Bonjour'
      string2: 'Au Revoir'

If you want to return the full Smartling Locale Code in your translated files, alter your source file to match your full source locale code. For example.

    en-US:
      string1: 'Hello'
      string2: 'Goodbye'

translated into French(France), will return:

    fr-FR:
      string1: 'Hello'
      string2: 'Goodbye'

If you wish, locale substitution can be turned off completely using a file directive. This may be desirable if the first key in your yaml file happens to match a language code unintentionally.

## Plurals

Smartling’s translation interface supports plurals according to the [CLDR pluralization rules](http://cldr.unicode.org/index/cldr-spec/plural-rules), which define which plural forms are used in each locale.

Out of the box, Ruby on Rails applications support only the standard English plural forms of One and Other. Translating a YAML file into languages with different plural rules, such as Japanese (‘Other’ only) or Czech (One/Few/Many/Other) may cause errors in your Rails application.

To properly localize into multiple languages supporting different plural forms, you must setup your application to use the I18n pluralization backend and define pluralization rules in your application for each locale.

### Require pluralization backend

**1)**  Create config/initializers/pluralization.rb in your application:

~~~ruby
I18n::Backend::Simple.send:include, I18n::Backend::Pluralization)
~~~
    
**2)**  Create a rule in plurals.rb for each locale in your application. For example, this rule creates four plural forms for Russian: One, Few, Many and Other. **plurals.rb**

~~~ruby
{: ru =>
    {: i18n =>
        {: plural =>
            {: keys => [: one, : few, : many, : other], : rule => lambda
                { | n | n % 10 == 1 && n % 100 != 11 ? : one: [2, 3, 4].include ? (n % 10) && ![12, 13, 14].include ? (n % 100) ? : few : n % 10 == 0 || [5, 6, 7, 8, 9].include ? (n % 10) || [11, 12, 13, 14].include ? (n % 100) ? : many : : other
                }
            }
        }
    }
}
~~~
    
Pluralization rules for most locales are [publicly available on Github](https://github.com/svenfuchs/i18n/blob/master/test/test_data/locales/plurals.rb).

> You may need to edit the locale labels to match the labels used in your application.