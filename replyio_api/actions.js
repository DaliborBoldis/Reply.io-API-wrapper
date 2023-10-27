const ReplyAuth = require("./api_auth");

class Actions {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Pushes a contact to a specific campaign by its ID and email.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} email - The email address of the contact.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async pushContactToCampaign(campaignId, email) {
		try {
			const data = { campaignId, email };

			return await this.auth.post(`https://api.reply.io/v1/actions/pushtocampaign`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while pushing ${email} to campaign with ID ${campaignId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Creates and pushes a contact to a specific campaign.
	 *
	 * @param {Object} data - The contact data including campaign ID.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async createAndPushContactToCampaign(data) {
		try {
			return await this.auth.post(`https://api.reply.io/v1/actions/addandpushtocampaign`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while creating and pushing contact to campaign: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Force-pushes a contact to a campaign, overriding any constraints.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} email - The email address of the contact.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async forcePushContactToCampaign(campaignId, email) {
		try {
			const data = { campaignId, email, forcePush: true };

			return await this.auth.post(`https://api.reply.io/v1/actions/pushtocampaign`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while force-pushing ${email} to campaign with ID ${campaignId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Removes a contact from a single campaign based on campaign ID and email.
	 *
	 * @param {string} campaignId - The ID of the campaign to remove the contact from.
	 * @param {string} email - The email address of the contact to be removed.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async removeContactFromOneCampaign(campaignId, email) {
		try {
			const data = { campaignId, email };

			return await this.auth.post(`https://api.reply.io/v1/actions/removepersonfromcampaignbyid`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while removing ${email} from campaign with ID ${campaignId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Removes a contact from all campaigns.
	 *
	 * @param {string} email - The email address of the contact to be removed.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async removeContactFromAllCampaigns(email) {
		try {
			const data = { email };

			return await this.auth.post(`https://api.reply.io/v1/actions/removepersonfromallcampaigns`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while removing ${email} from all campaigns: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Marks a contact as 'Replied' based on their email address.
	 *
	 * @param {string} email - The email address of the contact to mark as 'Replied'.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async markContactAsRepliedByEmail(email) {
		try {
			const data = { email };

			return await this.auth.post(`https://api.reply.io/v1/actions/markasreplied`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while marking ${email} as 'Replied': ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Marks all contacts belonging to a specific domain as 'Replied'.
	 *
	 * @param {string} domain - The domain to mark contacts as 'Replied'.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async markContactAsRepliedByDomain(domain) {
		try {
			const data = { domain };

			return await this.auth.post(`https://api.reply.io/v1/actions/markasreplied`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while marking ${domain} as 'Replied': ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Marks a contact as 'Finished' based on their email address.
	 *
	 * @param {string} email - The email address of the contact to mark as 'Finished'.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async markContactAsFinishedByEmail(email) {
		try {
			const data = { email };

			return await this.auth.post(`https://api.reply.io/v1/actions/markasfinished`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while marking ${email} as 'Finished': ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Marks all contacts belonging to a specific domain as 'Finished'.
	 *
	 * @param {string} domain - The domain to mark contacts as 'Finished'.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async markContactAsFinishedByDomain(domain) {
		try {
			const data = { domain };

			return await this.auth.post(`https://api.reply.io/v1/actions/markasfinished`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while marking ${domain} as 'Finished': ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Unmarks a contact as 'Out of Office' based on their email address.
	 *
	 * @param {string} email - The email address of the contact to unmark as 'Out of Office'.
	 * @returns {Promise<Object>} - Response from API.
	 * @throws {string} - An error message if the request fails.
	 */
	async unmarkContactAsOutOfOffice(email) {
		try {
			const data = { email };

			return await this.auth.post(`https://api.reply.io/v1/actions/unmark-as-out-of-office`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while unmarking ${email} as 'Out of Office': ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = Actions;
