---
layout: article
title: Upload and Manage Files
draft: true
Applies to:
  GDN: false
  Application-Resource-Files: true
  CMS-Connectors: false
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


You can upload individual application resource files or bulk upload (multiple files or different file types).

**(1)** Navigate to **Content&gt;Files** and click **Upload File** or drag and drop a file.

![](/uploads/versions/uploadfiles---x----1254-811x---.png)

**(2)** If there is an issue with the file, you may be asked to confirm the upload or provide extra details.

![](/uploads/versions/uploadfiles2---x----771-233x---.png)

Possible issues include:

* File type is ambiguous - the file extension alone may not be enough to determine the file type. For example, Android XML files are parsed differently to Custom XML files. Smartling analyses the file and attempts to determine the type, but you can also set the file type manually.


![](/uploads/versions/uploadfile3---x----772-312x---.png)

* uploadFile with the same name already exists - you have the option to overwrite the existing file or cancel the upload.
* The file type is not supported - upload cannot continue.


**(3)** You can choose to Authorize all strings in the file for some or all languages. Strings will be added to the default workflow for each language. If you chose **I’ll Decide Later**, strings will be added to the **Awaiting Authorization** queue. Check **Don’t ask me again in this project** to make your current selection the default for future uploads.

![](/uploads/versions/uploadfiles4---x----576-261x---.png)

**Note**: You can always change your upload settings for the current project by clicking the gear wheel. These settings affect only files uploaded to the project via the Dashboard.![](/uploads/versions/uploadfile5---x----674-418x---.png)

**Locating Files**

You can use the filter options on the Files page to find the file you need. You can sort the list by File URI or uploaded date, filter for file type or search by keyword.

![](/uploads/versions/uploadfile6---x----1246-744x---.png)

**Managing Files**

Click the arrow next to the source language to download the original file, view the API upload/download commands, delete, rename, or add file instructions.

![](/uploads/versions/uploadingfile7---x----1006-660x---.png)

You can also delete a file by clicking the Trashcan icon that appears on mouseover. If you delete a file with any strings already translated, those strings will become [inactive](/hc/en-us/articles/203587968-Inactive-Strings).

![](/uploads/versions/uploadfile8---x----209-232x---.png)