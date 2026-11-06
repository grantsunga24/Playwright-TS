// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Maximum time allowed for one complete test
  timeout: 30000,

  // Maximum time allowed for an assertion
  expect: {
    timeout: 30000,
  },

  // Allow test files to run at the same time
  fullyParallel: true,

  // Prevent test.only from accidentally running in CI
  forbidOnly: false,
  retries: 0,
  workers: undefined,

  // Generate an HTML report
  reporter: 'html',

  // Shared settings for every browser
  use: {
    trace: 'on-first-retry',
    headless: false
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],

        // Actual stable Google Chrome installed on your computer
        channel: 'chrome',
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],

        // Actual stable Microsoft Edge installed on your computer
        channel: 'msedge',
      },
    },

    {
      name: 'Firefox',
      use: {
        // Playwright-compatible Firefox build
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'Safari WebKit',
      use: {
        // Playwright WebKit using Safari-like desktop settings
        ...devices['Desktop Safari'],
      },
    },
  ],
});