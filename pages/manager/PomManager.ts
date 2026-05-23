import { Page } from "@playwright/test";

import { EcomPage } from "../ecommerce/EcomPage";

import { UploadDownloadPage } from "../upload-download/UploadDownloadPage";

class PomManager {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get_EcomPage(): EcomPage {
    const obj_EcomPage = new EcomPage(this.page);

    return obj_EcomPage;
  }

  get_UploadDownloadPage(): UploadDownloadPage {
    const uploadPage = new UploadDownloadPage(this.page);

    return uploadPage;
  }
}

export { PomManager };
