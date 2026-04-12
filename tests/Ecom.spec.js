import { test, expect } from "@playwright/test";

test("to login into application", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator(".wikipedia-search-button").click();
  await page.locator("#name").fill("Onkar");
  await page.locator("#email").fill("omkarpethe4@gmail.com");
  const heading = await page.locator("h1.title").textContent();
  console.log(heading);
});
