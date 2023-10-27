const express = require("express");
const People = require("./replyio_api/people");
const app = express();
const port = 3000;

const apiKey = "OhvnGQwEbRabDxYByQjO2i4Y";
const people = new People(apiKey);

app.use(express.json());

app.get("/getContactByEmail/:email", async (req, res) => {
	const email = req.params.email;
	try {
		const data = await people.getContactByEmail(email);
		res.status(200).json({
			message: `Contact by email ${email}:`,
			data,
		});
	} catch (error) {
		res.status(500).json({
			error: "Internal Server Error",
			details: error,
		});
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
