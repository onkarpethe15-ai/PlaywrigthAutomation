import { test } from "@playwright/test";
import { EcomPage } from "../Pages/EcomPage";
import { PomManager } from "../Pages/PomManager";
import testdata from "../Data/EcomData.json";

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

    await obj_EcomPage.login(
      data.useremail,
      data.password
    );

    await page.waitForLoadState("networkidle");

    await obj_EcomPage.addToCart(data.itemtoadd);

    await obj_EcomPage.performCheckout();
  });
});