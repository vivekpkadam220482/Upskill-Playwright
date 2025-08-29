import { test, expect } from '@playwright/test';

test.only('Login test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill('rahulshettyaasacacademy');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();
  // console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
await page.locator('#username').fill('');
await page.locator('#username').fill('rahulshettyacademy');
await page.locator('#signInBtn').click();
let outPut = await page.locator(".card-title a").first().textContent();
if (outPut == "iphone X") console.log("Test case passed");
});
