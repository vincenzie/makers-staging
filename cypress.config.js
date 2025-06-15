const { defineConfig } = require("Cypress");

module.exports = defineConfig({

  projectId: "s8h8g8",
    viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    //includeShadowDom: false, // Add this line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
