import { test } from "../../..//fixtures/DataFixtures";
import { UploadDownloadPage } from "../../../pages/upload-download/UploadDownloadPage";
import { PomManager } from "../../../pages/manager/PomManager";

test("File Upload And Download", async ({ page, TestData, logger }) => {
  const pomanager = new PomManager(page);

  const uploadPage = pomanager.get_UploadDownloadPage();

  await uploadPage.goto();

  await uploadPage.downloadExcel();

  await uploadPage.updateExcel(
    TestData.filepath,
    TestData.valueToChange,
    TestData.valueUpdateOf,
  );

  logger("excel data updated");

  await uploadPage.uploadExcel(TestData.filepath);

  logger("File upload completed");

  await uploadPage.verifyUpdatedValue(TestData.valueToChange);
});
