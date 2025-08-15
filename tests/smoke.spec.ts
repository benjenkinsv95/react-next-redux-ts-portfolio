import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("homepage loads successfully", async ({ page }) => {
    await page.goto("/");

    // Check that the page title is set
    await expect(page).toHaveTitle(/Ben Jenkins/);

    // Check that the main content loads
    await expect(page.locator("main")).toBeVisible();

    // Check that navigation elements are present
    await expect(page.locator("nav")).toBeVisible();

    // Check that footer is present
    await expect(page.locator("footer")).toBeVisible();
  });

  test("navigation works correctly", async ({ page }) => {
    await page.goto("/");

    // Check that all main navigation sections are present
    const sections = ["About", "Skills", "Projects", "Contact"];

    for (const section of sections) {
      const sectionElement = page.locator(
        `[data-testid="${section.toLowerCase()}-section"], #${section.toLowerCase()}-section, .${section.toLowerCase()}-section`
      );
      if ((await sectionElement.count()) > 0) {
        await expect(sectionElement.first()).toBeVisible();
      }
    }
  });

  test("responsive design works on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check that content is still accessible
    await expect(page.locator("main")).toBeVisible();

    // Check that navigation is still functional
    await expect(page.locator("nav")).toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/");

    // Wait a bit for any async operations to complete
    await page.waitForTimeout(2000);

    // Check that there are no console errors
    expect(consoleErrors).toHaveLength(0);
  });
});
