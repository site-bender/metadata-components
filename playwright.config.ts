import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'http://localhost:5556',
    trace: 'off', // less verbose
  },
  reporter: [['dot'], ['html', { outputFolder: 'playwright-report' }]], // less verbose
})
