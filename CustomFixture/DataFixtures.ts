import { test as base } from "@playwright/test";

interface UploadTestData {
  valueToChange: string;
  filepath: string;
  valueUpdateOf: string;
}

type CustomFixtures = {
  TestData: UploadTestData;
  logger: (val: string) => void;
};

export const test = base.extend<CustomFixtures>({
  TestData: async ({}, use) => {
    const data: UploadTestData = {
      valueToChange: "150720",
      filepath: "C:\\Users\\asuso\\Downloads\\download.xlsx",
      valueUpdateOf: "Mango",
    };

    await use(data);
  },

  logger: async ({}, use) => {
    const logger = (val: string): void => {
      console.log(val);
    };

    await use(logger);
  },
});
