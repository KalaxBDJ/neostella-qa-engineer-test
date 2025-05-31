import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async loginUser(email: string, password: string): Promise<void> {
    const { page } = this;
    const signUpButton = page.getByRole('button', { name: 'SIGN UP OR LOGIN' });
    await expect(signUpButton).toBeVisible();
    await signUpButton.click();

    const orLoginButton = page.getByRole('button', { name: 'OR LOGIN', exact: true });
    await orLoginButton.isVisible()
    await orLoginButton.click();

    const emailInput = page.getByRole('textbox', { name: 'email' });
    await expect(emailInput).toBeVisible();
    await emailInput.fill(email);
    await page.getByRole('textbox', { name: 'password' }).fill(password);
    await page.getByRole('button', { name: 'LOG IN', exact: true }).click();

    await expect(page.getByRole('button', { name: 'Santiago', exact: true })).toBeVisible();
  }
}