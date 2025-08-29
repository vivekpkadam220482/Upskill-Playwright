import { test, expect } from '@playwright/test';

test.only('Login test', async ({ page }) => {
  const username = page.locator('#username');
  const password = page.locator('#password');
  const signIn = page.locator('#signInBtn');
 
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await username.fill('rahulshettyacadsdcscdssemy');
  await password.fill('learning2');
  await signIn.click();
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  
  await username.fill('');
  await password.fill('');
  await username.fill('rahulshettyacademy');
  await password.fill('learning');
  await signIn.click();

// CSS Selector  
// let outPut = await page.locator(".card-title a").first().textContent();

// Xpath
let outPut = await page.locator("//app-card[1]//h4/a").first().textContent();

if (outPut == "iphone X") console.log("Test case passed");
});