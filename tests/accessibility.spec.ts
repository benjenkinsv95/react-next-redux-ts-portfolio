import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Tests", () => {
  test("homepage should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have any automatically detectable WCAG A or AA violations", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("basic accessibility checks should pass", async ({ page }) => {
    await page.goto("/");

    // Basic accessibility checks that don't require axe-core
    // Check for proper page title
    await expect(page).toHaveTitle(/Ben Jenkins/);

    // Check for main landmark
    const main = await page.locator("main");
    if ((await main.count()) > 0) {
      await expect(main.first()).toBeVisible();
    }

    // Check for navigation landmark
    const nav = await page.locator("nav");
    if ((await nav.count()) > 0) {
      await expect(nav.first()).toBeVisible();
    }

    // Check that all images have alt text
    const images = await page.locator("img").all();
    for (const image of images) {
      const alt = await image.getAttribute("alt");
      expect(alt).toBeTruthy();
    }

    // Check that all links have text content
    const links = await page.locator("a").all();
    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      expect(text?.trim() || ariaLabel).toBeTruthy();
    }
  });

  test("all pages should have proper heading structure", async ({ page }) => {
    await page.goto("/");

    // Check that there's only one h1
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // Check heading structure
    const headings = await page.locator("h1, h2, h3, h4, h5, h6").all();
    let currentLevel = 0;

    for (const heading of headings) {
      const tagName = await heading.evaluate((el) => el.tagName.toLowerCase());
      const level = parseInt(tagName.charAt(1));

      // Ensure headings don't skip levels (e.g., h1 -> h3)
      expect(level).toBeLessThanOrEqual(currentLevel + 1);
      currentLevel = level;
    }
  });

  test("keyboard navigation works correctly", async ({ page }, testInfo) => {
    await page.goto("/");

    // Check that we have interactive elements (excluding Next.js dev elements)
    const interactiveElements = await page
      .locator("a, button, input, textarea, select")
      .filter({
        hasNot: page.locator('[aria-label="Hide static indicator"]'),
      })
      .filter({
        hasNot: page.locator("nextjs-portal"),
      })
      .all();

    expect(interactiveElements.length).toBeGreaterThan(0);

    // Skip keyboard focus testing on mobile browsers
    // as they handle focus differently and don't support keyboard navigation the same way
    const isMobile = testInfo.project.name.includes("Mobile");
    if (isMobile) {
      // Just verify that interactive elements exist and are accessible on mobile
      const firstButton = page.locator("button").first();
      await expect(firstButton).toBeVisible();
      return;
    }

    // Test tab navigation through our actual interactive elements
    await page.keyboard.press("Tab");

    // Test that at least one interactive element is focusable
    let foundFocusableElement = false;
    for (const element of interactiveElements.slice(0, 5)) {
      // Test first 5 elements
      try {
        await element.focus();
        const isFocused = await element.evaluate(
          (el) => el === document.activeElement
        );
        if (isFocused) {
          foundFocusableElement = true;
          break;
        }
      } catch (_e) {
        // Element might not be focusable, continue
      }
    }

    expect(foundFocusableElement).toBe(true);
  });

  test("ARIA attributes are properly implemented", async ({ page }) => {
    await page.goto("/");

    // Check for common ARIA attributes using JavaScript evaluation
    const elementsWithAria = await page.evaluate(() => {
      const allElements = document.querySelectorAll("*");
      const ariaElements: { tagName: string; ariaAttributes: string[] }[] = [];

      for (const element of allElements) {
        const ariaAttributes: string[] = [];
        for (const attr of element.attributes) {
          if (attr.name.startsWith("aria-")) {
            ariaAttributes.push(attr.name);
          }
        }

        if (ariaAttributes.length > 0) {
          ariaElements.push({
            tagName: element.tagName.toLowerCase(),
            ariaAttributes,
          });
        }
      }

      return ariaElements;
    });

    // Ensure ARIA attributes have values
    for (const elementInfo of elementsWithAria) {
      for (const attr of elementInfo.ariaAttributes) {
        const element = await page.locator(`[${attr}]`).first();
        if ((await element.count()) > 0) {
          const value = await element.getAttribute(attr);
          expect(value).toBeTruthy();
        }
      }
    }
  });
});
