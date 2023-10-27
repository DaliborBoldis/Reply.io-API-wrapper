# Actions Module

The Actions module in the Reply.io API JavaScript SDK empowers you to control various campaign and contact-related operations.

## Setup

First, require the Actions class and instantiate it with your API key.

```js
const Actions = require("../replyio_api/actions");
const apiKey = "your-actual-API-key"; // Replace with your actual API key
const actions = new Actions(apiKey);
```

## Variables example

You can define the campaign data in a JavaScript object. Here's an example:

```js
const campaignId = "1234567";

var contactData = {
	campaignId: campaignId,
	email: "examplemail@gmail.com",
	firstName: "John",
	lastName: "Smith",
	company: "HH",
	city: "New York",
	state: "NY",
	country: "USA",
	timeZoneId: "US Eastern Standard Time",
	title: "Title",
	notes: "Notes-temp",
	phone: "+0000000000",
	linkedInProfile: "https://www.linkedin.com/in/api_example-30875211a",
	customFields: [
		{
			key: "Secondary Email",
			value: "examplemail@hh.com",
		},
	],
};
```

## API Methods

**POST Push Contact to Campaign**

Push an existing contact to a campaign.

```js
actions.pushContactToCampaign(campaignId, email)
.then(() => console.log(`Contact with email: ${email} pushed to campaign ID ${campaignId}.`))
.catch((error) => console.error(error));
```

**POST Create and Push Contact to Campaign**

Create a new contact and push it to a campaign.

```js
actions.createAndPushContactToCampaign(contactData)
.then(() => console.log(`Contact with email: ${contactData.email} created and pushed to campaign ID ${contactData.campaignId}.`))
.catch((error) => console.error(error));
```

**POST ForcePush Contact to Campaign**

Force push an existing contact to a campaign.

```js
actions.forcePushContactToCampaign(campaignId, email)
.then(() => console.log(`Contact with email: ${email} force-pushed to campaign ID ${campaignId}.`))
.catch((error) => console.error(error));
```

**POST Remove Contact from One Campaign**

Remove a contact from a specific campaign.

```js
actions.removeContactFromOneCampaign(campaignId, email)
.then(() => console.log(`Contact with email: ${email} removed from campaign ID ${campaignId}.`))
.catch((error) => console.error(error));
```

**POST Remove Contact from All Campaigns**

Remove a contact from all campaigns.

```js
actions.removeContactFromAllCampaigns(email)
.then(() => console.log(`Contact with email: ${email} removed from all campaigns.`))
.catch((error) => console.error(error));
```

**POST Mark Contact as Replied (by Email)**

Mark a contact as replied based on their email.

```js
actions.markContactAsRepliedByEmail(email)
.then(() => console.log(`Contact with email: ${email} marked as 'Replied'.`))
.catch((error) => console.error(error));
```

**POST Mark Contact as Replied (by Domain)**

Mark a contact as replied based on their domain.

```js
actions.markContactAsRepliedByDomain(domain)
.then(() => console.log(`Contact with domain: ${domain} marked as 'Replied'.`))
.catch((error) => console.error(error));
```

**POST Mark Contact as Finished (by Email)**

Mark a contact as finished based on their email.

```js
actions.markContactAsFinishedByEmail(email)
.then(() => console.log(`Contact with email: ${email} marked as 'Finished'.`))
.catch((error) => console.error(error));
```

**POST Mark Contact as Finished (by Domain)**

Mark a contact as finished based on their domain.

```js
actions.markContactAsFinishedByDomain(domain)
.then(() => console.log(`Contact with domain: ${domain} marked as 'Finished'.`))
.catch((error) => console.error(error));
```

**POST Unmark Contact as Out of Office**

Unmark a contact as 'Out of Office'.

```js
actions.unmarkContactAsOutOfOffice(email)
.then((data) => console.log(`Contact with email: ${email} unmarked as 'Out of Office': `, data))
.catch((error) => console.error(error));
```
