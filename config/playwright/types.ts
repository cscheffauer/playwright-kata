import type { Locator, Page, PageScreenshotOptions } from '@playwright/test';

export type ScreenShotOptions = PageScreenshotOptions & {
  element?: Locator;
  assertionAfterSwitchingDirection?: (page: Page) => Promise<void>;
};
