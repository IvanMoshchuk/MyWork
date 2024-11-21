const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ramonki.by/');
  await page.locator('//button[text()="Принять все"]').click();
  await page.locator('//button[@class="button catalog-button"]').click();
  await page.locator('//span[text()="Одежда"]').click();
  await page.locator('//div[@class="filter__body"]//span[contains(text(), "Платья и сарафаны")]').click();
  await page.locator('//div[@class="product-card product-card--176203695"]//div[@class="product-card-description__buy"]').click();
  await page.locator('//li[contains(text(), "50")]').click();
  await page.locator('//button[contains(text(), "Выбрать")]').click();
  await page.locator('//span[@class="v-modal__close"]').click();
  await page.locator('//a[contains (text(), "Корзина")]').click();
  await expect(page.locator('//div[@class="cart cart--new"]//a[@class="cart-item__text"]')).toContainText('ANASTASIA MAK 1121 зелёный');
  await expect(page.locator('//div[@class="cart cart--new"]//p[contains(text(),"184.45")]')).toContainText("184.45");
  await expect(page.locator('//div[@class="cart cart--new"]//p[contains(text(),"Размер 50")]')).toContainText("Размер 50");

})