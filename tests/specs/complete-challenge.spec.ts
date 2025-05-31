import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ChallengePage } from '../pages/challenge-page';
import { ResultPage } from '../pages/result-page';
import challengeData from '../data/data.json';

test('User can complete automation challenge', async ({ page }) => {
    await page.goto('https://www.theautomationchallenge.com');

    //instantiate page objects
    const loginPage = new LoginPage(page);
    const challengePage = new ChallengePage(page);
    const resultPage = new ResultPage(page);

    //login user and complete challenge
    await loginPage.loginUser();
    await challengePage.completeChallengeFlow(challengeData);
    await resultPage.verifyChallengeResult();
});