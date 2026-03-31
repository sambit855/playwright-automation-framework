import {test,expect, chromium} from '@playwright/test'

 

test('test multiTab', async()=>{
    //create browsercontext 
  const browser = await chromium.launch()
   const context = await browser.newContext()
   const page1 = await context.newPage()
   

   await page1.goto("https://www.programiz.com/javascript/online-compiler/")

   await page1.locator('a.change-lang-btn.sql').dblclick()

   await page1.waitForTimeout(3000)


   //neet to setup browsercontext in separte tab
   const pagepromise = context.waitForEvent('page')
   await page1.locator('a.change-lang-btn.sql').click()
   const newpage = await pagepromise;
})

test('Popup Test ', async()=>{

     const browser = await chromium.launch()
   const context = await browser.newContext()
   const page1 = await context.newPage()

   await page1.goto("https://github.com/")

})