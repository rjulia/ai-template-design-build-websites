import { expect, test } from '@playwright/test';

test('home page renders and nav works', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /figma-to-web starter/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /redux health check/i })).toBeVisible();

  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('heading', { name: /implementation flow/i })).toBeVisible();
});
