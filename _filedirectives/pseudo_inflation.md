---
directive_id: 'pseudo_inflation'
title: 'pseudo_inflation'
values_markdown: |
  _integer_ - Accepted values are `0` - `100`
description_markdown: |
  Sets the percentage by which original strings are inflated when downloading [pseudo translations](/knowledge-base/articles/pseudo-articles/). If this directive is not set, pseudo translations are 30 percent longer than the original strings.'
  
examples:
    - type: generic
      code_single_line: 'smartling.pseudo_inflation = 80'
      description_markdown: Downloaded pseudo translations will increase the length of original strings by 80 percent.
        
---