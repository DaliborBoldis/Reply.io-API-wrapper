const ReplyAuth = require("./api_auth");

class Templates {
	constructor(apiKey) {
		this.auth = new ReplyAuth(apiKey);
	}

	/**
	 * Fetches a specific template by its ID.
	 *
	 * @param {string} id - The ID of the template.
	 * @returns {Promise<Object>} - The template details.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetTemplateByID(id) {
		try {
			return await this.auth.get(`https://api.reply.io/v1/templates?id=${id}`);
		} catch (error) {
			throw `An error occurred while getting list of templates by ID ${id}: ${await this.auth.handleApiError(error)}`;
		}
	}

	/**
	 * Fetches a list of all available templates.
	 *
	 * @returns {Promise<Array<Object>>} - An array containing all templates.
	 * @throws {string} - An error message if the request fails.
	 */
	async GetListOfTemplates() {
		try {
			return await this.auth.get("https://api.reply.io/v1/templates");
		} catch (error) {
			throw `An error occurred while getting list of templates: ${await this.auth.handleApiError(error)}`;
		}
	}
}

module.exports = Templates;
