import { test, expect, chromium } from '@playwright/test';

test("test multitab", async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto("https://www.programiz.com/javascript/online-compiler/");

  await expect(page1).toHaveTitle("Online JavaScript Compiler (Editor) - Programiz")

  //1st listing

  const promiesPage =  context.waitForEvent ('page')
  await page1.locator("//a[@title='Online Java Compiler' and contains(@class,'change-lang-btn')]").click()

  const newpage = await promiesPage;

  const page2Title = await newpage.title()
  console.log(page2Title)
  

});