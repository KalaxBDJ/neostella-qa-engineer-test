import { Page, expect } from '@playwright/test';

export class ResultPage {
  constructor(private page: Page) {}

  async verifyChallengeResult(): Promise<void> {
    await this.page.getByRole('button', { name: 'Santiago', exact: true }).click();
    await expect(this.page.getByText('100%', { exact: true })).toBeVisible();
  }
}