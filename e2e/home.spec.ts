import { test, expect } from "@playwright/test";

const { beforeEach } = test;
beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should load successfully", async ({ page }) => {
  await expect(page).toHaveTitle("Qhan W");

  const description = await page
    .locator('meta[name="description"]')
    .getAttribute("content");

  await expect(description).toEqual("Qhan W 的个人博客网站");
  await expect(page.locator("body")).not.toBeEmpty();
});
