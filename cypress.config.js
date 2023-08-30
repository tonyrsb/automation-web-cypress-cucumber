
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
require('dotenv').config();

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on ("file:preprocessor", browserify.default(config));

  // Declare and hook your .env variables to Cypress Config Env
  config.env = config.env || {}
  config.env.STAGE = process.env.STAGE
  config.env.WEBSITE_URL = process.env.WEBSITE_URL
  config.env.AUTH_URL = process.env.AUTH_URL
  config.env.EMAIL = process.env.EMAIL
  config.env.PASSWORD = process.env.PASSWORD
  config.env.WORD = process.env.WORD

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: '5qxp1p',
  e2e: {
    specPattern: 'cypress/e2e/feature/**/*.feature',
    setupNodeEvents,
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000
  },
});
