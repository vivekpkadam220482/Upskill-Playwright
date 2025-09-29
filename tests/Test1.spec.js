import { test, expect } from '@playwright/test';
import { wrap } from 'module';

//Test case 1: Login Test
/*test('Login test', async ({ page }) => {
  const username = page.locator('#username');
  const password = page.locator('#password');
  const signIn = page.locator('#signInBtn');
  const cardTitles = page.locator('.card-title a');
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
  let outPut = await page.locator(".card-title a").first().textContent();
  if (outPut == "iphone X") console.log("Test case passed");
  let newOutput = await cardTitles.allTextContents();
  console.log(newOutput);
});*/

//Test case 2: Static Dropdown
/*test('Select Static List', async ({ page }) => {
  const username = page.locator('#username');
  const password = page.locator('#password');
  const dropDown = page.locator("select.form-control ");
  const signIn = page.locator('#signInBtn');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await username.fill('rahulshettyacademy');
  await password.fill('learning');
  await dropDown.selectOption('consult');
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  expect(page.locator(".radiotextsty").last()).toBeChecked();
  const resultA = await page.locator(".radiotextsty").last().isChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  const isTermsChecked = await page.locator("#terms").isChecked();
  expect(isTermsChecked).toBeFalsy();
  const newTest = page.locator("[href*='qasummit']");
  await expect(newTest).toHaveAttribute('class', 'blinkingText');
});*/

//Test case 3: Child Window Handling
/*test('ChildPage NewTab', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const newTest = page.locator("[href*='documents-request']");
  await expect(newTest).toBeVisible();
  const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  newTest.click()
]);

  await newPage.waitForLoadState();
  const text = await newPage.locator(".red").textContent();
  const str1 = text.split("@");
  const str2 = str1[1].split(" ")[0];
  await page.locator("#username").fill(str2);
  // await page.pause();
  console.log(await page.locator("#username").inputValue());
});*/

/*
//Test case 4: E2E order placement
  test.only('Order Placement', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator("#userEmail").fill("vivek.p.kadam@gmail.com");
  await page.locator("#userPassword").fill("Testing@143");
  await page.locator("#login").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body").first().waitFor();
  // Add product to cart
  const productName = "ADIDAS ORIGINAL";
  const products = page.locator(".card-body");
  const productCount = await products.count();
  for (let i = 0; i < productCount; i++) {
  if (await products.nth(i).locator("b").textContent() === productName)
  {await products.nth(i).locator("text= Add To Cart").click();
    break;}
  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(bool).toBeTruthy();

//if (bool==true){console.log("Product is visible in the cart");}
  await page.locator("text=Checkout").click();
  
  await expect(page.locator(".user__name label")).toHaveText("vivek.p.kadam@gmail.com");

  await page.locator('input[type="text"]').first().fill('1234567890123456');
  await page.getByRole('combobox').first().selectOption('04');
  await page.getByRole('combobox').nth(1).selectOption('22');
  await page.locator('input[type="text"]').nth(1).fill('123');
  await page.locator('input[type="text"]').nth(2).fill('VIVEK KADAM');

  await page.locator("[placeholder*='Country']").pressSequentially("India");
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; i++) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  await page.locator(".action__submit").click();
  
//Verify order confirmation
  await page.locator(".hero-primary").waitFor();
  const confirmMessage = await page.locator(".hero-primary").textContent();
  expect(confirmMessage).toBe(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");
  
       
  for (let i=0; i<await rows.count(); i++) {
  const rowOrderId = await rows.nth(i).locator("th").textContent();
  if (orderId.includes(rowOrderId)) {
    await rows.nth(i).locator("button").first().click();
    break;} 
}
//Verify order details ID
  const orderDetailsId = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderDetailsId)).toBeTruthy();
});*/

/*
//Test case 5: Special selectors using getByLabel, getByPlaceholder, getByRole
  test.only('Special Locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.locator(".form-control[name='name']").fill("Vivek");
  await page.locator("input[name='email']").fill("vivekpkadam@gmail.com:");
  await page.getByPlaceholder("Password").fill("123456");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByLabel('Employed').check();
  await page.locator('input[name="bday"]').fill('1982-04-22');
  await page.getByRole("button", {name: "Submit"}).click();
  expect(page.getByText('× Success! The Form has been').click());
  await page.getByRole('link', {name: 'Shop'}).click();
  await page.pause();
  await page.locator('app-card').filter({ hasText: 'Blackberry' }).locator('text=Add').click();
  await page.locator('app-card').filter({ hasText: 'Nokia Edge' }).getByRole('button', {name: 'Add'}).click();
  await page.getByRole('link', {name: 'Checkout »'}).click();
  const bool = await page.locator("h4:has-text('Nokia Edge')").isVisible();
  expect(bool).toBeTruthy();  
});*/

//Test case 6: E2E order placement - simplified
  test.only('Simplified Order Placement', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByPlaceholder('email@example.com').fill('vivek.p.kadam@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Testing@143');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body").first().waitFor();
  await page.locator(".card-body").filter({ hasText: 'ADIDAS ORIGINAL' }).locator("text= Add To Cart").click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.locator("div li").first().waitFor();
  expect(await page.locator("div li").getByText('ADIDAS ORIGINAL').isVisible()).toBeTruthy();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.locator(".user__name label")).toHaveText("vivek.p.kadam@gmail.com");
  await page.locator('input[type="text"]').first().fill('1234567890123456');
  await page.getByRole('combobox').first().selectOption('04');
  await page.getByRole('combobox').nth(1).selectOption('22');
  await page.locator('input[type="text"]').nth(1).fill('123');
  await page.locator('input[type="text"]').nth(2).fill('VIVEK KADAM');
  await page.locator("[placeholder*='Country']").pressSequentially("India");
  await page.getByRole('button', {name:'India'}).nth(1).click();
  await page.getByText('PLACE ORDER').click();
  await page.locator(".hero-primary").waitFor();
  const confirmMessage = await page.locator(".hero-primary").textContent();
  expect(confirmMessage).toBe(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  //await page.pause();
  await page.getByRole('button', { name: '   ORDERS' }).click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");
  
  for (let i=0; i<await rows.count(); i++) {
  const rowOrderId = await rows.nth(i).locator("th").textContent();
  if (orderId.includes(rowOrderId)) {
  await rows.nth(i).locator("button").first().click();
  break;
  } }
  const orderDetailsId = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderDetailsId)).toBeTruthy();
  });