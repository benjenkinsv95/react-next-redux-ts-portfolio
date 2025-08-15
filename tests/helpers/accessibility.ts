import { Page } from "@playwright/test";

export class AccessibilityHelper {
  constructor(private page: Page) {}

  /**
   * Inject axe-core into the page
   */
  async injectAxe() {
    try {
      // Check if axe is already loaded
      const axeExists = await this.page.evaluate(() => !!(window as any).axe);
      if (axeExists) {
        return;
      }

      // Inject axe-core script directly
      await this.page.evaluate(() => {
        if (!(window as any).axe) {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.2/axe.min.js";
          document.head.appendChild(script);
        }
      });

      // Wait for axe-core to load with a reasonable timeout
      await this.page.waitForFunction(() => !!(window as any).axe, {
        timeout: 5000,
      });
    } catch (error) {
      console.warn("Failed to inject axe-core:", error);
      // Continue without axe-core if injection fails
    }
  }

  /**
   * Run axe-core accessibility audit
   */
  async runAxeAudit(options?: any) {
    const results = await this.page.evaluate((opts) => {
      return (window as any).axe.run(opts);
    }, options);

    return results;
  }

  /**
   * Check for specific accessibility violations
   */
  async checkForViolations(rules?: string[]) {
    const results = await this.runAxeAudit({ rules });

    if (results.violations.length > 0) {
      console.log("Accessibility violations found:", results.violations);
    }

    return results.violations;
  }

  /**
   * Check heading structure
   */
  async checkHeadingStructure() {
    const headings = await this.page.locator("h1, h2, h3, h4, h5, h6").all();
    const structure: { level: number; text: string }[] = [];

    for (const heading of headings) {
      const tagName = await heading.evaluate((el) => el.tagName.toLowerCase());
      const level = parseInt(tagName.charAt(1));
      const text = await heading.textContent();

      structure.push({ level, text: text?.trim() || "" });
    }

    return structure;
  }

  /**
   * Check for proper alt text on images
   */
  async checkImageAltText() {
    const images = await this.page.locator("img").all();
    const results: { src: string; alt: string | null; hasAlt: boolean }[] = [];

    for (const image of images) {
      const src = await image.getAttribute("src");
      const alt = await image.getAttribute("alt");
      const hasAlt = alt !== null && alt.trim() !== "";

      results.push({ src: src || "", alt, hasAlt });
    }

    return results;
  }

  /**
   * Check form accessibility
   */
  async checkFormAccessibility() {
    const inputs = await this.page.locator("input, textarea, select").all();
    const results: {
      type: string;
      id: string | null;
      hasLabel: boolean;
      hasAriaLabel: boolean;
    }[] = [];

    for (const input of inputs) {
      const type = (await input.getAttribute("type")) || "text";
      const id = await input.getAttribute("id");
      const ariaLabel = await input.getAttribute("aria-label");

      let hasLabel = false;
      if (id) {
        const label = await this.page.locator(`label[for="${id}"]`).first();
        hasLabel = (await label.count()) > 0;
      }

      results.push({
        type,
        id,
        hasLabel,
        hasAriaLabel: !!ariaLabel,
      });
    }

    return results;
  }

  /**
   * Check color contrast (basic implementation)
   */
  async checkColorContrast() {
    const textElements = await this.page
      .locator("p, h1, h2, h3, h4, h5, h6, span, div")
      .filter({ hasText: /\S/ })
      .all();

    const results: {
      element: string;
      color: string;
      backgroundColor: string;
    }[] = [];

    for (const element of textElements) {
      const isVisible = await element.isVisible();
      if (isVisible) {
        const styles = await element.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            color: style.color,
            backgroundColor: style.backgroundColor,
          };
        });

        results.push({
          element: await element.evaluate((el) => el.tagName.toLowerCase()),
          color: styles.color,
          backgroundColor: styles.backgroundColor,
        });
      }
    }

    return results;
  }
}
