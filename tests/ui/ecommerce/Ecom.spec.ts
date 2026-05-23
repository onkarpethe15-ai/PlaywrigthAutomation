import { test } from "@playwright/test";
import { EcomPage } from "../../../pages/ecommerce/EcomPage";
import { PomManager } from "../../../pages/manager/PomManager";
import testdata from "../../.././test-data/EcomData.json";

interface TestData {
  testId: string;
  useremail: string;
  password: string;
  itemtoadd: string;
}

(testdata as TestData[]).forEach((data) => {
  test(`to login into application ${data.testId}`, async ({ page }) => {
    const pommanger = new PomManager(page);

    const obj_EcomPage: EcomPage = pommanger.get_EcomPage();

    await obj_EcomPage.goto();

    await obj_EcomPage.login(data.useremail, data.password);

    await page.waitForLoadState("networkidle");

    await obj_EcomPage.addToCart(data.itemtoadd);

    await obj_EcomPage.performCheckout();
  });
});
