import { test, expect } from "@playwright/test";
import { ok } from "node:assert";
import { request } from "node:http";
import { writeXl } from "../Utils/ExcelUtils";

let api_token;
test("Test Login Api", async ({ request }) => {
  const response = await request.post(
    "https://api.eventhub.rahulshettyacademy.com/api/auth/login",
    {
      data: {
        email: "mailtonkar@gmail.com",
        password: "Panda@2025",
      },
    },
  );
  await expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
  api_token = await body.token;
  console.log(api_token);
});

test("List events", async ({ request }) => {
  const response = await request.get(
    "https://api.eventhub.rahulshettyacademy.com/api/events",
    {
      headers: { Authorization: `Bearer ${api_token}` },
    },
  );
  const body = await response.json();
  console.log(body.data);
  console.log(body.data[0].id);
  await expect(response.statusText()).toBe("OK");
});
