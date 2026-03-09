const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')

test('login test', async ({ page }) => {

 const login = new LoginPage(page)

 await page.goto("https://www.google.com")

 await login.login("admin","1234")

})