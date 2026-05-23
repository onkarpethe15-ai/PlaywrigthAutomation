import { test, expect, Page, Locator } from "@playwright/test";

async function login(page: Page): Promise<void> {
  await page.goto("https://eventhub.rahulshettyacademy.com");

  await page.getByPlaceholder("you@email.com").fill("mailtonkar@gmail.com");

  await page.getByLabel("password").fill("Panda@2025");

  await page.locator("#login-btn").click();
}

async function booking(page: Page, bookingcount: number): Promise<void> {
  await page.getByTestId("book-now-btn").first().click();

  for (let i = 0; i < bookingcount; i++) {
    await page.locator("//button[text()='+']").click();
  }

  await page.getByLabel("Full Name").fill("Onkar Pethe");

  await page.getByLabel("Email").fill("onkar@gmail.com");

  await page.getByLabel("Phone Number").fill("9325711274");

  await page
    .getByRole("button", {
      name: "Confirm Booking",
    })
    .click();

  await page
    .getByRole("button", {
      name: "View My Bookings",
    })
    .click();

  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/bookings",
  );
}

test("Single ticket booking eligible for refund", async ({ page }) => {
  await login(page);

  await booking(page, 0);

  await page.locator("//button[text()='View Details']").first().click();

  const cancelbookingbutton: Locator = page.getByRole("button", {
    name: "Check eligibility for refund?",
  });

  await expect(cancelbookingbutton).toBeVisible();

  const booking_id = await page
    .locator("//span[contains(text(),'D-')]")
    .first()
    .textContent();

  const show_title = await page
    .locator("//h1[text()='Dilli Diwali Mela']")
    .textContent();

  expect(booking_id?.charAt(0)).toMatch(show_title?.charAt(0) || "");

  await page
    .getByRole("button", {
      name: "Check eligibility for refund?",
    })
    .click();

  await expect(page.locator("#refund-spinner")).toBeVisible();

  await expect(page.locator("#refund-spinner")).toBeVisible({
    timeout: 6000,
  });

  const refund_txt: Locator = page.locator("//div[@id='refund-result']/span");

  await expect(refund_txt).toBeVisible();

  expect(await refund_txt.textContent()).toMatch(
    "Eligible for refund. Single-ticket bookings qualify for a full refund.",
  );
});

test("Group ticket booking is NOT eligible for refund", async ({ page }) => {
  await login(page);

  await booking(page, 2);

  await page.locator("//button[text()='View Details']").first().click();

  await page
    .getByRole("button", {
      name: "Check eligibility for refund?",
    })
    .click();

  const refund_txt: Locator = page.locator("//div[@id='refund-result']/span");

  await expect(refund_txt).toBeVisible();

  expect(await refund_txt.textContent()).toMatch(
    "Not eligible for refund. Group bookings (3 tickets) are non-refundable.",
  );
});
