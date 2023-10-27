# Statistics Module

The Statistics module in the Reply.io API JavaScript SDK provides functionalities for accessing various statistics related to contacts, campaigns, and steps.

## Setup

First, require the Statistics class and instantiate it with your API key.

```js
const Statistics = require("../replyio_api/statistics");
const apiKey = "your-actual-API-key"; // Replace with your actual API key
const statistics = new Statistics(apiKey);
```

## API Methods

**GET Contact Statistics**

Fetches statistics related to a specific contact based on their email.

```js
statistics
.getContactStatistics(email)
.then((data) => console.log("Contact statistics:", data))
.catch((error) => console.error(error));
```

**GET Contact Statistics (Team Edition)**

Fetches statistics for the contact based on their email, designed specifically for team editions of the product.

```js
statistics
.getContactStatisticsTE(email)
.then((data) => console.log("Contact statistics:", data))
.catch((error) => console.error(error));
```

**GET Campaign Statistics**

Fetches statistical data related to a particular campaign.

```js
statistics
.getCampaignStatistics(campaign_id)
.then((data) => console.log("Campaign statistics:", data))
.catch((error) => console.error(error));
```

**GET Campaign Step Statistics**

Fetches statistics for a particular step within a campaign for a specified time frame.

```js
statistics
.getCampaignStepStatistics(campaign_id, stepId, from, to)
.then((data) => console.log("Campaign Step statistics:", data))
.catch((error) => console.error(error));
```

**GET Campaign Click Statistics**

Fetches click-related statistics for a particular campaign.

```js
statistics
.GetCampaignClickStatistics(campaign_id)
.then((data) => console.log("Campaign click statistics:", data))
.catch((error) => console.error(error));
```
