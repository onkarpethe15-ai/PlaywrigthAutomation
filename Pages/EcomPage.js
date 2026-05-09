import { expect } from "@playwright/test";
class EcomPage {
  constructor(page) {
    this.page = page;
    // this is list of locators

    this.emailinput = page.locator("#userEmail");
    this.passfiled = page.locator("#userPassword");
    this.submitbtn = page.locator("input#login");
    this.elements = page.locator("//div[@class='card-body']");
    this.addToCartbtn = page.locator("//button[contains(text(),' Cart ')]");
    this.cartnavbar = page.locator("//button[contains(text(),' Cart ')]");
    this.cartItem = page.locator("div.cartSection h3");
    this.checkoutbth = page.locator("//button[text()='Checkout']");
    this.cvvFiled = page.locator(
      "//div[contains(text(),'CVV')]/following-sibling::input",
    );
    this.nameFiled = page.locator(
      "//div[contains(text(),'Name on Card')]/following-sibling::input",
    );
    this.countryFiled = page.locator("//input[@placeholder='Select Country']");
    this.countryOpt = page.locator(
      "//button[@class='ta-item list-group-item ng-star-inserted'][2]",
    );
    this.placeorderbtn = page.locator("//a[contains(text(),'Place')]");
    this.purchaseidb = page.locator("label.ng-star-inserted");
    this.navorder = page.locator("//button[contains(text(),'ORDER')]");
    this.order_id = page.locator("tr.ng-star-inserted th");
  }

  // Methods
  async goto() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }
  async login(userNamne, passWord) {
    await this.emailinput.fill(userNamne);
    await this.passfiled.fill(passWord);
    await this.submitbtn.click();
  }

  async addToCart(itemtoadd) {
    const count = await this.elements.count();
    for (let i = 0; i < count; i++) {
      const texts = await this.elements.nth(i).locator("h5").textContent();
      console.log(texts);

      if (texts.trim() === itemtoadd) {
        await this.elements
          .nth(i)
          .locator("//button[contains(text(),' Add To Cart')]")
          .click();
        break;
      }
    }
    await this.cartnavbar.click();

    await expect(this.cartItem).toHaveText(itemtoadd);
  }

  async performCheckout() {
    await this.checkoutbth.click();
    await this.cvvFiled.fill("456");
    await this.nameFiled.fill("Onkar Deepakrao Pethe");

    await this.countryFiled.pressSequentially("Ind");

    await this.countryOpt
      // .waitFor()
      .click();

    await this.placeorderbtn.click();
    await this.page.waitForTimeout(10000);

    const purchaseid = await this.purchaseidb.textContent();
    const refactor_id = purchaseid.split("|");
    const trim_id = refactor_id[1].trim();
    console.log(trim_id);

    await this.navorder.click();

    await this.page.waitForSelector("tr.ng-star-inserted");
    const order_id = this.page.locator("tr.ng-star-inserted th");
    const ele_count = await order_id.count();
    for (let i = 0; i < ele_count; i++) {
      const temp = (await order_id.nth(i).textContent())?.trim();
      console.log(temp);
      if (trim_id === temp) {
        console.log(temp + " " + "Found in a list");
        break;
      }
    }
  }
}

export { EcomPage };
