# Cheatsheet

## CLI

More information on CLI can be found [here](https://playwright.dev/docs/test-cli).

### Running a test in terminal (basics)

```sh
# Run all tests, all browsers (headless):
yarn test

# Run all tests, a specific browser (headless):
yarn test:browsername # replace browsername with chrome, firefox, edge, safari

# Run a specific test file, all browsers (headless):
yarn test example.e2e-test.ts

# Run a specific test file, a specific browser (headless):
yarn test:browsername example.e2e-test.ts # replace browsername with chrome, firefox, edge, safari
```

### Running a test in terminal (args)

The following args can be used in combination with all the commands above:

```sh
# Run in headed mode
... --headed

# Run in UI mode
... --ui

# Run in Debug mode
... --debug
```

More information on debugging can be found [here](https://playwright.dev/docs/running-tests#debugging-tests).
More information on UI mode can be found [here](https://playwright.dev/docs/test-ui-mode).

### Opening report

```sh
# Open the test report (after running your tests):
yarn test:report
```

More information on the Trace viewer can be found [here](https://playwright.dev/docs/trace-viewer-intro).
