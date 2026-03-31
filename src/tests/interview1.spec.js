import {test,expecte} from '@playwright/test'
test("launch the browser",async ({page})=>{

 await page.goto("https://www.google.com/")

 await page.locator('//textarea[@aria-label="Search"]').fill("Playwright Automation")


 const options =  await page.locator('//div[@aria-label="playwright automation testing"]')
 const countoptions = await options.count()
 for(let i = 0;i<countoptions;i++)
 {
    const textoptions = await options.nth(i).textContent()
    if(textoptions.includes("playwright automation testing"))
    {
       await textoptions.nth(i).click()
       break;
    }
 }

 

})