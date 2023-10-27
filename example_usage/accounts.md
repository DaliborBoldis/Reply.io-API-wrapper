# Accounts Module

The Accounts module in Reply.io API JavaScript SDK allows you to manage and retrieve information related to email accounts.

## Setup

First, require the **Accounts** class and instantiate it with your API key.

```js
const Accounts = require("../replyio_api/accounts");
const apiKey = "your-actual-API-key"; // Replace with your actual API key
const accounts = new Accounts(apiKey);
```

## API Methods

**GET List of Email Accounts**

Retrieve a list of email accounts associated with your API key.

```js
accounts.GetListOfEmailAccounts()
.then((data) => console.log("List of email accounts:", data))
.catch((error) => console.error(error));
```

**GET Email Account Shared Page**

Fetch the shared page URL for the current user.

```js
accounts.GetEmailAccountSharedPage()
.then((data) => console.log("Shared page URL for current user:", data))
.catch((error) => console.error(error));
```
