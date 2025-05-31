import { Page, expect } from '@playwright/test';
import { fillInput, solveCaptchaIfVisible } from '../utils/helpers';
import { data } from '../interfaces/data.interface';

export class ChallengePage {
  constructor(private page: Page) {}

  async completeChallengeFlow(data: data[]): Promise<void> {
    //destructure the page from the class instance
    // to avoid repeating 'this.page' in the code
    const { page } = this;

    //Start Challenge
    await page.getByRole('button', { name: 'Start', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Submit', exact: true })).toBeVisible();

    //Fill in the form with data from the JSON file
    for (const entry of data) {
      await fillInput(page, 'EIN', entry.employer_identification_number);
      await fillInput(page, 'Sector', entry.sector);
      await fillInput(page, 'Company Name', entry.company_name);
      await fillInput(page, 'Automation Tool', entry.automation_tool);
      await fillInput(page, 'Annual Saving', entry.annual_automation_saving);
      await fillInput(page, 'Address', entry.company_address);
      await fillInput(page, 'Date', entry.date_of_first_project);

      //Check for captcha and solve if visible before submitting
      await solveCaptchaIfVisible(page);
      await page.getByRole('button', { name: 'Submit', exact: true }).click();
    }
  }
}