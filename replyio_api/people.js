const ReplyAuth = require("./api_auth");

class People {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Retrieves the list of contacts.
	 *
	 * @returns {Promise<Object>} - Response from API containing the list of contacts.
	 * @throws {string} - An error message if the request fails.
	 */
	async getListOfContacts() {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people`);
		} catch (error) {
			throw `An error occurred while getting list of contacts: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a contact by its ID.
	 *
	 * @param {string} id - The ID of the contact.
	 * @returns {Promise<Object>} - Response from API containing the contact's details.
	 * @throws {string} - An error message if the request fails.
	 */
	async getContactByID(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people?id=${id}`);
		} catch (error) {
			throw `An error occurred while getting contact by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a contact by its email.
	 *
	 * @param {string} email - The email of the contact.
	 * @returns {Promise<Object>} - Response from API containing the contact's details.
	 * @throws {string} - An error message if the request fails.
	 */
	async getContactByEmail(email) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people?email=${email}`);
		} catch (error) {
			throw `An error occurred while getting contact by email ${email}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves the status of a contact in a campaign by its email.
	 *
	 * @param {string} email - The email of the contact.
	 * @returns {Promise<Object>} - Response from API containing the contact's status in the campaign.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetContactStatusInCampaign(email) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/stats/status_in_campaign?email=${email}`);
		} catch (error) {
			throw `An error occurred while getting contact status in campaign by email ${email}: ${await this.auth.handleApiError(
				error
			)}`;
		}
	}

	/**
	 * Retrieves the list of campaigns for a contact by ID.
	 *
	 * @param {string} id - The ID of the contact.
	 * @returns {Promise<Object>} - Response containing list of campaigns for the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetListOfCampaignsForContact(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people/${id}/sequences`);
		} catch (error) {
			throw `An error occurred while getting list of campaigns for contact by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a list of contacts by list ID.
	 *
	 * @param {string} id - The ID of the list.
	 * @returns {Promise<Object>} - Response containing list of contacts.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetListsByID(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people/list/${id}`);
		} catch (error) {
			throw `An error occurred while getting list of contacts by list ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Retrieves a list of contacts by list name.
	 *
	 * @param {string} listName - The name of the list.
	 * @returns {Promise<Object>} - Response containing list of contacts.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetListsByName(listName) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/people/list?name=${listName}`);
		} catch (error) {
			throw `An error occurred while getting list of contacts by list name ${listName}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Creates a new contact.
	 *
	 * @param {Object} data - The data for the new contact.
	 * @returns {Promise<Object>} - Response after creating the new contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async CreateNewContact(data) {
		try {
			return await this.auth.post(`https://api.reply.io/v1/people`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while getting creating a new contact: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Updates a contact by email.
	 *
	 * @param {Object} data - The data to update the contact.
	 * @returns {Promise<Object>} - Response after updating the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async UpdateContactByEmail(data) {
		try {
			return await this.auth.post(`https://api.reply.io/v1/people`, JSON.stringify(data), true);
		} catch (error) {
			throw `An error occurred while getting creating a new contact: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Deletes a contact by ID.
	 *
	 * @param {string} id - The ID of the contact.
	 * @returns {Promise<Object>} - Response after deleting the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async DeleteContactByID(id) {
		try {
			return await this.auth.delete(`https://api.reply.io/v1/people/?id=${id}`);
		} catch (error) {
			throw `An error occurred while deleting contact by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Deletes a contact by email.
	 *
	 * @param {string} email - The email of the contact.
	 * @returns {Promise<Object>} - Response after deleting the contact.
	 * @throws {string} - An error message if the request fails.
	 */
	async DeleteContactByEmail(email) {
		try {
			return await this.auth.delete(`https://api.reply.io/v1/people/?email=${email}`);
		} catch (error) {
			throw `An error occurred while deleting contact by email ${email}: ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = People;
