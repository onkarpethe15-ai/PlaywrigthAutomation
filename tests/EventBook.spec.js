import { test, expect } from "@playwright/test";

test("Evenet booking test", async ({ page }) => {
  async function login(page) {
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("mailtonkar@gmail.com");
    await page.getByLabel("password").fill("Panda@2025");
    await page.locator("#login-btn").click();
  }
  await login(page);

  const link_text = page.getByText("Browse Events →");
  await expect(await link_text).toBeVisible();
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
  await expect(page.getByText("Event created!")).toBeVisible();

  await page.getByTestId("nav-events").click();
  const event_cards = page.getByTestId("event-card");
  await expect(await event_cards.first()).toBeVisible();
  await expect(page.getByText(title)).toBeVisible({ timeout: 5000 });

  const sit_list = await page
    .locator(
      `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
    )
    .textContent();

  const sitcount = Number(sit_list.split(" ")[0]);
  console.log(sitcount);

  await page
    .locator(`//h3[text()='${title}']/parent::a/following-sibling::div[2]/a`)
    .click();

  expect(await page.locator("#ticket-count").textContent()).toMatch("1");
  await page.getByLabel("Full Name").fill("jhon philips");
  await page.locator("#customer-email").fill("philips@15gmail.com");
  await page.getByPlaceholder("+91 98765 43210").fill("9325711274");
  await page.locator(".confirm-booking-btn").click();
  const bookingref = page.locator(".booking-ref").first();
  await expect(bookingref).toBeVisible();
  const bookingreno = await bookingref.textContent();
  const trim_bookrefno = bookingreno.trim();
  console.log(trim_bookrefno);
  await page.locator("#nav-bookings").click();
  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/bookings",
  );
  const booking_card = page.locator("#booking-card").first();
  await expect(booking_card).toBeVisible();

  await expect(
    await page.locator(".booking-ref").filter({ hasText: trim_bookrefno }),
  ).toBeVisible();

  await expect(
    await page
      .locator(
        `//span[text()='${trim_bookrefno}']/parent::div/following-sibling::h3`,
      )
      .textContent(),
  ).toMatch(title);

  await page.locator("//a[text()='Events']").click();

  const event_cards_t = page.getByTestId("event-card").first();
  await expect(event_cards_t).toBeVisible();
  await expect(page.getByText(title)).toBeVisible({ timeout: 5000 });
  const sit_list_t = await page
    .locator(
      `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
    )
    .textContent();
  const sitcount_two = await Number(sit_list_t.split(" ")[0]);
  await expect(sitcount_two.toString()).toMatch((sitcount - 1).toString());
});
