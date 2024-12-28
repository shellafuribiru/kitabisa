import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://salingjaga.com/register');

  // Utility function to click an element
  async function clickElement(page, selector) {
    const element = page.locator(selector);
      await element.click({ force: true }); // Klik jika elemen terlihat
  }

  // Utility function to validate element visibility with timeout
  async function validateElement(page, selector, timeout = 5000) {
    const element = page.locator(selector);
    await expect(element).toBeVisible({ timeout });
  }

  // Validate the presence of the "Aktifkan Keanggotaan" text
  validateElement(page, 'span:has-text("Aktifkan Keanggotaan")');

  // Select "Female" for gender
  clickElement(page, 'label[for="female_ID_KESEHATAN.gender_1"]');
  
  // Validate and fill the height input field
  validateElement(page, 'input[id="KESEHATAN.height_ID"]');
  await page.locator('input[id="KESEHATAN.height_ID"]').fill('170');

  // Validate and fill the weight input field
  validateElement(page, 'input[id="KESEHATAN.weight_ID"]');
  await page.locator('input[id="KESEHATAN.weight_ID"]').fill('60');

  // Select "Smoker" option
  clickElement(page, 'div.flex.justify-between.flex-wrap label[for="true_ID_KESEHATAN.is_smoker_0"]');

  // Select "Diagnosed with critical illness" option
  clickElement(page, 'label[for="true_ID_KESEHATAN.is_diagnosed_critical_illness_last5y_0"]');

  // Validate and select "Pregnant" option
  clickElement(page, 'label[for="true_ID_KESEHATAN.is_hospitalized_last5y_0"]');

  // Ensure the "Pregnant" radio button is checked
  validateElement(page, 'div.w-full.flex.justify-between.flex-wrap label[for="true_ID_KESEHATAN.is_pregnant_0"]');
  clickElement(page, 'div.w-full.flex.justify-between.flex-wrap label[for="true_ID_KESEHATAN.is_pregnant_0"]');

  // Ensure the "Pregnant" radio button is checked
  await page.locator('div.w-full.flex.justify-between.flex-wrap label[for="true_ID_KESEHATAN.is_pregnant_0"]').check();
  await expect(page.locator('div.w-full.flex.justify-between.flex-wrap label[for="true_ID_KESEHATAN.is_pregnant_0"]')).toBeChecked();

  // Click the "Lanjut" button to proceed
  clickElement(page, 'button:has-text("Lanjut")');

  // Validate the error message indicating ineligibility
  await page.waitForTimeout(2000);
  validateElement(page, 'span:has-text("Maaf, kami belum bisa melindungi kamu berdasarkan kondisi saat ini.")');
});