import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

//Scenario: User validate Login Redirection to Membership Activation Page
test('TC-001', async ({ page }) => { 
  //Navigate to the SalingJaga homepage
  await page.goto('https://salingjaga.com/');

  //Locate and click the "Masuk" (Login) button on the homepage
  const masuk_btn = page.locator('text="Masuk"');
  await masuk_btn.click();

  //Validate that the "Masuk ke SalingJaga" login page is displayed
  await expect(page.locator('text=Masuk ke SalingJaga')).toBeVisible();

  //Locate the phone number input field
  const field_no_wa = page.locator('input[data-testid="login-input-phone"][name="username"]');
  await page.waitForTimeout(2000);
  await field_no_wa.click();
  // Type the phone number into the input field with a 500ms delay between characters
  await page.keyboard.type('083807478671', { delay: 500 }); 

  //Click the "Masuk" button to proceed
  const masuk_button = page.locator('#button-login-with-otp-code');
  await masuk_button.click();

  //Validate that the "Aktifkan Keanggotaan" element is visible on the page
  await expect(page.locator('text=Aktifkan Keanggotaan')).toBeVisible();
});