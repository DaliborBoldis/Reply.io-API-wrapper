const ReplyAuth = require("./api_auth");

class Statistics {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Fetches statistics related to a contact by email.
	 *
	 * @param {string} email - The email of the contact.
	 * @returns {Promise<Object>} - The statistics for the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async getContactStatistics(email) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/stats/person?email=${email}`);
		} catch (error) {
			throw `An error occurred while getting contact statistics for ${email}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches statistics related to a contact by email (TE version).
	 *
	 * @param {string} email - The email of the contact.
	 * @returns {Promise<Object>} - The statistics for the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async getContactStatisticsTE(email) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/stats/person?email=${email}`);
		} catch (error) {
			throw `An error occurred while getting contact statistics for ${email}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches statistics for a campaign by ID.
	 *
	 * @param {string} id - The ID of the campaign.
	 * @returns {Promise<Object>} - The statistics for the campaign.
	 * @throws {string} - An error message if the request fails.
	 */
	async getCampaignStatistics(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/stats/GetPeopleSentPerCampaign?campaignId=${id}`);
		} catch (error) {
			throw `An error occurred while getting campaign statistics for ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches statistics for a specific step within a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} stepId - The ID of the step.
	 * @param {string} from - The starting date for statistics.
	 * @param {string} to - The ending date for statistics.
	 * @returns {Promise<Object>} - The statistics for the step within the campaign.
	 * @throws {string} - An error message if the request fails.
	 */
	async getCampaignStepStatistics(campaignId, stepId, from, to) {
		try {
			return await this.auth.get(
				`https://api.reply.io/v1/Stats/CampaignStep?campaignId=${campaignId}&stepId=${stepId}&from=${from}&to=${to}`
			);
		} catch (error) {
			throw `An error occurred while getting campaign step statistics with ID ${stepId} for campaign with ID ${campaignId}: ${handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Fetches click statistics for a campaign by ID.
	 *
	 * @param {string} id - The ID of the campaign.
	 * @returns {Promise<Object>} - The click statistics for the campaign.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetCampaignClickStatistics(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/Stats/CampaignClicks?campaignId=${id}`);
		} catch (error) {
			throw `An error occurred while getting campaign click statistics for ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = Statistics;
