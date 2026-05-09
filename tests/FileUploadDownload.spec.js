import { test } from "@playwright/test";
import { UploadDownloadPage } from "../Pages/UploadDownloadPage";
import { PomManager } from "../Pages/PomManager";

test("File Upload And Download", async ({ page }) => {
  const pomanager = new PomManager(page);
  const uploadPage = pomanager.get_UploadDownloadPage();

  const valueToChange = "150720";
  const filepath = "C:\\Users\\asuso\\Downloads\\download.xlsx";
  const valueUpdateOf = "Mango";

  await uploadPage.goto();

  await uploadPage.downloadExcel();

  await uploadPage.updateExcel(filepath, valueToChange, valueUpdateOf);

  await uploadPage.uploadExcel(filepath);

  await uploadPage.verifyUpdatedValue(valueToChange);
});
