const axios = require("axios");

class ReplyAuth {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	/**
	 * Makes an HTTP request.
	 *
	 * @param {string} method - HTTP method (get, post, put, etc.).
	 * @param {string} url - The URL to make the request to.
	 * @param {Object} [data=null] - Data payload for the request.
	 * @param {boolean} [includeContentType=false] - Whether to include Content-Type header.
	 * @returns {Promise<Object>} - The response data.
	 * @throws {Error} - Throws an error if the request fails.
	 */
	async makeRequest(method, url, data = null, includeContentType = false) {
		const config = {
			method,
			maxBodyLength: Infinity,
			url,
			headers: {
				"X-Api-Key": this.apiKey,
			},
			data: data,
		};

		if (includeContentType) config.headers["Content-Type"] = "application/json";

		try {
			const response = await axios(config);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Makes a GET request.
	 *
	 * @param {string} url - The URL to make the GET request to.
	 * @param {Object} data - Data payload for the request.
	 * @returns {Promise<Object>} - The response data.
	 */
	async get(url, data) {
		return await this.makeRequest("get", url, data);
	}

	/**
	 * Makes a POST request.
	 *
	 * @param {string} url - The URL to make the POST request to.
	 * @param {Object} data - Data payload for the request.
	 * @param {boolean} [includeContentType=false] - Whether to include Content-Type header.
	 * @returns {Promise<Object>} - The response data.
	 */
	async post(url, data, includeContentType = false) {
		return await this.makeRequest("post", url, data, includeContentType);
	}

	/**
	 * Makes a PUT request.
	 *
	 * @param {string} url - The URL to make the PUT request to.
	 * @param {Object} data - Data payload for the request.
	 * @returns {Promise<Object>} - The response data.
	 */
	async put(url, data) {
		return await this.makeRequest("put", url, data);
	}

	/**
	 * Makes a DELETE request.
	 *
	 * @param {string} url - The URL to make the DELETE request to.
	 * @param {Object} data - Data payload for the request.
	 * @param {boolean} [includeContentType=false] - Whether to include Content-Type header.
	 * @returns {Promise<Object>} - The response data.
	 */
	async delete(url, data, includeContentType = false) {
		return await this.makeRequest("delete", url, data, (includeContentType = true));
	}

	/**
	 * Makes a PATCH request.
	 *
	 * @param {string} url - The URL to make the PATCH request to.
	 * @param {Object} data - Data payload for the request.
	 * @param {boolean} [includeContentType=false] - Whether to include Content-Type header.
	 * @returns {Promise<Object>} - The response data.
	 */
	async patch(url, data, includeContentType = false) {
		return await this.makeRequest("patch", url, data, includeContentType);
	}

	/**
	 * Handles API errors by parsing the status and response.
	 *
	 * @param {Error} error - The error object.
	 * @returns {string} - A human-readable error message.
	 */
	async handleApiError(error) {
		if (error.response) {
			const { status, data } = error.response;

			switch (status) {
				case 400:
					return `Status code: ${status} - Wrong input parameter: ${JSON.stringify(data)}`;
				case 401:
					return `Status code: ${status} - User not found. Invalid API key.`;
				case 403:
					return `Status code: ${status} - Access denied. The API key doesn't have access to the requested resource.`;
				case 404:
					return `Status code: ${status} - The requested resource could not be found: ${JSON.stringify(data)}`;
				case 500:
					return `Status code: ${status} - Internal Server Error. Please try again later.`;
				default:
					return `Status code: ${status} - Unexpected error: ${JSON.stringify(data)}`;
			}
		} else {
			return "Status code: unknown - Unknown error occurred while making the API request.";
		}
	}
}

module.exports = ReplyAuth;
