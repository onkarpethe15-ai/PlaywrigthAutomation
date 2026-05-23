import { test, expect, Page, APIRequestContext } from "@playwright/test";

async function LoginAs(
  page: Page,
  userName: string,
  passWord: string,
): Promise<void> {
  await page.goto("https://eventhub.rahulshettyacademy.com/");

  await page.getByPlaceholder("you@email.com").fill(userName);

  await page.getByLabel("Password").fill(passWord);

  await page.locator("#login-btn").click();
}

let data_id: number;
let api_token: string;

test("Test Login Api", async ({ request }) => {
  const response = await request.post(
    "https://api.eventhub.rahulshettyacademy.com/api/auth/login",
    {
      data: {
        email: "onkar.pethe@yahoo.com",
        password: "Panda@2025",
      },
    },
  );

  expect(response.status()).toBe(200);

  const body: { token: string } = await response.json();

  console.log(body);

  api_token = body.token;

  console.log(api_token);
});

test("create a new booking", async ({ request }) => {
  const response = await request.post(
    "https://api.eventhub.rahulshettyacademy.com/api/bookings",
    {
      headers: {
        Authorization: `Bearer ${api_token}`,
      },

      data: {
        eventId: 1,
        customerName: "Priya Sharma",
        customerEmail: "priya.sharma@email.com",
        customerPhone: "+91-9876543210",
        quantity: 1,
      },
    },
  );

  const body: any = await response.json();

  console.log(body);

  expect(response.status()).toBe(201);

  data_id = body.data.id;

  console.log(data_id);
});

test("Security testing test case", async ({ page }) => {
  await LoginAs(page, "onkar.pethe11@gmail.com", "Panda@2025");

  await page.waitForLoadState("networkidle");

  await page.goto(
    `https://eventhub.rahulshettyacademy.com/bookings/${data_id}`,
  );

  const msg_ele = page.locator("//h3[text()='Access Denied']");

  await expect(msg_ele).toHaveText("Access Denied");
});
