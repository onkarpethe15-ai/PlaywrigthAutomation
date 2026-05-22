import { expect, Locator, Page } from "@playwright/test";

import { writeXl } from "../Utils/ExcelUtils";

class UploadDownloadPage {
  page: Page;

  downloadBtn: Locator;
  fileInput: Locator;
  updatedCell: Locator;

  constructor(page: Page) {
    this.page = page;

    this.downloadBtn = page.getByRole("button", {
      name: "Download",
    });

    this.fileInput = page.locator("#fileinput");

    this.updatedCell = page.locator(
      "//div[@id='row-0']/div[@data-column-id='4']/div",
    );
  }

  async goto(): Promise<void> {
    await this.page.goto(
      "https://rahulshettyacademy.com/upload-download-test/index.html",
    );
  }

  async downloadExcel(): Promise<void> {
    await this.downloadBtn.click();
  }

  async updateExcel(
    filepath: string,
    valueToChange: string,
    valueUpdateOf: string,
  ): Promise<void> {
    await writeXl(filepath, valueToChange, valueUpdateOf);
  }

  async uploadExcel(filepath: string): Promise<void> {
    await this.fileInput.setInputFiles(filepath);
  }

  async verifyUpdatedValue(expectedValue: string): Promise<void> {
    await expect(this.updatedCell).toHaveText(expectedValue);
  }
}

export { UploadDownloadPage };
