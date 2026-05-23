const { defineConfig } = require("@playwright/test");
const { createAzurePlaywrightConfig, ServiceOS } = require("@azure/playwright");
const { DefaultAzureCredential } = require("@azure/identity");

const config = require("./playwright.config");

module.exports = defineConfig({
  ...config,

  reporter: [["html", { open: "never" }], ["@azure/playwright/reporter"]],

  ...createAzurePlaywrightConfig(config, {
    exposeNetwork: "<loopback>",
    connectTimeout: 3 * 60 * 1000,
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
});
