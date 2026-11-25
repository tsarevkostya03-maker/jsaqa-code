const { test, expect } = require('@playwright/test');
const { validEmail, validPassword, invalidEmail, invalidPassword } = require('../user');

test.describe('Авторизация netology.ru', () => {

  test('Успешная авторизация', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');

    // Сначала нажимаем "Войти по почте", чтобы появились поля ввода
    await page.getByText('Войти по почте').click();

    await page.locator('[placeholder="Email"]').fill(validEmail);
    await page.locator('[placeholder="Пароль"]').fill(validPassword);
    await page.locator('[data-testid="login-submit-btn"]').click();

    await expect(page).toHaveURL(/.*\/profile/, { timeout: 15000 });

    const heading = page.locator('h2').first();
    await expect(heading).toBeVisible();
  });

  test('Неуспешная авторизация', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');

    await page.getByText('Войти по почте').click();

    await page.locator('[placeholder="Email"]').fill(invalidEmail);
    await page.locator('[placeholder="Пароль"]').fill(invalidPassword);
    await page.locator('[data-testid="login-submit-btn"]').click();

    const errorBlock = page.locator('text=/Неверный|ошибка|неправильный/i').first();
    await expect(errorBlock).toBeVisible({ timeout: 10000 });
  });
});
