# Playwright Testing

This project uses Playwright for end-to-end testing with a focus on accessibility testing using axe-core.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### All Tests
```bash
npm run test:e2e
```

### Tests with UI
```bash
npm run test:e2e:ui
```

### Debug Mode
```bash
npm run test:e2e:debug
```

### Specific Test File
```bash
npx playwright test tests/accessibility.spec.ts
```

### Specific Test
```bash
npx playwright test -g "homepage should meet accessibility standards"
```

## Test Structure

- `tests/accessibility.spec.ts` - Accessibility tests using axe-core
- `tests/smoke.spec.ts` - Basic functionality and smoke tests
- `tests/helpers/accessibility.ts` - Reusable accessibility testing utilities

## Accessibility Testing

The accessibility tests use axe-core to automatically detect common accessibility issues:

- **WCAG 2.1 AA compliance** - Automated checks for accessibility standards
- **Heading structure** - Ensures proper heading hierarchy
- **Image alt text** - Verifies all images have descriptive alt attributes
- **Form labels** - Checks that form inputs have proper labels
- **Color contrast** - Basic color contrast validation
- **Keyboard navigation** - Tests tab navigation and focus management
- **ARIA attributes** - Validates proper ARIA implementation

## CI Integration

The Playwright tests run automatically in CI after the build job completes successfully. The CI workflow:

1. Builds the application
2. Runs Playwright tests across multiple browsers
3. Generates HTML reports for test results
4. Fails the build if accessibility violations are found

## Local Development

When developing locally, you can:

1. Run tests in watch mode to see results as you make changes
2. Use the UI mode for interactive debugging
3. Run specific tests to focus on particular functionality
4. Use the accessibility helper to test new components

## Adding New Tests

When adding new tests:

1. Follow the existing test structure and naming conventions
2. Use the `AccessibilityHelper` class for accessibility-related checks
3. Include both functional and accessibility testing
4. Test across different viewport sizes for responsive design
5. Add appropriate test IDs or selectors to your components

## Troubleshooting

### Common Issues

- **Browser installation**: Run `npx playwright install` if browsers aren't found
- **Port conflicts**: Ensure port 3000 is available for the test server
- **Timeout issues**: Increase timeout values in `playwright.config.ts` if needed
- **Accessibility violations**: Check the test output for specific violation details

### Debug Mode

Use `npm run test:e2e:debug` to run tests in debug mode, which will:
- Open the browser in headed mode
- Pause execution on failures
- Allow step-by-step debugging
- Show the Playwright Inspector
