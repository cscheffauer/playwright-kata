import { Page, TestInfo } from '@playwright/test';
import Accessibility from './utils/accessibility';
import VisualRegression from './utils/visual-regression';

interface MainPage {
  accessibility: Accessibility;
  visualRegression: VisualRegression;
  page: Page;
  testInfo: TestInfo;
}

/**
 * Main Page Object Model
 *
 * This object model includes basic functionalities like setup, teardown, mount, etc.
 * used for this Kata
 */
class MainPage {
  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;

    // creates utility objects on main page and inject dependencies:
    this.accessibility = new Accessibility(this.page, this.testInfo);
    this.visualRegression = new VisualRegression(this.page);
  }

  /**
   * **Setup function**
   *
   * to run before the test to navigate correctly
   */
  async setup() {
    await this.navigate();
  }

  /**
   * **TearDown function**
   *
   * to run after the test
   */
  async tearDown() {
    await this.page.close();
  }

  /**
   * **Navigate function**
   *
   * Path urls are allowed
   *
   * If no url provided, it navigates to baseURL
   *
   * - Go to the provided url
   * - Await till page has been loaded
   */
  async navigate(url?: string) {
    await this.page.goto(url ?? '');
  }
}
export default MainPage;
