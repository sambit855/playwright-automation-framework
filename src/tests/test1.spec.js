import {test,expect} from '@playwright/test'
test("Test1",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
const pagetitle = await page.title()
console.log(pagetitle)

await page.locator('#email').fill("SambitKlumarMoahapatra@gamil.com")

const multicheckbox = ['#sunday','#monday']
 for(const check of multicheckbox)
 {
   await page.locator(check).check()
 }

 await page.selectOption('#country',{label : 'United Kingdom'})

await page.selectOption('#colors', ['Red', 'Blue', 'Green']);

await page.locator('#datepicker').click();
await expect(page.locator('#ui-datepicker-div')).toBeVisible();

const expectedYear = "2029";
const expectedMonth = "August";
const expectedDate = "26";

while (true) {
  const currentMonth = (await page.locator('.ui-datepicker-month').textContent()).trim();
  const currentYear = (await page.locator('.ui-datepicker-year').textContent()).trim();

  if (currentMonth === expectedMonth && currentYear === expectedYear) {
    break;
  }

  await page.locator("//a[contains(@class,'ui-datepicker-next')]").click();
}

await page.locator(`a.ui-state-default:text-is("${expectedDate}")`).click()

})