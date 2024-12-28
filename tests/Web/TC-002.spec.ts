import { test, expect } from '@playwright/test';

test('TC-002', async ({ page }) => {
  await page.goto('https://salingjaga.com/');

  // Utility function to validate the "Aktifkan Keanggotaan" button
    async function validateAktifkanKeanggotaanButton(page) {
    const aktifkanKeanggotaan_btn = page.locator('button:has-text("Aktifkan Keanggotaan")');
    await expect(aktifkanKeanggotaan_btn).toBeVisible();
  }

  // Utility function to validate element visibility with timeout
  async function validateElement(page, selector, timeout = 8000) {
    const element = page.locator(selector);
    await expect(element).toBeVisible({ timeout });
  }

  // Utility function to click an element
  async function clickElement(page, selector) {
    const element = page.locator(selector);
    await element.click();
  }

  // Validate content of the Beranda page
    await validateElement(page, 'h1:has-text("Asuransi Kitabisa")');

  /// Validate the "Daftar Sekarang" button
    await validateElement(page, 'button:has-text("Daftar sekarang")');

  // Navigate to the "Dampak" page via the navbar
    await clickElement(page, 'p.text-xxs.text-dustygrey:has-text("Dampak")');

  // Validate the header title on the Dampak page
    await validateElement(page, 'h2:has-text("Yuk, gabung bersama 730.000+ anggota yang sudah ikut tolong-menolong lewat SalingJaga")');

  // Validate the "Aktifkan Keanggotaan" button on the Dampak page
    validateAktifkanKeanggotaanButton(page);

  // Navigate to the "Polis Saya" page via the navbar
    await clickElement(page, 'p.text-xxs.text-dustygrey:has-text("Polis Saya")');

  // Validate content on the Polis Saya page
  await validateElement(page, 'p:has-text("Kamu belum memiliki polis aktif")'); // Check for the text indicating no active policies

  // Validate the "Aktifkan Keanggotaan" button on the Polis Saya page
  await validateAktifkanKeanggotaanButton(page);

  // Navigate to the "Ajak Teman" page via the navbar
    await clickElement(page, 'p.text-xxs.text-dustygrey:has-text("Ajak Teman")');

  // Validate content on the Ajak Teman page
    await validateElement(page, 'p:has-text("Cashback 10% dengan ajak orang terdekat")');

  // Validate the "Aktifkan Keanggotaan" button on the Ajak Teman page
    validateAktifkanKeanggotaanButton(page);
});