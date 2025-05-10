# Instructions

## Setup and basic test writing

- Follow the setup guide in the `README.md` file
- Execute the existing example test (`tests/example.e2e-test.ts`) and try to understand the `has title` and `get started link` tests in the test file
- Write tests for the following user stories:

```gherkin
Given I have the playwright.dev website open
When I click on the "Docs" nav item on top
Then I do see the Installation heading on the screen
```

```gherkin
Given I have the playwright.dev / Installation site open (https://playwright.dev/docs/intro)
When I click on the "Home" button in the Breadcrumbs on top
Then I get redirected to the playwright.dev home site again
```

```gherkin
Given I have the playwright.dev website open
When I press "CMD + K"
Then the search overlay should become visible 
And the focus moves into the input field
```

- Structure your tests with the help of steps, using the [test.step](https://playwright.dev/docs/api/class-test#test-step) feature. Check the report afterwards to see how steps improve the readability of the report.

## Accessibility and Visual Regression Testing

### Accessibility

- Write tests for the following user stories:

```gherkin
Given I have the playwright.dev website open
And I navigate to the API top level nav item by keyboard (pressing tab)
And I press Enter
When the "Playwright Library" heading is visible
And I run the accessibility report by axe-core
Then I do not want to have any accessibility issues on the page
```

```gherkin
Given I have the playwright.dev website open
When I navigate to the API top level search input (top right) by keyboard (pressing tab multiple times)
Then the search overlay should become visible
And the focus moves into the input field

Given the search overlay is visible on the playwright.dev page
And the input is focused
When I type the word "Keyboard"
And press Enter
Then the url should change to https://playwright.dev/docs/api/class-keyboard
And the heading "Keyboard" should be visible
```

- Inspect the axe-core Accessibility report which is attached to the Playwright report
- Skip e2e tests by adding [fixme](https://playwright.dev/docs/api/class-test#test-fixme) to the tests which are failing cause of accessibility issues.

### Visual Regression

- Write tests for the following user stories:

```gherkin
Given I have the playwright.dev website open
When I click on the "Commmunity" nav item on top
Then the "Welcome" heading should become visible
And the screen should look as expected by the screenshot taken.
```

```gherkin
Given I have the playwright.dev website open
And the screen should look as expected by the screenshot taken
When I click on the "Docs" Nav Item on the top left
And I click on the Playwright Logo on the top left
Then the screen should look the exact same way as in the "Given"
```

- Inspect the newly created screenshots and verify they do look as expected.
- Run the tests multiple times, make adjustments to tests and see how the adjustments are impacting the screenshots.

## Advanced topics

- Write tests for different url's & think about user stories on your own
- Try advanced input testing, i.e. [Scrolling](https://playwright.dev/docs/input#scrolling), [Drag & Drop](https://playwright.dev/docs/input#drag-and-drop)
- Implement [Network testing](https://playwright.dev/docs/network), i.e. waiting for certain network requests to get fulfilled
- Revisit the already written tests and make them more stable / accurate by adding more [assertions](https://playwright.dev/docs/test-assertions)
- Write tests which are opening multiple tabs (Pages) in the browser, see [here](https://playwright.dev/docs/pages)
- Create [Aria snapshots](https://playwright.dev/docs/aria-snapshots#aria-snapshots) for better accessibility regression testing.
- Advanced user stories which can be tested on the **playwright.dev** site:

```gherkin
Given I have the playwright.dev website open
When I click on the "Docs" nav item on top
And I click on the "Getting stated - VS Code" nav item on the side
Then I do get redirected to the https://playwright.dev/docs/getting-started-vscode site
And a embedded video called "Getting started with Playwright and VS Code" gets visible
```

```gherkin
Given I have the https://playwright.dev/docs/getting-started-vscode site open
When I click on the "Video" button which overlays the video
Then a iframe with youtube becomes visible
And the video in the iframe starts to run
```
