import { EcomPage } from "./EcomPage";
import { UploadDownloadPage } from "./UploadDownloadPage";

class PomManager {
  constructor(page) {
    this.page = page;
  }

  get_EcomPage() {
    const obj_EcomPage = new EcomPage(this.page);
    return obj_EcomPage;
  }

  get_UploadDownloadPage() {
    const uploadPage = new UploadDownloadPage(this.page);
    return uploadPage;
  }
}
export { PomManager };
