---
title: Refresh Authentication
categories:
  - authentication
layout: v2endpoint
endpoint_url: /auth-api/v2/authenticate/refresh
method: POST
request:
  json_markdown: |
    ~~~json
    {
        "refreshToken": "gwvnhsaiwtvblovagroolsqgrrlymz" 
    }
    ~~~
  parameters:
    - title: refreshToken
      type: string
      required: true
      description_markdown:
        Refresh token provided in the [Authenticate](/developers/api/v2/authentication/authenticate/) response.

response:
  json_markdown: |
    ~~~json
    {
      "response": {
        "code": "SUCCESS",
        "data": {
          "accessToken": "eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmYmExOTE5MC1lM2Q3LTQ3M2ItOGIzMC01NDg3MTNjMWNkMGUiLCJleHAiOjE0Nzc0NTE0NTUsIm5iZiI6MCwiaWF0IjoxNDc3NDUwOTc1LCJpc3MiOiJodHRwczovL3Nzby5zbWFydGxpbmcuY29tL2F1dGgvcmVhbG1zL1NtYXJ0bGluZyIsImF1ZCI6ImF1dGhlbnRpY2F0aW9uLXNlcnZpY2UiLCJzdWIiOiJlZjcxNTgzYy0xODZiLTQyZmUtOWU4OS0wYTI1ZDVjMjM0MWYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhdXRoZW50aWNhdGlvbi1zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6IjVmYTEyNzczLTBkZjAtNDExMS04ZGY3LTZhYmNkNDQ4Njk4OSIsImNsaWVudF9zZXNzaW9uIjoiNDJiMmNiY2UtOTNiMi00ODM0LTg3OGYtMmE5ZjI0ZjZhMTA1IiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJPTEVfQVBJX1VTRVIiLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInVpZCI6IjAwNzg4NmI2NjgxMyIsIm5hbWUiOiJQb3N0bWFuIFRva2VuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpOmdmdm5oaGFpd3R2YmxmdmFncm9vbHNxZ3hycHlteiIsImVtYWlsIjoiYXBpVXNlcithY2NvdW50KzRiYzVjZWZhQHNtYXJ0bGluZy5jb20ifQ.e5z7taFefXx87TOhte2asn6b-GLb0mweJW6fCyxlhLXw_4Cf_k4R_4iEo2ZuSS9-6s__C3M5I__q77MtHBQoJjML8-rrvA4-rdlWu2XC5IraKX-2XmZnmWxYTZUvZ0Y82dC_Kdgv7cSaLds5hAEa1MfsC_tTsb0XR_gCCEcOWqg",
          "refreshToken": "eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NjQzOThmNi03MTJlLTQyZDItOGVjNC1kNWUwMzEzZTgxZjUiLCJleHAiOjE0Nzc0NTQ2MzUsIm5iZiI6MCwiaWF0IjoxNDc3NDUwOTc1LCJpc3MiOiJodHRwczovL3Nzby5zbWFydGxpbmcuY29tL2F1dGgvcmVhbG1zL1NtYXJ0bGluZyIsInN1YiI6ImVmNzE1ODNjLTE4NmItNDJmZS05ZTg5LTBhMjVkNWMyMzQxZiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJhdXRoZW50aWNhdGlvbi1zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6IjVmYTEyNzczLTBkZjAtNDExMS04ZGY3LTZhYmNkNDQ4Njk4OSIsImNsaWVudF9zZXNzaW9uIjoiNDJiMmNiY2UtOTNiMi00ODM0LTg3OGYtMmE5ZjI0ZjZhMTA1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJPTEVfQVBJX1VTRVIiLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX19.fgWAVI66vO7UK9DfMEf8Azna-mVECT9eSMYe3Rr6Bf73Ux56UO-X2YZGgHn8mzfWFi9LPFDZjp1kossmePp_cG2ZAqDdtZ_zWqp1HCipz955mNLAPITVrpyrAAEqCFO59qrAaGDd6Yi9gFhZNKwe4xigSdOQ2szXTvKAdqu7vKc",
          "expiresIn": 480,
          "refreshExpiresIn": 3660,
          "tokenType": "Bearer"
        }
      }
    }
    ~~~
  parameters:
    - title: accessToken
      type: string
      description_markdown: Token to authenticate all other API requests.
    - title: expiresIn
      type: string
      description_markdown: Number of seconds until access token expires.
    - title: refreshToken
      type: string
      description_markdown: Token for a Refresh Authentication request.
    - title: refreshExpiresIn
      type: string
      description_markdown: Number of seconds until refresh token expires.
    - title: tokenType
      type: string
      description_markdown: Type of access token being returned. Currently, this will always be `Bearer`.
examples:
  - title: Curl
    code_markdown: |
      ~~~curl
      curl -X POST -H "Content-Type: application/json" -d '{
          "refreshToken": "{token}"
      }' 'https://api.smartling.com/auth-api/v2/authenticate/refresh'
      ~~~
    description_markdown:
---

Returns a renewed access token that can be attached to the header of any API request to authenticate the user, and a refresh token which can be used to obtain a new access token. See [Authentication](/developers/api/v2/authentication/) for more information.