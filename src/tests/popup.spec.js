import { test, expect, chromium } from '@playwright/test';

test('popUp', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto("https://testautomationpractice.blogspot.com/");

//   // ✅ Popup handling (correct)
//   const popupPromise = page1.waitForEvent("popup");
//   await page1.locator("#PopUp").click();
//   const popup = await popupPromise;

//   console.log(await popup.title());

//   // ✅ New tab from popup
//   const pagePromise = context.waitForEvent("page");
//   await popup.locator("//a[text()='Register now!']").click();
//   const newPage = await pagePromise;

//   console.log(await newPage.title());


  await page1.locator("#Wikipedia1_wikipedia-search-input").click({'button':"right"})
  await page1.waitForTimeout(3000)

});