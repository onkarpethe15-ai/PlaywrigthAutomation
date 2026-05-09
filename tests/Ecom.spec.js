import { test, expect } from "@playwright/test";
import { EcomPage } from "../Pages/EcomPage";
import { PomManager } from "../Pages/PomManager";
import testdata from "../Data/EcomData.json";
testdata.forEach((data) => {
  test(`to login into application ${data.testId}`, async ({ page }) => {
    const itemtoadd = "ZARA COAT 3";
    const elements = page.locator("//div[@class='card-body']");
    const pommanger = new PomManager(page);
    const obj_EcomPage = pommanger.get_EcomPage();
    await obj_EcomPage.goto();
    await obj_EcomPage.login(data.useremail, data.password);

    await page.waitForLoadState("networkidle");

    await obj_EcomPage.addToCart(data.itemtoadd);

    await obj_EcomPage.performCheckout();
  });
});
