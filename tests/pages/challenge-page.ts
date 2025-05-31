import { Page, expect } from '@playwright/test';
import { fillInput, solveCaptchaIfVisible } from '../utils/helpers';
import { data } from '../interfaces/data.interface';

export class ChallengePage {
  constructor(private page: Page) {}

  async completeChallengeFlow(data: data[]): Promise<void> {
    const { page } = this;

    await page.getByRole('button', { name: 'Start', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Submit', exact: true })).toBeVisible();

    for (const entry of data) {
      await fillInput(page, 'EIN', entry.employer_identification_number);
      await fillInput(page, 'Sector', entry.sector);
      await fillInput(page, 'Company Name', entry.company_name);
      await fillInput(page, 'Automation Tool', entry.automation_tool);
      await fillInput(page, 'Annual Saving', entry.annual_automation_saving);
      await fillInput(page, 'Address', entry.company_address);
      await fillInput(page, 'Date', entry.date_of_first_project);
      await solveCaptchaIfVisible(page);
      await page.getByRole('button', { name: 'Submit', exact: true }).click();
    }
  }
}