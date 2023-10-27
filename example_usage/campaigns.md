# Campaigns Module Documentation

The Campaigns module in the Reply.io API JavaScript SDK provides functionalities for managing campaigns, including creating, updating, and fetching campaign details.

## Setup

First, require the Campaigns class and initialize it with your API key.

```js
const Campaigns = require("../replyio_api/campaigns");
const apiKey = "Y9f6yd9XTmr0UBdIhjJHflb6"; // Replace with your API key
const campaigns = new Campaigns(apiKey);
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

You can also define the campaign data with multiple steps as shown in this example:

```js
const campaignData = {
	name: "My Multiple Steps Campaign",
	steps: [
		{
			type: "email",
			variants: [
				{
					subject: "Welcome Variant 1",
					text: "Text for Variant 1",
				},
				{
					subject: "Welcome Variant 2",
					text: "Text for Variant 2",
				},
			],
			// Other email step details
		},
		{
			type: "call",
			text: "Custom Call Step Text",
			// Other call step details
		},
	],
	settings: {
		timezone: "UTC",
		startDate: "2023-09-01",
		// Other settings
	},
	emailAccount: emailAccount, // Use default email account
	// Other campaign details
};
```

Here's an example for a new step data that you can add to a campaign:

```js
const stepData = {
	number: 3,
	inMinutesCount: 60,
	templates: [
		{
			emailTemplateId: null,
			emailTemplateName: "",
			body: "step was created via API",
			subject: "step via API",
			ccList: null,
		},
	],
};
```

If you want to update campaign settings, you can define variable like this:

```js
const settingsData = {
	settings: {
		emailsCountPerDay: 50, // Updated value for EmailsCountPerDay
	},
};
```

## API Methods

**Get Campaign Details (by Name)**

Fetches details of a specific campaign based on its name.

```js
campaigns
  .getCampaignDetailsByName(campaignName)
  .then((data) => console.log(`Campaign Details for ${campaignName}:`, data))
  .catch((error) => console.error(error));
```

**Get Campaign Details (by ID)**

Fetches details of a specific campaign based on its ID.

```js
campaigns
  .getCampaignDetailsByID(campaignID)
  .then((data) => console.log(`Campaign Details by ID ${campaignID}:`, data))
  .catch((error) => console.error(error));
```

**Get List of Campaign Schedules (All)**

Fetches all campaign schedules available.

```js
campaigns
  .getListOfCampaignSchedules()
  .then((data) => console.log("Campaign schedules (All):", data))
  .catch((error) => console.error(error));
```

**Get List of Campaign Schedules (Default only)**

Fetches only the default campaign schedules.

```js
campaigns
  .getListOfDefaultCampaignSchedules()
  .then((data) => console.log("Campaign schedules (Default only):", data))
  .catch((error) => console.error(error));
```

**GET List of Campaigns**

Fetches a list of all available campaigns.

```js
campaigns
  .getListOfCampaigns()
  .then((data) => console.log("Campaigns list:", data))
  .catch((error) => console.error(error));
```

**GET List of Contacts per Campaign**

Fetches a list of all contacts for a given campaign ID.

```js
campaigns
  .getListOfContactsPerCampaign(campaignID)
  .then((data) => console.log(`List of contacts (Per campaign) by ID ${campaignID}:`, data))
  .catch((error) => console.error(error));
```

**POST Create Campaign (Custom Step Text)**

Creates a new campaign with custom step text.

```js
campaigns
  .createCampaignCustomStepText(campaignData)
  .then((data) => console.log(`Campaign ${campaignData.name} created:`, data))
  .catch((error) => console.error(error));
```

**POST Create Campaign (Multiple Steps & Variants)**

Creates a new campaign that has multiple steps and variants.

```js
campaigns
  .createCampaignMultipleStepsAndVariants(campaignData)
  .then((data) => console.log(`Campaign ${campaignData.name} created:`, data))
  .catch((error) => console.error(error));
```

**POST Create Campaign (Template Step Text)**

Creates a new campaign using template step text.

```js
campaigns
.createCampaignTemplateStepText(campaignData)
.then((data) => console.log(`Campaign ${campaignData.name} created:`, data))
.catch((error) => console.error(error));
```

**POST Create Campaign (Custom Schedule)**

Creates a new campaign with a custom schedule.

```js
campaigns
  .createCampaignCustomSchedule(campaignData)
  .then((data) => console.log(`Campaign ${campaignData.name} created:`, data))
  .catch((error) => console.error(error));
```

**GET List of Campaign Steps**

Fetches a list of steps for a specific campaign identified by its ID.

```js
campaigns
  .getListOfCampaignSteps(campaignID)
  .then((data) => console.log(`Campaign steps by ID ${campaignID}:`, data))
  .catch((error) => console.error(error));
```

**GET Campaign Step (by ID)**

Fetches details of a specific step in a campaign based on its ID and the campaign's ID.

```js
campaigns
  .getCampaignStepById(campaignID, stepID)
  .then((data) => console.log(`Campaign with ID ${campaignID} > step by ID ${stepID}:`, data))
  .catch((error) => console.error(error));
```

**POST Add Step to Campaign**

Adds a new step to a campaign identified by its ID.

```js
campaigns
.addStepToCampaign(campaignID, stepData)
.then((data) => console.log(`Step data added to campaign ID ${campaignID}:`, stepData))
.catch((error) => console.error(error));
```

**PATCH Update Campaign Step**

Updates an existing step in a specific campaign, both identified by their IDs.

```js
campaigns
.updateCampaignStep(campaignID, stepID, data)
.then((data) => console.log(`Updated step with ID ${stepID} in campaign with ID ${campaignID}:`, data))
.catch((error) => console.error(error));
```

**DELETE Delete Campaign Step**

Deletes a specific step from a campaign based on the campaign and step IDs.

```js
campaigns
.deleteCampaignStep(campaignID, stepID)
.then((data) => console.log(`Step with ID ${stepID} deleted from campaign ID ${campaignID}:`, data))
.catch((error) => console.error(error));
```

**PATCH Update Campaign Settings**

Updates the settings of a specific campaign identified by its ID.

```js
campaigns
.updateCampaignSettings(campaignID, settingsData)
.then((data) => console.log(`Campaign with ID ${campaignID} updated with new settings:`, data))
.catch((error) => console.error(error));
```

**POST Start Campaign**

Starts a campaign based on its ID.

```js
campaigns
.startCampaign(campaignID)
.then((data) => console.log(`Campaign with ID ${campaignID} started:`, data))
.catch((error) => console.error(error));
```

**POST Pause Campaign**

Pauses a specific campaign based on its ID.

```js
campaigns
  .pauseCampaign(campaignID)
  .then((data) => console.log(`Campaign with ID ${campaignID} paused:`, data))
  .catch((error) => console.error(error));
```

**POST Archive Campaign**

Archives a specific campaign based on its ID.

```js
campaigns
.archiveCampaign(campaignID)
.then((data) => console.log(`Campaign with ID ${campaignID} archived:`, data))
.catch((error) => console.error(error));
```

**Activate/Pause Email Step Variant**

Toggles an email step variant within a sequence on or off.

```js
campaigns
.toggleEmailStepVariant(sequenceId, activate)
.then((data) => console.log(`Email Step Variant with ID ${sequenceId} toggled:`, data))
.catch((error) => console.error(error));
```
