import { test, expect, APIResponse } from "@playwright/test";
import { writeXl } from "../Utils/ExcelUtils";

let api_token: string;

test("Test Login Api", async ({ request }) => {
  const response: APIResponse = await request.post(
    "https://api.eventhub.rahulshettyacademy.com/api/auth/login",
    {
      data: {
        email: "mailtonkar@gmail.com",
        password: "Panda@2025",
      },
    }
  );

  expect(response.status()).toBe(200);

  const body: { token: string } = await response.json();

  console.log(body);

  api_token = body.token;

  console.log(api_token);
});

test("List events", async ({ request }) => {
  const response: APIResponse = await request.get(
    "https://api.eventhub.rahulshettyacademy.com/api/events",
    {
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    }
  );

  const body: any = await response.json();

  console.log(body.data);
  console.log(body.data[0].id);

  expect(response.statusText()).toBe("OK");
});