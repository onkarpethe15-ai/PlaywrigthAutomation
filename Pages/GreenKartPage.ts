import { Page, Locator, expect } from "@playwright/test";

export class GreenKartPage {
  readonly page: Page;

  readonly searchInput: Locator;
  readonly cartIcon: Locator;
  readonly cartInfo: Locator;
  readonly proceedToCheckoutBtn: Locator;
  readonly placeOrderBtn: Locator;
  readonly countryDropdown: Locator;
  readonly checkboxTerms: Locator;
  readonly proceedbtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = page.locator(".search-keyword");
    this.cartIcon = page.locator(".cart-icon");
    this.cartInfo = page.locator(".cart-info");
    this.proceedToCheckoutBtn = page.locator("text=PROCEED TO CHECKOUT");
    this.placeOrderBtn = page.locator("text=Place Order");
    this.countryDropdown = page.locator("select");
    this.checkboxTerms = page.locator("input[type='checkbox']");
    this.proceedbtn = page.locator("text=Proceed");
  }

  async navigateToApplication() {
    await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .locator(".product")
      .filter({ hasText: productName });

    await product.locator("text=ADD TO CART").click();
  }

  async verifyProductVisible(productName: string) {
    await expect(
      this.page.locator(".product").filter({ hasText: productName }),
    ).toBeVisible();
  }

  async verifyCartCount(count: string) {
    await expect(this.cartInfo).toContainText(count);
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async removeProduct(productName: string) {
    const cartPreview = this.page
      .locator(".cart-preview")
      .filter({ hasText: productName });

    await cartPreview.locator("//a[@class='product-remove']").click();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator(".cart-preview")).toContainText(productName);
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }

  async increaseQuantity() {
    await this.page.locator(".increment").first().click();
  }

  async decreaseQuantity() {
    await this.page.locator(".decrement").first().click();
  }

  async verifyTotalAmountVisible() {
    await expect(this.page.locator("p.amount").first()).toBeVisible();
  }

  async selectCountry(country: string) {
    await this.countryDropdown.selectOption(country);
    await this.checkboxTerms.check();
    await this.proceedbtn.click();
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }

  async verifyOrderPlaced() {
    await expect(this.page.locator(".wrapperTwo")).toContainText("Thank you");
  }
}
