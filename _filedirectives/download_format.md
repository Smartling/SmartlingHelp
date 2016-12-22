---
directive_id: 'download_format'
title: 'download_format'
values_markdown: |
  `NONE`(default) OR `ESCAPE_UNICODE`
description_markdown: |
  `ESCAPE_UNICODE` indicates that all non-Latin1 (not in range 0000 - 007F of unicode) symbols after this comment should be escaped by a `\uXXXX` escaping expression in the process of a file download.
examples:
  - type: generic
    code_single_line: 'smartling.download_format = ESCAPE_UNICODE'
    description_markdown: |
      `Hello?` will be escaped as `Hello\u1D25` on download.        
---