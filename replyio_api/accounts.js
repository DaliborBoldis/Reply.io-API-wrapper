const ReplyAuth = require("./api_auth");

class Accounts {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Retrieves a list of email accounts associated with the current API key.
	 * @returns {Promise<Object>} - List of email accounts.
	 * @throws {string} An error message if the request fails.
	 */
	async GetListOfEmailAccounts() {
		try {
			return await this.auth.get("https://api.reply.io/v1/emailAccounts");
		} catch (error) {
			throw `An error occurred while getting list of email accounts: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves the shared page URL for the current user.
	 * @returns {Promise<Object>} - Shared page URL for the current user.
	 * @throws {string} An error message if the request fails.
	 */
	async GetEmailAccountSharedPage() {
		try {
			return await this.auth.get("https://api.reply.io/v1/SharedPageUrl");
		} catch (error) {
			throw `An error occurred while getting shared page URL for the current user: ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = Accounts;
