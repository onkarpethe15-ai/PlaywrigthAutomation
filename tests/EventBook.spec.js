import { test, expect } from "@playwright/test";

test("Evenet booking test", async ({ page }) => {
  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page.getByPlaceholder("you@email.com").fill("mailtonkar@gmail.com");
  await page.getByLabel("password").fill("Panda@2025");
  await page.locator("#login-btn").click();
  const link_text = page.getByText("Browse Events →");
  expect(await link_text).toBeVisible();
  await page.getByRole("button", { name: "Admin" }).click();
  await page.locator("//a[text()='Manage Events']").nth(0).click();
  const title = `pinno ki tuk tuk ${Date.now()}`;
  await page.locator("input#event-title-input").fill(title);
  await page.getByLabel("city").fill("binno ki apni duniya");
  await page.getByLabel("venue").fill("New Sneh Naga,EXT,47");
  // datetime-local input — located by label
  await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");
  await page.locator("input[id='price-($)']").fill("20");
  await page.locator("input[id='total-seats']").fill("700");
  await page.locator("#add-event-btn").click();
  expect(await page.getByText("Event created!")).toBeVisible();
  await page.getByTestId("nav-events").click();
});
