import { test as base } from '@playwright/test';
import MainPage from './Main.page';

type Options = {
};

type Fixtures = {
  /**
   * mainPage fixture
   */
  mainPage: MainPage;
};

// Extend base test by providing our fixtures based on Page Object Models
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<Fixtures & Options>({
  mainPage: async ({ page }, use, testInfo) => {
    const mainPage = new MainPage(page, testInfo);

    // navigate to the baseURL at the beginning
    await mainPage.setup();

    // Use the fixture value in the test:
    await use(mainPage);

    // Clean up at the end of the test:
    await mainPage.tearDown();
  },
});

export { MainPage };
