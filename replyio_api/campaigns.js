const ReplyAuth = require("./api_auth");

class Campaigns {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Fetches the details of a campaign based on its name.
	 *
	 * @param {string} name - The name of the campaign to fetch details for.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async getCampaignDetailsByName(name) {
		try {
			const url = `https://api.reply.io/v1/campaigns?name=${encodeURIComponent(name)}`;
			return await this.auth.get(url);
		} catch (error) {
			throw `An error occurred while fetching campaign details for ${name}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches the details of a campaign based on its ID.
	 *
	 * @param {string|number} id - The ID of the campaign to fetch details for.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async getCampaignDetailsByID(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/campaigns?id=${id}`);
		} catch (error) {
			throw `An error occurred while fetching campaign details by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches a list of all campaign schedules.
	 *
	 * @returns {Promise<Object>} - Response from API containing a list of campaign schedules.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfCampaignSchedules() {
		try {
			return await this.auth.get("https://api.reply.io/v2/schedules");
		} catch (error) {
			throw `An error occurred while fetching list of campaign schedules: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches a list of all default campaign schedules.
	 *
	 * @returns {Promise<Object>} - Response from API containing a list of default campaign schedules.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfDefaultCampaignSchedules() {
		try {
			return await this.auth.get("https://api.reply.io/v2/schedules/default");
		} catch (error) {
			throw `An error occurred while fetching list of default campaign schedules: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches a list of all campaigns.
	 *
	 * @returns {Promise<Object>} - Response from API containing a list of campaigns.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfCampaigns() {
		try {
			return await this.auth.get("https://api.reply.io/v1/campaigns");
		} catch (error) {
			throw `An error occurred while fetching list of campaigns: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches a list of all contacts associated with a specific campaign.
	 *
	 * @param {string|number} id - The ID of the campaign for which to fetch contacts.
	 * @returns {Promise<Object>} - Response from API containing a list of contacts per campaign.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfContactsPerCampaign(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/campaigns/${id}/people`);
		} catch (error) {
			throw `An error occurred while fetching list of contacts per campaign by ID ${id}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Creates a campaign with custom step text.
	 *
	 * @param {Object} data - The campaign data with custom step text.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async createCampaignCustomStepText(data) {
		try {
			return await this.auth.post("https://api.reply.io/v2/campaigns", JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while creating campaign (Custom step text): ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Creates a campaign with template step text.
	 *
	 * @param {Object} data - The campaign data with template step text.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async createCampaignTemplateStepText(data) {
		try {
			return await this.auth.post("https://api.reply.io/v2/campaigns", JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while creating campaign (Template step text): ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Creates a campaign with multiple steps and variants.
	 *
	 * @param {Object} data - The campaign data with multiple steps and variants.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async createCampaignMultipleStepsAndVariants(data) {
		try {
			return await this.auth.post("https://api.reply.io/v2/campaigns", JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while creating campaign (Multiple steps and variants): ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Creates a campaign with a custom schedule.
	 *
	 * @param {Object} data - The campaign data with a custom schedule.
	 * @returns {Promise<Object>} - Response from API containing campaign details.
	 * @throws {string} - An error message if the request fails.
	 */
	async createCampaignCustomSchedule(data) {
		try {
			return await this.auth.post("https://api.reply.io/v2/campaigns", JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while creating campaign (Custom schedule): ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a list of steps for a specific campaign by its ID.
	 *
	 * @param {string} id - The ID of the campaign.
	 * @returns {Promise<Object>} - Response from API containing list of campaign steps.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfCampaignSteps(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v2/campaigns/${id}/steps`);
		} catch (error) {
			throw `An error occurred while getting list of campaign steps by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a specific step from a campaign by campaign ID and step ID.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} stepId - The ID of the step.
	 * @returns {Promise<Object>} - Response from API containing step details.
	 * @throws {string} - An error message if the request fails.
	 */
	async getCampaignStepById(campaignId, stepId) {
		try {
			return await this.auth.get(`https://api.reply.io/v2/campaigns/${campaignId}/steps/${stepId}`);
		} catch (error) {
			throw `An error occurred while getting step with ID ${stepId} from campaign with ID ${campaignId}: ${handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Adds a new step to an existing campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {Object} data - The data for the new step.
	 * @returns {Promise<Object>} - Response from API confirming the step addition.
	 * @throws {string} - An error message if the request fails.
	 */
	async addStepToCampaign(campaignId, data) {
		try {
			return await this.auth.post(`https://api.reply.io/v2/campaigns/${campaignId}/steps`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while adding step to campaign with ID ${campaignId}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Updates an existing step in a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} stepId - The ID of the step to update.
	 * @param {Object} data - The data to update the step with.
	 * @returns {Promise<Object>} - Response from API confirming the step update.
	 * @throws {string} - An error message if the request fails.
	 */
	async updateCampaignStep(campaignId, stepId, data) {
		try {
			return await this.auth.patch(`https://api.reply.io/v2/campaigns/${campaignId}/steps/${stepId}`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while updating step with ID ${stepId} in campaign with ID ${campaignId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Deletes a specific step from a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {string} stepId - The ID of the step to delete.
	 * @returns {Promise<Object>} - Response from API confirming the deletion.
	 * @throws {string} - An error message if the request fails.
	 */
	async deleteCampaignStep(campaignId, stepId) {
		try {
			return await this.auth.delete(`https://api.reply.io/v2/campaigns/${campaignId}/steps/${stepId}`, null, true);
		} catch (error) {
			throw `An error occurred while deleting step with ID ${stepId} from campaign with ID ${campaignId}: ${handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Updates the settings for a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign.
	 * @param {Object} data - Settings to update.
	 * @returns {Promise<Object>} - Response from API confirming the update.
	 * @throws {string} - An error message if the request fails.
	 */
	async updateCampaignSettings(campaignId, data) {
		try {
			return await this.auth.patch(`https://api.reply.io/v2/campaigns/${campaignId}`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while updating settings in campaign with ID ${campaignId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Starts a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign to start.
	 * @returns {Promise<Object>} - Response from API confirming the start.
	 * @throws {string} - An error message if the request fails.
	 */
	async startCampaign(campaignId) {
		try {
			return await this.auth.post(`https://api.reply.io/v2/campaigns/${campaignId}/start`);
		} catch (error) {
			throw `An error occurred while starting campaign with ID ${campaignId}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Pauses a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign to pause.
	 * @returns {Promise<Object>} - Response from API confirming the pause.
	 * @throws {string} - An error message if the request fails.
	 */
	async pauseCampaign(campaignId) {
		try {
			return await this.auth.post(`https://api.reply.io/v2/campaigns/${campaignId}/pause`);
		} catch (error) {
			throw `An error occurred while pausing campaign with ID ${campaignId}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Archives a campaign.
	 *
	 * @param {string} campaignId - The ID of the campaign to archive.
	 * @returns {Promise<Object>} - Response from API confirming the archiving.
	 * @throws {string} - An error message if the request fails.
	 */
	async archiveCampaign(campaignId) {
		try {
			return await this.auth.post(`https://api.reply.io/v2/campaigns/${campaignId}/archive`);
		} catch (error) {
			throw `An error occurred while archiving campaign with ID ${campaignId}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Toggles an email step variant in a campaign sequence.
	 *
	 * @param {string} sequenceId - The ID of the sequence containing the variant.
	 * @param {boolean} activate - True to activate, false to deactivate.
	 * @returns {Promise<Object>} - Response from API confirming the toggle.
	 * @throws {string} - An error message if the request fails.
	 */
	async toggleEmailStepVariant(sequenceId, activate) {
		try {
			const data = { activate: activate ? "True" : "False" };
			return await this.auth.post(`https://api.reply.io/v2/campaigns/${sequenceId}/variants/toggle`, data);
		} catch (error) {
			throw `An error occurred while toggling the email step variant with sequenceID ${sequenceId}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}
}

module.exports = Campaigns;
