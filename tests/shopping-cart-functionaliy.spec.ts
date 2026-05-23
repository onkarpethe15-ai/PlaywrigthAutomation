import { test, expect } from "@playwright/test";
import { GreenKartPage } from "../Pages/GreenKartPage";

test.describe("GreenKart Application Tests", () => {
  test("Add product to cart", async ({ page }) => {
    const greenKartPage = new GreenKartPage(page);

    await greenKartPage.navigateToApplication();

    await greenKartPage.searchProduct("Brocolli");

    await greenKartPage.verifyProductVisible("Brocolli");

    await greenKartPage.addProductToCart("Brocolli");

    await greenKartPage.verifyCartCount("1");
  });

  test("Remove product from cart", async ({ page }) => {
    const greenKartPage = new GreenKartPage(page);

    await greenKartPage.navigateToApplication();

    await greenKartPage.addProductToCart("Brocolli");

    await greenKartPage.openCart();

    await greenKartPage.verifyProductInCart("Brocolli");

    await greenKartPage.removeProduct("Brocolli");

    await expect(page.locator(".cart-preview")).not.toContainText("Brocolli");
  });

  test("Update product quantity", async ({ page }) => {
    const greenKartPage = new GreenKartPage(page);

    await greenKartPage.navigateToApplication();
    await greenKartPage.increaseQuantity();
    await greenKartPage.decreaseQuantity();
    await greenKartPage.addProductToCart("Brocolli");
    await greenKartPage.openCart();
    await greenKartPage.verifyTotalAmountVisible();
  });

  test("Complete checkout process", async ({ page }) => {
    const greenKartPage = new GreenKartPage(page);

    await greenKartPage.navigateToApplication();

    await greenKartPage.addProductToCart("Brocolli");

    await greenKartPage.openCart();

    await greenKartPage.proceedToCheckout();

    await greenKartPage.placeOrder();

    await greenKartPage.selectCountry("India");

    await greenKartPage.verifyOrderPlaced();
  });

  test("Search products", async ({ page }) => {
    const greenKartPage = new GreenKartPage(page);

    await greenKartPage.navigateToApplication();

    await greenKartPage.searchProduct("Tomato");

    await greenKartPage.verifyProductVisible("Tomato");

    await greenKartPage.clearSearch();

    await expect(page.locator("//div[@class='product']")).toHaveCount(30);
  });
});
