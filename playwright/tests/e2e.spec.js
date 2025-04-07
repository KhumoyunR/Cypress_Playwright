import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('End-to-End testing of webstore', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('data-test=nav-categories').click();
  await page.locator('data-test=nav-power-tools').click();
  await expect(page.locator('data-test=page-title')).toHaveText('Category: Power Tools');
  await page.locator('data-test=sort').selectOption('price,asc');
  await page.getByText('Drill', { exact: true }).click();
  await page.locator('data-test=product-name').getByText('Cordless Drill 12V').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();
  await page.locator('[data-test="email"]').fill('admin@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="proceed-2"]').click();
  await page.waitForTimeout(400);
  await page.locator('[data-test="state"]').fill('Riga');
  await page.locator('[data-test="postal_code"]').fill('LV-1083');
  await page.locator('[data-test="proceed-3"]').click();
  await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="payment-success-message"]')).toContainText('Payment was successful');
});
