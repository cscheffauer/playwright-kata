/**
 * Accessibility constants
 *
 * WCAG_TAGS_TO_CHECK which should be checked,
 * see full list here (Axe-core Tags): https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
 * Note: WCAG Tags are cumulative, such that when confirming WCAG 2.2 AA,
 * the less strict tags have to be added as well, like wcag2a, wcag2aa, wcag21aa
 *
 * RULES_TO_DISABLE which should not be checked,
 * see full list here: https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
 *
 * INCLUSIONS and EXCLUSIONS are used to include or exclude specific html elements from the scan
 */
const ACCESSIBILITY = {
    WCAG_TAGS_TO_CHECK: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    RULES_TO_DISABLE: [],
    INCLUSIONS: [],
    EXCLUSIONS: [],
  };
  
  const DEFAULT_ACCESSIBILITY_SCAN_OPTIONS = {
    tags: ACCESSIBILITY.WCAG_TAGS_TO_CHECK,
    rules: ACCESSIBILITY.RULES_TO_DISABLE,
    exclusions: ACCESSIBILITY.EXCLUSIONS,
    inclusions: ACCESSIBILITY.INCLUSIONS,
  };
  
  const VISUAL_REGRESSION = {
    FILE_EXTENSION: 'png',
    THRESHOLD: 0,
    MAX_DIFF_PIXELS_RATIO: 0,
  };
  
  const CONSTANTS = {
    DEFAULT_ACCESSIBILITY_SCAN_OPTIONS,
    VISUAL_REGRESSION,
  };
  export default CONSTANTS;
  