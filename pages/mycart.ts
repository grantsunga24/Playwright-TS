import { Page, Locator, expect } from '@playwright/test';

export class MyCartPage {
    readonly page: Page;
    mycart_header: Locator;
    continueshopping_button: Locator;
    checkout_button: Locator;
    added1item: Locator;
    added2item: Locator;

    constructor(page: Page) {

        this.page = page;
        this.mycart_header = page.locator("h1:has-text('My Cart')");
        this.continueshopping_button = page.locator("button:has-text('Continue Shopping')");
        this.checkout_button = page.locator("button:has-text('Checkout')");
        this.added1item = page.locator("h3:has-text('ADIDAS ORIGINAL')");
        this.added2item = page.locator("h3:has-text('ZARA COAT 3')");
    }

    async validateMyCartPage() {

        await expect(this.page).toHaveTitle("Let's Shop");
        await expect(this.mycart_header).toBeVisible();
    }


    async validateAdded1Item() {

        await expect(this.added1item).toBeVisible();
    }

    async validateAdded2Items() {

        await expect(this.added1item).toBeVisible();
        await expect(this.added2item).toBeVisible();
    }

    async CheckoutItem() {

        await this.checkout_button.click();

    }
}