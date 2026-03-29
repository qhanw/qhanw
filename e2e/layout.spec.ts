import { test, expect } from "@playwright/test";

const { beforeEach } = test;

beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should render header", async ({ page }) => {
  const nav = page.locator("header nav");

  await expect(nav.getByText("Blog")).toBeVisible();
  await nav.getByText("Blog").click();
  await expect(page).toHaveTitle("Blog - Qhan W");
  await expect(page.getByText(/Total\s+(\d+)\s+Posts/)).toBeVisible();

  await expect(nav.getByText("Code Snippets")).toBeVisible();
  await nav.getByText("Code Snippets").click();
  await expect(page).toHaveTitle("Code Snippets - Qhan W");
  await expect(page.getByText(/Total\s+(\d+)\s+Code\sSnippets/)).toBeVisible();

  expect(nav.getByText("Projects")).toBeVisible();
  await nav.getByText("Projects").click();
  await expect(page).toHaveTitle("Projects - Qhan W");
  await expect(page.getByText("MEET48")).toBeVisible();

  expect(nav.getByText("Bizk")).toBeVisible();
});

test("should render footer", async ({ page }) => {
  await expect(
    page.getByText("©2022-2026 Qhan W. All Rights Reserved"),
  ).toBeVisible();
  await expect(page.getByText("CC BY-NC-SA 4.0")).toBeVisible();
});
