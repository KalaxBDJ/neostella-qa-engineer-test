import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ChallengePage } from '../pages/challenge-page';
import { ResultPage } from '../pages/result-page';
import challengeData from '../data/data.json';

//Environment variables helper
import { getEnvVariable } from '../utils/env';

test('User can complete automation challenge', async ({ page }) => {
  await page.goto('https://www.theautomationchallenge.com');

  const loginPage = new LoginPage(page);
  const challengePage = new ChallengePage(page);
  const resultPage = new ResultPage(page);

  await loginPage.loginUser(getEnvVariable('AUTOMATION_CHALLANGE_EMAIL'), getEnvVariable('AUTOMATION_CHALLANGE_PASSWORD'));
  await challengePage.completeChallengeFlow(challengeData);
  await resultPage.verifyChallengeResult();
});