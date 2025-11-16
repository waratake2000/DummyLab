import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test("shows Amplify authenticator by default", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Create Next App/i);
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });
});
