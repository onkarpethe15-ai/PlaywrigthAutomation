import { test, expect } from "@playwright/test";

test("to login into application", async ({ page }) => {
  const itemtoadd = "ZARA COAT 3";
  const elements = page.locator("//div[@class='card-body']");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("mailtonkar@gmail.com");
  await page.locator("#userPassword").fill("Panda@2025");
  await page.locator("input#login").click();
  await page.waitForLoadState("networkidle");

  const count = await elements.count();

  for (let i = 0; i < count; i++) {
    const texts = await elements.nth(i).locator("h5").textContent();
    console.log(texts);

    if (texts.trim() === itemtoadd) {
      await elements.nth(i).locator("button:has-text('Add To Cart')").click();
      break;
    }
  }
  await page.locator("//button[contains(text(),' Cart ')]").click();

  await expect(page.locator("div.cartSection h3")).toHaveText(itemtoadd);

  await page.locator("//button[text()='Checkout']").click();
  await page
    .locator("//div[contains(text(),'CVV')]/following-sibling::input")
    .fill("456");
  await page
    .locator("//div[contains(text(),'Name on Card')]/following-sibling::input")
    .fill("Onkar Deepakrao Pethe");
  await page.locator("//input[@placeholder='Select Country']").fill("India");

  await page
    .locator("//button[@class='ta-item list-group-item ng-star-inserted'][2]")
    // .waitFor()
    .click();
  await page.locator("//a[contains(text(),'Place')]").click();
  page.pause(10000);

  const purchaseid = await page.locator("label.ng-star-inserted").textContent();
  console.log(purchaseid);

  await page.locator("//button[contains(text(),'ORDER')]").click();

  const order_id = page.locator("tr.ng-star-inserted th");
  const ele_count = order_id.count();

  for (let i = 0; i < ele_count; i++) {
    if ((await order_id.nth(i).textContent()) === purchaseid) {
      console.log(order_id + " " + "Found in a list");
      break;
    }
  }
});
