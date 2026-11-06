import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly header_title: Locator;
    readonly adidas_carousel: Locator;
    readonly zara_carousel: Locator;
    readonly iphone_carousel: Locator;
    readonly adidasaddtocart_button: Locator;
    readonly zaraaddtocart_button: Locator;
    readonly iphoneaddtocart_button: Locator;
    readonly addtocartbutton: Locator;
    readonly logout_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header_title = page.locator("h3:has-text('AUTOMATION')");
        this.adidas_carousel = page.locator("b:has-text('IPHONE 13 PRO')");
        this.zara_carousel = page.locator("b:has-text('ZARA COAT 3')");
        this.iphone_carousel = page.locator("b:has-text('IPHONE 13 PRO')");
        this.adidasaddtocart_button = page.locator('.card-body').filter({ hasText: 'ADIDAS ORIGINAL' }).getByRole('button', { name: 'Add To Cart' });
        this.zaraaddtocart_button = page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' }).getByRole('button', { name: 'Add To Cart' });
        this.iphoneaddtocart_button = page.locator('.card-body').filter({ hasText: 'IPHONE 13 PRO' }).getByRole('button', { name: 'Add To Cart' });
        this.addtocartbutton = page.locator("//button[@routerlink='/dashboard/cart']");
        this.logout_button = page.locator("button:has-text('Sign Out')");

    }

    async validatehomepage() {
        await expect(this.page).toHaveTitle("Let's Shop");
        await expect(this.header_title).toBeVisible();
        await expect(this.adidas_carousel).toBeVisible();
        await expect(this.zara_carousel).toBeVisible();
        await expect(this.iphone_carousel).toBeVisible();

    }

    async addtocartadidas() {

        await this.adidasaddtocart_button.click();
        await expect(this.addtocartbutton).toBeVisible();
        await this.addtocartbutton.click();
    }

    async addtocartadidaszara() {

        await this.adidasaddtocart_button.click();
        await this.zaraaddtocart_button.click();
        await expect(this.addtocartbutton).toBeVisible();
        await this.addtocartbutton.click();
    }

    async logout() {

        await this.logout_button.click();
    }

}