import { expect } from '@playwright/test';
import { test } from '../config/playwright';

test.use({
  baseURL: 'https://playwright.dev',
});

test('has title', async ({ mainPage }) => {
  // Expect a title "to contain" a substring.
  await expect(mainPage.page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ mainPage }) => {
  // Click the get started link.
  await mainPage.page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    mainPage.page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

test.fixme('accessibility', async ({ mainPage }) => {
  // Check for accessibility violations.
  await mainPage.accessibility.checkForA11yViolations('main playwright site', true);
});

test.fixme('visual regression', async ({ mainPage }) => {
  // Check for visual regression.
  await mainPage.visualRegression.takeScreenshot('main playwright site');
});

