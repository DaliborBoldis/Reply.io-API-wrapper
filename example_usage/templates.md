# Templates Module

The Templates module in the Reply.io API JavaScript SDK allows you to manage and access your templates.

## Setup

First, require the Templates class and instantiate it with your API key.

```js
const Templates = require("../replyio_api/templates");
const apiKey = "your-actual-API-key"; // Replace with your actual API key
const template = new Templates(apiKey);
```

## API Methods

**GET List of Templates by ID**

Fetches the details of a specific template based on its ID.

```js
template
.GetTemplateByID(template_id)
.then((data) => console.log(`List of templates by ID ${template_id}:`, data))
.catch((error) => console.error(error));
```

**GET List of Templates**

Fetches all templates available.

```js
template
.GetListOfTemplates()
.then((data) => console.log("List of templates:", data))
.catch((error) => console.error(error));
```
