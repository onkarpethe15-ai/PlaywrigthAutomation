// playwright.config.js

// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if test.only is left in code */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests */
  retries: 2,

  /* Number of workers */
  workers: 4,

  /* Reporters */
  reporter: [["line"], ["html"], ["allure-playwright"]],

  /* Shared settings */
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: true,
  },

  /* Browser projects */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],

        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "on-first-retry",

        viewport: {
          width: 1440,
          height: 900,
        },

        ignoreHTTPSErrors: true,
        permissions: ["clipboard-read"],
      },
    },
  ],
});
