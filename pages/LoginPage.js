const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators (prefira role/label/testid quando possível)
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Senha');
    this.submit = page.getByRole('button', { name: 'Entrar' });
    this.error = page.getByTestId('login-error');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }

  async expectErrorVisible() {
    await expect(this.error).toBeVisible();
  }
}

module.exports = { LoginPage };