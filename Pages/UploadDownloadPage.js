import { expect } from "@playwright/test";
import { writeXl } from "../Utils/ExcelUtils";

class UploadDownloadPage {
  constructor(page) {
    this.page = page;
    this.downloadBtn = page.getByRole("button", {
      name: "Download",
    });

    this.fileInput = page.locator("#fileinput");

    this.updatedCell = page.locator(
      "//div[@id='row-0']/div[@data-column-id='4']/div",
    );
  }

  async goto() {
    await this.page.goto(
      "https://rahulshettyacademy.com/upload-download-test/index.html",
    );
  }

  async downloadExcel() {
    await this.downloadBtn.click();
  }

  async updateExcel(filepath, valueToChange, valueUpdateOf) {
    await writeXl(filepath, valueToChange, valueUpdateOf);
  }

  async uploadExcel(filepath) {
    await this.fileInput.setInputFiles(filepath);
  }

  async verifyUpdatedValue(expectedValue) {
    await expect(this.updatedCell).toHaveText(expectedValue);
  }
}
export { UploadDownloadPage };
