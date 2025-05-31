import { Page, expect } from '@playwright/test';

export async function fillInput(page: Page, label: string, value: string): Promise<void> {
  const visibleLabel = page.locator(`div.content:has-text(\"${label}\"):visible`).first();
  await expect(visibleLabel).toBeVisible();

  const container = visibleLabel.locator(
    'xpath=ancestor::div[contains(@class, "bubble-element") and contains(@class, "Group")][1]'
  );

  const input = container.locator('input:visible').first();
  await expect(input).toBeVisible({ timeout: 5000 });
  await input.fill(value);
}

export async function solveCaptchaIfVisible(page: Page): Promise<void> {
  const captchaButton = page.getByRole('button', { name: 'presentation', exact: true });
  if (await captchaButton.isVisible()) {
    await captchaButton.click();
    await captchaButton.waitFor({ state: 'hidden' });
  }
}