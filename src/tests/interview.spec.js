import {test ,expect} from '@playwright/test'
test("testing paractices" , async({page})=>{

    page.goto("https://www.webpagetest.org/")

    const dropdown1 = await page.locator("#w-dropdown-toggle-4")
    await dropdown1.click();
    
    await page.locator('//a[@role="option" and text()="Europe"]').click()
    await expect(dropdown1).toHaveText("Europe")

    const dropdown2 = await page.locator("#w-dropdown-toggle-5")
    await dropdown2 .click()
    await page.locator('//a[@role="option" and text()="Desktop"]').click()
    await expect(dropdown2).toHaveText("Desktop")
   
  await page.locator('//div[text()="Solutions"]').nth(1).hover()
  await page.waitForTimeout(2000)
})