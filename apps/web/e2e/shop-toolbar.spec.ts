import { expect, test } from '@playwright/test';

test.describe('shop toolbar', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('matches Figma icon dimensions and toolbar layout', async ({ page }) => {
    await page.goto('/shop');

    const toolbar = page.getByLabel('Shop controls');
    const leftControls = page.locator('.shop-toolbar-left');
    const gridButton = page.getByRole('button', { name: 'Grid view' });
    const listButton = page.getByRole('button', { name: 'List view' });

    await expect(toolbar).toBeVisible();
    await expect(gridButton).toBeVisible();
    await expect(listButton).toBeVisible();

    await expect(gridButton).toHaveCSS('width', '28px');
    await expect(gridButton).toHaveCSS('height', '28px');
    await expect(gridButton.locator('img')).toHaveCSS('width', '28px');
    await expect(gridButton.locator('img')).toHaveCSS('height', '28px');

    await expect(listButton).toHaveCSS('width', '24px');
    await expect(listButton).toHaveCSS('height', '24px');
    await expect(listButton.locator('img')).toHaveCSS('width', '24px');
    await expect(listButton.locator('img')).toHaveCSS('height', '24px');

    await expect(leftControls).toHaveScreenshot('shop-toolbar-left-controls.png', {
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
    });
  });
});
