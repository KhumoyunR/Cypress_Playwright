import { test, expect } from '@playwright/test';

test('unit test of webstore', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('data-test=product-name').getByText('Combination Pliers').click();
  await expect(page.locator('data-test=product-name')).toHaveText('Combination Pliers');
  await page.locator('data-test=increase-quantity').click();
  await page.locator('data-test=add-to-cart').click();
  await expect(page.locator('#toast-container')).toContainText('Product added to shopping cart.');
  await page.locator('data-test=add-to-favorites').click();
  await expect(page.locator('#toast-container')).toContainText('Unauthorized, can not add product to your favorite list.');
  await expect(page.locator('data-test=cart-quantity')).toContainText('2');
});
