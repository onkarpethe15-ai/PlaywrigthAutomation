import { test, expect, Page, Locator } from "@playwright/test";

test("Evenet booking test", async ({ page }) => {
  async function login(page: Page): Promise<void> {
    await page.goto("https://eventhub.rahulshettyacademy.com");

    await page.getByPlaceholder("you@email.com").fill("mailtonkar@gmail.com");

    await page.getByLabel("password").fill("Panda@2025");

    await page.locator("#login-btn").click();
  }

  await login(page);

  const link_text: Locator = page.getByText("Browse Events →");

  await expect(link_text).toBeVisible();

  await page.getByRole("button", { name: "Admin" }).click();

  await page.locator("//a[text()='Manage Events']").nth(0).click();

  const title: string = `pinno ki tuk tuk ${Date.now()}`;

  await page.locator("input#event-title-input").fill(title);

  await page.getByLabel("city").fill("binno ki apni duniya");

  await page.getByLabel("venue").fill("New Sneh Naga,EXT,47");

  // datetime-local input
  await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");

  await page.locator("input[id='price-($)']").fill("20");

  await page.locator("input[id='total-seats']").fill("700");

  await page.locator("#add-event-btn").click();

  await expect(page.getByText("Event created!")).toBeVisible();

  await page.getByTestId("nav-events").click();

  const event_cards: Locator = page.getByTestId("event-card");

  await expect(event_cards.first()).toBeVisible();

  await expect(page.getByText(title)).toBeVisible({
    timeout: 5000,
  });

  const sit_list = await page
    .locator(
      `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
    )
    .textContent();

  const sitcount: number = Number(sit_list?.split(" ")[0]);

  console.log(sitcount);

  await page
    .locator(`//h3[text()='${title}']/parent::a/following-sibling::div[2]/a`)
    .click();

  expect(await page.locator("#ticket-count").textContent()).toMatch("1");

  await page.getByLabel("Full Name").fill("jhon philips");

  await page.locator("#customer-email").fill("philips@15gmail.com");

  await page.getByPlaceholder("+91 98765 43210").fill("9325711274");

  await page.locator(".confirm-booking-btn").click();

  const bookingref: Locator = page.locator(".booking-ref").first();

  await expect(bookingref).toBeVisible();

  const bookingreno = await bookingref.textContent();

  const trim_bookrefno: string = bookingreno?.trim() || "";

  console.log(trim_bookrefno);

  await page.locator("#nav-bookings").click();

  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/bookings",
  );

  const booking_card: Locator = page.locator("#booking-card").first();

  await expect(booking_card).toBeVisible();

  await expect(
    page.locator(".booking-ref").filter({
      hasText: trim_bookrefno,
    }),
  ).toBeVisible();

  await expect(
    page.locator(
      `//span[text()='${trim_bookrefno}']/parent::div/following-sibling::h3`,
    ),
  ).toHaveText(title);

  await page.locator("//a[text()='Events']").click();

  const event_cards_t: Locator = page.getByTestId("event-card").first();

  await expect(event_cards_t).toBeVisible();

  await expect(page.getByText(title)).toBeVisible({
    timeout: 5000,
  });

  const sit_list_t = await page
    .locator(
      `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
    )
    .textContent();

  const sitcount_two: number = Number(sit_list_t?.split(" ")[0]);

  expect(sitcount_two.toString()).toMatch((sitcount - 1).toString());
});
