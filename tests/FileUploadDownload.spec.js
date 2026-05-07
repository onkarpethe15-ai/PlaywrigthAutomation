import { test, expect } from "@playwright/test";
import { writeXl } from "../Utils/ExcelUtils";

test("File Upload And Download", async ({ page }) => {
  let valtochange = "150720";
  let filepath = "C:\\Users\\asuso\\Downloads\\download.xlsx";
  const valueupdateof = "Mango";
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html",
  );
  await page.getByRole("button", { name: "Download" }).click();
  await writeXl(filepath, valtochange, valueupdateof);

  await page.locator("#fileinput").setInputFiles(filepath);
  await expect(
    page.locator("//div[@id='row-0']/div[@data-column-id='4']/div"),
  ).toHaveText(valtochange);
});
