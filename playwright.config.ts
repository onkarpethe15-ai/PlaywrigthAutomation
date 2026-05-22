import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 2,

  workers: 1,

  reporter: [["line"], ["html"], ["allure-playwright"]],

  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: true,
  },

  projects: [
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],

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
