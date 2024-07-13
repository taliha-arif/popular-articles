const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y4urth',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
