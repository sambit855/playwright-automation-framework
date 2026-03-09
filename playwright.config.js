//import defineConfig from '@playwright/test' module

import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './src/tests', // where  tests folder where execution heppen

  timeout: 30000,//default time to waiting for elements to perform action 

  expect: {
    timeout: 5000 // playwright will wait to  5sec for assertion to pass.
  },

  fullyParallel: true, //Run all tests at the same time to reduce execution time.

  retries: 1,//If a test fails, Playwright runs it one more time.

  workers: 2,//Run 2 tests at the same time to speed up execution.

  reporter: [ //Use three reporting formats at the same time: HTML, console list, and Allure.
    ['html'],
    ['allure-playwright']
  ],

  use: {

    headless: false,//Opens the browser with GUI (you can see the browser). Use true for CI/CD.

    screenshot: 'only-on-failure',//Take a screenshot only if the test fails. Saves space.

    video: 'retain-on-failure',//Records a video of the test and keeps it only if the test fails.


    trace: 'on-first-retry',//Captures a trace (DOM snapshots, network activity, actions) only on the first retry of a failed test.

    actionTimeout: 10000,//Maximum time to wait for a single action (like click, type) → 10 seconds.

    navigationTimeout: 15000//Maximum time to wait for page navigation (like page.goto) → 15 seconds.

  },

  projects: [

    {
      name: 'chromium',
     
    },

    {
      name: 'firefox',
      
    },

    {
      name: 'webkit',
     
    }

  ]

});

