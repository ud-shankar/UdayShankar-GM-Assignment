import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  workers: 4,
  retries:3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  use: {
    headless:true,
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        launchOptions: {
          slowMo:1000
        }
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        launchOptions: {
          slowMo:1000 
        }
      },
    },
  ],
});
