---
title: Authentication
category: authentication
layout: v2section
endpoints:
  - title: Authenticate
  - title: Refresh Authentication
---


Every call to a v2 API endpoint must include an access token in the header. Access tokens are acquired by calling the Authentication API, using your User Identifier and Token Secret.

## Obtain a User ID and Token Secret

**1)** Navigate to the API section of the Dashboard, switch to the v2.0 tab, click **Create Token** and enter a name.

Account tokens provide access to any project in the account. Project tokens will only give access to a single project.

![](/uploads/versions/smartling---account-dashboard--hotels----x----1097-685x---.png)

**2)** Once the token is created, record your User ID and Token Secret for use in Authentication requests. **Note:** The Token Secret is only available when the token is first created so make sure you record it immediately.

![](/uploads/versions/smartling---account-dashboard--hotels----x----1269-707x---.png)

Authentication header format is `Authorization: Bearer {token}`

Access tokens expire every 5 minutes, but you can get a new token by calling the Refresh Authentication API, using the refresh token returned by a successful Authentication. Refresh tokens are valid for 1 hour. You can refresh your Authentication for up to 24 hours before you need to log in again with an Authenticate request.

There are two main ways to handle Oauth authentication, depending on how you’re using Smartling’s API. The first way is to call the Authentication API before any other API call and pass the access token directly. This is best for intermittent API access.

If you’re integrating Smartling into an application or making a high number of calls, you may want to maintain a current access token as a variable, updating it regularly via the Refresh Authentication API.