import { Page, expect, Locator } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    creditcard_option: Locator;
    creditcardnumber_textbox: Locator;
    cvv_textbox: Locator;
    nameoncard_textbox: Locator;
    applycoupon_textbox: Locator;
    applycoupon_button: Locator;
    applycoupon_confirmation: Locator;
    selectcountry_textbox: Locator;
    country_option: Locator;
    placeorder_button: Locator;

    constructor(page: Page) {

        this.page = page;

        this.creditcard_option = page.locator(":text-is('Credit Card')");
        this.creditcardnumber_textbox = page.locator("input[value='4542 9931 9292 2293']");
        this.cvv_textbox = page.locator(".field.small").filter({ hasText: "CVV Code" }).locator("input");
        this.nameoncard_textbox = page.locator("//div[@class='payment__info']//div[3]//div[1]//input[1]");
        this.applycoupon_textbox = page.locator("input[name='coupon']");
        this.applycoupon_button = page.locator("button:has-text('Apply Coupon')");
        this.applycoupon_confirmation = page.locator("p:has-text('* Coupon Applied')");
        this.selectcountry_textbox = page.locator("input[placeholder='Select Country']");
        this.country_option = page.locator("button:has-text('Philippines')");
        this.placeorder_button = page.locator("a:has-text('PLACE ORDER')");

    }

    async fillPaymentDetails() {

        await expect(this.page).toHaveTitle("Let's Shop");
        await expect(this.creditcard_option).toBeVisible();
        await this.creditcard_option.click();
        await this.creditcardnumber_textbox.clear();
        await this.creditcardnumber_textbox.fill("4542 9931 9292 2293");
        await this.cvv_textbox.clear();
        await this.cvv_textbox.fill("111");
        await this.nameoncard_textbox.fill("Grant Sunga");
        await this.applycoupon_textbox.fill("rahulshettyacademy");
        await this.applycoupon_button.click();
        await expect(this.applycoupon_confirmation).toBeVisible();
        await this.selectcountry_textbox.pressSequentially("Phi");
        await this.country_option.click();
        await this.placeorder_button.click();

    }

}