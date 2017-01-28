var factory = require("./clientFactory.js");

/**
 * Create a webdav client interface
 * @see createClient
 * @returns {Object} The client interface
 * @public
 * @param {String} remoteURL The target URL
 */
module.exports = function createWebDAVClient(remoteURL, username, password) {
    return factory.createClient(remoteURL, username, password);
};
