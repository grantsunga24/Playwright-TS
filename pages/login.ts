import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;
    readonly forgotpassword_link: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_textbox = page.locator("#userEmail");
        this.password_textbox = page.locator("#userPassword");
        this.login_button = page.locator("#login");
        this.forgotpassword_link = page.locator("a.forgot-password-link");

    }

    async gotowebsite() {

        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'domcontentloaded' });
    }

    async happylogin(username: string, password: string) {

        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

}