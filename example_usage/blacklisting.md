# Blacklisting Module

The Blacklisting module in the Reply.io API JavaScript SDK provides functionalities to manage and control blacklisted emails and domains.

## Setup

First, require the Blacklisting class and initialize it with your API key.

```js
const Blacklisting = require("../replyio_api/blacklisting");
const apiKey = "Y9f6yd---dIhjJHflb6"; // Replace with your actual API key
const blacklisting = new Blacklisting(apiKey);
```

## API Methods

**GET List of All Blacklisted**

Retrieve a list of all blacklisted entities (domains and emails).

```js
blacklisting.GetListOfBlacklistedAll()
.then((data) => console.log("List of all blacklisted domains:", data))
.catch((error) => console.error(error));
```

**GET List of Blacklisted Domains**

Retrieve a list of all blacklisted domains.

```js
blacklisting.GetListOfBlacklistedDomains()
.then((data) => console.log("List of blacklisted domains:", data))
.catch((error) => console.error(error));
```

**GET List of Blacklisted Emails**

Retrieve a list of all blacklisted emails.

```js
blacklisting.GetListOfBlacklistedEmails()
.then((data) => console.log("List of blacklisted emails:", data))
.catch((error) => console.error(error));
```

**POST Add Domain to Blacklist**

Add a domain to the blacklist.

```js
blacklisting.AddDomainToBlackList(domain)
.then((data) => console.log(`${domain} added to blacklist:`, data))
.catch((error) => console.error(error));
```

**DELETE Remove Domain from Blacklist**

Remove a domain from the blacklist.

```js
blacklisting.RemoveDomainFromBlackList(domain)
.then(() => console.log(`${domain} removed from blacklist`))
.catch((error) => console.error(error));
```
