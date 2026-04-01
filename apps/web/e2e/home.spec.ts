import { expect, test } from '@playwright/test';

test('home page renders and nav works', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: /discover our/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /our products/i })).toBeVisible();

  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Shop' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Shop' })).toBeVisible();
});
