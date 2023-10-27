const ReplyAuth = require("./api_auth");

class Blacklisting {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Fetches all blacklisted domains and emails.
	 * @returns {Promise<Object>} - List of all blacklisted domains and emails.
	 * @throws Error if the request fails.
	 */
	async GetListOfBlacklistedAll() {
		try {
			return await this.auth.get(`https://api.reply.io/v1/Blacklist`);
		} catch (error) {
			throw `An error occurred while getting list of all blacklisted domains: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches all blacklisted domains.
	 * @returns {Promise<Object>} - List of all blacklisted domains.
	 * @throws Error if the request fails.
	 */
	async GetListOfBlacklistedDomains() {
		try {
			return await this.auth.get(`https://api.reply.io/v1/Blacklist?outputType=Domains`);
		} catch (error) {
			throw `An error occurred while getting list of all blacklisted domains: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches all blacklisted emails.
	 * @returns {Promise<Object>} - List of all blacklisted emails.
	 * @throws Error if the request fails.
	 */
	async GetListOfBlacklistedEmails() {
		try {
			return await this.auth.get(`https://api.reply.io/v1/Blacklist?outputType=Emails`);
		} catch (error) {
			throw `An error occurred while getting list of all blacklisted domains: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Adds a domain to the blacklist.
	 * @param {string} domain - The domain to be blacklisted.
	 * @returns {Promise<Object>} - API response indicating success.
	 * @throws Error if the request fails.
	 */
	async AddDomainToBlackList(domain) {
		try {
			return await this.auth.post(`https://api.reply.io/v1/Blacklist?domain=${domain}`);
		} catch (error) {
			throw `An error occurred while adding ${domain} to blacklist: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Removes a domain from the blacklist.
	 * @param {string} domain - The domain to be removed.
	 * @returns {Promise<Object>} - API response indicating success.
	 * @throws Error if the request fails.
	 */
	async RemoveDomainFromBlackList(domain) {
		try {
			return await this.auth.delete(`https://api.reply.io/v1/Blacklist?domain=${domain}`);
		} catch (error) {
			throw `An error occurred while removing ${domain} from blacklist: ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = Blacklisting;
