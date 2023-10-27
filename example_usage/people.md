# People Module

The People module in the Reply.io API JavaScript SDK enables you to control various people-related operations.

## Setup

First, require the People class and instantiate it with your API key.

```js
const People = require("../replyio_api/people");
const apiKey = "your-actual-API-key"; // Replace with your actual API key
const people = new People(apiKey);
```

## Variables example

You can define the campaign data in a JavaScript object. Here's an example:

```js
const contactEmail = "example@gmail.com";

const listName = "exampleList";

const contactID = "528599609";

const contactData = {
	email: "example@gmail.com",
	firstName: "Dan",
	lastName: "B",
	company: "HH",
	city: "Ridgefield",
	state: "CT",
	country: "US",
	timeZoneId: "",
	title: "",
	phone: "000000000",
	phoneStatus: "Pending",
	linkedInProfile: "",
	addingDate: "2023-08-23T10:40:59.28",
	customFields: [],
	companySize: "Empty",
	industry: "",
	salesNavigatorUrl: "",
	linkedInRecruiterUrl: "",
	accountId: null,
};
```

## API Methods

**GET List of Contacts**

Fetches a list of all contacts.

```js
people
  .getListOfContacts()
  .then((data) => console.log("List of Contacts:", data))
  .catch((error) => console.error(error));
```

**GET Contact by ID**

Fetches details of a specific contact based on its ID.

```js
people
.getContactByID(contactID)
.then((data) => console.log(`Contact by ID ${contactID}:`, data))
.catch((error) => console.error(error));
```

**GET Contact by Email**

Fetches details of a specific contact based on their email.

```js
people
.getContactByEmail(contactEmail)
.then((data) => console.log(`Contact by email ${contactEmail}:`, data))
.catch((error) => console.error(error));
```

**GET Contact Status in Campaign**

Fetches the status of a specific contact in a campaign based on their email.

```js
people
.GetContactStatusInCampaign(contactEmail)
.then((data) => console.log(`Contact status in campaign by email ${contactEmail}:`, data))
.catch((error) => console.error(error));
```

**GET List of Campaigns for Contact**

Fetches a list of all campaigns a specific contact is a part of, based on their ID.

```js
people
.GetListOfCampaignsForContact(contactID)
.then((data) => console.log(`List of campaigns for contact by ID ${contactID}:`, data))
.catch((error) => console.error(error));
```

**GET Lists by ID**

Fetches a list of all lists that a specific contact is a part of, based on their ID.

```js
people
.GetListsByID(contactID)
.then((data) => console.log(`List of all lists by ID ${contactID}:`, data))
.catch((error) => console.error(error));
```

**GET Lists by Name**

Fetches a list of all contacts in a specific list based on the list name.

```js
people
  .GetListsByName(listName)
  .then((data) => console.log(`List of all contacts by list name ${listName}:`, data))
  .catch((error) => console.error(error));
```

**POST Create a New Contact**

Creates a new contact with the specified contact data.

```js
people
  .CreateNewContact(contactData)
  .then((data) => console.log("Contact created:", data))
  .catch((error) => console.error(error));
```

**POST Update Contact by Email**

Updates a contact based on their email with the specified contact data.

```js
people
  .UpdateContactByEmail(contactData)
  .then((data) => console.log("Contact updated:", data))
  .catch((error) => console.error(error));
```

**DELETE Delete Contact by ID**

Deletes a contact based on their ID.

```js
people
  .DeleteContactByID(contactID)
  .then(() => console.log(`Contact with ID ${contactID} deleted.`))
  .catch((error) => console.error(error));
```

**DELETE Delete Contact by Email**

Deletes a contact based on their email.

```js
people
  .DeleteContactByEmail(contactEmail)
  .then(() => console.log(`Contact with email ${contactEmail} deleted.`))
  .catch((error) => console.error(error));
```
