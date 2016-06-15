---
layout: article
title: Create and Manage Linguistic Packages
draft: true
Applies to:
  GDN: true
  Application-Resource-Files: true
  CMS-Connectors: true
edition: Express
redirect-url: /hc/en-us/articles/21801453
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


## Create a New Linguistic Package:

**1)** Navigate to **Assets &gt; Linguistic Packages** and click **Create Package.**

![](/uploads/versions/smartling___linguistic_assets---x----1259-702x---.png)

**2)** Name your new Package, select your source and target languages and write a short description of your package.

![](/uploads/versions/smartling___linguistic_assets-1---x----598-454x---.png)

**3)** Set the following required assets:

* **Leverage Configuration** - Determines which sources the project will read from to match new strings to previously translated strings. You can select only one Leverage Configuration.
* **Translation Memory** - Smartling Translation Memory where saved translations in the project will be stored. You can select only one Translation Memory. If you want the project to leverage from its own previous translations, select **Yes**. This will cause your selected Translation Memory to be added to your selected Leverage Configuration at the lowest priority and may affect matching in other projects which use this Leverage Configuration. You may want to revisit your Leverage Configuration after your Linguistic Package has been created.
* **Glossaries** - Glossaries store key terms relevant to your brand, including definitions and translations. Glossaries are available to Translation Resources in the Translation Interface and help to keep translations of your key terms consistent. See Glossary for more details.


![](/uploads/versions/smartling___linguistic_assets-2---x----597-501x---.png)

**4)** Select one or more Style Guides to include in your Linguistic Package. Style Guides are optional.

![](/uploads/versions/smartling___linguistic_assets-3---x----595-405x---.png)

**5)** Review the contents of your new Linguistic Package. You can go back to a previous tab to make changes or click **Create Package**.

![](/uploads/versions/smartling___linguistic_assets-4---x----596-663x---.png)

## Assign a Linguistic Package:

You can assign a Linguistic Package to any number of Smartling Projects.

**1)** From **Assets &gt; Linguistic Packages** click the name of the Linguistic Package you want to assign.

![](/uploads/versions/smartling___linguistic_assets-5---x----1259-702x---.png)

**2)** Select one or more projects. If you have a lot of projects, typing the first few letters of the project name will narrow your selection. Click **Assign Package**.

![](/uploads/versions/smartling___linguistic_assets-6---x----1123-654x---.png)

**Note:** A project can have only one Linguistic Package assigned at once. Assigning a Package to a project that already has a Linguistic Package assigned will overwrite the original assignment.

## Edit a Linguistic Package

At any time, you can edit the contents of a Linguistic Package. Any changes you make will be reflected in all projects that have that Package assigned.

**1)**From the summary page for the package, click **Edit Package**.

**2)**Edit the Package Details, Required Assets and Optional Assets in the edit view. When you're ready, click **Save Changes**.

![](/uploads/versions/smartling___linguistic_assets-7---x----594-484x---.png)

## Check Where Assets are Assigned

The Asset page for any Translation Memory, Linguistic Package or Glossary shows a link to all Linguistic Packages where the Asset is assigned. Just click the link under **Active Packages**.

![](/uploads/versions/smartling___linguistic_assets-8---x----1257-377x---.png)

## Check where Linguistic Packages are assigned

The Asset page for any Linguistic Package shows a link to all Smartling Projects the package is assigned to. Click the link under **Active Package** and click the name of any project in the list to navigate to it.

![](/uploads/versions/smartling___linguistic_assets_and_slack---x----1235-661x---.png)