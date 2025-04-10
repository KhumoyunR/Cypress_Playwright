import { test, expect } from '@playwright/test';

test('checks the interaction of the product page with the cart page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('data-test=product-name').getByText('Bolt Cutters').click();
  await expect(page.locator('data-test=product-name')).toHaveText('Bolt Cutters');
  await page.locator('data-test=add-to-cart').click();
  await page.locator('data-test=nav-cart').click();
  await expect(page.locator('data-test=product-title')).toContainText('Bolt Cutters');
});